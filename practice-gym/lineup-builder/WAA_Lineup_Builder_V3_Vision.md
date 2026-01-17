# WAA Lineup Builder V3 - Vision & Requirements

**Status:** Planning / Not Yet Built  
**Target:** End of Season (Spring 2026)  
**Goal:** Make it shareable with other coaches - no HTML editing required

---

## The Problem V3 Solves

**Current State (V2):**
- Derek can use it ✅
- Other coaches need to edit HTML files ❌
- Templates hardcoded for Derek's roster ❌
- Can't easily share with league ❌

**Desired State (V3):**
- ANY coach can use it in 5 minutes ✅
- No technical skills required ✅
- Share via text/email ✅
- Multi-team support (JV + Varsity) ✅

---

## Core Feature: Setup Wizard

### First-Time User Flow

**Screen 1: Welcome**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
🏀 WAA LINEUP BUILDER
━━━━━━━━━━━━━━━━━━━━━━━━━━

Build WAA-compliant lineups in minutes.
No technical skills required.

[Get Started]
[Watch Demo Video]
[Import Existing Roster]
```

**Screen 2: Team Info**
```
YOUR TEAM
━━━━━━━━━━━━━━━━━━━━━━━━━━

Team Name: [____________]
Coach Name: [____________]
Grade Level: [Select ▼]
  • 3rd/4th
  • 5th/6th
  • 7th/8th
  • 9th/10th
  • 11th/12th
  
League: [Select ▼]
  • WAA
  • Other (manual rules)

[Back] [Next]
```

**Screen 3: Add Players (Simplified)**
```
BUILD YOUR ROSTER
━━━━━━━━━━━━━━━━━━━━━━━━━━

How many players on your roster? [10 ▼]

Quick Add:
Player Name          Jersey #  
[____________]       [___]  [+ Add]

Players Added (10):
✓ Dylan #10
✓ Ben #30
✓ Michael #44
...

[Edit Positions] [Back] [Next]
```

**Screen 4: Position Preferences (Optional)**
```
POSITION PREFERENCES
━━━━━━━━━━━━━━━━━━━━━━━━━━

For each player, select positions they CAN play.
(Auto-fill will use this to build smart lineups)

Dylan #10
☑ PG  ☑ SG  ☑ SF  ☑ PF  ☑ C
⭐ Mark as "Top Player" (avoid 3+ consecutive periods)

Ben #30
☐ PG  ☑ SG  ☑ SF  ☑ PF  ☐ C

[Show All] [Collapse All]
[Skip This - I'll Assign Manually] [Save & Continue]
```

**Screen 5: Create Templates (Optional)**
```
DEFAULT LINEUPS
━━━━━━━━━━━━━━━━━━━━━━━━━━

Want to save default Unit A/B rotations?

○ Yes - Auto-generate based on positions
○ Yes - I'll build them now
○ No - I'll build lineups from scratch each game

Templates save time on game day but aren't required.

[Skip] [Build Templates]
```

**Screen 6: Ready**
```
✓ SETUP COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━

Your roster is saved and ready to use.

Simmons 9th/10th
10 players • 4 marked as "Top Players"
Default templates: Ready

You can:
• Edit roster anytime
• Save multiple teams
• Share with assistant coaches

[Start Building Lineups]
```

---

## Returning User Experience

**Home Screen:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
🏀 WAA LINEUP BUILDER
━━━━━━━━━━━━━━━━━━━━━━━━━━

Active Team: Simmons 9th/10th ▼
10 players • Last used: Jan 10, 2026

[📋 Build New Lineup]

Quick Actions:
• Edit Roster
• Switch Team (JV available)
• Import/Export
• Settings

Recent Games:
• vs Hopkins (Jan 8) - View
• vs Minnetonka (Jan 5) - View
```

---

## Data Structure

### Storage Format (localStorage)

```javascript
const appData = {
  version: "3.0",
  teams: [
    {
      id: "simmons-9th-10th-2026",
      name: "Simmons 9th/10th",
      coach: "Derek Simmons",
      grade: "9th/10th",
      league: "WAA",
      created: "2026-01-10",
      lastModified: "2026-01-10",
      
      players: [
        {
          name: "Dylan",
          number: 10,
          positions: [1, 2, 3, 4, 5],
          cannotPlay: [],
          isTopPlayer: true,
          available: true
        },
        {
          name: "Tommy",
          number: 2,
          positions: [2, 3],
          cannotPlay: [1, 4, 5],
          isTopPlayer: false,
          available: true
        }
        // ... rest of roster
      ],
      
      templates: {
        "10player": {
          unitA: {1: 10, 2: 30, 3: 44, 4: 55, 5: 52},
          unitB: {1: 23, 2: 35, 3: 2, 4: 22, 5: 13}
        },
        "9player": {
          // dynamic based on who's out
        }
      },
      
      savedGames: [
        {
          date: "2026-01-08",
          opponent: "Hopkins",
          lineups: { /* period assignments */ }
        }
      ]
    }
  ],
  
  activeTeamId: "simmons-9th-10th-2026",
  
  settings: {
    theme: "light",
    showTutorial: false,
    defaultView: "builder"
  }
};
```

---

## Key Features

### 1. Roster Management UI

**Visual roster builder:**
- Add/remove players with buttons
- Drag to reorder
- Edit in-place
- Bulk import from CSV

**Position selector:**
- Checkboxes for each position
- Visual grid (5 positions)
- "Cannot play" mode
- Quick presets ("Guard only", "Big only", "Utility")

**Top Player marking:**
- Toggle checkbox
- Shows warning in lineup if 3+ consecutive
- Optional: Set max consecutive periods per player

### 2. Smart Template Generator

**Auto-generate Unit A/B:**
- Analyzes position preferences
- Distributes top players evenly
- Creates balanced units
- User can accept or modify

**Manual template builder:**
- Drag players to Unit A/B grids
- Save as default
- Load for quick lineup generation

### 3. Multi-Team Support

**Team switching:**
- Dropdown selector
- Recent teams first
- Archive old teams

**Use cases:**
- Coach has JV + Varsity
- Coach moves between age groups
- Shared device (multiple coaches)

**Team management:**
- Duplicate team (copy roster)
- Archive team (hide from list)
- Delete team (with confirmation)

### 4. Import/Export

**Export formats:**
- JSON (full data backup)
- CSV (roster only, for spreadsheet)
- Share link (encoded URL)

**Import methods:**
- Paste JSON
- Upload file
- Paste share link

**Sharing workflow:**
```
Coach A:
1. Clicks "Share Roster"
2. Gets link: lineup-builder.html?roster=ABC123
3. Texts to Coach B

Coach B:
1. Opens link
2. Roster auto-loads
3. Can save to their account
```

### 5. Enhanced Validation

**Real-time checks:**
- As you assign players, see warnings immediately
- Period count updates live
- Consecutive period badges appear

**Validation panel improvements:**
- Group issues by severity (Error, Warning, Info)
- Click issue to jump to problem period
- Suggest fixes ("Try swapping X and Y")

**WAA rule explanations:**
- Hover over rule to see details
- Link to official WAA handbook
- Show why violation matters

---

## UI/UX Improvements

### Mobile-First Design

**Current V2 issues:**
- Small tap targets on some buttons
- Hard to see full preview on phone
- Collapsible sections require scrolling

**V3 improvements:**
- Bigger everything (minimum 44px tap targets)
- Swipeable periods (swipe left/right to switch)
- Sticky header with game info
- Bottom nav bar (Builder | Preview | Validate)

### Onboarding

**First-time users:**
- Interactive tutorial overlay
- "Try dragging this player" prompts
- Sample roster pre-loaded
- "Skip tutorial" option

**Tooltips:**
- Hover/tap "?" icons for help
- Context-sensitive hints
- Link to video guides

### Accessibility

**Color blindness:**
- Don't rely only on color for warnings
- Use icons + text labels
- High contrast mode option

**Screen readers:**
- Proper ARIA labels
- Keyboard navigation
- Skip to main content

---

## Technical Implementation

### V2 → V3 Migration Path

**Step 1: Setup Wizard (4 hours)**
- Multi-step form component
- Validation logic
- Save to localStorage
- Skip option (use manual mode)

**Step 2: Dynamic Roster Loading (2 hours)**
- Replace hardcoded ROSTER array
- Load from localStorage
- Fallback to demo data if empty
- Update all functions to use dynamic roster

**Step 3: Template Generator (3 hours)**
- Analyze position preferences
- Auto-assign players to Unit A/B
- Balance distribution
- User approval before saving

**Step 4: Import/Export (1 hour)**
- JSON serialization
- Base64 encode for URLs
- CSV export for spreadsheet
- Import validation

**Step 5: Multi-Team (1 hour)**
- Team switcher dropdown
- Store multiple teams in localStorage
- Isolate game history per team

**Step 6: UI Polish (2 hours)**
- Bigger tap targets
- Swipeable periods
- Bottom nav
- Loading states

**Total estimated:** 13-15 hours

---

## Development Priority

### Must-Have (MVP)

1. ✅ Setup wizard for roster
2. ✅ Save roster to localStorage
3. ✅ Dynamic loading (no hardcoded rosters)
4. ✅ Import/export JSON

### Should-Have (V3.1)

5. Auto-generate templates
6. Multi-team support
7. Enhanced mobile UI
8. Onboarding tutorial

### Nice-to-Have (V3.2)

9. CSV import/export
10. Share links (encoded URLs)
11. Accessibility improvements
12. Advanced validation suggestions

---

## User Testing Plan

### Phase 1: Derek (Battle Testing)

**Timeline:** Rest of 2025-26 season  
**Goal:** Find edge cases, refine workflows

**Track:**
- What breaks in real games
- What's clunky on mobile
- What features are missing
- What's confusing

### Phase 2: Assistant Coach

**Timeline:** Late season  
**Goal:** Test "someone else using it" scenario

**Give them:**
- V2 with setup wizard prototype
- No instructions
- Watch them struggle (take notes)

**Learn:**
- What's not obvious
- Where they get stuck
- What they expect that isn't there

### Phase 3: WAA Coaches

**Timeline:** End-of-season meeting  
**Goal:** Gauge interest, gather requirements

**Show:**
- Live demo (5 min)
- Sample roster setup
- Build lineup in real-time

**Ask:**
- "Would you use this?"
- "What's missing?"
- "What would make this better?"

### Phase 4: Beta Test

**Timeline:** Pre-season 2026-27  
**Goal:** 5-10 coaches use it for real

**Provide:**
- V3 beta with support
- Feedback form
- Weekly check-ins

**Measure:**
- Adoption rate
- Issues reported
- Feature requests
- Satisfaction

---

## Success Metrics

**Adoption:**
- 5+ WAA coaches using it by end of 2026-27 season
- 10+ teams configured
- 50+ games planned with the tool

**Quality:**
- Zero technical fouls due to lineup violations
- <5 bugs reported per month
- 4+ star rating from users

**Efficiency:**
- Setup time: <10 minutes for new team
- Lineup creation: <5 minutes per game
- Validation: Instant feedback

---

## Monetization? (Future Consideration)

**Keep it free for WAA:**
- Derek's team uses it ✅
- Share with league coaches ✅
- Open source on GitHub ✅

**Potential revenue streams (if it scales):**
- Freemium SaaS version ($5/month for cloud sync)
- White-label for other leagues ($100/season)
- Custom features for tournaments ($500/event)
- Coaching education workshops ($50/coach)

**But for now:** Free, open, shareable. Build value first, monetize later (if ever).

---

## Long-Term Vision (V4+)

**Beyond lineup management:**

### Game-Day Features
- Live substitution tracking
- Foul counter
- Timeout manager
- Score tracking
- Period timer with alerts

### Season Management
- Player stats by position
- Which lineups win most
- Chemistry analysis (which combos work)
- Playing time equity tracker

### Coaching Tools
- Practice plan templates
- Drill library
- Film integration
- Parent communication

### League Integration
- Import from league roster system
- Auto-populate game schedule
- Submit lineups electronically
- Stats sync to league site

**But first:** Build V3, get coaches using it, prove the value.

---

## Files to Create for V3

**When ready to build:**

1. `setup-wizard.js` - Multi-step form logic
2. `roster-manager.js` - CRUD for teams/players
3. `template-generator.js` - Auto-build Unit A/B
4. `import-export.js` - JSON/CSV handlers
5. `storage-manager.js` - localStorage wrapper
6. `validation-engine.js` - Enhanced rule checking

**Keep from V2:**
- Core lineup builder UI
- Drag-and-drop logic
- Print functionality
- WAA rules engine

---

## Decision Points

### Before Building V3

**Question 1:** Web app or enhanced HTML file?
- HTML file = offline, privacy, simple
- Web app = cloud sync, updates, better UX
- **Lean:** Start with HTML file, migrate to web app if adoption warrants

**Question 2:** Mobile app or responsive web?
- Mobile app = better UX, works offline, notifications
- Responsive web = works everywhere, no install
- **Lean:** Responsive web first, mobile app if 20+ coaches using it

**Question 3:** Open source or proprietary?
- Open source = community contributions, transparency
- Proprietary = control, potential revenue
- **Lean:** Open source on GitHub, MIT license

---

## Next Steps (End of Season)

1. **Review this document** with fresh eyes
2. **Gather feedback** from assistant coach + 2-3 other WAA coaches
3. **Prioritize features** based on feedback
4. **Prototype setup wizard** (4 hours)
5. **Test with one other coach** (validation)
6. **Build V3 MVP** (15 hours total)
7. **Beta test with 5 coaches** (pre-season)
8. **Iterate based on feedback**
9. **Release to WAA league** (coach's meeting)
10. **Support and maintain** (ongoing)

---

## Resources Needed

**Time:**
- Development: 15 hours
- Testing: 5 hours
- Documentation: 3 hours
- Support: 2 hours/month
- **Total:** ~25 hours initial, 2 hours/month ongoing

**Cost:**
- Hosting: $0 (GitHub Pages or claude.ai hosting)
- Domain: $12/year (optional: waa-lineup.com)
- Tools: $0 (all free/open source)
- **Total:** ~$0-12/year

**Skills:**
- JavaScript (have it)
- UI/UX design (can use Claude)
- User testing (recruit coaches)
- Documentation (can use Claude)

---

## Questions to Answer This Season

**Usability:**
- What do coaches struggle with most?
- What features do they never use?
- What do they wish it did?

**Technical:**
- Does drag-and-drop work on all phones?
- Does localStorage ever get corrupted?
- Do print layouts work on all printers?

**Strategic:**
- Do other coaches actually want this?
- Would they pay for a hosted version?
- Should this be WAA-specific or multi-league?

**Keep notes throughout season. Review in April. Build in May. Beta test in June. Launch in September.**

---

## Success Looks Like...

**End of 2026-27 season:**
- 10 WAA coaches using it regularly
- Zero technical fouls in those teams
- Positive feedback from league
- Other leagues asking for it
- Decision point: Keep free or build SaaS version

**That's the target. Everything else is just execution.**

---

**Status:** Vision documented. Ready to execute end-of-season.  
**Owner:** Coach D  
**Timeline:** Build May 2026, Launch Sept 2026  
**Budget:** $0 (time only)

**Let's win some games first. Build this later.** 🏀
