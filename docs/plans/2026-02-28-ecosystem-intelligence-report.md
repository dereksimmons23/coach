# Coach D Ecosystem Intelligence Report

> Generated: February 28, 2026 (overnight session)
> Sources: 10 parallel agents exploring every repo on Desktop + external market research
> Purpose: Ideas, patterns, and transferable assets from across the CW ecosystem for Coach D

---

## The One-Line Summary

Coach D is the only platform in the market combining conversational AI + neuroplasticity methodology + a real drill library. Nobody else does this. The ecosystem already has the building blocks to make it dramatically better — voice from D-Rock, memory from Standard Intelligence, accountability from Dawn, tools from CW, autonomy from Hancock. Everything below is what's already built elsewhere and ready to transfer.

---

## Part 1: The Market (What's Out There)

### Competitive Landscape

Nobody is doing what Coach D does. The market breaks into four tiers, and Coach D doesn't fit any of them:

| Tier | Examples | What They Do | What They Don't |
|------|----------|-------------|-----------------|
| **CV/Hardware** | HomeCourt ($8/mo), DribbleUp ($17/mo + $60 ball), ShotTracker (enterprise) | Track shots via camera or sensors | Don't teach. Don't know why a drill matters. |
| **Drill Libraries** | SpotBasket ($6/mo, 500 drills), Pure Sweat ($5/mo, 300 videos) | Show drills on video | No methodology. No coaching. No conversation. |
| **AI Analytics** | SportsVisio ($34/game), Automatic AI ($100-500/mo) | Analyze game film | Team-focused. Not individual development. |
| **Cognitive Training** | NeuroTrainer (VR, enterprise), SwitchedOn | Train reaction time | Disconnected from basketball. Require hardware. |

**Coach D's unique position:** Methodology-driven AI coaching with a drill library, practice builder, and (soon) voice — all on a phone, no hardware needed.

### What Parents Actually Want

From a survey of 500 basketball parents (Dr. Dish, 2025):
1. **#1 concern: Confidence** — not technique, not access. Psychology.
2. 87% of players practice at home. No platform gives them structure for that.
3. Average family spends $1,016/year on primary sport (up 46% since 2019).
4. The gap: parents pay $60-150/session and get "good job today" via text. They want to know what their kid worked on, what improved, and what to do at home.

Coach D's "extension vs. escape" philosophy and "frustration as fuel" framework directly address the #1 parent concern that no competitor touches.

### Pricing Context

| Type | Market Rate | Coach D |
|------|-----------|---------|
| Private 1-on-1 | $50-150/hour | $150/week (2 sessions) |
| Summer camp | $315-550/week | $150/week |
| Digital platform | $5-17/month | Free (currently) |
| Hybrid (digital + in-person) | Doesn't exist yet | This is the opportunity |

At $150/week for 1-on-1 + team competition, you're below market. The market supports $200-250/week for what you're offering. But the current price builds volume and word-of-mouth. Leave it for now.

---

## Part 2: Voice (What D-Rock Already Built)

### The Shortcut

D-Rock has a production-ready ElevenLabs voice integration that works on Netlify. It's directly copyable.

**File to copy:** `/Users/dereksimmons/Desktop/apps/d-rock/netlify/functions/speak.js`
Copy to: `/Users/dereksimmons/Desktop/apps/coach/netlify/functions/speak.js`

No modifications needed. Same env vars (`ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`). Same cloned voice (Derek's — voice ID `Qoqyb6EjT25StcDRFg6r`). Voice sample already exists at `/Users/dereksimmons/Desktop/apps/d-rock/voice/d-rock.m4a`.

**Audio playback pattern** (from D-Rock `index.html` lines 1098-1121):
```javascript
const speakRes = await fetch('/.netlify/functions/speak', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: coachResponse }),
});
if (speakRes.ok) {
  const blob = await speakRes.blob();
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  await new Promise((resolve) => {
    audio.onended = resolve;
    audio.onerror = resolve;
    audio.play();
  });
  URL.revokeObjectURL(url);
}
```

### Updated ElevenLabs Intelligence (Feb 2026)

| Finding | Detail |
|---------|--------|
| **Best model** | Flash v2.5 — 75ms latency, half the credit cost |
| **Pricing** | Starter $5/mo (30K credits), Creator $11/mo (100K credits) |
| **Your volume** | ~100 responses/month x ~350 chars = 17,500 credits on Flash = **Starter plan works** |
| **Total monthly cost** | Anthropic ~$3 + ElevenLabs ~$5 + Netlify free = **~$8/month** |
| **Timeout risk** | Netlify free = 10s limit. Claude (~3s) + ElevenLabs Flash (~1s) = 4s. Fits. |
| **Voice cloning** | Instant clone: 1-2 min clean audio. Record in coaching energy, not reading energy. |
| **Mobile audio** | Works if audio plays within the click event chain. iOS Safari fallback: "Tap to hear Coach D" button. |
| **Skip voice for long responses** | Auto-disable above 500 chars. Voice is for coaching cues, not lectures. |

### Implementation (2-3 hours of work)

1. Copy `speak.js` from D-Rock
2. Add `generateVoice()` call to `coach-d.js` after Claude response
3. Add voice toggle + audio playback to `chat.html`
4. Set env vars in Netlify (may already be set from D-Rock)
5. Test on mobile

---

## Part 3: Memory (What Standard Intelligence Already Built)

### The Pattern

Standard Intelligence auto-writes session summaries to Supabase at the end of every conversation. When a session starts, the last 3 summaries are injected as context. The AI remembers.

### For Coach D: Athlete Memory

When an athlete returns, Coach D should know:
- Last 3 sessions (what they worked on, what clicked, what didn't)
- Get 50 scores over time (bilateral gap trending)
- Recurring topics (handles keeps coming up? Why?)
- Danger zone language ("I'll get better when..." = magical thinking)
- First domino (the leading indicator before regression)

**Supabase tables to add:**

```sql
-- Athlete sessions (auto-logged from coach-d.js)
CREATE TABLE coach_d_athlete_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  athlete_token TEXT NOT NULL,
  session_date DATE,
  session_number INT,
  workout_summary TEXT,
  drills_mentioned TEXT[],
  progression_notes TEXT,
  confidence_shift TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Drill progression tracking
CREATE TABLE coach_d_drill_progression (
  athlete_token TEXT,
  drill_id TEXT,
  current_level TEXT,
  mastery_score INT,
  last_attempted DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Injection pattern** (from SI's `session-start.js`):
When athlete returns, query their last 3 sessions and inject into Coach D's system prompt:
```
RETURNING ATHLETE:
Visits: 8 (last: Feb 22)
Recent focus: handles (3x), finishing under pressure (2x)
Get 50 trend: Left 28→33→37, Right 30→33→35. Gap closing.
Last session: Struggled with cognitive load drill. Needs constraint work, not repetition.
```

Coach D then knows where to pick up. No re-explaining.

---

## Part 4: Tools (What CW's Porch Already Proved)

### The Porch Tools Pattern

CW has four guided conversational tools: Size This Up, The Trade, Liberation Gravy, Funnel Cake. Each one:
- Offers once ("Sounds like X. Want me to help you Y?")
- Walks through ONE STEP AT A TIME
- Waits for response before proceeding
- Doesn't dump the framework — just asks the next question

### Coach D's Equivalent Tools

**1. Get 50 Assessment** (diagnose skill gaps)
- "Five stations, ten shots each hand. No judgment. Just data."
- Walk through scoring, analyze the pattern, identify the gap
- "Here's what this tells me. What do you want to work on first?"

**2. Drill Finder** (match athlete to work)
- "Tell me what you're struggling with."
- "How long have you been working on it?"
- Match to BLAST curriculum, explain why this drill fixes that problem

**3. Practice Planner** (guided session building)
- "What are you trying to improve? How much time do you have?"
- Suggest drill sequence with times and coaching cues
- "Want me to print this?"

**4. Empathy in Intensity** (psychological readiness)
- "Describe a recent high-pressure moment."
- "Is that extension or escape?"
- "Here's the mental work that changes this."

These should be added to Coach D's system prompt as structured flows, triggered conversationally — not as buttons.

**Also from CW:** Prompt chips in the chat UI. Three starter chips:
- "Quick assessment" → triggers Get 50 flow
- "Find a drill" → triggers Drill Finder
- "Build a practice" → triggers Practice Planner

---

## Part 5: Autonomy (What Hancock Already Built)

### The Pattern

Hancock runs on Cloudflare Workers with cron triggers (every 4 hours). Fully autonomous — checks for mentions, evaluates engagement, generates responses, posts content, logs everything.

### Coach D Autonomous Features

Using the same cron + Workers AI pattern:

| Feature | Trigger | What It Does |
|---------|---------|-------------|
| **Morning check-in** | 7am daily | "How'd yesterday go? Here's one thing to focus on today." |
| **Weekly practice plan** | Sunday 6pm | Auto-generate next week's plan based on athlete's progression |
| **Parent digest** | Friday 5pm | Weekly email: what your kid worked on, progress trend, next focus |
| **Milestone alerts** | On threshold | "You hit 100 drills completed. Here's what that means." |
| **Danger zone detection** | Per conversation | Name the language pattern when it appears |

The Hancock pattern also shows how to build **submission classification** — filtering real interest from noise. Apply this to parent inquiries: real interest markers (age + specific skill + schedule question) vs. generic ("make my kid better").

---

## Part 6: Accountability (What Dawn Already Proved)

### The Witness Model

Dawn's breakthrough: Claude is "the dash" — not a cheerleader, not a therapist. Acknowledges where you are, reflects the record, saves the data. Direct, honest, brief.

### Coach D as Witness

Instead of constant encouragement, Coach D reflects data:
- "Your Get 50 left hand was 28 three weeks ago. It's 37 now. That's real improvement, not noise."
- "You've missed Thursday twice in a row. What changed?"
- "Your handles frequency dropped after the tournament. Normal. The question is whether you pick it back up this week."

### The 5-2-5 Rhythm for Training

Dawn's structure maps directly to athletic development:

| Level | On | Rest | On |
|-------|-----|------|-----|
| **Annual** | June-July (build) | August (integrate) | Sept-April (compete) |
| **Weekly** | M-Th (structured drills) | F (scrimmage/apply) | Sat-Sun (movement/recovery) |
| **Daily** | Morning (activation) | Midday (break) | Evening (film/recovery) |

### Danger Zone Language

From Dawn's 15-year archive — recurring phrases that signal sliding:

**Athlete versions:**
- "I'll get better when..." (magical thinking)
- "I just need one good game" (looking for shortcuts)
- "I'm not as good as..." (comparison spiral)
- "I'll work on it next week" (procrastination)

Coach D recognizes and names these: "That's the pattern before slides. What's actually happening with your training right now?"

### First Domino Detection

Dawn identified overnight eating as Derek's leading indicator. Every athlete has one:
- Missing warm-up → posture erodes in 3 days
- Skipping Get 50 → confidence drops, drill difficulty feels harder
- Sleep disruption → footwork quality crashes 48 hours later

Build athlete-specific first domino profiles over time. When Coach D sees it appearing in the data, surface it proactively.

---

## Part 7: Content (What the Writing Repo Already Has)

### Derek Already Wrote the Coach D Manifesto

Three published Dispatches contain the positioning:

**"The Warm Side" (Dispatch #3):**
> "Coaching isn't building. It's being there. The un-scalable thing. One gym, one team, one season. No leverage. No platform. No content strategy. Just a man with a whistle and a whiteboard and a reason to leave the house on a Tuesday."

**"The Empty Gym" (Dispatch #2):**
> "You're not checking out when it gets boring. You don't pivot to the next shiny thing when the current thing gets uncomfortable."

**"The Hot Take" (Dispatch #4):**
> "I have about a thousand methods. None of them are the one. It's continuity. Of showing up and figuring it out one prompt at a time."

### Repurpose Immediately

- "The Warm Side" championship narrative → summer program email or Coach D homepage
- "Coaching isn't building" quote → About section copy
- The kid with the shoulders → film room teaching moment
- "Your job is the next play. And to have fun playing a game you love." → philosophy section

### 157 Drills = 157 Pieces of Content

One drill = one 60-second Instagram Reel. That's 5 months of daily content without repeating. The neuroplasticity angle ("this drill rewires your brain — here's how") is a hook nobody else uses. Boxing glove training is visually distinctive and shareable. Pin this for when/if @landof10000makes comes back.

---

## Part 8: Infrastructure Patterns to Steal

### From BOB

| Pattern | What | For Coach D |
|---------|------|-------------|
| **localStorage persistence** | `src/lib/storage.js` — versioned keys, error handling | Gym-offline capability. Resume interrupted sessions. |
| **Web Audio sound effects** | `src/lib/sound.js` — no external library | Timer beeps, drill completion fanfare |
| **iOS safe areas** | `viewport-fit=cover` + `env(safe-area-inset-bottom)` | iPhone notch handling in gym |
| **ElevenLabs TTS** | `netlify/functions/speak.js` — same as D-Rock | Already covered above |
| **PWA manifest** | `manifest.json` with standalone display | "Add to Home Screen" for athletes |

### From Recalibrate

The 7-question discovery flow pivoted from a full PWA to a conversational skill. Coach D should learn this: the value isn't in the app, it's in the questions.

**Coach D Athlete Assessment (adapted from Recalibrate):**
1. Why did you come to basketball? What draws you?
2. Which drills feel like punishment vs. development?
3. When do you feel most alive on court?
4. You show up for handles but not footwork. Why?
5. You say "I want to be a shooter" but train like a slasher. What's real?
6. What skill development matches your operating system?
7. Which drill do we start with tomorrow?

### From Boolean

Conscious vs. autopilot tracking. Is the athlete engaged or on muscle-memory cruise control? Track this per session. Pattern analysis shows when engagement drops and what triggers it.

### From Beat

Scheduled alerts via serverless cron. Daily drill suggestions, weekly practice plans, parent digests — all running autonomously without Derek having to push buttons.

---

## Part 9: What to Build (Priority Order)

### Tier 1: Before the Summer Emails Go Out (March)

| Item | Effort | Impact | Source |
|------|--------|--------|--------|
| Summer page is live | Done | High | Tonight's session |
| Email template written | Done | High | Tonight's session |
| Send emails in batches of 10-15 | Derek | Critical | Strategy |
| Add prompt chips to Coach D chat | 2 hours | Medium | CW Porch pattern |
| Add structured data (SEO) to fieldhouse | 1 hour | Low-medium | CW pattern |

### Tier 2: Before Summer Starts (April-May)

| Item | Effort | Impact | Source |
|------|--------|--------|--------|
| Voice integration (copy D-Rock speak.js) | 3 hours | High | D-Rock |
| Get 50 Assessment as guided tool in Coach D | 4 hours | High | CW Tools pattern |
| Practice Planner as guided tool | 4 hours | High | CW Tools pattern |
| Athlete memory (Supabase + session injection) | 6 hours | High | Standard Intelligence |
| iOS safe areas + PWA manifest | 1 hour | Medium | BOB |
| localStorage for offline drill access | 3 hours | Medium | BOB |

### Tier 3: During Summer (Build While Coaching)

| Item | Effort | Impact | Source |
|------|--------|--------|--------|
| Parent weekly digest (automated) | 8 hours | High | Hancock cron + Beat alerts |
| Athlete progress dashboard | 8 hours | High | Dawn tracking pattern |
| Danger zone language detection | 4 hours | Medium | Dawn archive |
| Sound effects for drill timer | 2 hours | Medium | BOB Web Audio |
| Weekly practice plan auto-generation | 6 hours | Medium | Hancock autonomy |

### Tier 4: Post-Summer (Scale What Worked)

| Item | Effort | Impact | Source |
|------|--------|--------|--------|
| Digital subscription tier ($15-25/mo) | Strategy | High | Market gap |
| Content engine (Reels from drills) | Ongoing | High | 157 drills = 5 months content |
| Coach D autonomous daily check-ins | 8 hours | Medium | Hancock cron |
| Pattern archive (across all athletes) | Ongoing | Long-term | Dawn 15-year archive |
| First domino profiles per athlete | Ongoing | Long-term | Dawn methodology |

---

## Part 10: The Insight Nobody Told You

From the market research: **confidence is the #1 concern parents have about their kids in sports.** Not technique. Not access. Not cost. Confidence.

Every competitor builds for technique. Coach D's entire philosophy — extension vs. escape, frustration as fuel, the operating system — is a confidence framework dressed in basketball drills. You're not selling 157 drills. You're selling the thing every parent is actually worried about, and nobody else in the market is addressing it.

That should be in the email. That should be on the homepage. That should be the first thing Coach D says when a new athlete walks in.

"The drills are basketball. The methodology is confidence."

---

## Files Referenced

| Repo | Key File | What It Contains |
|------|----------|-----------------|
| D-Rock | `netlify/functions/speak.js` | Copy-ready ElevenLabs TTS function |
| D-Rock | `voice/d-rock.m4a` | Derek's voice sample for cloning |
| BOB | `src/lib/storage.js` | localStorage persistence pattern |
| BOB | `src/lib/sound.js` | Web Audio sound effects |
| CW | `netlify/functions/cw.js` | Modular prompt + visitor memory pattern |
| CW | `porch-widget.js` | Chat UI with prompt chips |
| CW | `netlify/functions/intake.js` | Lead capture form pattern |
| SI | `scripts/session-end.js` | Auto-summarization for memory |
| SI | `scripts/session-start.js` | Memory injection on return |
| Hancock | `worker/src/index.js` | Cron-triggered autonomous agent |
| Dawn | `2026/progress.md` | Weekly tracking table pattern |
| Dawn | `better-us-app/VISION.md` | Partnership dashboard design |
| Writing | `series/03-the-warm-side.md` | Coach D manifesto content |
| Writing | `series/02-the-empty-gym.md` | Practice philosophy content |
| Writing | `framework/stylebook.md` | Voice and style rules |

---

*Report generated from 10 parallel agents across the full CW ecosystem + external market research on youth basketball training, AI in sports, and ElevenLabs voice integration. Every repo on Desktop was explored.*
