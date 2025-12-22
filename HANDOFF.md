# Coach D Repository - Session Handoff

**Date:** December 21, 2025
**Session:** Workflow Parity & Documentation Update
**Repository:** [github.com/dereksimmons23/coach](https://github.com/dereksimmons23/coach)

---

## What Was Accomplished This Session

### 1. Workflow Parity Achieved
Audited bob and claudewill.io repositories, then aligned coach with the same development workflow:

| Added | Purpose |
|-------|---------|
| `.gitignore` | Excludes secrets, node_modules, OS files |
| `.claude/settings.local.json` | Claude Code permissions (Supabase, git, gh) |
| `netlify.toml` | Static site deployment + security headers |
| `LICENSE` | MIT license |
| `AUDIT.md` | Workflow comparison document |

### 2. GitHub Repository Created
- **URL:** https://github.com/dereksimmons23/coach
- **Visibility:** Private
- **Status:** Initial commit pushed (26 files)

### 3. Documentation Updated
All core docs refreshed to reflect current state:
- `README.md` - Project overview with current status
- `STATUS.md` - Infrastructure and content progress
- `ROADMAP.md` - Phased development plan
- `HANDOFF.md` - This document

---

## Current State Summary

### Infrastructure: Complete
```
coach/
├── .claude/settings.local.json    # Claude Code config
├── .gitignore                     # Git exclusions
├── netlify.toml                   # Deployment config
├── LICENSE                        # MIT
├── AUDIT.md                       # Workflow comparison
├── README.md                      # Project overview
├── STATUS.md                      # Progress tracking
├── ROADMAP.md                     # Development phases
├── HANDOFF.md                     # Session handoffs
├── MIGRATION_PLAN.md              # Content migration
├── main-court/                    # Core methodology
├── practice-gym/                  # Tools & templates
├── film-room/                     # Case studies
├── coach-d-office/                # Credentials
├── will-call/                     # Services
└── docs/                          # Strategy
```

### Content: 80% Migrated
- 2 working HTML tools
- 2 case studies
- 3 methodology documents
- 1 reference letter
- 1 training guide with pricing
- 1 vision document

### Deployment: Ready When Needed
- `netlify.toml` configured
- Not yet connected to Netlify
- No landing page created yet

---

## What's Not Done (By Design)

| Item | Status | Notes |
|------|--------|-------|
| Netlify connection | Not started | Ready when you want to publish |
| Landing page | Not created | Need index.html before deploy |
| BLAST Travel/Varsity | Not converted | .docx files in vault |
| Certification PDFs | Not copied | In vault, need to move |

---

## Next Session Options

### Option A: Content Completion
Focus on completing the remaining 20%:
1. Convert BLAST Travel guide from .docx
2. Convert BLAST Varsity guide from .docx
3. Copy certification PDFs to coach-d-office/
4. Create progression maps between BLAST levels

### Option B: Landing Page
Focus on making the site deployable:
1. Create `index.html` with clean coach-appropriate design
2. Link to key sections and tools
3. Include bio and philosophy
4. Test locally before Netlify connection

### Option C: Tool Development
Focus on building the next useful tool:
1. Practice Plan Generator
2. Player Development Tracker
3. WAA Lineup Builder enhancements

### Option D: Deployment
Focus on going live (requires landing page first):
1. Create minimal index.html
2. Connect Netlify to GitHub repo
3. Configure coach.claudewill.io subdomain
4. Verify security headers working

---

## Key Decisions Made

| Decision | Rationale |
|----------|-----------|
| Repository, not platform | Focus on useful tools, not business |
| coach.claudewill.io | Clean URL, consistent with ecosystem |
| "Coach D" brand | Authentic identity, avoids CW overload |
| Fieldhouse structure | Coaches understand facility metaphors |
| Private GitHub repo | Control access until ready |
| Workflow parity | Consistent development across all projects |
| Netlify ready, not deployed | Infrastructure in place, no rush |

---

## Technical Reference

### Git Workflow
```bash
# From /Users/dereksimmons/Desktop/coach
git add -A
git commit -m "Description of changes"
git push
```

### Claude Code Permissions (Auto-allowed)
- Supabase: list_projects, list_tables, execute_sql
- Git: add, commit, push, checkout, pull
- GitHub CLI: auth status, pr create, pr view
- WebFetch: claudewill.io domain

### Deployment (When Ready)
1. Log into Netlify
2. New site from Git → Select dereksimmons23/coach
3. Build settings: No build command needed (static)
4. Publish directory: `.` (root)
5. Deploy
6. Add custom domain: coach.claudewill.io

---

## Integration Points

| Project | Connection |
|---------|------------|
| claudewill.io | Main hub, will link to coach subdomain |
| bob.claudewill.io | Battle o' Brackets, separate project |
| CW Strategies | Business entity behind the work |

---

## Philosophy Reminders

**From the original vision:**
> "We built an app that works in a few hours. It would have taken nearly as long to find a PDF and fill it in. That's the whole game."

**Core principles:**
- Repository, not platform
- Accumulation, not launch
- Useful over impressive
- Coach language, not marketing speak

**Privacy standards:**
- No real names of athletes under 18
- Position-agnostic skill documentation
- Anonymized case studies
- Written permission for testimonials

---

## Files Changed This Session

```
Modified:
- README.md
- STATUS.md
- ROADMAP.md
- HANDOFF.md

Created:
- .gitignore
- .claude/settings.local.json
- netlify.toml
- LICENSE
- AUDIT.md
```

---

## Session Context

Started with empty git repo, ended with:
- Full workflow parity with bob/claudewill.io
- GitHub remote connected and initial push complete
- All documentation updated and aligned
- Ready for next phase (content, deployment, or tools)

**Status:** Foundation complete. Pick next step based on what's useful.

---

**Next handoff:** Update this file at end of next session with what was accomplished.
