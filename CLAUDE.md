# CLAUDE.md — Technical Handoff for Coach D

> Last updated: January 18, 2026
> Live site: [coach.claudewill.io](https://coach.claudewill.io)
> Repository: [github.com/dereksimmons23/coach](https://github.com/dereksimmons23/coach)

---

## Current State

**What's live:**
- Fieldhouse landing page (coach.claudewill.io)
- Coach D profile page (/coach-d-office/)
- WAA Lineup Builder (/practice-gym/lineup-builder/) - battle-tested in real games
- Practice Schedule Parser (/practice-gym/)

**What's documented (knowledge base):**
- Neuroplasticity training framework
- BLAST Recruit curriculum
- Case studies (paint confidence breakthrough, special needs game awareness)
- Teaching moments (extension vs escape, empathy in competition)
- Pete Koland reference letter
- In-season training guide with pricing

**What's planned:**
- Coach D AI agent with **voice** (ElevenLabs cloned voice)
- Text + audio responses for authentic coaching experience
- More case studies as training progresses

**What's ready to build (January 11, 2026):**
- `netlify/functions/coach-d.js` — Stubbed with voice architecture
- `docs/VOICE-INTEGRATION.md` — Full ElevenLabs integration plan
- `coach-d-office/CoachD_Agent_Basketball_Intelligence.md` — Coaching knowledge base

---

## Repository Structure

```
coach/
├── index.html                    # Fieldhouse landing page
├── main-court/                   # Core methodology
│   ├── neuroplasticity-framework.md
│   ├── blast-curriculum/         # 16 categories, ~155 drills (NEW)
│   │   ├── README.md
│   │   ├── drill-index.md
│   │   └── 01-16 category files
│   └── README.md
├── practice-gym/                 # Tools & templates
│   ├── lineup-builder/           # WAA-compliant lineup tool
│   └── README.md
├── film-room/                    # Case studies & teaching moments
│   ├── case-studies/
│   │   ├── paint-confidence-breakthrough.md
│   │   └── special-needs-game-awareness.md
│   ├── teaching-moment-extension-vs-escape.md
│   ├── teaching-moment-empathy-in-competition.md
│   └── README.md
├── coach-d-office/               # Credentials & profiles
│   ├── index.html                # Coach D profile page (live)
│   ├── pete-koland-reference-letter.md
│   └── README.md
├── will-call/                    # Training packages & services
│   ├── in-season-training-guide.md
│   └── README.md
├── docs/                         # Strategy & vision
│   ├── phoenixgrind-arena-vision.md
│   ├── VOICE-INTEGRATION.md      # ElevenLabs voice integration plan
│   └── README.md
├── netlify/                      # Serverless functions
│   └── functions/
│       ├── coach-d.js            # Voice-enabled Coach D agent (stubbed)
│       └── package.json          # Dependencies
├── CLAUDE.md                     # This file
├── README.md                     # User-facing documentation
├── HANDOFF.md                    # Session-based notes
├── STATUS.md                     # Migration progress tracking
├── ROADMAP.md                    # Future development plans
└── netlify.toml                  # Deployment config
```

---

## Technical Setup

| Component | Value |
|-----------|-------|
| **Hosting** | Netlify (coachd.netlify.app) |
| **Domain** | coach.claudewill.io (CNAME via name.com) |
| **GitHub** | github.com/dereksimmons23/coach (public) |
| **Build** | Static HTML (no build step) |
| **SSL** | Automatic via Netlify |

### netlify.toml Configuration
```toml
[build]
  publish = "."
  command = "echo 'No build needed - static site'"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(self), camera=()"
```

---

## Coach D AI Vision

### The Concept
Coach D: The host of the fieldhouse. Not just a basketball coach - a complete athletic development partner.

**Roles:**
| Role | Function |
|------|----------|
| **Tour Guide** | Navigate the fieldhouse, explain what's where |
| **Recruiter** | Attract athletes, parents, coaches to training |
| **Agent** | Advocate for athlete positioning, opportunities |
| **Coach** | Basketball methodology, game strategy |
| **Trainer** | Physical and mental performance development |
| **Multi-Sport Mentor** | Transfer principles across sports |

**Multi-Sport Background:**
- Basketball (primary): 15+ years coaching, D1 players developed
- Football: Quarterback background (reading defenses, decision-making under pressure)
- Baseball: Centerfielder background (tracking, anticipation, first-step quickness)

The specific drills are basketball. The methodology is universal.

### Architecture
```
coach.claudewill.io/
├── coach-d-office/
│   └── index.html                # Chat interface (CW pattern, rebranded)
├── netlify/
│   └── functions/
│       └── coach-d.js            # System prompt + Claude Sonnet API
└── netlify.toml                  # Add functions config
```

### Technical Stack
- **Model:** claude-3-5-sonnet-latest (upgraded from Haiku for multi-role complexity)
- **Voice:** ElevenLabs (Derek's cloned voice for authentic Coach D)
- **Backend:** Supabase (sessions, logging, athlete profiles)
- **Max tokens:** 1000 (complex role-switching needs room)

### Voice Integration (NEW - January 11, 2026)

Coach D speaks with Derek's actual voice via ElevenLabs cloning.

**Why voice matters:**
- Coaching is verbal — "Hear the ball pop" makes more sense spoken
- Tone conveys encouragement, urgency, patience
- Athletes are used to hearing coaching, not reading it
- Differentiator from every other AI assistant

**Architecture:**
```
User Message → Netlify Function → Claude Response → ElevenLabs TTS → Audio + Text
```

**Implementation phases:**
1. **MVP:** Server-side voice generation, return base64 audio with text
2. **Toggle:** User opt-in for voice (not everyone wants audio)
3. **Streaming:** Client-side ElevenLabs SDK for faster playback

**Environment variables needed:**
- `ELEVENLABS_API_KEY` — Voice synthesis API
- `ELEVENLABS_VOICE_ID` — Coach D's cloned voice ID

**Cost:** ~$22/month (ElevenLabs Creator tier, ~100 voiced responses)

**Full details:** `docs/VOICE-INTEGRATION.md`

### Design Documents
- `docs/COACH-D-SYSTEM-PROMPT.md` — Full system prompt outline (~500 lines)
- `docs/SUPABASE-SCHEMA.md` — Database schema for sessions, logging, profiles

### Reference Implementation
See `/Users/dereksimmons/Desktop/claudewill.io/` for proven patterns:
- `netlify/functions/cw.js` — System prompt structure
- `index.html` — Chat UI implementation
- Rate limiting, validation, logging patterns

---

## Core Methodology (For System Prompt)

### Neuroplasticity Framework
- **"Get 50" Assessment**: Bilateral skill gap identification (5 stations, 10 shots each hand)
- **Boxing Glove Training**: Constraint as advantage, "offensive boxer" mentality
- **Cognitive Load Training**: Multi-modal skill development (counting + footwork + execution)
- **Frustration as Fuel**: Transform setback energy into focused improvement

### Key Coaching Concepts
- **Extension vs Escape**: Basketball as expression of who you are, not running from problems
- **Operating System**: raison d'être, gradatim ferociter, memento mori, amor fati
- **Process over Outcome**: Joy in the work itself, not just results
- **Progressive Challenge**: Familiar foundation + one new variable = optimal learning

### Signature Coaching Cues
- "Hear the ball pop in your hands"
- "The honey hole" (optimal finishing position)
- "Pound to the point of losing control"
- "9 is the standard"
- "Pay it forward for your brother"

### Philosophy Principles
- "The narrative you tell yourself becomes the story"
- "All good things are wild and free" (Thoreau)
- "Build an unshakeable mind while developing unstoppable skills"
- Position-agnostic development (skills, not positions)

---

## Coach D Condition System

Like CW's time-based conditions, Coach D would adjust personality based on context:

| Condition | Mode | Style |
|-----------|------|-------|
| **pre-game** | Focus mode | Tactical, direct, confidence-building |
| **game-day** | Immediate mode | No fluff, actionable, crisis-ready |
| **practice** | Development mode | Patient, detail-oriented, progressive |
| **recovery** | Reflection mode | Assessment, what worked, what didn't |
| **off-season** | Strategic mode | Big picture, long-term development |

---

## Coach D Boundaries

### What Coach D Does
- Practice planning based on methodology
- Lineup recommendations (WAA-compliant)
- Drill suggestions from knowledge base
- Mental performance guidance
- Parent communication templates
- Recommendation letter drafting

### What Coach D Doesn't Do
- Medical advice (refer to professionals)
- Mental health counseling (refer to professionals)
- Legal advice on liability
- Guarantee outcomes or scholarships
- Replace human coaching judgment

### Safety Boundaries
- Child safety concerns → refer to mandatory reporting protocols
- Mental health crisis → refer to 988 lifeline
- Abuse/neglect suspicions → refer to proper authorities
- Never provides advice that could cause physical harm

---

## Knowledge Base Files

### Core Methodology
| File | Content |
|------|---------|
| `main-court/neuroplasticity-framework.md` | Get 50, boxing glove, cognitive load training |
| `main-court/blast-curriculum/` | **Complete drill library - 16 categories, ~155 drills** |
| `main-court/blast-curriculum/drill-index.md` | Master index with practice builders |
| `film-room/teaching-moment-extension-vs-escape.md` | Philosophy: basketball as expression |
| `film-room/teaching-moment-empathy-in-competition.md` | I-words framework, empathy in athletics |
| `film-room/case-studies/paint-confidence-breakthrough.md` | 60-minute breakthrough session |
| `film-room/case-studies/special-needs-game-awareness.md` | Situational awareness, coaching humility |

### BLAST Curriculum (NEW - January 2, 2026)
Restructured from three sources (Recruit .md, Travel .docx, Varsity .docx) into organized drill library:

| File | Category | Drills |
|------|----------|--------|
| `01-spin-cycle.md` | Spin Cycle | 14 |
| `02-finish.md` | Finish | 16 |
| `03-handles.md` | Handles | 24 |
| `04-handles-on-the-move.md` | Handles (Move) | 17 |
| `05-the-box.md` | The Box | 2 |
| `06-combos.md` | Combos | 9 |
| `07-tennis-ball.md` | Tennis Ball | 7 |
| `08-tennis-ball-basketball.md` | Tennis + BB | 4 |
| `09-drop-n-dimes.md` | Drop N Dimes | 22 |
| `10-pivot-jab-steps.md` | Pivot & Jab | 10 |
| `11-step-backs.md` | Step Backs | 6 |
| `12-step-to-the-side.md` | Side Step | 8 |
| `13-lock-up.md` | Lock Up | 3 |
| `14-pull-the-trigger.md` | Shooting | 6 |
| `15-footwork.md` | Footwork | 4 |
| `16-ball-screen.md` | Ball Screen | 3 |

**Three levels per category:** Travel (youth), Varsity (high school), Recruit (college)

### Operational
| File | Content |
|------|---------|
| `practice-gym/lineup-builder/` | WAA compliance logic |
| `will-call/in-season-training-guide.md` | Pricing and packages |
| `coach-d-office/pete-koland-reference-letter.md` | Reference template |

### Missing (Needed for Full Coach D)
- [x] BLAST Travel/Varsity curriculum — **DONE** (January 2, 2026)
- [x] Special needs coaching frameworks — **DONE** (January 18, 2026)
- [ ] Mandatory reporting protocols (by state)
- [ ] Crisis response guidance
- [ ] Parent communication templates

---

## Development Commands

```bash
# Local development
# No build needed - just open HTML files or use local server:
python -m http.server 8000

# Deployment
git add . && git commit -m "message" && git push
# Netlify auto-deploys from GitHub

# Future (when Coach D AI is added)
netlify dev    # Test serverless functions locally
```

---

## URLs

| Environment | URL |
|-------------|-----|
| **Production** | https://coach.claudewill.io |
| **Coach D Office** | https://coach.claudewill.io/coach-d-office/ |
| **Lineup Builder** | https://coach.claudewill.io/practice-gym/lineup-builder/ |
| **Netlify Dashboard** | https://app.netlify.com/sites/coachd |
| **GitHub** | https://github.com/dereksimmons23/coach |

---

## Related Repositories

| Repo | Purpose | Patterns to Reference |
|------|---------|----------------------|
| **claudewill.io** | CW AI agent | System prompt, serverless function, chat UI |
| **bob** | Battle o' Brackets game | CLAUDE.md format, docs structure, PWA patterns |

---

## Privacy Standards

- No real names of athletes under 18
- Position-agnostic skill documentation
- Anonymized case studies
- Written permission required for testimonials
- No photos/videos without consent

---

## Security Considerations (Before Launch)

**Current state:** All documentation is public on GitHub. This is fine for development.

**Before Coach D goes live**, evaluate protecting intellectual property:

| Option | Approach | Trade-off |
|--------|----------|-----------|
| **Local only** | Add sensitive docs to `.gitignore` | No backup, harder to collaborate |
| **Private repo** | Create `coach-internal` for system prompt, schema | Requires managing two repos |
| **Encrypt** | Keep on GitHub but encrypted | Adds complexity |

**Files to consider protecting:**
- `docs/COACH-D-SYSTEM-PROMPT.md` — The distilled methodology
- `docs/SUPABASE-SCHEMA.md` — Backend architecture
- Future: API keys, business logic

**Why this matters:** Coach D represents proprietary methodology developed with a business partner. The value is in execution, but the system prompt is the recipe.

**Action:** Before production deployment, decide on protection strategy.

---

## Changelog

### January 18, 2026
- Added case study: special-needs-game-awareness.md (situational awareness, coaching humility)
- Added teaching moment: empathy-in-competition.md (I-words framework, empathy in athletics)
- Updated Coach D system prompt with "Empathy in intensity" philosophy
- Added special needs & adaptive coaching guidance to boundaries
- Added empathy/awareness testing scenarios
- Marked "Special needs coaching frameworks" complete in roadmap

### January 11, 2026
- Voice integration designed with ElevenLabs
- Created `netlify/functions/coach-d.js` with voice architecture
- Created `docs/VOICE-INTEGRATION.md` design document
- Added `CoachD_Agent_Basketball_Intelligence.md` to coach-d-office/
- Updated `netlify.toml` with functions configuration
- Set up `coach` terminal alias

### January 2, 2026
- BLAST curriculum restructured into 16-category drill library
- ~155 drills documented with step-by-step execution format
- Travel and Varsity .docx files converted and consolidated
- Master drill index created with practice builders
- STATUS.md updated with Phase 7

### December 27, 2025
- Coach's Office launched (coach-d-office/index.html)
- Switched from GitHub Pages to Netlify
- Made repo public
- DNS configured (coach.claudewill.io)

### December 26, 2025
- Fieldhouse landing page created
- Blueprint-style "under construction" layout

### December 21, 2025
- Repository structure finalized
- Workflow parity with bob/claudewill.io achieved
- Core content migrated (85% complete)
- Coach D AI vision documented

---

## Next Session Focus

**Ready to build — Voice-Enabled Coach D:**

| Step | Status | Notes |
|------|--------|-------|
| 1. Create ElevenLabs voice clone | TODO | Need 1-3 min audio samples |
| 2. Get API credentials | TODO | Add to Netlify env vars |
| 3. Set up Supabase tables | TODO | Run SQL from schema doc |
| 4. Test `coach-d.js` function | TODO | Verify text responses work |
| 5. Add voice generation | TODO | Enable ElevenLabs integration |
| 6. Build chat interface | TODO | Copy CW pattern, rebrand |
| 7. Test with coaching scenarios | TODO | Use scenarios from system prompt doc |

**Pre-flight checklist (before next session):**
- [ ] Record 1-3 minutes of coaching audio for voice cloning
- [ ] Create ElevenLabs account (Creator tier for cloning)
- [ ] Have Supabase project ready (or use existing)

**Alternative paths:**
- Interactive drill browser on website
- AI-powered practice planning from drill library
- Printable practice cards from markdown

---

**Philosophy:** This repository operates on accumulation, not deadlines. Build tools when you need them. Document what works. Let it grow organically.

**2026 is the year for voice.** The technology is ready. Coach D will speak.
