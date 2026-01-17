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

---

## Session: December 29, 2025 - Coach D AI Architecture & Documentation Overhaul

**Session focus:** Prepare Coach D for implementation by studying bob and claudewill.io patterns, then creating comprehensive documentation.

### Research Phase

**Explored three repositories for patterns:**

| Repo | Key Patterns Extracted |
|------|------------------------|
| **bob** | CLAUDE.md format, docs/ folder structure, PWA manifest |
| **claudewill.io** | System prompt architecture (~290 lines), Netlify serverless function, chat UI, Supabase logging |
| **coach** | Current state, methodology content for system prompt |

### Vision Expansion

**Original vision:** Coach D as AI Director of Basketball Operations

**Expanded vision:** Coach D as the host of the fieldhouse - multi-role, multi-sport

| Role | Function |
|------|----------|
| **Tour Guide** | Navigate the fieldhouse, explain what's where |
| **Recruiter** | Attract athletes, parents, coaches to training |
| **Agent** | Advocate for athlete positioning, opportunities |
| **Coach** | Basketball methodology, game strategy |
| **Trainer** | Physical and mental performance development |
| **Multi-Sport Mentor** | Transfer principles across sports (QB, centerfield background) |

**Key insight:** The methodology is universal. Neuroplasticity, extension vs escape, operating system concepts - they apply to any sport. Coach D's specific drills are basketball, but the brain training transfers.

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Model** | Claude Sonnet (not Haiku) | Multi-role switching needs nuanced reasoning |
| **Max tokens** | 1000 (vs CW's 500) | Complex responses need room |
| **Backend** | Supabase | Sessions, logging, athlete profiles |
| **Location** | Coach's Office | Like CW on the porch - you go there to talk |

### Documents Created

**1. CLAUDE.md** (new)
- Technical handoff document (bob pattern)
- Current state, architecture, methodology
- Coach D vision and implementation path

**2. docs/COACH-D-SYSTEM-PROMPT.md** (updated)
- Expanded from ~300 to ~500 lines
- 9 sections covering all roles
- Multi-sport background integrated
- Context-aware mode switching
- Safety protocols and boundaries

**3. docs/SUPABASE-SCHEMA.md** (new)
- 6 tables: conversations, sessions, athletes, saved_outputs, feedback, analytics_events
- SQL scripts ready to run
- Analytics views and queries
- Privacy-first design with consent flows

### Files Changed

```
Created:
- CLAUDE.md
- docs/SUPABASE-SCHEMA.md

Updated:
- docs/COACH-D-SYSTEM-PROMPT.md (major expansion)
- HANDOFF.md (this file)
- STATUS.md
```

### Commits

```
3681cbf - Add CLAUDE.md and Coach D system prompt outline
b93c435 - Expand Coach D vision: multi-role, multi-sport, Sonnet-powered
```

### Next Session: Ready to Build

**Option A: Build Coach D (full implementation)**
1. Set up Supabase tables (run SQL from schema doc)
2. Create `netlify/functions/coach-d.js` (copy CW pattern)
3. Write full system prompt (~450 lines from outline)
4. Build chat interface in `/coach-d-office/`
5. Test with scenarios from system prompt doc
6. Deploy and iterate

**Option B: Expand knowledge base first**
1. Convert BLAST Travel/Varsity docs
2. Add more case studies
3. Build out Will Call services page

**Option C: Something else**
- The documentation is ready. Pick your path.

---

## Session: January 2, 2026 - BLAST Curriculum Restructure

**Session focus:** Transform Tim's BLAST curriculum from hard-to-parse Word documents into a clean, organized drill library.

### The Problem

Tim's original curriculum format was run-on text with slashes:
```
*Triple threat / (RH) 1st dribble / Left foot step hop / (LH) 2nd dribble land left right as you go behind back...*
```

Even as a basketball trainer, Derek found it hard to parse. The knowledge was valuable but inaccessible.

### What We Did

**1. Extracted content from three sources:**
- `BLAST-Recruit.md` (existing markdown - 1074 lines)
- `(Travel) BLAST HOOPS TRAINER GUIDE.docx` (converted via `textutil`)
- `(Varsity) BLAST HOOPS TRAINER GUIDE.docx` (converted via `textutil`)

**2. Identified the structure:**
- 16 drill categories across all levels
- 3 progression levels: Travel (youth), Varsity (high school), Recruit (college)
- Level coding: T, V, R, TVR, VR

**3. Created new format:**

```markdown
### Basic Layup - Right Hand
**Levels:** Travel

| Component | Details |
|-----------|---------|
| **Sequence** | 1 dribble from 3-point line |
| **Balance** | Feet shoulder width as you run... |

**Modifications:**
- Footwork only (no ball)
- 2 steps, no dribble
- 1 dribble from elbow

**Execution:**
1. Start in triple threat
2. Right hand dribble, left foot step
3. Gather
4. Right step, left step
5. Jump off left foot
6. Finish right hand
```

**4. Built new drill library structure:**

```
main-court/blast-curriculum/
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

### Key Design Decision

User chose **Option B: Organize by category** (not by level)

**Why:** Trainers can now see skill progression from Travel → Varsity → Recruit within each category. A coach can open one file and see the full progression path for any skill area.

### What This Enables

- **Coach D integration:** Drill library can power AI practice planning
- **Search/filter:** Structured format enables finding drills by level, category, skill
- **Progression tracking:** Clear path shows what comes next
- **Practice cards:** Could generate printable cards from markdown

### Files Created

```
Created (18 files):
- main-court/blast-curriculum/README.md
- main-court/blast-curriculum/drill-index.md
- main-court/blast-curriculum/01-spin-cycle.md
- main-court/blast-curriculum/02-finish.md
- main-court/blast-curriculum/03-handles.md
- main-court/blast-curriculum/04-handles-on-the-move.md
- main-court/blast-curriculum/05-the-box.md
- main-court/blast-curriculum/06-combos.md
- main-court/blast-curriculum/07-tennis-ball.md
- main-court/blast-curriculum/08-tennis-ball-basketball.md
- main-court/blast-curriculum/09-drop-n-dimes.md
- main-court/blast-curriculum/10-pivot-jab-steps.md
- main-court/blast-curriculum/11-step-backs.md
- main-court/blast-curriculum/12-step-to-the-side.md
- main-court/blast-curriculum/13-lock-up.md
- main-court/blast-curriculum/14-pull-the-trigger.md
- main-court/blast-curriculum/15-footwork.md
- main-court/blast-curriculum/16-ball-screen.md

Updated:
- STATUS.md (Phase 7 added, stats updated)
- HANDOFF.md (this file)
```

### Repository Stats

| Metric | Count |
|--------|-------|
| BLAST drill categories | 16 |
| Total documented drills | ~155 |
| Original Word docs | Preserved in main-court/ |

### Not Committed Yet

User requested documentation update but no commit this session. Changes are staged but not committed.

### Ideas Sparked

Derek noted the restructuring "could spark some interesting ideas" - potential future exploration:
- AI-powered practice planning from drill library
- Printable practice cards generated from markdown
- Interactive drill browser on the website
- Progression tracking for athletes

---

**Status:** BLAST curriculum restructured. ~155 drills documented across 16 categories. Changes ready for commit when desired.

---

## Session: January 17, 2026 - WAA Lineup Builder V2 Enhancements

**Session focus:** Battle-tested V2 with 9 players, fixed bugs, added dynamic templates and save/load functionality.

### Issues Discovered During Real Game Use

Derek used the lineup builder with 9 players (Ben was out, not Teegan). Three issues emerged:

| Issue | Problem | Solution |
|-------|---------|----------|
| 9-player template hardcoded | Assumed Teegan was always out | Made dynamic - uses whoever is unavailable |
| 3-consecutive warnings too aggressive | With 9 players, 3 consecutive is expected | Context-aware: blue info for 9 players, warning for 10 |
| No save/load feature | Had to rebuild lineups every game | Added localStorage save/load with game history |

### Features Added

**1. Dynamic Templates (8, 9, 10 players)**
- All templates now use whoever is available (no hardcoded jersey numbers)
- Smart position assignment: primary position → can play → any available
- Top 4 players distributed evenly between units
- Follows WAA playing time rules exactly

**2. Save/Load Games**
- Save current lineup with opponent/date
- Load previous games from history
- Duplicate detection (same opponent + date)
- Delete old games

**3. Context-Aware Validation**
- **Errors** (red): Blocking issues (incomplete periods, wrong playing time)
- **Warnings** (yellow): Important but not blocking (4+ consecutive)
- **Info** (blue): Expected behavior (3 consecutive with 9 players, OT status)

**4. WAA OT Rules Enforcement**
- 9 players: 5-period players can't play OT (warns if violated)
- 8 players: Confirms 2 play both OTs, 6 play one OT
- 10 players: Each player gets exactly 1 OT

### Template Logic (WAA Compliant)

| Players | Regulation | OT Distribution |
|---------|------------|-----------------|
| 10 | 4 periods each (Unit A/B) | 1 OT each (Unit A→OT1, Unit B→OT2) |
| 9 | 5 play 4 periods, 4 play 5 periods | 4-period players play both OTs, 5-period players sit |
| 8 | 5 periods each | 2 play both OTs, 6 play one (3 in OT1, 3 in OT2) |

### Code Changes

**Lines modified in WAA_Lineup_Builder_V2.html:**
- ~1230-1313: Dynamic 10-player template
- ~1315-1408: Dynamic 9-player template
- ~1410-1485: Dynamic 8-player template
- ~874-913: Context-aware consecutive warnings
- ~1522-1687: Practical validation function
- ~1699-1780: Save/Load game functionality
- CSS additions for info badges and saved games UI

### Files Changed

```
Modified:
- practice-gym/lineup-builder/WAA_Lineup_Builder_V2.html (major enhancements)
- practice-gym/lineup-builder/WAA_Lineup_Builder_V2_Handoff.md (updated)
- HANDOFF.md (this file)
- STATUS.md

Ready to commit with all lineup builder files.
```

### Key Decision

**User chose to follow WAA rules exactly:**
> "We should follow the established rules. I don't want to be the coach who breaks the rules during the season."

This means 9-player templates enforce the 4+OT/5+noOT split even though it seems counterintuitive.

---

**Status:** WAA Lineup Builder V2 enhanced with dynamic templates, save/load, and context-aware validation. Battle-tested and ready for next game.

---

## Session: January 17, 2026 (Part 2) - WAA Lineup Builder V3 Built

**Session focus:** Execute V3 Vision document - build setup wizard and dynamic roster management.

### What We Built

**WAA Lineup Builder V3** - Complete rewrite with user-friendly onboarding.

| Feature | Description |
|---------|-------------|
| **Setup Wizard** | 6-screen flow: Welcome → Team Info → Add Players → Positions → Templates → Ready |
| **Dynamic Roster** | No HTML editing - all from UI |
| **Position Preferences** | Per-player, with primary position indicator |
| **Top Player Marking** | ⭐ toggle for special tracking |
| **Multi-Team Support** | Create, switch, manage multiple teams |
| **Import/Export** | JSON backup and restore |
| **Player Selection Modal** | Color-coded: green (primary), yellow (can play), gray (other) |
| **Auto Templates** | Generates 8/9/10 player templates from position preferences |

### Files Created

```
Created:
- practice-gym/lineup-builder/WAA_Lineup_Builder_V3.html (~2000 lines)

Live at: https://coach.claudewill.io/practice-gym/lineup-builder/WAA_Lineup_Builder_V3.html
```

### Key Improvement

**V2:** Coach needs to edit HTML to change roster
**V3:** Any coach can set up their team in 3 minutes with no technical skills

### Commits

```
3c8bb80 - WAA Lineup Builder V2: Dynamic templates, save/load, context-aware validation
d57b663 - WAA Lineup Builder V3: Setup wizard, dynamic roster, multi-team support
```

---

## Next Session: V3 Enhancements + Site Integration

### V3 Feedback (from testing)

**Add for next version:**
1. **Copy/paste league rules** - Let coaches paste their association's playing time rules instead of hardcoding WAA rules
2. **Custom rule builder** - Define periods, OT rules, playing time requirements per player count

### Site Integration Tasks

1. **Link Practice Gym from homepage** - Add clickable room to fieldhouse landing page
2. **Practice Gym index page** - Create `/practice-gym/index.html` with tool links
3. **Tool cards** - Lineup Builder V2, V3, Practice Schedule Parser

### Other Pending Work

- Coach D AI agent (voice integration designed, ready to build)
- BLAST curriculum not yet committed (18 files in `main-court/blast-curriculum/`)
- Netlify functions stub exists but not deployed

---

**Status:** V3 live and ready for testing. Next session: league rules customization + site navigation.
