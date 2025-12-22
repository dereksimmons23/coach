# Coach Repository Audit

**Date:** December 21, 2025
**Comparison:** bob, claudewill.io, coach

---

## Workflow Comparison

| Component | bob | claudewill.io | coach (current) |
|-----------|-----|---------------|-----------------|
| **GitHub Remote** | dereksimmons23/bob | dereksimmons23/claudewill.io | None |
| **Netlify Deploy** | public/ folder | Root (with functions) | Not configured |
| **.gitignore** | Minimal | Comprehensive | Missing |
| **.claude/** | Yes (settings.local.json) | Yes (settings.local.json) | Missing |
| **netlify.toml** | Yes (static SPA) | Yes (functions + headers) | Missing |
| **LICENSE** | MIT | MIT | Missing |
| **.github/workflows** | No | Yes (ci.yml, gitleaks.yml) | Missing |

---

## Current Coach Status

### Structure (Good)
```
coach/
├── main-court/           # Core methodology
├── practice-gym/         # Tools & templates
├── film-room/           # Case studies
├── coach-d-office/      # Credentials
├── will-call/           # Services
├── docs/                # Strategy
├── README.md            # Project overview
├── STATUS.md            # Migration status
├── ROADMAP.md           # Future plans
├── HANDOFF.md           # Session handoffs
└── MIGRATION_PLAN.md    # Migration tracking
```

### Content (Good)
- 22 files tracked
- 2 working HTML tools (lineup builder, schedule parser)
- Multiple case studies and methodology docs
- Well-organized fieldhouse structure

### Missing for Workflow Parity
1. **No .gitignore** - Risk of committing secrets/OS files
2. **No .claude/** - No Claude Code project settings
3. **No netlify.toml** - No deployment configuration
4. **No LICENSE** - No license declaration
5. **No GitHub remote** - Can't push/collaborate

---

## Recommended Setup

### Pattern: Static Site (like bob)
Coach is content-focused with HTML tools. No serverless functions needed yet.

**Deploy folder:** `public/` (or root if preferred)

### Files to Add

1. **.gitignore** - Prevent secrets, node_modules, OS files
2. **.claude/settings.local.json** - Claude Code permissions
3. **netlify.toml** - Static site deployment
4. **LICENSE** - MIT (matching other projects)
5. **GitHub remote** - dereksimmons23/coach

---

## Deployment Options

### Option A: Static Site (Recommended)
- Create `public/` folder with landing page
- Deploy tools from practice-gym
- Keep docs/methodology as reference (not deployed)

### Option B: Root Deploy
- Deploy everything
- Use .gitignore to exclude sensitive docs
- Simpler but less control

---

## Action Plan

1. Add .gitignore (comprehensive, matching claudewill.io)
2. Add .claude/settings.local.json (permissions for Supabase, git, etc.)
3. Add netlify.toml (static site config)
4. Add MIT LICENSE
5. Create GitHub repo and set remote
6. Initial commit and push

---

**Status:** Ready for workflow alignment
