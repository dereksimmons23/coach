# CLAUDE.md — Technical Handoff for Coach D

> Last updated: December 29, 2025
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
- Case studies (paint confidence breakthrough, extension vs escape)
- Pete Koland reference letter
- In-season training guide with pricing

**What's planned:**
- Coach D AI agent (same architecture as CW at claudewill.io)
- Additional BLAST curriculum (Travel, Varsity levels)
- More case studies as training progresses

---

## Repository Structure

```
coach/
├── index.html                    # Fieldhouse landing page
├── main-court/                   # Core methodology
│   ├── neuroplasticity-framework.md
│   ├── BLAST-Recruit.md
│   └── README.md
├── practice-gym/                 # Tools & templates
│   ├── lineup-builder/           # WAA-compliant lineup tool
│   └── README.md
├── film-room/                    # Case studies & teaching moments
│   ├── case-studies/
│   │   └── paint-confidence-breakthrough.md
│   ├── teaching-moment-extension-vs-escape.md
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
│   └── README.md
├── netlify/                      # (Future: Coach D serverless function)
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

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

---

## Coach D AI Vision

### The Concept
Coach D: An AI Director of Basketball Operations that handles everything about coaching EXCEPT the actual coaching.

**What coaches would ask:**
- "Coach D, I need a practice plan for Tuesday"
- "Coach D, set my lineup for tomorrow's game"
- "Coach D, one of my players is struggling with confidence"
- "Coach D, how do I run the Get 50 assessment?"

### Architecture (Same as CW)
```
coach.claudewill.io/
├── index.html                    # Chat interface (copy CW pattern)
├── netlify/
│   └── functions/
│       └── coach-d.js            # System prompt + Claude API
└── netlify.toml                  # Add functions config
```

### Reference Implementation
See `/Users/dereksimmons/Desktop/claudewill.io/` for proven patterns:
- `netlify/functions/cw.js` — System prompt structure (~290 lines)
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
| `main-court/BLAST-Recruit.md` | Competitive development curriculum |
| `film-room/teaching-moment-extension-vs-escape.md` | Philosophy case study |
| `film-room/case-studies/paint-confidence-breakthrough.md` | 60-minute breakthrough session |

### Operational
| File | Content |
|------|---------|
| `practice-gym/lineup-builder/` | WAA compliance logic |
| `will-call/in-season-training-guide.md` | Pricing and packages |
| `coach-d-office/pete-koland-reference-letter.md` | Reference template |

### Missing (Needed for Full Coach D)
- [ ] BLAST Travel/Varsity curriculum (.docx conversion)
- [ ] Mandatory reporting protocols (by state)
- [ ] Special needs coaching frameworks
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

## Changelog

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

**Immediate options:**
1. Build Coach D AI (copy CW architecture, swap system prompt)
2. Expand will-call with training packages
3. Convert BLAST Travel/Varsity docs

**When building Coach D:**
1. Create system prompt (~300 lines) based on methodology above
2. Create `netlify/functions/coach-d.js` following CW pattern
3. Create chat interface (copy CW's index.html, rebrand)
4. Update netlify.toml with functions config
5. Test with real coaching scenarios

---

**Philosophy:** This repository operates on accumulation, not deadlines. Build tools when you need them. Document what works. Let it grow organically.
