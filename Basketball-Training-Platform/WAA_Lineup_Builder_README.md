# WAA Lineup Builder - README

**Version:** 2.0 (Complete)  
**Created:** December 20, 2025  
**Status:** Production (Used in live game - won!)  
**File:** WAA_Lineup_Builder_Complete.html

---

## What It Does

A compliance-focused basketball lineup management tool for the Wayzata Athletic Association (WAA) league. Prevents technical fouls by ensuring all players get equal playing time according to league rules.

**Key Features:**
- ✅ Build compliant lineups for 8 periods + OT
- ✅ Auto-fill generates legal lineups based on position preferences
- ✅ Visual warnings for consecutive period assignments
- ✅ Live preview of printed output
- ✅ Save/load game history with export/import
- ✅ Print current lineup or blank template
- ✅ Availability toggles for injured/absent players
- ✅ Position matching indicators for optimal assignments

**League Rules:**
- 8 regular periods (4 per half)
- 2 overtime periods if needed
- 10 players on roster, 5 on court per period
- Each player must play exactly 5 periods (if 10 available) or 6 periods (if 8-9 available)
- Compliance violations result in technical fouls

---

## Quick Start Guide

### First Time Setup

**1. Update Your Roster**

Find the `ROSTER` array in the code (around line 40):

```javascript
const ROSTER = [
  { number: 2, name: "Tommy", positions: [3, 2, 4, 1] },
  { number: 10, name: "Dylan", positions: [1, 2, 4, 3, 5] },
  // ... add your players
];
```

**What you need:**
- Jersey number (number)
- Player name (name)
- Position preferences (positions) - ranked list from most preferred to least

**Position Key:**
- 1 = Point Guard
- 2 = Shooting Guard
- 3 = Small Forward
- 4 = Power Forward
- 5 = Center

**Example:** 
- `[1, 2, 3, 4, 5]` = Can play all positions, prefers point guard
- `[5, 4, 3]` = Only plays big positions, can't play guard
- `[3, 4, 5, 2]` = Wing player, can play 2-5 but prefers 3

**2. Enter Game Details**

- Opponent name (appears on printed lineup)
- Date (MM-DD-YYYY format)
- Time (12-hour format with am/pm)
- Team name defaults to "Simmons 9th/10th" (editable in code)

**3. Mark Availability**

Click player chips in the roster section to toggle IN/OUT status:
- Green background = Available
- Red background with strikethrough = Out

**4. Build Your Lineup**

**Option A - Manual:**
- Expand each period section
- Click "Select Player" for each position
- Choose from dropdown (⭐ = primary position, ✓ = can play)

**Option B - Auto-Fill:**
- Click "Auto-Fill Compliant Lineup" button
- Algorithm assigns players based on position fit
- Distributes playing time evenly (5 periods each for 8 players)
- Review and adjust as needed

**5. Review & Print**

- Check validation panel (all players should show 5 or 6 periods)
- Use live preview to see final output
- Print current lineup for game day

---

## How The Auto-Fill Works

### Position Scoring Algorithm

Each player/position combination gets a "fit score":

```
Base Scores:
- Primary position (index 0 in preferences): 100 points
- Secondary position (index 1): 50 points
- Can play but not preferred: 10 points
- Cannot play: 0 points (excluded)

Special Bonuses:
- Kabir (#22) at position 1 (point guard): +30 (developmental priority)
- Specialists (≤2 position options): +20 (use where they fit best)
```

### Assignment Process

1. **Calculate fit scores** for all available player/position combos
2. **For each period:**
   - Assign best-fit player to each position (5 positions per period)
   - Remove assigned players from pool for that period
   - Prefer players with fewer assigned periods (balance playing time)

3. **Distribution targets:**
   - 8 available players → 5 periods each (40 total slots / 8 players)
   - 9 available players → some get 5, some get 6
   - 10 available players → some get 4, some get 5

4. **Overtime handling:**
   - Assigns 2 OT periods total per player
   - OR assigns 1 OT period each to 6 different players
   - Prioritizes even distribution

**Result:** Compliant lineup that respects position preferences and playing time rules.

---

## Key Features Explained

### 1. Consecutive Period Warnings

**What it does:** Warns when a player is assigned to consecutive periods (back-to-back playing time).

**Visual indicators:**
- **Yellow background** = 2 consecutive periods (allowed, but flagged)
- **Red background** = 3+ consecutive periods (strongly discouraged)

**Important:** Warnings are visual only - assignments are NOT blocked. Coach has final say.

**How it works:**
```javascript
// Checks periods before AND after current assignment
// Counts consecutive streak including current period
// Example: Player in periods 2, 3, 4 = 3 consecutive when checking period 3
```

**Why it's important:** Fatigue management, foul trouble prevention, maintains competitive balance.

### 2. Position Match Indicators

**What it does:** Shows how well each player fits each position.

**Indicators in player selector dropdown:**
- ⭐ **Star** = Primary position (index 0 in preferences)
- ✓ **Checkmark** = Can play this position (in preferences list)
- (no indicator) = Cannot play this position (not in preferences)

**Example:**
If Tommy's positions are `[3, 2, 4, 1]`:
- Position 3 (SF) → ⭐ Tommy
- Position 2 (SG) → ✓ Tommy  
- Position 1 (PG) → ✓ Tommy
- Position 5 (C) → (Tommy not shown - can't play center)

### 3. Game History & Export

**Save Game:**
- Stores lineup with opponent + date as identifier
- Saved to localStorage (persists between sessions)
- Can save unlimited games

**Load Game:**
- Dropdown shows all saved games
- Loads complete lineup (all periods + OT)
- Preserves game details (opponent, date, time)

**Export/Import:**
- Export creates JSON file download
- Import loads JSON file from computer
- Use for backups, sharing with assistant coaches
- Stores in browser otherwise (cleared if browser data deleted)

### 4. Print Modes

**Print Current Lineup:**
- Shows filled lineup as assigned
- Includes opponent name if entered
- Shows date, time, team, coach name
- All 10 players listed numerically
- Empty rows 11-12 for compliance

**Print Blank Sheet:**
- Completely empty grid
- All header fields blank (opponent, date, time, coach)
- All 10 players listed with no position assignments
- Use for gym bag emergencies or manual planning

---

## Technical Details

### Data Structure

**ROSTER Array:**
```javascript
const ROSTER = [
  {
    number: 2,              // Jersey number
    name: "Tommy",          // Player name
    positions: [3,2,4,1],   // Position preferences (ranked)
    available: true         // Availability status (toggled by user)
  }
];
```

**localStorage Keys:**
```
waa_lineups         - Current game lineup data
waa_game_date       - Current game date
waa_game_time       - Current game time  
waa_opponent        - Current opponent name
waa_saved_games     - Array of saved game objects
```

### Core Logic Functions

**`assignPosition(period, position, playerId)`**
- Assigns player to position for given period
- Updates UI and validation
- Checks consecutive periods
- Saves to localStorage

**`autoFillLineup()`**
- Calculates fit scores for all combos
- Assigns players optimally
- Balances playing time
- Handles OT distribution

**`validateLineup()`**
- Counts periods per player
- Checks for compliance (5-6 periods each)
- Updates validation panel with results

**`checkConsecutivePeriods(playerId, period)`**
- Counts consecutive streak
- Returns warning level (0 = ok, 1 = yellow, 2 = red)
- Only checks regular periods (excludes OT)

**`saveGame()` / `loadGame()` / `exportData()` / `importData()`**
- Manages game history persistence
- Handles JSON serialization
- localStorage management

---

## Potential Improvements

### High Priority

**1. Multi-Team Support**
- Save different rosters for different teams
- Switch between teams easily
- Useful if coaching multiple age groups

**2. Season History Dashboard**
- Track which players played together most
- Identify player combinations that work well
- Playing time stats across multiple games

**3. Enhanced Auto-Fill Options**
- "Rotate starters" mode (spreads best players across periods)
- "Development mode" (prioritizes weaker players getting key positions)
- "Match-up mode" (assign based on opponent strengths)

**4. Substitution Timing**
- Add minute markers for period breaks
- Alerts/timers for substitution reminders
- Integration with game clock

### Medium Priority

**5. Mobile App Version**
- Offline-capable PWA
- Touch-optimized interface
- Push notifications for sub times

**6. Assistant Coach Sharing**
- Generate shareable link to view lineup
- Real-time collaboration on lineup building
- Comments/notes on player assignments

**7. Player Statistics Integration**
- Import stats from previous games
- Recommend lineups based on performance data
- Track which position combos yield best results

**8. Foul Trouble Management**
- Mark players in foul trouble
- Auto-suggest substitutions
- Track foul counts across periods

### Low Priority (Nice to Have)

**9. Drag-and-Drop Interface**
- Drag player chips directly to positions
- Visual lineup board instead of dropdowns
- Easier for quick adjustments

**10. Print Customization**
- Choose which periods to print
- Customize header fields
- Add custom notes section

**11. League Template Library**
- Pre-built templates for different leagues (WAA, AAU, etc.)
- Different rules/constraints per league
- Easy switching between league formats

**12. Video Integration**
- Link to game film for each period
- Quick reference during film review
- Tag plays by lineup configuration

---

## Common Issues & Solutions

### Issue: Auto-fill assigns wrong positions

**Cause:** Player position preferences not accurate in ROSTER array

**Solution:** Update `positions` array to reflect actual capabilities
- Put most natural position first
- Remove positions they can't play
- Be realistic about skill level per position

### Issue: Consecutive period warnings showing incorrectly

**Cause:** Expected behavior - algorithm prioritizes position fit over consecutive periods

**Solution:** Manually adjust assignments or accept warnings
- Yellow (2 consecutive) is common and acceptable
- Red (3+ consecutive) should be fixed if possible
- Sometimes unavoidable with 8 players

### Issue: Can't print / print looks wrong

**Cause:** Browser print settings or PDF viewer

**Solution:** 
- Use "Print Current Lineup" or "Print Blank Sheet" buttons (not browser print)
- Check print preview before printing
- Ensure portrait orientation
- Clear browser cache if styling breaks

### Issue: Game history not loading

**Cause:** Browser localStorage cleared or different browser

**Solution:**
- Export games regularly as JSON backup
- Import from JSON when switching browsers/devices
- localStorage is browser-specific (Chrome ≠ Safari)

### Issue: Player showing as unavailable but should be available

**Cause:** Accidentally clicked availability toggle

**Solution:** Click player chip in roster section to toggle back to available (green background)

---

## Setup Instructions for New Users

**For a coach picking up this tool for the first time:**

1. **Download the HTML file** to your computer
2. **Open in Chrome or Firefox** (recommended browsers)
3. **Update the ROSTER array** with your team:
   - Find line ~40 in the code
   - Replace player numbers, names, and positions
   - Save the file
4. **Refresh browser** to see your roster
5. **Test auto-fill** with a practice game
6. **Save a template game** with your roster for quick access
7. **Export the template** as backup

**First game day:**
1. Open the tool
2. Mark any absent players (click to toggle OUT)
3. Enter opponent, date, time
4. Click "Auto-Fill Compliant Lineup"
5. Review and adjust as needed
6. Print lineup
7. Save game for future reference

---

## File Information

**Single file application** - everything in one HTML file:
- HTML structure
- CSS styling (embedded)
- JavaScript logic (embedded)
- No external dependencies
- No internet required (runs offline)

**Browser compatibility:**
- Chrome (recommended)
- Firefox (recommended)
- Safari (works but use webkit print)
- Edge (works)

**File size:** ~50KB (very lightweight)

**Storage:** Uses browser localStorage (5-10MB typical limit)

---

## Credits

**Built:** December 20, 2025  
**Coach:** Derek Simmons (Coach D)  
**Team:** Simmons 9th/10th Grade  
**League:** Wayzata Athletic Association (WAA)  
**First use:** December 20, 2025 - Won the game! ✅

**Built with:** Claude (Anthropic)  
**Development time:** ~3 hours (including debugging)  
**Coffee consumed:** Unknown  
**Technical fouls avoided:** All of them

---

## Version History

**v1.0** - Initial build with basic functionality  
**v2.0** - Complete rebuild with all features (current version):
- Collapsible UI
- Live preview
- Auto-fill algorithm
- Game history
- Position matching
- Availability toggles
- Print modes
- Consecutive period warnings
- Full validation panel

---

## License

Use this however you want. Share with other coaches. Improve it. Make it better.

Just remember: The best tool is the one that helps you win games and develop players.

**Go win some games, Coach.** 🏀
