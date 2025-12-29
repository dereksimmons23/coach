# Coach D Supabase Schema

> Created: December 29, 2025
> Status: Design document for implementation
> Reference: claudewill.io/SUPABASE_SETUP.md, bob Supabase patterns

---

## Overview

Supabase provides the backend for Coach D, enabling:
- Conversation logging and analytics
- Session memory (returning visitors)
- Athlete profile tracking (optional, with consent)
- Saved outputs (practice plans, lineups, etc.)
- Feedback collection
- Usage analytics

**Project Name:** `coach-d` (or add to existing CW Strategies Supabase project)
**Tier:** Free tier sufficient for launch

---

## Tables

### 1. conversations

Core logging table for all Coach D interactions. Same pattern as CW.

```sql
CREATE TABLE conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp timestamptz NOT NULL DEFAULT now(),
  session_id text NOT NULL,

  -- Message content
  user_message text NOT NULL,
  coach_d_response text NOT NULL,

  -- Context
  context text,                    -- 'tour', 'recruiting', 'coaching', 'training', etc.
  role_detected text,              -- Which role Coach D was operating in

  -- Technical
  ip_hash text,
  token_usage jsonb,               -- { input: X, output: Y }
  model text DEFAULT 'sonnet',
  response_time_ms integer,

  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_conversations_session ON conversations(session_id);
CREATE INDEX idx_conversations_timestamp ON conversations(timestamp DESC);
CREATE INDEX idx_conversations_context ON conversations(context);

-- Enable RLS (access via service_role key only)
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
```

### 2. sessions

Track visitor sessions for continuity and returning visitor recognition.

```sql
CREATE TABLE sessions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text UNIQUE NOT NULL,

  -- Session metadata
  first_visit timestamptz NOT NULL DEFAULT now(),
  last_visit timestamptz NOT NULL DEFAULT now(),
  visit_count integer DEFAULT 1,

  -- Visitor context (anonymous, opt-in)
  visitor_type text,               -- 'athlete', 'parent', 'coach', 'unknown'
  sport_interest text,             -- 'basketball', 'multi-sport', etc.

  -- Conversation summary (for "welcome back" context)
  last_topic text,                 -- Brief note on last conversation
  notes jsonb,                     -- Any accumulated context

  -- Technical
  ip_hash text,
  user_agent text,

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_sessions_session_id ON sessions(session_id);
CREATE INDEX idx_sessions_last_visit ON sessions(last_visit DESC);

-- Enable RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
```

### 3. athletes (Optional - Consent Required)

For tracking athlete development over time. Only created with explicit consent.

```sql
CREATE TABLE athletes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Identity (anonymized by default)
  display_name text NOT NULL,      -- Can be nickname, first name only, etc.
  session_id text,                 -- Link to their session

  -- Profile
  age_group text,                  -- '12-14', '15-17', '18+', etc.
  primary_sport text DEFAULT 'basketball',
  secondary_sports text[],
  position text,

  -- Development tracking
  current_focus text,              -- What they're working on
  assessments jsonb,               -- Get 50 scores, etc.
  milestones jsonb,                -- Achievements, breakthroughs

  -- Consent
  consent_given boolean NOT NULL DEFAULT false,
  consent_date timestamptz,
  parent_consent boolean,          -- Required for minors

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_athletes_session ON athletes(session_id);

-- Enable RLS
ALTER TABLE athletes ENABLE ROW LEVEL SECURITY;
```

### 4. saved_outputs

Store generated practice plans, lineups, recommendation letters, etc.

```sql
CREATE TABLE saved_outputs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text NOT NULL,

  -- Output details
  output_type text NOT NULL,       -- 'practice_plan', 'lineup', 'letter', 'drill_sequence'
  title text,
  content text NOT NULL,

  -- Context
  context jsonb,                   -- Original request, parameters used

  -- Sharing (optional)
  share_id text UNIQUE,            -- For public share links like /plan/abc123
  is_public boolean DEFAULT false,

  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_saved_outputs_session ON saved_outputs(session_id);
CREATE INDEX idx_saved_outputs_type ON saved_outputs(output_type);
CREATE INDEX idx_saved_outputs_share ON saved_outputs(share_id) WHERE share_id IS NOT NULL;

-- Enable RLS
ALTER TABLE saved_outputs ENABLE ROW LEVEL SECURITY;
```

### 5. feedback

User feedback for improving Coach D.

```sql
CREATE TABLE feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text,

  -- Feedback content
  message text NOT NULL,
  category text,                   -- 'bug', 'suggestion', 'praise', 'complaint'
  rating integer,                  -- 1-5 stars (optional)

  -- Context
  conversation_context text,       -- What they were discussing

  -- Technical
  user_agent text,

  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_feedback_category ON feedback(category);
CREATE INDEX idx_feedback_created ON feedback(created_at DESC);

-- Enable RLS
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
```

### 6. analytics_events

Track key events for understanding usage patterns.

```sql
CREATE TABLE analytics_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text,

  -- Event details
  event_type text NOT NULL,        -- 'tour_started', 'room_visited', 'output_saved', etc.
  event_data jsonb,                -- Flexible payload

  -- Technical
  ip_hash text,

  created_at timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_session ON analytics_events(session_id);
CREATE INDEX idx_analytics_created ON analytics_events(created_at DESC);

-- Enable RLS
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
```

---

## Views

### Conversation Analytics

```sql
CREATE VIEW conversation_stats AS
SELECT
  date_trunc('day', timestamp) as day,
  COUNT(*) as total_conversations,
  COUNT(DISTINCT session_id) as unique_sessions,
  AVG(token_usage->>'input')::integer as avg_input_tokens,
  AVG(token_usage->>'output')::integer as avg_output_tokens,
  AVG(response_time_ms) as avg_response_time
FROM conversations
GROUP BY date_trunc('day', timestamp)
ORDER BY day DESC;
```

### Popular Topics

```sql
CREATE VIEW popular_contexts AS
SELECT
  context,
  role_detected,
  COUNT(*) as count,
  COUNT(DISTINCT session_id) as unique_visitors
FROM conversations
WHERE context IS NOT NULL
GROUP BY context, role_detected
ORDER BY count DESC;
```

### Returning Visitors

```sql
CREATE VIEW returning_visitors AS
SELECT
  session_id,
  first_visit,
  last_visit,
  visit_count,
  visitor_type,
  last_topic
FROM sessions
WHERE visit_count > 1
ORDER BY last_visit DESC;
```

---

## Row Level Security Policies

All tables use RLS with service_role access only (no public access):

```sql
-- No public policies needed - service_role key bypasses RLS
-- This keeps data secure while allowing Netlify functions to access everything

-- If you want to add read-only public access for shared outputs:
CREATE POLICY "Public can view shared outputs" ON saved_outputs
  FOR SELECT
  USING (is_public = true);
```

---

## Environment Variables

Add to Netlify for coach.claudewill.io:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5...
```

**Never expose the service_role key in client-side code.**

---

## Implementation in coach-d.js

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Log conversation (non-blocking)
async function logConversation(data) {
  try {
    await supabase.from('conversations').insert({
      session_id: data.sessionId,
      user_message: data.userMessage,
      coach_d_response: data.response,
      context: data.context,
      role_detected: data.role,
      ip_hash: data.ipHash,
      token_usage: data.tokenUsage,
      response_time_ms: data.responseTime
    });
  } catch (error) {
    // Log error but don't fail the request
    console.error('Logging error:', error);
  }
}

// Update session (for returning visitor recognition)
async function updateSession(sessionId, data) {
  const { data: existing } = await supabase
    .from('sessions')
    .select('*')
    .eq('session_id', sessionId)
    .single();

  if (existing) {
    await supabase.from('sessions').update({
      last_visit: new Date().toISOString(),
      visit_count: existing.visit_count + 1,
      last_topic: data.topic,
      updated_at: new Date().toISOString()
    }).eq('session_id', sessionId);

    return existing; // Return previous session for "welcome back" context
  } else {
    await supabase.from('sessions').insert({
      session_id: sessionId,
      visitor_type: data.visitorType,
      ip_hash: data.ipHash
    });
    return null; // New visitor
  }
}

// Get session context (for personalization)
async function getSessionContext(sessionId) {
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .eq('session_id', sessionId)
    .single();

  return data;
}
```

---

## Analytics Queries

### Daily Usage
```sql
SELECT * FROM conversation_stats
WHERE day >= now() - interval '30 days';
```

### Top Topics This Week
```sql
SELECT context, COUNT(*)
FROM conversations
WHERE timestamp >= now() - interval '7 days'
GROUP BY context
ORDER BY count DESC
LIMIT 10;
```

### Returning Visitor Rate
```sql
SELECT
  COUNT(*) FILTER (WHERE visit_count > 1) as returning,
  COUNT(*) as total,
  (COUNT(*) FILTER (WHERE visit_count > 1))::float / COUNT(*) as return_rate
FROM sessions;
```

### Token Usage (Cost Monitoring)
```sql
SELECT
  date_trunc('day', timestamp) as day,
  SUM((token_usage->>'input')::integer) as total_input,
  SUM((token_usage->>'output')::integer) as total_output,
  SUM((token_usage->>'input')::integer + (token_usage->>'output')::integer) as total_tokens
FROM conversations
WHERE timestamp >= now() - interval '30 days'
GROUP BY day
ORDER BY day DESC;
```

### Feedback Summary
```sql
SELECT
  category,
  COUNT(*) as count,
  AVG(rating) as avg_rating
FROM feedback
GROUP BY category
ORDER BY count DESC;
```

---

## Migration Path

### Phase 1: Core Logging
1. Create `conversations` table
2. Create `sessions` table
3. Create `feedback` table
4. Implement in coach-d.js

### Phase 2: Analytics
1. Create `analytics_events` table
2. Create views
3. Build analytics dashboard (optional)

### Phase 3: Extended Features
1. Create `saved_outputs` table (when output saving is implemented)
2. Create `athletes` table (when development tracking is added)
3. Implement consent flows for athlete tracking

---

## Cost Estimate

**Supabase Free Tier includes:**
- 500MB database storage
- Unlimited API requests
- 50,000 monthly active users

**Estimated Coach D usage (first 6 months):**
- ~1,000 conversations/month = ~100KB/month
- ~500 sessions = negligible
- Well within free tier

**When to upgrade:**
- If you exceed 500MB storage (unlikely for years)
- If you need advanced features (branching, PITR backups)

---

## Privacy Considerations

1. **IP Hashing**: Never store raw IPs
2. **Session IDs**: Randomly generated, no PII
3. **Athlete Consent**: Explicit opt-in with parent consent for minors
4. **Data Retention**: Consider auto-delete after 12 months for conversations
5. **Export**: Users can request their data
6. **Deletion**: Users can request account deletion

---

## Next Steps

1. Create Supabase project (or use existing CW Strategies project)
2. Run Phase 1 SQL scripts
3. Add environment variables to Netlify
4. Implement logging in coach-d.js
5. Test conversation logging
6. Monitor for first week, adjust as needed

---

## Reference

- CW Supabase setup: `/Users/dereksimmons/Desktop/claudewill.io/SUPABASE_SETUP.md`
- bob Supabase patterns: `/Users/dereksimmons/Desktop/bob/src/lib/supabase.js`
- Supabase docs: https://supabase.com/docs
