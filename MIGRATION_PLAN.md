# Migration Plan: Obsidian Vault → Coach.claudewill.io Fieldhouse
**Created:** December 21, 2025  
**Source:** `/Users/dereksimmons/Desktop/Obsidian-Vault/Basketball-Training-Platform/`  
**Destination:** `/Users/dereksimmons/Desktop/coach.claudewill.io/`  
**Status:** Ready to Execute

---

## MIGRATION PHILOSOPHY

**What to move:**
- ✅ Working tools (lineup builder, practice parser)
- ✅ Proven methodology (BLAST curriculum, training guides)
- ✅ Completed case studies (Kabir breakthrough)
- ✅ Professional credentials and references
- ✅ Strategic vision docs (for reference)

**What to leave in vault:**
- ❌ Active development/experiments
- ❌ Multiple drafts/versions
- ❌ Incomplete ideas
- ❌ Raw research notes

**Principle:** The fieldhouse gets production-ready content. The vault keeps the messy workshop.

---

## MAIN COURT - Core Methodology

### BLAST Curriculum

**Source Files:**
```
/PhoenixGrind Curriculum/(Recruit) BLAST HOOPS TRAINER GUIDE.md
/PhoenixGrind Curriculum/(Travel) BLAST HOOPS TRAINER GUIDE.docx
/PhoenixGrind Curriculum/(Varsity) BLAST HOOPS TRAINER GUIDE.docx
```

**Destination:**
```
/main-court/blast-curriculum/
├── travel-level.md       (convert from docx)
├── recruit-level.md      (already markdown)
├── varsity-level.md      (convert from docx)
└── README.md             (explain Tim's system)
```

**Action Required:**
- Convert .docx files to markdown
- Add header metadata to each level guide
- Create README explaining BLAST progression
- Attribute to Tim Levy partnership

---

**Phoenix Grind Documents**

**Source Files:**
```
/PhoenixGrind Curriculum/Phoenix Grind Basketball Training .docx
/PhoenixGrind Curriculum/Phoenix Grind Spring Basketball 9th Grade.docx
```

**Destination:**
```
/main-court/phoenix-grind/
├── training-philosophy.md     (from Basketball Training.docx)
├── spring-program-9th.md      (from Spring Basketball.docx)
└── README.md                   (explain Phoenix Grind approach)
```

**Action Required:**
- Convert .docx to markdown
- Extract core philosophy and methodology
- Document seasonal program structure

---

**Neuroplasticity Framework**

**Source File:**
```
/basketball_neuroplasticity_framework.md
```

**Destination:**
```
/main-court/neuroplasticity-framework.md
```

**Action Required:**
- Direct copy (already markdown)
- Add metadata header
- This is GOLD - unique market differentiator

---

**Coaching Philosophy**

**Source Files:**
```
/flo-state.txt
/flostate-philosophy/     (entire folder)
```

**Destination:**
```
/main-court/coaching-philosophy.md
```

**Action Required:**
- Consolidate FloState philosophy into single doc
- Extract core coaching principles
- Make it Coach D's voice and approach

---

## PRACTICE GYM - Tools & Templates

### Lineup Builder (Already Complete)

**Source File:**
```
/WAA_Lineup_Builder_Complete.html
/WAA_Lineup_Builder_README.md
```

**Destination:**
```
/practice-gym/lineup-builder/
├── WAA_Lineup_Builder_Complete.html  ✅ (ready to copy)
├── README.md                           ✅ (ready to copy)
```

**Action Required:**
- Direct copy (both files ready)
- Update Practice Gym README to list this tool

---

**Practice Schedule Parser**

**Source File:**
```
/practice-schedule-parser.html
```

**Destination:**
```
/practice-gym/practice-tools/
├── schedule-parser.html
└── README.md               (create - explain what it does)
```

**Action Required:**
- Copy HTML file
- Create README with usage instructions
- Test to ensure it still works

---

## FILM ROOM - Case Studies & Results

### Kabir Development Journey

**Source Files:**
```
/Kabir_Case_Study_Paint_Confidence_Breakthrough_v1.md
/CoachFlo_Training_Session_Template_Paint_Confidence_v1.md
/Kabir_InSeason_Training_Plan_v1.md
/Kabir_Training_Proposal_Print_v1.md
/kabir_neuroplasticity_session.md
```

**Destination:**
```
/film-room/case-studies/kabir/
├── paint-confidence-breakthrough.md      (Case Study v1)
├── neuroplasticity-session.md            (session notes)
├── training-plan.md                      (InSeason Plan)
└── README.md                             (overview of journey)
```

**Action Required:**
- Copy all Kabir-related docs
- Create README summarizing the journey arc
- Link to session template in methodology section

---

**Session Templates**

**Source File:**
```
/CoachFlo_Training_Session_Template_Paint_Confidence_v1.md
```

**Destination:**
```
/film-room/methodology/
├── paint-confidence-session-template.md
└── README.md                             (explain how to use templates)
```

**Action Required:**
- Copy template
- Consider if other session templates exist in vault
- Create README on template usage

---

## COACH D'S OFFICE - Credentials & Professional

### Certifications

**Source Files:**
```
/coaching-documents/Derek-Simmons-Child-Safety-Training-Child-Safety-Trusted-Coaches.pdf
/coaching-documents/Derek-Simmons-Concussion-Training-Concussion-Certificate-Trusted-Coaches.pdf
/coaching-documents/Derek-Simmons-First-Aid-Training-First-Aid-Trusted-Coaches.pdf
/coaching-documents/Derek-Simmons-Nationwide-Criminal-Background-Check-National-Background-Check-Trusted-Coaches.pdf
```

**Destination:**
```
/coach-d-office/credentials/
├── child-safety-training.pdf
├── concussion-training.pdf
├── first-aid-training.pdf
└── background-check.pdf
```

**Action Required:**
- Direct copy all PDFs
- Rename for cleaner filenames

---

**References**

**Source Files:**
```
/Pete Koland - Pace Setters letter of reference.md
/Pete Koland - Pace Setters letter of reference.pdf
```

**Destination:**
```
/coach-d-office/references/
├── pete-koland-letter.pdf
└── README.md                 (context on Pete and Pace Setters)
```

**Action Required:**
- Copy PDF
- Create README explaining the reference context

---

**Waivers & Legal**

**Source Files:**
```
/coaching-documents/Basketball Training Waiver & Release of Liability.md
/coaching-documents/Basketball Training Waiver & Release of Liability.pdf
```

**Destination:**
```
/coach-d-office/waivers/
├── training-waiver.pdf
└── README.md               (explain when/how to use)
```

**Action Required:**
- Copy PDF
- Create README on waiver usage

---

## WILL CALL - Services & Packages

**Source Files:**
```
/In_Season_Training_Package_Pricing_Guide_v1.md
```

**Destination:**
```
/will-call/in-season-training-package.md
```

**Action Required:**
- Copy pricing guide
- Update dates if needed
- Add current availability

---

## DOCS - Strategy & Research

### Platform Vision

**Source Files:**
```
/HoopDreams_Strategic_Roadmap.md
/hoopdreams-strategy-document.md
/SportsDreams_Platform_Strategy_-_Multi-Sport_AI_Coaching_Revolution.md
/HoopDreams_Platform_Strategy_-_From_Kabir_s_App_to_Global_Basketball_Development.md
```

**Destination:**
```
/docs/strategy/
├── hoopdreams-platform-vision.md          (consolidate roadmap + strategy)
├── sportsdreams-expansion.md              (multi-sport vision)
└── README.md                               (explain these are vision, not active)
```

**Action Required:**
- Consolidate multiple HoopDreams docs into one clean vision doc
- Keep SportsDreams separate (different scope)
- Make clear these are "someday maybe" not current work

---

**Market Research**

**Source Files:**
```
/market-research-stress-text.md
/Basketball_Neuroplasticity_Training__Market_Analysis_and_Opportunity_Assessment.md
/Youth_Sports_Coaching_Education__Platform_Opportunity_Analysis.md
/High_School_Basketball_Retention_Crisis__AI_SMS_Coaching_Solution_Analysis.md
```

**Destination:**
```
/docs/strategy/market-research/
├── neuroplasticity-opportunity.md
├── coaching-education-gap.md
├── retention-crisis-analysis.md
└── README.md                      (summarize findings)
```

**Action Required:**
- Copy market research docs
- Create README summarizing key insights
- Organize by topic area

---

**Architecture & Vision**

**Source Files:**
```
/PhoenixGrind Curriculum/PhoenixGrind-Arena.txt
/fieldhouse-layout.tsx
/flostate-overview.md
/flostate-implementation.md
/flostate-next-steps.md
```

**Destination:**
```
/docs/strategy/
├── phoenix-grind-arena-full.md       (complete fieldhouse vision)
├── flostate-philosophy.md            (consolidate FloState docs)
└── fieldhouse-evolution.md           (how concept developed)
```

**Action Required:**
- Copy Phoenix Grind Arena full spec
- Consolidate FloState documents
- Document how fieldhouse concept evolved

---

## WHAT TO LEAVE IN THE VAULT

**Active Development:**
- `/basketball-kabir-app/` - Active app development
- `/blasthoops-ai/` - Experimental AI work
- `/coach-flo/` - Platform prototypes
- `/hoopdreams rebuild/` - Active rebuild work
- `/lovable-prototypes/` - Prototype experiments

**Multiple Drafts:**
- `/hoopdreams-chat-transcript-*.txt` - Working notes
- `/blast-hoops-next-steps.md` - Active planning
- Various `_copy` and versioned files

**Raw Research:**
- `/agentic-ai-clone-research.md`
- `/teenage-brain-research.md`
- `/AI-SMS-bb-training-research.md`

**Working Documents:**
- `/friend_conversation_kit.md`
- `/friend_follow_up_email.md`
- `/hoop_dreams_one_pager.md`

**Why Leave These:**
- Still being actively worked on
- Multiple versions/iterations
- Not production-ready
- Better suited for vault's flexible structure

---

## MIGRATION EXECUTION PLAN

### Phase 1: Structure Validation (Complete ✅)
- Empty fieldhouse structure created
- All section READMEs written
- Clear organization established

### Phase 2: High-Priority Content (Next)
**Priority 1 - Tools (Immediate Value):**
1. Copy WAA Lineup Builder to practice-gym/
2. Copy practice schedule parser
3. Update Practice Gym README

**Priority 2 - Credentials (Professional Presentation):**
1. Copy all certifications to credentials/
2. Copy Pete Koland reference
3. Copy training waiver

**Priority 3 - Methodology (Core Value):**
1. Copy BLAST curriculum guides
2. Copy neuroplasticity framework
3. Copy Phoenix Grind docs

### Phase 3: Case Studies & Content
**Priority 4 - Film Room:**
1. Copy all Kabir case study materials
2. Copy session template
3. Create section READMEs

### Phase 4: Strategic Reference
**Priority 5 - Docs:**
1. Copy HoopDreams vision docs
2. Copy market research
3. Copy architecture documents

### Phase 5: Service Offerings
**Priority 6 - Will Call:**
1. Copy pricing guide
2. Update with current info
3. Create service descriptions

---

## FILE CONVERSION REQUIREMENTS

**DOCX → Markdown Conversions Needed:**
```
Travel BLAST Guide.docx        → travel-level.md
Varsity BLAST Guide.docx       → varsity-level.md
Phoenix Grind Training.docx    → training-philosophy.md
Spring Basketball 9th.docx     → spring-program-9th.md
```

**Tools for Conversion:**
- Pandoc (command line)
- Manual cleanup for formatting
- Add metadata headers after conversion

**PDF Files (Keep as PDF):**
- All certifications
- Pete Koland reference
- Training waiver

---

## POST-MIGRATION TASKS

**After Each Section:**
1. Update section README with current contents
2. Test any HTML tools to ensure they work
3. Verify all links in markdown files
4. Add metadata headers where missing
5. Remove any sensitive/personal info

**After Complete Migration:**
1. Update main README with complete inventory
2. Review ROADMAP for accuracy
3. Create CHANGELOG documenting what was moved
4. Archive or delete duplicates from outputs folder

---

## NEXT STEPS - YOUR CALL, COACH

**Option A: I execute the migration systematically**
- Go section by section
- Copy files, convert formats
- Update READMEs as we go
- You review each section when done

**Option B: You pick priority sections**
- Tell me which section matters most right now
- I focus migration there first
- Faster to something useful
- Can do others later

**Option C: We do it together incrementally**
- I suggest next file to move
- You approve/modify
- We discuss as we go
- More collaborative, slower

**What's your preference?**
