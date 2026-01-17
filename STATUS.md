# Coach Repository - Current Status

**Last Updated:** January 17, 2026
**Repository:** [github.com/dereksimmons23/coach](https://github.com/dereksimmons23/coach) (public)
**Live Site:** [coach.claudewill.io](https://coach.claudewill.io)

---

## Infrastructure Status

### Phase 1: Repository Setup - COMPLETE

| Task | Status |
|------|--------|
| Directory structure (6 fieldhouse sections) | Done |
| Core documentation (README, HANDOFF, ROADMAP) | Done |
| Git repository initialized | Done |
| GitHub remote connected | Done |
| Privacy standards established | Done |
| File naming conventions set | Done |

### Phase 2: Workflow Parity - COMPLETE

| Component | bob | claudewill.io | coach |
|-----------|-----|---------------|-------|
| GitHub Remote | Yes | Yes | Yes |
| .gitignore | Yes | Yes | Yes |
| .claude/settings.local.json | Yes | Yes | Yes |
| netlify.toml | Yes | Yes | Yes |
| LICENSE (MIT) | Yes | Yes | Yes |

### Phase 3: Content Migration - COMPLETE

**Main Court** (Core Methodology):
- [x] Neuroplasticity framework (anonymized)
- [x] BLAST Recruit level guide
- [x] BLAST Travel level guide (converted from .docx)
- [x] BLAST Varsity level guide (converted from .docx)
- [x] **BLAST Curriculum restructured into 16-category drill library** (see Phase 7)

**Practice Gym** (Tools & Templates):
- [x] WAA Lineup Builder (complete tool)
- [x] WAA Lineup Builder README
- [x] Practice schedule parser

**Film Room** (Case Studies):
- [x] Teaching moment: Extension vs Escape
- [x] Paint confidence breakthrough case study (anonymized)

**Coach D's Office** (Credentials & References):
- [x] Coach D profile page (index.html) - LIVE
- [x] Pete Koland reference letter
- [ ] Certifications (PDFs - need copying from vault)
- [ ] Additional coach profiles (future expansion)

**Will Call** (Training Packages):
- [x] In-season training guide with pricing

**Docs** (Strategy & Vision):
- [x] Phoenix Grind Arena full fieldhouse vision
- [x] Audit document (workflow comparison)

### Phase 4: Netlify Deployment - COMPLETE

| Task | Status |
|------|--------|
| netlify.toml configured | Done |
| Security headers defined | Done |
| Landing page creation | Done |
| Connect to Netlify | Done |
| DNS configuration (name.com CNAME → coachd.netlify.app) | Done |
| Repository set to public | Done |
| **Live at coach.claudewill.io** | Done |

### Phase 5: Coach's Office - COMPLETE

| Task | Status |
|------|--------|
| Coach D profile page (index.html) | Done |
| Coaching background from resume | Done |
| Stats, experience, philosophy | Done |
| Contact links (form, LinkedIn, Will Call) | Done |
| Added to main fieldhouse as clickable room | Done |
| **Live at coach.claudewill.io/coach-d-office/** | Done |

### Phase 6: Coach D AI Agent - DESIGNED (Ready to Build)

| Task | Status |
|------|--------|
| Research bob/claudewill.io patterns | Done |
| Create CLAUDE.md technical handoff | Done |
| Design system prompt (~500 lines) | Done |
| Design Supabase schema (6 tables) | Done |
| Define multi-role architecture | Done |
| Document safety protocols | Done |

**Design Documents:**
- `CLAUDE.md` — Technical handoff (bob pattern)
- `docs/COACH-D-SYSTEM-PROMPT.md` — Full system prompt outline
- `docs/SUPABASE-SCHEMA.md` — Database schema with SQL

**Technical Decisions:**
| Component | Choice |
|-----------|--------|
| Model | Claude Sonnet (multi-role complexity) |
| Backend | Supabase (sessions, logging, profiles) |
| Location | Coach's Office (like CW on the porch) |
| Max tokens | 1000 |

**Roles Defined:**
- Tour Guide, Recruiter, Agent, Coach, Trainer, Multi-Sport Mentor

**Next:** Implementation (Supabase setup → serverless function → chat UI)

### Phase 7: BLAST Curriculum Restructure - COMPLETE

| Task | Status |
|------|--------|
| Analyze Tim's curriculum structure | Done |
| Design clean drill template format | Done |
| Convert Travel level (.docx → structured .md) | Done |
| Convert Varsity level (.docx → structured .md) | Done |
| Restructure Recruit level (existing .md) | Done |
| Create 16 category files with progressions | Done |
| Create master drill index | Done |
| Create curriculum README | Done |

**What Changed:**
- Tim's run-on slash-separated instructions → numbered step-by-step execution
- All three levels (Travel/Varsity/Recruit) consolidated by category
- Progression summary tables at end of each file
- Coaching notes with common errors and cues
- Master index with ~155 documented drills

**New Structure:** `main-court/blast-curriculum/`
```
├── README.md                      # Overview, levels, how to use
├── drill-index.md                 # Master index with practice builders
├── 01-spin-cycle.md              # 14 drills
├── 02-finish.md                  # 16 drills
├── 03-handles.md                 # 24 drills
├── 04-handles-on-the-move.md     # 17 drills
├── 05-the-box.md                 # 2 drills
├── 06-combos.md                  # 9 drills
├── 07-tennis-ball.md             # 7 drills
├── 08-tennis-ball-basketball.md  # 4 drills
├── 09-drop-n-dimes.md            # 22 drills
├── 10-pivot-jab-steps.md         # 10 drills
├── 11-step-backs.md              # 6 drills
├── 12-step-to-the-side.md        # 8 drills
├── 13-lock-up.md                 # 3 drills
├── 14-pull-the-trigger.md        # 6 drills
├── 15-footwork.md                # 4 drills
└── 16-ball-screen.md             # 3 drills
```

**Original files preserved:** Word docs still in `main-court/` for reference

**Potential Ideas Sparked:**
- Drill library could power Coach D's practice planning
- Structured format enables search/filter by level, category, skill
- Progression tables show clear path from Travel → Varsity → Recruit
- Could generate printable practice cards from markdown

### Phase 8: WAA Lineup Builder V2 Enhancements - COMPLETE

| Task | Status |
|------|--------|
| Fix 9-player template (dynamic, not hardcoded) | Done |
| Add save/load game functionality | Done |
| Context-aware consecutive period warnings | Done |
| Dynamic 8-player template with WAA OT rules | Done |
| Dynamic 10-player template | Done |
| Practical validation (errors/warnings/info) | Done |
| WAA OT eligibility enforcement | Done |

**What Changed:**
- Templates no longer hardcoded to specific players - use whoever is available
- 3 consecutive periods shows as info (blue) for 9 players, warning for 10
- Save games to localStorage, load previous games
- Validation categorized: errors (blocking), warnings (important), info (FYI)

**Template Logic (WAA Compliant):**
| Players | Regulation | OT Distribution |
|---------|------------|-----------------|
| 10 | 4 periods each (Unit A/B) | 1 OT each |
| 9 | 5 play 4 periods, 4 play 5 periods | 4-period players play both OTs |
| 8 | 5 periods each | 2 play both OTs, 6 play one |

**Battle-tested:** Used in real games with 9 players. Issues found and fixed.

### Phase 9: WAA Lineup Builder V3 - COMPLETE

| Task | Status |
|------|--------|
| Build 6-screen setup wizard | Done |
| Dynamic roster management (no HTML editing) | Done |
| Per-player position preferences | Done |
| Top player marking (⭐ toggle) | Done |
| Multi-team support (create, switch, manage) | Done |
| Import/Export JSON | Done |
| Color-coded player selection modal | Done |
| Auto-generate templates from positions | Done |

**What Changed:**
- Any coach can set up their team in 3 minutes
- No technical skills required
- Teams saved to localStorage
- Multiple teams supported

**Live at:** https://coach.claudewill.io/practice-gym/lineup-builder/WAA_Lineup_Builder_V3.html

**Next for V3.1:**
- Copy/paste league rules (not just WAA)
- Custom rule builder for other associations

---

## Repository Stats

| Metric | Count |
|--------|-------|
| Total sections | 6 fieldhouse areas + docs |
| Files tracked | ~50 |
| Working HTML pages | 4 |
| Case studies | 2 |
| Methodology docs | 3 |
| BLAST drill categories | 16 |
| Total documented drills | ~155 |
| Design documents | 3 (CLAUDE.md, system prompt, Supabase schema) |
| All content privacy-compliant | Yes |

---

## What's Live Now

**Live Pages:**
1. **Fieldhouse Landing** - Main "under construction" page with room links
2. **Coach's Office - Coach D** - Full coaching background and credentials

**Working Tools:**
3. **Lineup Builder** - Working tool used in real game (won!)
4. **Practice Schedule Parser** - Working tool

**Knowledge Base:**
5. **Neuroplasticity Framework** - Brain-based training methodology
6. **BLAST Recruit Guide** - Competitive development curriculum
7. **Paint Confidence Case Study** - 60-minute breakthrough session
8. **Teaching Moment: Extension vs Escape** - Philosophical coaching breakthrough
9. **Pete Koland Reference** - Professional testimonial
10. **In-Season Training Guide** - Package pricing ($350-750/month)
11. **Phoenix Grind Arena Vision** - Original fieldhouse concept

---

## Next Actions

### Immediate: Site Integration
1. Link Practice Gym from homepage (add clickable room)
2. Create `/practice-gym/index.html` with tool links
3. Add tool cards for Lineup Builder V2, V3, Practice Schedule Parser

### Lineup Builder V3.1
1. Add copy/paste league rules feature
2. Build custom rule builder for non-WAA associations
3. Test with other coaches

### Coach D AI (When Ready)
1. Set up Supabase tables (run SQL from `docs/SUPABASE-SCHEMA.md`)
2. Create `netlify/functions/coach-d.js` (copy CW pattern)
3. Write full system prompt from `docs/COACH-D-SYSTEM-PROMPT.md`
4. Build chat interface in `/coach-d-office/`
5. Test with scenarios from system prompt doc
6. Deploy and iterate

### Pending Commits
- BLAST curriculum (18 files in `main-court/blast-curriculum/`)
- Netlify functions stub
- Coach D knowledge base files

### Future
1. Additional coach profiles in Coach's Office
2. Video demonstration library
3. Player Development Tracker (Supabase-backed)
4. Multi-device sync for saved outputs

---

## Philosophy

This repository operates on accumulation, not deadlines:
- Build tools when you need them
- Document what works
- Organize in one discoverable place
- Let it grow organically

**No timeline pressure. No launch date. Just organization.**

---

## Technical Reference

| Item | Value |
|------|-------|
| Local Path | /Users/dereksimmons/Desktop/coach/ |
| GitHub | github.com/dereksimmons23/coach (public) |
| Netlify Site | coachd.netlify.app |
| Live URL | coach.claudewill.io |
| DNS | name.com CNAME → coachd.netlify.app |
| Source Vault | /Users/dereksimmons/Desktop/Obsidian-Vault/Basketball-Training-Platform/ |

### Privacy Standards
- No real names of athletes under 18
- Position-agnostic skill documentation
- Anonymized case studies
- Written permission required for testimonials

---

**Status:** Phase 6 complete (design). Coach D AI architecture documented and ready for implementation.
