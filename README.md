# Coach D - Basketball Development Repository

**Repository:** [github.com/dereksimmons23/coach](https://github.com/dereksimmons23/coach)
**Live URL:** [coach.claudewill.io](https://coach.claudewill.io)
**Built by:** Derek Simmons (Coach D)
**Last Updated:** December 29, 2025

---

## What This Is

A fieldhouse where Coach D's athletic development work accumulates. Methodology, tools, case studies, and resources — with an AI agent in development to make it all accessible.

**Philosophy:** Build tools when you need them. Document what works. Share what helps.

---

## Coming Soon: Coach D AI

An AI agent that serves as the host of the fieldhouse. Not just a basketball coach — a complete athletic development partner.

| Role | Function |
|------|----------|
| Tour Guide | Navigate the fieldhouse, explain what's where |
| Recruiter | Help athletes and parents find the right fit |
| Coach | Basketball methodology and game strategy |
| Trainer | Physical and mental performance development |
| Multi-Sport Mentor | Transfer principles across sports |

**Status:** Architecture designed. Ready for implementation.

---

## Current Status

| Component | Status |
|-----------|--------|
| Repository Structure | Complete |
| Netlify Deployment | Live (auto-deploys from GitHub) |
| Landing Page | Live |
| Coach's Office | Live (Coach D profile) |
| Content Migration | 85% complete |
| Coach D AI Design | Complete (ready to build) |

---

## The Fieldhouse Structure

```
coach/
├── main-court/           # Core methodology (BLAST, Phoenix Grind)
├── practice-gym/         # Tools & templates (Lineup Builder, etc.)
├── film-room/            # Case studies & teaching moments
├── coach-d-office/       # Credentials & references
├── will-call/            # Training packages & services
└── docs/                 # Strategy & vision documents
```

### Main Court - Core Methodology
Training systems, philosophy, and foundational frameworks.
- Neuroplasticity framework
- BLAST Recruit curriculum
- Phoenix Grind philosophy

### Practice Gym - Tools & Templates
Working tools for game day, practice planning, and player management.
- WAA Lineup Builder (complete, used in live game)
- Practice Schedule Parser

### Film Room - Case Studies
Player development stories, breakthrough sessions, and documented outcomes.
- Paint confidence breakthrough case study
- Teaching moment: Extension vs Escape

### Coach D's Office - Credentials
Professional background, certifications, and references.
- **Coach D profile page** (live at /coach-d-office/)
- Pete Koland reference letter
- Future: Additional coach profiles

### Will Call - Services
Training sessions, team packages, and offerings.
- In-season training guide with pricing
- Future: Training packages landing page

### Docs - Strategy
Platform vision and long-term thinking.
- Phoenix Grind Arena vision document

---

## Live Pages & Tools

| Page/Tool | Location | Status |
|-----------|----------|--------|
| Fieldhouse Landing | `/index.html` | Live |
| Coach D Profile | `/coach-d-office/` | Live |
| WAA Lineup Builder | `/practice-gym/lineup-builder/` | Complete, battle-tested |
| Practice Schedule Parser | `/practice-gym/` | Working |

---

## Integration with Derek's Ecosystem

Part of the broader claudewill.io universe:

| Subdomain | Purpose |
|-----------|---------|
| claudewill.io | Main hub - CW AI assistant |
| bob.claudewill.io | Battle o' Brackets game |
| coach.claudewill.io | Basketball coaching (this repo) |
| CW Strategies | Consulting business entity |

**Philosophy:** Not separate projects. Different domains of the same work — helping people optimize performance across contexts.

---

## Technical Setup

### Workflow Configuration
- **Git Remote:** github.com/dereksimmons23/coach (public)
- **Hosting:** Netlify (coachd.netlify.app)
- **Domain:** coach.claudewill.io (CNAME via name.com)
- **Claude Code:** `.claude/settings.local.json` configured
- **License:** MIT

### File Standards
- Descriptive, lowercase with hyphens
- Version numbers when iterating
- Every section has a README
- Status tracking in STATUS.md

---

## Key Principles

**From the work:**
- Repository, not platform
- Accumulation, not launch
- Useful over impressive
- Coach language, not marketing speak

**From the coaching:**
- "Pay it forward for your brother"
- Basketball as extension, not escape
- Operating system > outcomes
- Joy in the work, not just the results

---

## Quick Reference

- **Technical:** `CLAUDE.md` - Technical handoff and architecture
- **Handoff:** `HANDOFF.md` - Session context and decisions
- **Status:** `STATUS.md` - Current progress by phase
- **System Prompt:** `docs/COACH-D-SYSTEM-PROMPT.md` - AI agent design
- **Database:** `docs/SUPABASE-SCHEMA.md` - Backend schema

---

Built by Derek Simmons | Coach D | [claudewill.io](https://claudewill.io)
