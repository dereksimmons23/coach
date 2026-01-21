# Coach D Voice Integration — ElevenLabs Design Document

> Created: January 11, 2026
> Status: Design complete, ready to implement
> Dependencies: ElevenLabs account, cloned voice, API key

---

## Vision

Coach D doesn't just type responses — he speaks them. Using Derek's cloned voice via ElevenLabs, Coach D delivers basketball coaching with the authentic voice of the methodology's creator.

**Why voice matters for coaching:**
- Coaching is verbal. "Hear the ball pop" makes more sense spoken.
- Tone conveys what text can't (encouragement, urgency, patience)
- Athletes are used to hearing coaching, not reading it
- Differentiator from every other AI assistant

**2026 is the year:** Voice AI has matured. ElevenLabs cloning is production-ready. The technology finally matches the vision.

---

## ElevenLabs Setup

### Step 1: Create Cloned Voice

**Requirements:**
- ElevenLabs account (Creator tier or higher for voice cloning)
- 1-3 minutes of clean audio samples of Derek's voice
- Samples should include coaching context (drills, encouragement, instruction)

**Recommended samples:**
1. Reading the system prompt aloud (captures Coach D's vocabulary)
2. Explaining a drill step-by-step
3. Giving feedback ("Good. Again. Faster this time.")
4. Encouragement ("That's it. You've done harder things.")

**Voice settings to tune:**
| Setting | Recommended | Notes |
|---------|-------------|-------|
| Stability | 0.5 | Balance consistency vs. expressiveness |
| Similarity | 0.75 | Higher = more like original voice |
| Style | 0.0-0.3 | Lower for coaching (clear, not dramatic) |
| Speaker Boost | true | Clearer output |

### Step 2: Get API Credentials

1. Go to ElevenLabs dashboard → Profile → API Keys
2. Create new API key for Coach D
3. Copy Voice ID from the cloned voice page
4. Add to Netlify environment variables:
   - `ELEVENLABS_API_KEY`
   - `ELEVENLABS_VOICE_ID`

---

## Architecture Options

### Option A: Server-Side Generation (Simplest)

```
User Message → Netlify Function → Claude Response → ElevenLabs API → Base64 Audio → Client
```

**Pros:**
- Single API call from client
- Works everywhere (no client-side API exposure)
- Simple to implement

**Cons:**
- Slower (audio generation adds 1-3 seconds)
- Higher bandwidth (audio in response payload)
- Synchronous — user waits for everything

**Implementation:** Already stubbed in `coach-d.js` with `generateVoice()` function.

### Option B: Client-Side Streaming (Fastest)

```
User Message → Netlify Function → Claude Response → Client
                                                    ↓
                                              ElevenLabs SDK → Streaming Audio
```

**Pros:**
- Text appears immediately
- Audio streams as it generates
- Best perceived performance

**Cons:**
- Exposes API key to client (use restricted key)
- More complex client code
- Requires ElevenLabs JavaScript SDK

**Implementation:** Use ElevenLabs streaming SDK on frontend.

### Option C: Hybrid (Recommended)

```
User Message → Netlify Function → Claude Response → Client (immediate text)
                     ↓
              Background: ElevenLabs → Audio URL → Client (async)
```

**Pros:**
- Text appears instantly
- Audio arrives shortly after
- API key stays server-side
- Best UX balance

**Cons:**
- Two-phase response handling
- Slightly more complex client

**Implementation:** Return text first, generate audio async, push via WebSocket or polling.

---

## Recommended Implementation (Option A → C Evolution)

### Phase 1: Server-Side (MVP)
Start with Option A. Get voice working end-to-end.

```javascript
// Request
{ message: "How do I run Get 50?", includeVoice: true }

// Response
{
  response: "Get 50 is a bilateral assessment...",
  voice: {
    audio: "base64-encoded-mp3...",
    contentType: "audio/mpeg"
  }
}
```

**Client plays audio:**
```javascript
const audio = new Audio(`data:audio/mpeg;base64,${response.voice.audio}`);
audio.play();
```

### Phase 2: User Toggle
Add voice on/off toggle. Not everyone wants audio.

```javascript
// UI toggle
const includeVoice = localStorage.getItem('coachVoice') === 'true';

// Request
{ message: "...", includeVoice }
```

### Phase 3: Streaming (Future)
Upgrade to Option C when latency matters.

---

## Voice Response Guidelines

### When to Generate Voice

**Always voice:**
- Drill instructions (athletes need to hear the rhythm)
- Encouragement and feedback
- Key coaching phrases ("9 is the standard")

**Skip voice:**
- Long responses (>500 characters) — too expensive and slow
- Data/stats responses (lineup builders, tables)
- Navigation/tour responses

**Auto-detect in function:**
```javascript
const shouldVoice = (text) => {
  if (text.length > 500) return false;
  if (text.includes('|')) return false; // Markdown tables
  return includeVoice;
};
```

### Voice Optimization

**Shorter is better:**
- Keep voiced responses under 200 characters when possible
- Break long responses into sections
- Use signature phrases (short, impactful)

**Punctuation affects delivery:**
- Periods create pauses. Use them.
- Questions have natural inflection
- Ellipses... create thoughtful pauses

**Avoid voicing:**
- URLs, code, technical syntax
- Long lists (read first 2-3 items)
- Anything that sounds robotic when spoken

---

## Cost Estimation

### ElevenLabs Pricing (as of January 2026)

| Tier | Characters/month | Cost | Notes |
|------|------------------|------|-------|
| Free | 10,000 | $0 | Testing only |
| Starter | 30,000 | $5 | ~150 short responses |
| Creator | 100,000 | $22 | Voice cloning included |
| Pro | 500,000 | $99 | Higher rate limits |

**Estimated usage for Coach D:**
- Average response: 200 characters
- 100 voiced responses/month: 20,000 characters
- Recommendation: Start with Creator tier ($22/month)

### Cost Controls

1. **Toggle voice off by default** — users opt-in
2. **Skip long responses** — auto-disable for >500 chars
3. **Cache common phrases** — "9 is the standard" doesn't need re-generation
4. **Monitor usage** — ElevenLabs dashboard shows character consumption

---

## Environment Variables

Add to Netlify dashboard (Site settings → Environment variables):

| Variable | Description | Example |
|----------|-------------|---------|
| `ANTHROPIC_API_KEY` | Claude API | `sk-ant-...` |
| `SUPABASE_URL` | Database URL | `https://xxx.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side DB access | `eyJ...` |
| `ELEVENLABS_API_KEY` | Voice API | `xi_...` |
| `ELEVENLABS_VOICE_ID` | Coach D voice | `abc123...` |

---

## Client Implementation

### Basic Audio Playback

```javascript
async function sendMessage(message) {
  const response = await fetch('/.netlify/functions/coach-d', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      history: conversationHistory,
      sessionId: getSessionId(),
      includeVoice: voiceEnabled
    })
  });

  const data = await response.json();

  // Display text immediately
  displayResponse(data.response);

  // Play voice if available
  if (data.voice?.audio) {
    const audio = new Audio(`data:audio/mpeg;base64,${data.voice.audio}`);
    audio.play();
  }
}
```

### Voice Toggle UI

```html
<label class="voice-toggle">
  <input type="checkbox" id="voiceToggle" onchange="toggleVoice()">
  <span>Enable Coach D Voice</span>
</label>
```

```javascript
function toggleVoice() {
  const enabled = document.getElementById('voiceToggle').checked;
  localStorage.setItem('coachVoice', enabled);
}
```

---

## Testing Checklist

### Before Launch

- [ ] Voice clone created and approved
- [ ] API key and Voice ID in Netlify env vars
- [ ] Test with short message (<100 chars)
- [ ] Test with medium message (200-300 chars)
- [ ] Test with long message (>500 chars, should skip voice)
- [ ] Test voice toggle on/off
- [ ] Test on mobile (audio playback permissions)
- [ ] Verify cost tracking in ElevenLabs dashboard

### Voice Quality Tests

- [ ] "Get 50 is a bilateral assessment" — clear pronunciation
- [ ] "9 is the standard" — natural delivery
- [ ] "Hear the ball pop in your hands" — coaching cadence
- [ ] Numbers and stats — not robotic
- [ ] Questions — proper inflection

---

## Future Enhancements

### Voice Input (STT)

Add speech-to-text for full voice conversation:

```javascript
// Web Speech API (browser built-in)
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  sendMessage(transcript);
};
recognition.start();
```

**Or use Whisper API** for higher accuracy.

### Conversation Memory

Store voice preferences per athlete:

```sql
CREATE TABLE athlete_preferences (
  athlete_id UUID PRIMARY KEY,
  voice_enabled BOOLEAN DEFAULT true,
  voice_speed DECIMAL DEFAULT 1.0,
  preferred_response_length TEXT DEFAULT 'medium'
);
```

### Cached Phrases

Pre-generate common coaching phrases:

```javascript
const cachedPhrases = {
  "9 is the standard": "base64-audio...",
  "Frustration is fuel": "base64-audio...",
  "Same brain, different field": "base64-audio..."
};
```

---

## Reference Links

- [ElevenLabs API Docs](https://docs.elevenlabs.io/api-reference)
- [ElevenLabs Voice Cloning Guide](https://elevenlabs.io/voice-cloning)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

## Summary

| Component | Status | Notes |
|-----------|--------|-------|
| Architecture | Designed | Option A → C evolution |
| `coach-d.js` | Stubbed | Voice generation function ready |
| Voice clone | TODO | Need 1-3 min audio samples |
| API integration | Ready | ElevenLabs endpoint in code |
| Client UI | TODO | Voice toggle, audio playback |
| Cost model | Planned | ~$22/month Creator tier |

**Next session:** Create voice clone, test end-to-end, build chat UI.

---

*"The ball makes a sound when it hits your hands right. So does good coaching."* — Coach D
