# Coach D Repository - Session Handoff

**Date:** December 21, 2025
**Session:** Vision Clarification - Coach D as AI Agent
**Repository:** [github.com/dereksimmons23/coach](https://github.com/dereksimmons23/coach)

---

## The Breakthrough This Session

**What coach.claudewill.io is NOT:**
- Another coaching website
- A platform for the sake of building a platform
- Generic tools that already exist elsewhere

**What it might BE:**
- **Coach D**: An AI Director of Basketball Operations
- Same architecture as CW (Claude API + system prompt + Netlify)
- Trained on YOUR specific methodology
- A coaching partner, not just a tool

---

## The Vision: Coach D

An AI agent that handles everything about coaching EXCEPT the actual coaching.

**What coaches would ask:**
- "Coach D, I need a practice plan for Tuesday"
- "Coach D, set my lineup for tomorrow's game"
- "Coach D, one of my former players asked me to write a letter of recommendation"
- "Coach D, I think one of my players might be on the spectrum. How do I coach them?"
- "Coach D, a player just trusted me with sensitive information. What should I do?"

**What Coach D would know:**
- BLAST curriculum (all levels)
- Neuroplasticity framework
- WAA compliance rules
- Practice planning methodology
- Position-agnostic development philosophy
- Case study patterns for guidance
- Professional communication templates

**What Coach D would do:**
- Build practice plans based on your methodology
- Generate compliant lineups automatically
- Draft recommendation letters
- Provide coaching guidance 24/7
- Handle operational work so you can coach

---

## The Repository = Knowledge Base

The structure we built isn't a website. It's Coach D's brain.

```
coach/
├── main-court/        → Coach D knows BLAST, neuroplasticity
├── practice-gym/      → Coach D builds practice plans, lineups
├── film-room/         → Coach D references case studies
├── coach-d-office/    → Coach D knows credentials, writes rec letters
├── will-call/         → Coach D knows pricing, packages
└── docs/              → Coach D understands the philosophy
```

---

## What's Missing for Full Vision

**Current knowledge (ready):**
- [x] BLAST Recruit curriculum
- [x] Neuroplasticity framework
- [x] WAA compliance logic (lineup builder)
- [x] Practice planning structure
- [x] Case studies (paint confidence, extension vs escape)
- [x] Coaching philosophy

**Missing knowledge (needed for full Coach D):**
- [ ] BLAST Travel/Varsity curriculum (.docx conversion)
- [ ] Mandatory reporting protocols (by state)
- [ ] Special needs coaching frameworks
- [ ] Crisis response guidance
- [ ] Child safety procedures
- [ ] Parent communication templates
- [ ] Professional liability boundaries

---

## Market Research Summary

**What exists:**
- Fragmented tools (scheduling, video, drills - all separate)
- Child safety training programs (human-led, not AI)
- Special needs sports programs (human-led, not AI)
- Generic AI chatbots (not coaching-specific)

**What doesn't exist:**
- Unified AI coaching partner
- System trained on specific methodology
- Technical + ethical + operational in one
- 24/7 partner that knows context

**The gap is real. Nothing comprehensive exists.**

---

## Architecture (Proven with CW)

```
CW Architecture:
├── Claude 3.5 Haiku API
├── System prompt (~250 lines) - personality + methodology
├── Netlify serverless function
└── Conversational interface

Coach D Architecture (same pattern):
├── Claude API (Haiku or Sonnet)
├── System prompt (~500-1000 lines) - coaching methodology
├── Netlify serverless function
└── Conversational interface + tool outputs
```

You already know how to build this. CW proves the pattern works.

---

## Next Steps

### Before Building Coach D

1. **Complete the knowledge base**
   - Convert BLAST Travel/Varsity from .docx
   - Add more case studies as training progresses
   - Research mandatory reporting frameworks
   - Gather special needs coaching resources
   - Document crisis response protocols

2. **Define Coach D's boundaries**
   - What will Coach D do vs. refer to professionals?
   - What are the ethical guardrails?
   - What's the mandatory reporting protocol by state?

3. **Test the concept**
   - Could start with v1 (technical basketball only)
   - Add ethical/special needs layer as researched

### When Ready to Build

1. Write Coach D system prompt (based on repository content)
2. Create Netlify function (same as CW)
3. Build conversational interface
4. Deploy to coach.claudewill.io
5. Test with real coaching scenarios

---

## Key Insight

> "What if you could learn to automate everything about training and coaching except the actual training and coaching?"

The repository isn't the product.
The knowledge in the repository is the product.
Coach D is the interface to that knowledge.

---

## Session Context

**Started with:** Workflow parity audit and documentation updates

**Evolved to:** Vision clarification for Coach D as AI agent

**Ended with:** Need better knowledge base before building

**Decision:** Don't build yet. Build the knowledge base first. The architecture is proven (CW). The gap in the market is real. But the knowledge needs to be complete.

---

## Files Changed This Session

```
Created:
- .gitignore
- .claude/settings.local.json
- netlify.toml
- LICENSE
- AUDIT.md

Updated:
- README.md
- STATUS.md
- ROADMAP.md
- HANDOFF.md (this file)
```

---

**Status:** Vision clarified. Knowledge base needs expansion. Build Coach D when ready.

---

## Session: December 26, 2025 - Fieldhouse Placeholder Launch

**What we did:**
- Created "fieldhouse under construction" landing page (`index.html`)
- Blueprint-style layout showing Main Court, Practice Gym, Film Room, Will Call
- Matches claudewill.io aesthetic (dark navy, gold accents)
- Deployed to **coach.claudewill.io** (live, auto-deploys from GitHub)

**Design decisions:**
- Went with claudewill.io formula over gamified (bob) approach — coaching needs credibility
- "Under construction" metaphor is honest and on-brand
- Placeholder previews the fieldhouse structure for visitors

**Files changed:**
- `index.html` (new) — Landing page
- `README.md` — Updated to show live URL
- `STATUS.md` — Phase 4 marked complete

---

## Session: December 27, 2025 - Coach's Office Launch & Infrastructure Fixes

**Problem solved:**
- Site wasn't publishing at coach.claudewill.io

**Root cause:**
- GitHub repo was set to **private** (GitHub Pages requires public on free tier)

**Infrastructure decisions:**
- Made repo **public**
- Switched from GitHub Pages to **Netlify** (consistent with claudewill.io)
- DNS: `coach.claudewill.io` → `coachd.netlify.app` via CNAME on name.com

**Coach's Office built:**
- Created `coach-d-office/index.html` with full coaching background
- Content pulled from resume PDF, converted to HTML for SEO/mobile
- Removed PDF from repo (content now integrated into site)
- Added Coach's Office room to main fieldhouse (status: Open, clickable)

**Page includes:**
- Stats summary (45+ years athletics, 15+ years coaching, 100% eligibility, D1 players)
- Coaching experience (East Ridge HS, AAU, Youth program director)
- Athletic background (3-sport athlete, state championships, scholarship offers)
- Coaching philosophy (player-led, energy/effort/attitude, academic excellence)
- Education & certifications
- Connect section (contact form link, LinkedIn, Will Call link)

**Design decisions:**
- No email address on site — uses contact form at claudewill.io/derek
- Page structured as "Coach D" profile under "Coach's Office" (supports multiple coaches later)
- Will Call designated for training packages/services
- Coach's Office for coaches/staff profiles

**Files changed:**
- `coach-d-office/index.html` (new) — Coach D profile page
- `index.html` — Added Coach's Office room with link
- `Derek Simmons-Resume-BB.pdf` (deleted) — Content now in HTML

**Live URLs:**
- https://coach.claudewill.io — Main fieldhouse
- https://coach.claudewill.io/coach-d-office/ — Coach D profile

**Next session:** Build out Will Call with training packages, or continue expanding other fieldhouse rooms.
