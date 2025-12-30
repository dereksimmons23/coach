# Coach Repository - Current Status

**Last Updated:** December 29, 2025
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

### Phase 3: Content Migration - 80% COMPLETE

**Main Court** (Core Methodology):
- [x] Neuroplasticity framework (anonymized)
- [x] BLAST Recruit level guide
- [ ] BLAST Travel level guide (.docx - needs conversion)
- [ ] BLAST Varsity level guide (.docx - needs conversion)

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

---

## Repository Stats

| Metric | Count |
|--------|-------|
| Total sections | 6 fieldhouse areas + docs |
| Files tracked | 30 |
| Working HTML pages | 4 |
| Case studies | 2 |
| Methodology docs | 3 |
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

### Immediate: Build Coach D AI
1. Set up Supabase tables (run SQL from `docs/SUPABASE-SCHEMA.md`)
2. Create `netlify/functions/coach-d.js` (copy CW pattern)
3. Write full system prompt from `docs/COACH-D-SYSTEM-PROMPT.md`
4. Build chat interface in `/coach-d-office/`
5. Test with scenarios from system prompt doc
6. Deploy and iterate

### Alternative: Expand Knowledge Base
1. Convert BLAST Travel/Varsity .docx files to markdown
2. Build out Will Call with training packages/services
3. Add more case studies as training progresses

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
