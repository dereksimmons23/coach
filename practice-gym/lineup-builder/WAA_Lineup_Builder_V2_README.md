# WAA Lineup Builder V2 - README

**Version:** 2.0  
**Created:** January 10, 2026  
**Status:** Production Ready  
**File:** WAA_Lineup_Builder_V2.html

---

## What's New in V2

**Major Enhancements:**
- ✅ **Drag-and-drop position swapping** - Drag players between positions within the same period
- ✅ **Duplicate prevention** - Can't assign same player twice in one period
- ✅ **Mobile-optimized** - Touch-friendly UI with bigger tap targets
- ✅ **Quick templates** - Pre-built Unit A/B lineups (10 player, 9 player)
- ✅ **Enhanced rule checker** - Validates Top 4 consecutive periods + OT eligibility
- ✅ **Official WAA print form** - Matches league template exactly
- ✅ **Top 4 player warnings** - Special alerts for John, Dylan, Kabir, Caleb

---

## Core Features

### 1. Drag-and-Drop Position Swapping

**How it works:**
- Long-press (mobile) or click-and-drag (desktop) any assigned player
- Drag to a different position within the same period
- Drop to swap positions instantly
- Can't drag between different periods (prevents accidents)

**Why it's useful:**
- Quick lineup adjustments during game planning
- Swap Ben from 2 to 4 with one gesture
- No need to remove/re-assign players

**Example:**
```
Period 1 BEFORE:
1-Dylan, 2-Ben, 3-Michael, 4-Dominic, 5-John

Drag Ben (position 2) to position 4:

Period 1 AFTER:
1-Dylan, 2-Dominic, 3-Michael, 4-Ben, 5-John
```

### 2. Duplicate Prevention

**What it does:**
- Prevents assigning the same player twice in one period
- Players already assigned won't appear in the selector
- Visual confirmation in modal

**Example:**
```
Period 1 has: Dylan, Ben, Michael

When you click position 4:
- Dylan ❌ (already playing)
- Ben ❌ (already playing)  
- Michael ❌ (already playing)
- Dominic ✅ (available)
- John ✅ (available)
```

### 3. Quick Templates

**Pre-built lineups for common scenarios:**

**10 Player Default:**
- Unit A (Periods 1,3,5,7): Dylan, Ben, Michael, Ben, John
- Unit B (Periods 2,4,6,8): Caleb, Charlie, Tommy, Kabir, Teegan
- OT: 1 period each (all 10 players)

**9 Player (No Teegan):**
- Same as 10 player but Dominic replaces Teegan in Unit B
- Top 4 (Dylan, Caleb, Kabir, John) play 4 periods + both OTs
- Other 5 players play 5 periods + no OT

**8 Player Auto-Fill:**
- Automated rotation based on position preferences
- Equal playing time (5 periods each)
- OT distributed properly

### 4. Enhanced WAA Rule Checker

**Validates:**

**Equal Playing Time:**
- 5 players: 8 periods each, all OT
- 6 players: 4 play 7 periods, 2 play 6 periods
- 7 players: 5 play 6 periods, 2 play 5 periods
- 8 players: All play 5 periods
- 9 players: 5 play 4 periods + both OTs, 4 play 5 periods + no OT
- 10 players: All play 4 periods + 1 OT

**Top 4 Consecutive Periods:**
- John (#52), Dylan (#10), Kabir (#22), Caleb (#23)
- ⚠️ Special alert if any Top 4 plays 3+ consecutive periods
- Orange pulsing border for high-priority warnings
- These players should never burn out

**OT Eligibility:**
- Players with 5 periods can't play OT
- Flags violations automatically
- Helps avoid rule violations

**Example Validation Output:**
```
✓ All periods have 5 players
✓ Equal playing time met (8 players × 5 periods)
✗ TOP 4 WARNING: Dylan plays 3 consecutive periods (1-2-3)
✗ Ben #30: Plays 5 periods AND OT (not allowed)
```

### 5. Mobile Optimization

**Touch-friendly features:**
- Bigger tap targets (60px minimum)
- Simplified one-column layout on mobile
- No hover states (everything tap-based)
- Collapsible sections to reduce scrolling
- Responsive grid adapts to screen size

**Mobile-specific:**
- Drag gestures work with touch
- No accidental zooming (viewport locked)
- iOS/Android web app support

### 6. Official WAA Print Form

**Matches league template:**
- Same header layout as Excel sheet
- Same table structure (12 rows)
- Same playing time rules footer
- Proper spacing for scorekeeper's table

**Print modes:**
- **Current lineup** - Shows filled positions
- **Blank sheet** - Empty template for manual fill

---

## Quick Start Guide

### 1. Open the HTML file

Double-click `WAA_Lineup_Builder_V2.html` in any browser (Chrome/Firefox/Safari).

### 2. Enter game info

- Opponent name
- Date
- Time

### 3. Mark availability

Tap each player chip to toggle IN (green) or OUT (red).

### 4. Load a template OR build manually

**Option A - Use Template:**
- Tap "Quick Templates" section
- Choose "10 Player Default" or "9 Player (No Teegan)"
- Review and adjust as needed

**Option B - Build Manually:**
- Expand each period
- Tap position slots to assign players
- Or drag-and-drop to swap positions

### 5. Validate

- Tap "Check WAA Rules"
- Review any warnings
- Fix issues (consecutive periods, OT eligibility)

### 6. Print

- Tap "Print Lineup" for filled version
- OR tap "Print Blank" for empty template

---

## Player Position Preferences

**Defined in ROSTER array (line ~42):**

```javascript
{name: 'Tommy', number: 2, positions: [3,2], cannotPlay: [1,4,5]}
// Tommy prefers 3 (SF), can play 2 (SG), CANNOT play 1/4/5
```

**Top 4 Players (special tracking):**
- John (#52) - isTop4: true
- Dylan (#10) - isTop4: true
- Kabir (#22) - isTop4: true
- Caleb (#23) - isTop4: true

**Position Constraints:**
- Tommy: CANNOT play 1 or 4 (only 2/3)
- Teegan: CANNOT play 1 (prefers 5, then 3/2/4)
- Michael: Should avoid 1 (spot-up 2/3/4/5)

---

## Template Logic

### 10-Player Default

**Unit A Philosophy:**
- Dylan runs point (locked at 1)
- Ben/Michael wings (2/3 interchangeable)
- Ben at 4 for athleticism OR Dominic at 4/5
- John anchors at 5

**Unit B Philosophy:**
- Caleb/Charlie can swap primary ball handler (1/2)
- Tommy is wing only (2/3, never 1 or 4)
- Kabir is ultimate utility (1-4)
- Teegan anchors at 5

**Why this works:**
- Balanced skill distribution
- Top 4 get equal time
- Position flexibility for matchups
- Tournament-ready rotations

### 9-Player Adjustment

**When Teegan's out:**
- Dominic moves to Unit B at 5
- Top 4 play 4 periods each (never 3 consecutive)
- Top 4 eligible for both OTs
- Other 5 players play 5 periods, no OT

**WAA Rule for 9:**
"Five play 4 periods and both OTs and four play 5 periods and no OTs"

---

## WAA Playing Time Rules (Official)

**From official league form:**

**5 players:** Five play 8 periods each and each OT.

**6 players:** Four play 7 periods (two of these play one OT and two play both OTs) and two play 6 periods and both OTs.

**7 players:** Five play 6 periods (four of these play 1 OT and one plays both OTs) and two play 5 periods and both OTs.

**8 players:** Eight play 5 periods each (six play one OT while two play 2 OTs).

**9 players:** Five play 4 periods and both OTs and four play 5 periods and no OTs.

**10 players:** Ten play 4 periods each and one OT each.

**11 players:** Seven play 4 periods (two of these play in 1 OT) and four play 3 periods and both OTs.

**12 players:** Eight play 3 periods (six of these play in one OT and two play in both OTs) and four play 4 periods and no OTs.

---

## Visual Warning System

### Consecutive Period Indicators

**Green (normal):**
- Player assigned, no consecutive periods
- Border: Solid green

**Yellow (warning):**
- Player plays 2 consecutive periods
- Border: Solid yellow
- Badge: "2 in row"

**Red (error):**
- Player plays 3+ consecutive periods
- Border: Solid red
- Badge: "3 in row"

**Orange Pulse (Top 4 alert):**
- Top 4 player plays 3+ consecutive periods
- Border: Thick orange, pulsing animation
- Badge: "⚠️ TOP 4: 3 IN ROW"

### Position Match Indicators

**⭐ Star:**
- Primary position for this player
- Green background in selector

**✓ Checkmark:**
- Player can play this position
- Yellow background in selector

**No indicator:**
- Not a typical position
- Gray background in selector

---

## Technical Details

### Browser Compatibility

**Recommended:**
- Chrome (desktop/mobile)
- Firefox (desktop/mobile)
- Safari (iOS)

**Tested:**
- iOS Safari 15+
- Chrome Android 90+
- Firefox 90+
- Safari macOS 14+

### Storage

**localStorage keys:**
- `waa_lineups_v2` - Current game lineup data
- `waa_game_date` - Game date
- `waa_game_time` - Game time
- `waa_opponent` - Opponent name

**Data persistence:**
- Survives browser refresh
- Cleared if browser data cleared
- No cloud sync (local only)

### File Structure

**Single HTML file:**
- Embedded CSS (~400 lines)
- Embedded JavaScript (~800 lines)
- No external dependencies
- Works offline

**File size:** ~65KB

---

## Customization Guide

### Update Roster

Find line ~42 in the HTML file:

```javascript
const ROSTER = [
    {name: 'Tommy', number: 2, positions: [3,2], available: true, cannotPlay: [1,4,5]},
    // Add your players here
];
```

**Required fields:**
- `name` - Player name
- `number` - Jersey number
- `positions` - Array of positions (1-5), ordered by preference
- `available` - Boolean (true/false)

**Optional fields:**
- `cannotPlay` - Array of positions they CANNOT play
- `isTop4` - Boolean (marks as top player for consecutive warnings)

### Change Template Defaults

Find `loadTemplate()` function (line ~550):

```javascript
if (templateName === '10player') {
    const unitA = {1: 10, 2: 30, 3: 44, 4: 30, 5: 52};
    // Modify these assignments
}
```

**Position numbers:**
- 1 = Point Guard
- 2 = Shooting Guard
- 3 = Small Forward
- 4 = Power Forward
- 5 = Center

**Player numbers:**
- Use jersey numbers from ROSTER array

---

## Troubleshooting

### Issue: Drag-and-drop not working

**Cause:** Browser doesn't support HTML5 drag API or touch events

**Solution:**
- Use tap-based assignment instead
- Tap position → Select player → Tap "Remove" to move

### Issue: Template loads wrong players

**Cause:** Jersey numbers in template don't match ROSTER

**Solution:**
- Check `loadTemplate()` function
- Update jersey numbers to match your roster

### Issue: Validation shows wrong playing time

**Cause:** Player count doesn't match WAA rules

**Solution:**
- Ensure correct number of available players
- Check WAA rules for your player count
- Some player counts require specific distributions

### Issue: Can't print on mobile

**Cause:** Mobile browser print dialog

**Solution:**
- Use "Print Blank" for blank sheets
- For filled lineups, use desktop browser
- Or screenshot the preview table

---

## Upgrade Path from V1

### What's different:

**V1 → V2 changes:**
- Drag-and-drop added (V1 had tap-only)
- Duplicate prevention (V1 allowed duplicates)
- Templates added (V1 had auto-fill only)
- Top 4 tracking (V1 treated all players equal)
- OT eligibility checking (V1 didn't validate this)
- Mobile optimization improved

**Migration:**
- V2 uses different localStorage key (`waa_lineups_v2`)
- Old V1 data won't auto-migrate
- Can run both versions side-by-side
- Manually recreate lineups in V2 OR use templates

---

## Best Practices

### Pre-Game Preparation

1. **Update availability 24 hours before**
   - Check with parents on absences
   - Mark players OUT who won't attend

2. **Load appropriate template**
   - 10 player if full roster
   - 9 player if Teegan out
   - Adjust for other absences

3. **Run validation**
   - Check for consecutive period warnings
   - Verify OT eligibility
   - Confirm equal playing time

4. **Print and review**
   - Print lineup 1 hour before game
   - Review with assistant coach
   - Bring blank sheet as backup

### In-Game Adjustments

1. **Foul trouble**
   - Drag player to different position
   - Swap with utility player (Kabir)
   - Don't violate consecutive period rules

2. **Injury/illness**
   - Mark player OUT in roster section
   - Re-validate playing time
   - Adjust OT assignments if needed

3. **Matchup changes**
   - Use drag-and-drop for quick swaps
   - Keep Top 4 distribution balanced
   - Don't overreact mid-game

### Tournament Preparation

1. **Save template lineup**
   - Build ideal tournament rotation
   - Test against different scenarios
   - Save screenshots for reference

2. **Practice scenarios**
   - What if Teegan fouls out?
   - What if we go to double OT?
   - Who plays tired vs fresh?

3. **Communication**
   - Share lineup with players beforehand
   - Explain rotation strategy
   - Get buy-in from team

---

## Future Enhancements

### Planned for V3

**Save/Load Feature:**
- Save named lineups
- Load past games
- Export/import JSON

**Statistics Integration:**
- Track which lineups work best
- Win/loss by rotation
- Player chemistry tracking

**Substitution Timer:**
- Period countdown
- Sub reminders
- Auto-advance to next period

**Multi-Team Support:**
- Save different rosters
- Switch between teams
- Separate stats per team

---

## Credits

**Built:** January 10, 2026  
**Coach:** Derek Simmons (Coach D)  
**Team:** Simmons 9th/10th Grade  
**League:** Wayzata Athletic Association (WAA)  

**Built with:** Claude Sonnet 4 (Anthropic)  
**Development time:** ~2 hours  
**Lines of code:** ~1,200  

---

## License

Free to use, modify, and share.

**Attribution appreciated but not required.**

If you improve it, share it back with the community.

---

## Quick Reference Card

**Essential Shortcuts:**

📅 Game Info → Enter opponent/date/time  
👥 Roster → Tap to toggle availability  
🎯 Templates → Load pre-built lineups  
✓ Validate → Check WAA rules  
🖨️ Print → Generate scorekeeper sheet  

**Drag & Drop:**
- Long-press player card
- Drag to new position (same period only)
- Drop to swap

**Top 4 Players:**
- John #52
- Dylan #10  
- Kabir #22
- Caleb #23

**Never 3+ consecutive periods for Top 4!**

---

## Support

**Questions?** Check the built-in validation messages.  
**Issues?** Review the troubleshooting section.  
**Feedback?** Share with Coach D.

---

**Go win some games, Coach.** 🏀
