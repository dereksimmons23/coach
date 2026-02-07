/**
 * BLAST Curriculum - Complete Drill Database
 * ~155 drills across 16 categories
 * Levels: Travel (Youth), Varsity (HS), Recruit (College-bound)
 */

const CATEGORIES = [
  { id: 1, name: "Spin Cycle", slug: "spin-cycle", icon: "🔄", description: "Pivot and spin moves to create separation", drillCount: 14 },
  { id: 2, name: "Finish", slug: "finish", icon: "🎯", description: "Rim finishes and layup variations", drillCount: 16 },
  { id: 3, name: "Handles", slug: "handles", icon: "🏀", description: "Stationary ball handling", drillCount: 25 },
  { id: 4, name: "Handles on the Move", slug: "handles-move", icon: "💨", description: "Ball handling while moving", drillCount: 18 },
  { id: 5, name: "The Box", slug: "the-box", icon: "📦", description: "Pattern drill combining multiple skills", drillCount: 2 },
  { id: 6, name: "Combos", slug: "combos", icon: "🔗", description: "Combination moves linking skills", drillCount: 9 },
  { id: 7, name: "Tennis Ball", slug: "tennis-ball", icon: "🎾", description: "Coordination with tennis ball", drillCount: 7 },
  { id: 8, name: "Tennis Ball + Basketball", slug: "tennis-basketball", icon: "🎾🏀", description: "Two-ball coordination", drillCount: 4 },
  { id: 9, name: "Drop 'N' Dimes", slug: "passing", icon: "🎪", description: "Passing drills", drillCount: 22 },
  { id: 10, name: "Pivot & Jab", slug: "pivot-jab", icon: "🦶", description: "Pivot and jab step footwork", drillCount: 10 },
  { id: 11, name: "Step Backs", slug: "step-backs", icon: "⬅️", description: "Step back moves for space", drillCount: 6 },
  { id: 12, name: "Step to the Side", slug: "side-step", icon: "↔️", description: "Side step shooting", drillCount: 8 },
  { id: 13, name: "Lock Up", slug: "lock-up", icon: "🔒", description: "Defensive drills", drillCount: 3 },
  { id: 14, name: "Pull the Trigger", slug: "shooting", icon: "🎯", description: "Shooting drills", drillCount: 6 },
  { id: 15, name: "Footwork", slug: "footwork", icon: "👟", description: "Fundamental footwork patterns", drillCount: 4 },
  { id: 16, name: "Ball Screen", slug: "ball-screen", icon: "🛡️", description: "Ball screen reads and execution", drillCount: 3 }
];

const LEVELS = {
  travel: { name: "Travel", color: "#22c55e", description: "Youth: 2nd-8th Grade", badge: "T" },
  varsity: { name: "Varsity", color: "#eab308", description: "High School: 9th-12th", badge: "V" },
  recruit: { name: "Recruit", color: "#dc2626", description: "College-Bound Advanced", badge: "R" }
};

const COACHING_CUES = [
  { cue: "Knees 90, butt down", meaning: "Proper athletic stance" },
  { cue: "LET IT BURN", meaning: "Embrace the conditioning" },
  { cue: "Shoulders over knees", meaning: "Stay low and balanced" },
  { cue: "Feet outside shoulders", meaning: "Wide, stable base" },
  { cue: "Right hand, right foot together", meaning: "Punch dribble synchronization" },
  { cue: "9 is the standard", meaning: "Form shooting swishes (Recruit level)" },
  { cue: "Lowest athlete wins", meaning: "Ball screen advantage" },
  { cue: "Turn the corner, get DOWNHILL", meaning: "Attack mode after moves" },
  { cue: "Hear the ball pop in your hands", meaning: "Catch with authority" },
  { cue: "Circle the ear", meaning: "Protect ball on gathers" },
  { cue: "Drop your shoulders downhill", meaning: "Attack posture" },
  { cue: "Big step, little step", meaning: "Rhythm on combo moves" },
  { cue: "Load and explode together", meaning: "Synchronized power" },
  { cue: "Put it in their shooting pocket", meaning: "Accurate passes" },
  { cue: "Cross VERY LOW", meaning: "Change levels on direction changes" }
];

const DRILLS = [
  // ===== CATEGORY 1: SPIN CYCLE =====
  {
    id: "spin-1",
    name: "Triple Threat Pivot - Right Foot (Forward & Reverse)",
    category: 1,
    levels: ["travel"],
    sequence: "2 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance. Lean aggressively in the direction you are spinning",
    modifications: ["Footwork only", "Pound basketball, tucking it like a running back as you pivot", "4 dribble sequence"],
    execution: [
      "Use the lines on the court",
      "Start with feet shoulder width apart, standing on the line",
      "Forward pivot while dribbling basketball",
      "Pound basketball while you forward pivot 180 degrees facing the opposite direction",
      "Reverse pivot back 180 degrees to where you started",
      "Feet and ball will always stop on the line"
    ]
  },
  {
    id: "spin-2",
    name: "Triple Threat Pivot - Left Foot (Forward & Reverse)",
    category: 1,
    levels: ["travel"],
    sequence: "2 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance. Lean aggressively in the direction you are spinning",
    modifications: ["Footwork only", "Pound basketball, tucking it like a football running back as you pivot", "4 dribble sequence"],
    execution: [
      "Use the lines on the court",
      "Start with feet shoulder width apart, standing on the line",
      "Forward pivot while dribbling basketball",
      "Pound basketball while you forward pivot 180 degrees facing the opposite direction",
      "Reverse pivot back 180 degrees to where you started",
      "Feet and ball will always stop on the line"
    ]
  },
  {
    id: "spin-3",
    name: "Pound, Reverse Pivot, Cross (Alternating)",
    category: 1,
    levels: ["travel"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance",
    modifications: ["Footwork only", "Pound basketball, tucking it like a football running back as you pivot", "12 dribble sequence"],
    execution: [
      "Use the lines on the court",
      "Start with feet shoulder width apart, standing on the line",
      "Reverse pivot while dribbling basketball",
      "Pound basketball while you reverse pivot 180 degrees facing the opposite direction",
      "Cross basketball in front",
      "Reverse pivot another 180 degrees continuing down the line",
      "You will steadily move from right to left (or left to right depending on start)",
      "Feet and ball will always stop on the line"
    ]
  },
  {
    id: "spin-4",
    name: "Pound, Forward Pivot, Cross (Alternating)",
    category: 1,
    levels: ["travel"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance",
    modifications: ["Footwork only", "12 dribble sequence"],
    execution: [
      "Use the lines on the court",
      "Start with feet shoulder width apart, standing on the line",
      "Forward pivot while dribbling basketball",
      "Pound basketball while you forward pivot 180 degrees facing the opposite direction",
      "Cross basketball in front",
      "Forward pivot another 180 degrees continuing down the line"
    ]
  },
  {
    id: "spin-5",
    name: "Pound Hop, Land Left-Right, Spin Right, Punch",
    category: 1,
    levels: ["varsity"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["6 dribble sequence", "3 dribble sequence"],
    execution: [
      "1st dribble: right hand pound",
      "Mini jump stop with feet wide (outside shoulders)",
      "2nd dribble: spin forward 360 degrees pivoting on the balls of your feet",
      "3rd dribble: punch - right hand and right foot together",
      "4th dribble: left foot step, cross to left hand"
    ]
  },
  {
    id: "spin-6",
    name: "Pound Hop, Land Right-Left, Spin Left, Punch",
    category: 1,
    levels: ["varsity"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["6 dribble sequence", "3 dribble sequence"],
    execution: [
      "1st dribble: left hand pound",
      "Mini jump stop with feet wide (outside shoulders)",
      "2nd dribble: spin forward 360 degrees pivoting on the balls of your feet",
      "3rd dribble: punch - left hand and left foot together",
      "4th dribble: right foot step, cross to right hand"
    ]
  },
  {
    id: "spin-7",
    name: "Pound Hop, Behind Back, Spin Right, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "3 dribbles",
    balance: "Knees 90 degrees, butt down, shoulders back",
    modifications: ["Footwork only", "Add finish at rim"],
    execution: [
      "1st dribble: right hand behind the back to left hand",
      "2nd dribble: immediate spin back (reverse pivot)",
      "3rd dribble: right hand attacks downhill",
      "The behind-back creates momentum for the spin"
    ]
  },
  {
    id: "spin-8",
    name: "Pound Hop, Behind Back, Spin Left, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "3 dribbles",
    balance: "Knees 90 degrees, butt down, shoulders back",
    modifications: ["Footwork only", "Add finish at rim"],
    execution: [
      "1st dribble: left hand behind the back to right hand",
      "2nd dribble: immediate spin back (reverse pivot)",
      "3rd dribble: left hand attacks downhill",
      "The behind-back creates momentum for the spin"
    ]
  },
  {
    id: "spin-9",
    name: "Pound Hop, Between Legs, Spin Right, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "3 dribbles",
    balance: "Knees 90 degrees, butt down",
    modifications: ["Footwork only", "Add finish"],
    execution: [
      "1st dribble: right hand between legs to left hand",
      "2nd dribble: spin back on reverse pivot",
      "3rd dribble: right hand attacks",
      "Between-legs sets up the defender for spin"
    ]
  },
  {
    id: "spin-10",
    name: "Pound Hop, Between Legs, Spin Left, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "3 dribbles",
    balance: "Knees 90 degrees, butt down",
    modifications: ["Footwork only", "Add finish"],
    execution: [
      "1st dribble: left hand between legs to right hand",
      "2nd dribble: spin back on reverse pivot",
      "3rd dribble: left hand attacks",
      "Between-legs sets up the defender for spin"
    ]
  },
  {
    id: "spin-11",
    name: "Pound Hop, Half Spin/Reverse Pivot, Shimmy, Explode Right, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "4 dribbles",
    balance: "Quick feet, stay low through entire sequence",
    modifications: ["Slow motion first", "Add finish"],
    execution: [
      "1st dribble: right hand, start spin motion",
      "2nd dribble: half spin (90 degrees only), shimmy hesitation",
      "3rd dribble: complete direction change",
      "4th dribble: attack opposite direction",
      "The shimmy sells the full spin"
    ]
  },
  {
    id: "spin-12",
    name: "Pound Hop, Half Spin/Reverse Pivot, Shimmy, Explode Left, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "4 dribbles",
    balance: "Quick feet, stay low through entire sequence",
    modifications: ["Slow motion first", "Add finish"],
    execution: [
      "1st dribble: left hand, start spin motion",
      "2nd dribble: half spin (90 degrees only), shimmy hesitation",
      "3rd dribble: complete direction change",
      "4th dribble: attack opposite direction",
      "The shimmy sells the full spin"
    ]
  },
  {
    id: "spin-13",
    name: "Pound Hop, Half Spin/Reverse Pivot Left, Forward Pivot, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance. Lean aggressively in the direction you are spinning",
    modifications: ["Footwork only", "4 dribbles: pound, pivot-spin, pivot-spin back, punch (no dribble hop to start)", "2 dribble gather: pound hop, pound gather, tuck ball under right arm on spin"],
    execution: [
      "Start in triple threat",
      "Right hand 1st dribble, left foot step hop",
      "Right hand 2nd dribble - land left-right",
      "Left foot reverse pivot spin into 3rd dribble",
      "Right hand 4th dribble",
      "Forward pivot, spin into punch dribble",
      "Right hand and right foot together"
    ]
  },
  {
    id: "spin-14",
    name: "Pound Hop, Half Spin/Reverse Pivot Right, Forward Pivot, Punch",
    category: 1,
    levels: ["recruit"],
    sequence: "4 dribbles",
    balance: "Knees 90 degrees, butt down, pivot on balls of feet, engage toes for balance. Lean aggressively in the direction you are spinning",
    modifications: ["Footwork only", "4 dribbles: pound, pivot-spin, pivot-spin back, punch (no dribble hop to start)", "2 dribble gather: pound hop, pound gather, tuck ball under left arm on spin"],
    execution: [
      "Start in triple threat",
      "Left hand 1st dribble, right foot step hop",
      "Left hand 2nd dribble - land right-left",
      "Right foot reverse pivot spin into 3rd dribble",
      "Left hand 4th dribble",
      "Forward pivot, spin into punch dribble",
      "Left hand and left foot together"
    ]
  },

  // ===== CATEGORY 2: FINISH =====
  {
    id: "finish-1",
    name: "Basic Layup - Right Hand",
    category: 2,
    levels: ["travel"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only (no ball)", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat",
      "Right hand dribble, left foot step",
      "Gather",
      "Right step, left step",
      "Jump off left foot",
      "Finish right hand"
    ]
  },
  {
    id: "finish-2",
    name: "Basic Layup - Left Hand",
    category: 2,
    levels: ["travel"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only (no ball)", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat",
      "Left hand dribble, right foot step",
      "Gather",
      "Left step, right step",
      "Jump off right foot",
      "Finish left hand"
    ]
  },
  {
    id: "finish-3",
    name: "Scoop - Right Hand",
    category: 2,
    levels: ["travel"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat",
      "Right hand dribble, left foot step",
      "Gather",
      "Right step, left step",
      "Jump off left foot",
      "Scoop finish with right hand (underhand motion)"
    ]
  },
  {
    id: "finish-4",
    name: "Scoop - Left Hand",
    category: 2,
    levels: ["travel"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat",
      "Left hand dribble, right foot step",
      "Gather",
      "Left step, right step",
      "Jump off right foot",
      "Scoop finish with left hand (underhand motion)"
    ]
  },
  {
    id: "finish-5",
    name: "2-Ball Scoop - Left Hand",
    category: 2,
    levels: ["travel", "varsity", "recruit"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat with one ball, partner/coach holds second ball",
      "Left hand dribble, right foot step",
      "Catch second ball and gather",
      "Left step, right step",
      "Jump off right foot",
      "Scoop finish left hand"
    ],
    tip: "Forces focus on footwork and timing. Can't rely on dribble to set up finish."
  },
  {
    id: "finish-6",
    name: "2-Ball Scoop - Right Hand",
    category: 2,
    levels: ["travel", "varsity", "recruit"],
    sequence: "1 dribble from 3-point line",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "2 steps, no dribble", "1 dribble from elbow"],
    execution: [
      "Start in triple threat with one ball, partner/coach holds second ball",
      "Right hand dribble, left foot step",
      "Catch second ball and gather",
      "Right step, left step",
      "Jump off left foot",
      "Scoop finish right hand"
    ]
  },
  {
    id: "finish-7",
    name: "Inside Hand Finish - Left Hand",
    category: 2,
    levels: ["varsity"],
    sequence: "3 dribbles from right wing (pound, behind, pound advance)",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "1 dribble, pound hop, land right-left, into finish", "2 straight downhill dribbles from wing into finish"],
    execution: [
      "Start in triple threat on right wing",
      "Left hand rip across body, pound - angle toward elbow with right foot step",
      "Mini jump stop with feet wide (outside shoulders)",
      "Load and explode off left foot",
      "Left hand behind the back",
      "Right hand downhill dribble",
      "Gather, landing right-left",
      "Lean and dip left shoulder",
      "Finish left hand on inside (between you and defender)"
    ]
  },
  {
    id: "finish-8",
    name: "Inside Hand Finish - Right Hand",
    category: 2,
    levels: ["varsity"],
    sequence: "3 dribbles from left wing (pound, behind, pound advance)",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "1 dribble, pound hop, land left-right, into finish", "2 straight downhill dribbles from wing into finish"],
    execution: [
      "Start in triple threat on left wing",
      "Right hand rip across body, pound - angle toward elbow with left foot step",
      "Mini jump stop with feet wide (outside shoulders)",
      "Load and explode off right foot",
      "Right hand behind the back",
      "Left hand downhill dribble",
      "Gather, landing left-right",
      "Lean and dip right shoulder",
      "Finish right hand on inside (between you and defender)"
    ]
  },
  {
    id: "finish-9",
    name: "Pro Hop - Left Hand (Off 2 Feet)",
    category: 2,
    levels: ["varsity"],
    sequence: "4 dribbles from top of key (pound, between, pound downhill, pro hop finish)",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "1 left hand dribble, step out with pro hop", "2 straight downhill dribbles from wing into finish"],
    execution: [
      "Start in triple threat at top of key",
      "Left hand dribble, right foot step",
      "Pro hop off right foot",
      "Circle the left ear with the basketball (protect the ball)",
      "Land on 2 feet",
      "Jump off 2 feet",
      "Finish left hand at the rim"
    ]
  },
  {
    id: "finish-10",
    name: "Pro Hop - Right Hand (Off 2 Feet)",
    category: 2,
    levels: ["varsity"],
    sequence: "4 dribbles from top of key (pound, between, pound downhill, pro hop finish)",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "1 right hand dribble, step out with pro hop", "2 straight downhill dribbles from wing into finish"],
    execution: [
      "Start in triple threat at top of key",
      "Right hand dribble, left foot step",
      "Pro hop off left foot",
      "Circle the right ear with the basketball (protect the ball)",
      "Land on 2 feet",
      "Jump off 2 feet",
      "Finish right hand at the rim"
    ]
  },
  {
    id: "finish-11",
    name: "Euro Step - Left Hand",
    category: 2,
    levels: ["varsity", "recruit"],
    sequence: "2 dribbles from 3-point line / left foot, right foot, left hand finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "No dribbles, 2 steps, hop left-right, finish left hand", "1 dribble into euro"],
    execution: [
      "Start in triple threat",
      "Left hand first dribble, right foot step",
      "Second dribble - gather and hop onto left foot",
      "Hop back onto right foot (this is the 'euro' - changing direction in the air)",
      "Finish left hand"
    ],
    tip: "The second step changes your angle to evade the defender."
  },
  {
    id: "finish-12",
    name: "Euro Step - Right Hand",
    category: 2,
    levels: ["varsity", "recruit"],
    sequence: "2 dribbles from 3-point line / right foot, left foot, right hand finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "No dribbles, 2 steps, hop right-left, finish right hand", "1 dribble into euro"],
    execution: [
      "Start in triple threat",
      "Right hand first dribble, left foot step",
      "Second dribble - gather and hop onto right foot",
      "Hop back onto left foot (this is the 'euro' - changing direction in the air)",
      "Finish right hand"
    ]
  },
  {
    id: "finish-13",
    name: "Reverse - Left Hand (Off 2 Feet)",
    category: 2,
    levels: ["varsity"],
    sequence: "3 dribbles from 3-point line below free throw line extended / pro hop, left hand finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "Toss ball to yourself with backspin from above left block, hop to ball, land on 2 feet, jump off 2, reverse finish", "1 dribble, pro hop into reverse finish"],
    execution: [
      "Start in triple threat",
      "Left hand first dribble, right foot step",
      "Left hand second dribble downhill",
      "Left hand third dribble - pro hop gather, circle left ear",
      "After landing, explode back into air off both feet",
      "Finish with left hand on the RIGHT side of the basket (reverse)"
    ]
  },
  {
    id: "finish-14",
    name: "Reverse - Right Hand (Off 2 Feet)",
    category: 2,
    levels: ["varsity"],
    sequence: "3 dribbles from 3-point line below free throw line extended / pro hop, right hand finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "Toss ball to yourself with backspin from above right block, hop to ball, land on 2 feet, jump off 2, reverse finish", "1 dribble, pro hop into reverse finish"],
    execution: [
      "Start in triple threat",
      "Right hand first dribble, left foot step",
      "Right hand second dribble downhill",
      "Right hand third dribble - pro hop gather, circle right ear",
      "After landing, explode back into air off both feet",
      "Finish with right hand on the LEFT side of the basket (reverse)"
    ]
  },
  {
    id: "finish-15",
    name: "Outside Foot Plant - Left Hand (Off 2 Feet)",
    category: 2,
    levels: ["recruit"],
    sequence: "3 dribbles from 3-point line left elbow extended / pro hop, outside foot plant, finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "Toss ball to yourself with backspin from left elbow, hop to ball landing left-right, explode off left/right foot for left hand finish", "1 dribble into left hand finish"],
    execution: [
      "Start in triple threat",
      "Right hand first dribble, left foot step",
      "Right hand second dribble downhill",
      "Right hand third dribble - pro hop gather, circle right ear with basketball",
      "Land left foot, then right foot",
      "Jump off 2 feet with left exploding a split second before right foot",
      "Finish left hand"
    ],
    tip: "The staggered plant (left slightly before right) creates power and protects against shot blockers."
  },
  {
    id: "finish-16",
    name: "Outside Foot Plant - Right Hand (Off 2 Feet)",
    category: 2,
    levels: ["recruit"],
    sequence: "3 dribbles from 3-point line right elbow extended / pro hop, outside foot plant, finish",
    balance: "Feet shoulder width as you run, drop shoulders low driving downhill, be ready for contact",
    modifications: ["Footwork only", "Toss ball to yourself with backspin from right elbow, hop to ball landing right-left, explode off right/left foot for right hand finish", "1 dribble into right hand finish"],
    execution: [
      "Start in triple threat",
      "Left hand first dribble, right foot step",
      "Left hand second dribble downhill",
      "Left hand third dribble - pro hop gather, circle left ear with basketball",
      "Land right foot, then left foot",
      "Jump off 2 feet with right exploding a split second before left foot",
      "Finish right hand"
    ]
  },

  // ===== CATEGORY 3: HANDLES (Stationary) =====
  {
    id: "handles-1",
    name: "Ankle Dribble (Training Aid: Drum Pads & Sticks)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["5 reps", "7 reps", "10 reps"],
    execution: [
      "Feet outside shoulders",
      "Butt at 90 degrees as if in an imaginary chair",
      "Shoulders back, chest forward",
      "Head up",
      "Hand without ball at your side with elbow bent",
      "DO NOT rest hand on knee or thigh",
      "LET IT BURN"
    ]
  },
  {
    id: "handles-2",
    name: "Pound - Waist High (Left & Right Hand)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "Feet outside shoulders",
      "Butt at 90 degrees as if in an imaginary chair",
      "Shoulders back, chest forward",
      "Head up",
      "Hand without ball at your side with elbow bent",
      "DO NOT rest hand on knee or thigh",
      "Pound to waist height",
      "LET IT BURN"
    ]
  },
  {
    id: "handles-3",
    name: "Pound - Shoulder High (Left & Right Hand)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "Feet outside shoulders",
      "Butt at 90 degrees as if in an imaginary chair",
      "Shoulders back, chest forward",
      "Head up",
      "Hand without ball at your side with elbow bent",
      "Pound to shoulder height",
      "LET IT BURN"
    ]
  },
  {
    id: "handles-4",
    name: "Cross - Alternating",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["3 pound dribbles, then cross / repeat", "2 pound dribbles, then cross / repeat", "1 pound dribble, then cross / repeat"],
    execution: [
      "Swing cross WIDE, letting it float out away from your body",
      "Elbow almost locks out to straight",
      "Shift your weight to sway in the direction you are crossing",
      "Remember: dribbling is about RHYTHM"
    ]
  },
  {
    id: "handles-5",
    name: "Pound Behind - Alternating",
    category: 3,
    levels: ["travel", "varsity", "recruit"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Pound behind back off wall and catch (right and left hand)", "3 pounds, then behind back", "2 pounds, then behind back"],
    execution: [
      "Pound dribble hard",
      "Keep the height of your dribble below your butt",
      "Cross behind back",
      "Remember: the cross should be UNDER YOUR BUTT",
      "Repeat on other side"
    ]
  },
  {
    id: "handles-6",
    name: "Pound Between Behind - Left Hand",
    category: 3,
    levels: ["travel"],
    sequence: "4 dribbles",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["6 dribble sequence"],
    execution: [
      "1st dribble: pound left hand",
      "2nd dribble: left hand between legs",
      "3rd dribble: right hand behind back underneath butt",
      "4th dribble: left hand cross"
    ]
  },
  {
    id: "handles-7",
    name: "Pound Between Behind - Right Hand",
    category: 3,
    levels: ["travel"],
    sequence: "4 dribbles",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["6 dribble sequence"],
    execution: [
      "1st dribble: pound right hand",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand behind back underneath butt",
      "4th dribble: right hand cross"
    ]
  },
  {
    id: "handles-8",
    name: "Between Cross Back - Right Hand (Step Out Diagonally)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Footwork only", "6 dribble sequence (between on 3, cross on 6)"],
    execution: [
      "1st dribble: right hand, stepping out with left leg at the same time going between leg",
      "2nd dribble: left hand cross back to right hand as you step left foot back under left shoulder"
    ]
  },
  {
    id: "handles-9",
    name: "Between Cross Back - Left Hand (Step Out Diagonally)",
    category: 3,
    levels: ["travel"],
    sequence: "2 dribble / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Footwork only", "6 dribble sequence (between on 3, cross on 6)"],
    execution: [
      "1st dribble: left hand, stepping out with right leg at the same time going between leg",
      "2nd dribble: right hand cross back to left hand as you step right foot back under right shoulder"
    ]
  },
  {
    id: "handles-10",
    name: "Front Cross (Left & Right Hand)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Continuous dribbling, moving ball from left to right", "2 pound dribbles into front cross, then 2 pound dribbles front cross back", "1 pound dribble into front cross, then 1 pound dribble front cross back"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound basketball and sway shoulders/torso in direction ball is moving",
      "When you change directions with front cross, your hand will always be tilted toward outside of body",
      "THIS IS NOT AN INSIDE OUT DRIBBLE"
    ]
  },
  {
    id: "handles-11",
    name: "Front Cross - Alternating 3's",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["1, 2, 3, front cross and catch / repeat other hand"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Start with front cross going toward center of body",
      "3 front crosses",
      "On the third cross, switch hands",
      "Execute 3 more front crosses starting toward center of body",
      "Sway shoulders/torso in direction ball is moving",
      "THIS IS NOT AN INSIDE OUT DRIBBLE"
    ]
  },
  {
    id: "handles-12",
    name: "Side Cross (Left & Right Hand)",
    category: 3,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Continuous dribble moving ball from front to back of body", "Stand facing wall, dribble ball off wall with palm facing wall, catch and repeat"],
    execution: [
      "Keep bicep close to rib cage",
      "Dribble with an initial pound dribble",
      "Pull dribble backwards on side of body toward back wall (palm facing back wall)",
      "Rotate wrist so palm faces front wall",
      "Push dribble on side of body back toward front wall"
    ]
  },
  {
    id: "handles-13",
    name: "L Dribble (Left & Right Hand)",
    category: 3,
    levels: ["travel"],
    sequence: "2 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["4 dribble rhythm"],
    execution: [
      "Front cross dribble to outside of leg",
      "Side dribble with palm facing back wall, clearing your body",
      "Rotate wrist so palm faces front wall",
      "Side dribble clearing front of body",
      "Front cross dribble to complete sequence"
    ]
  },
  {
    id: "handles-14",
    name: "Inside Out Dribble - Left Hand",
    category: 3,
    levels: ["travel", "varsity", "recruit"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Tennis ball inside out dribble catch", "3 dribbles inside out / repeat", "1 dribble inside out / repeat"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound the dribble",
      "As it bounces back up, tilt left hand pinky down",
      "Push basketball toward center of chest",
      "Tilt left hand thumb down toward right arm",
      "Push basketball away from chest back to outside of body",
      "ALL OF THIS HAPPENS WITHIN ONE DRIBBLE"
    ]
  },
  {
    id: "handles-15",
    name: "Inside Out Dribble - Right Hand",
    category: 3,
    levels: ["travel", "varsity", "recruit"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Tennis ball inside out dribble catch", "3 dribbles inside out / repeat", "1 dribble inside out / repeat"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound the dribble",
      "As it bounces back up, tilt right hand pinky down",
      "Push basketball toward center of chest",
      "Tilt right hand thumb down toward left arm",
      "Push basketball away from chest back to outside of body",
      "ALL OF THIS HAPPENS WITHIN ONE DRIBBLE"
    ]
  },
  {
    id: "handles-16",
    name: "Between Legs, Back Through, Cross x3 (Alternating)",
    category: 3,
    levels: ["travel"],
    sequence: "10 dribble sequence (5 each side) / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Only do one side at a time, pause, repeat sequence"],
    execution: [
      "1st dribble: right hand between legs",
      "2nd dribble: left hand back through legs",
      "3rd-5th dribble: right hand 3 crossover dribbles ending in left hand",
      "Repeat process on other side"
    ]
  },
  {
    id: "handles-17",
    name: "Low Hand / High Hand (2 Balls)",
    category: 3,
    levels: ["travel", "varsity", "recruit"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["12/4 rhythm (low hand dribbles 12 times while high hand dribbles 4 together)", "Low hand continuous dribble, high hand 4 dribbles then catch"],
    execution: [
      "Low hand dribbles below knee",
      "High hand dribbles waist high",
      "Whatever your low hand is, make sure you are dipping that shoulder",
      "High hand: make sure hand and finger pads stay on front side of ball"
    ]
  },
  {
    id: "handles-18",
    name: "2 Steps Forward, 2 Steps Back (Both Sides)",
    category: 3,
    levels: ["travel", "varsity", "recruit"],
    sequence: "10 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, FEET WIDE APART, shoulders back, back straight",
    modifications: ["2 dribbles in between each sequence", "1 dribble in between each sequence"],
    execution: [
      "1st dribble: left foot forward step, right hand between legs",
      "2nd dribble: right foot forward step, left hand behind back",
      "3rd dribble: left foot step back, right hand back through",
      "4th dribble: right foot step back, left hand crossover",
      "5th dribble: right hand CROSSOVER AGAIN (brings you to other side)",
      "6th-10th: repeat sequence starting with right foot forward"
    ]
  },
  {
    id: "handles-19",
    name: "Cross, Cross, Between (Alternating - Step Out Diagonally)",
    category: 3,
    levels: ["varsity"],
    sequence: "7 dribble / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "1st dribble: left hand cross to right hand",
      "2nd dribble: right hand cross back to left",
      "3rd dribble: left hand between legs",
      "4th dribble: right hand cross in front",
      "5th dribble: left hand cross",
      "6th dribble: right hand between legs",
      "7th dribble: left hand cross in front back to right hand",
      "Repeat sequence"
    ]
  },
  {
    id: "handles-20",
    name: "Side Cross - 2 Balls (Left & Right Hand)",
    category: 3,
    levels: ["varsity"],
    sequence: "2 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Continuous dribble moving basketballs from front to back of body", "Stand facing wall, dribble both balls off wall, catch and repeat"],
    execution: [
      "Keep both biceps close to rib cage",
      "Dribble with an initial pound dribble",
      "Pull dribbles backwards on sides of body toward back wall (palms facing back)",
      "Rotate wrists so palms face front wall",
      "Push dribbles on sides of body back toward front wall"
    ]
  },
  {
    id: "handles-21",
    name: "3 Dribbles: Front Cross, Side Cross, Back Through Between",
    category: 3,
    levels: ["varsity"],
    sequence: "3 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["6/3 rhythm", "9/3 rhythm"],
    execution: [
      "Front cross dribble to outside of leg",
      "Side dribble with palm facing back wall, clearing body",
      "Diagonal dribble back through legs, catching dribble with same hand",
      "Repeat sequence"
    ]
  },
  {
    id: "handles-22",
    name: "L Dribble - 2 Balls",
    category: 3,
    levels: ["varsity"],
    sequence: "2 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Continuous dribbling: right hand from right knee to backside of body, left hand from outside left knee to right knee. Both hands chase each other but never catch."],
    execution: [
      "Left hand front cross dribble - bring across body from outside left knee to edge of right knee",
      "At same time: right hand side dribble - bring from front edge of right knee to behind body",
      "SWITCH HANDS to execute other side"
    ]
  },
  {
    id: "handles-23",
    name: "L Dribble - Alternating",
    category: 3,
    levels: ["varsity"],
    sequence: "8 dribble sequence / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["16 dribble sequence, switching hands and sides after 8 dribbles"],
    execution: [
      "Right hand 1st dribble - push dribble out past right knee",
      "2nd dribble - pull straight back with palm facing back wall",
      "Rotate wrist with palm facing front wall",
      "3rd dribble - push forward past right knee",
      "4th dribble - straight front crossover to left hand",
      "Repeat sequence with left hand (5th-8th dribble)"
    ]
  },
  {
    id: "handles-24",
    name: "Pound Between Behind, Catch Second Ball, Pass",
    category: 3,
    levels: ["varsity"],
    sequence: "4 dribble sequence / 30 reps",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "1st dribble: left hand pound straight down",
      "2nd dribble: pound between legs",
      "3rd dribble: right hand pound behind back (under butt)",
      "4th dribble: left hand pound straight down",
      "Right hand: catch second ball and pound straight down",
      "Snap back pass with right hand",
      "Cross with left hand",
      "Repeat sequence on other side"
    ]
  },
  {
    id: "handles-25",
    name: "Pound Between Behind, Catch Second Ball, Pass Back, Cross (Alternating)",
    category: 3,
    levels: ["varsity"],
    sequence: "4 dribble sequence / 30 reps",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["2 extra dribbles before pass back with off hand on 6 count", "Catch with off hand, pass back without dribbling"],
    execution: [
      "1st dribble: left hand pound straight down",
      "2nd dribble: pound between legs",
      "3rd dribble: right hand pound behind back (under butt)",
      "4th dribble: left hand pound straight down",
      "Right hand: catch second ball and pound straight down",
      "Snap back pass with right hand",
      "Cross with left hand",
      "Repeat sequence on other side"
    ]
  },

  // ===== CATEGORY 4: HANDLES ON THE MOVE =====
  {
    id: "move-1",
    name: "Speed Dribble - Left Hand",
    category: 4,
    levels: ["travel"],
    sequence: "6 dribbles for full court layup",
    balance: "Under control, off hand bent with bicep close to ribs",
    modifications: [],
    execution: [
      "Find your rhythm",
      "Push ball out in front",
      "Cover ground with each dribble",
      "Maintain control at top speed"
    ]
  },
  {
    id: "move-2",
    name: "Speed Dribble - Right Hand",
    category: 4,
    levels: ["travel"],
    sequence: "6 dribbles for full court layup",
    balance: "Under control, off hand bent with bicep close to ribs",
    modifications: [],
    execution: [
      "Find your rhythm",
      "Push ball out in front",
      "Cover ground with each dribble",
      "Maintain control at top speed"
    ]
  },
  {
    id: "move-3",
    name: "Front Cross - Left Hand (In Motion)",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["2 dribbles on each side", "One continuous dribble from outside left foot to outside right foot"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound basketball and sway shoulders/torso in direction ball is moving",
      "When you change directions with front cross, hand always tilted toward outside of body",
      "THIS IS NOT AN INSIDE OUT DRIBBLE"
    ]
  },
  {
    id: "move-4",
    name: "Front Cross - Right Hand (In Motion)",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["2 dribbles on each side", "One continuous dribble from outside left foot to outside right foot"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound basketball and sway shoulders/torso in direction ball is moving",
      "When you change directions with front cross, hand always tilted toward outside of body",
      "THIS IS NOT AN INSIDE OUT DRIBBLE"
    ]
  },
  {
    id: "move-5",
    name: "Front Cross Alternating (In Motion)",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: [],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Start with front cross going toward center of body",
      "3 front crosses",
      "On third cross, switch hands and execute 3 more front crosses",
      "Sway shoulders/torso in direction ball is moving",
      "THIS IS NOT AN INSIDE OUT DRIBBLE"
    ]
  },
  {
    id: "move-6",
    name: "Between Cross Back - Right Hand (In Motion)",
    category: 4,
    levels: ["travel"],
    sequence: "45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Footwork only", "6 dribble sequence (between on 3, cross on 6)"],
    execution: [
      "1st dribble: right hand, stepping out with left leg at same time going between leg",
      "2nd dribble: left hand cross back to right hand",
      "Repeat sequence"
    ]
  },
  {
    id: "move-7",
    name: "Between Cross Back - Left Hand (In Motion)",
    category: 4,
    levels: ["travel"],
    sequence: "2 dribble / 45 seconds / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["Footwork only", "6 dribble sequence (between on 3, cross on 6)"],
    execution: [
      "1st dribble: left hand, stepping out with right leg at same time going between leg",
      "2nd dribble: right hand cross back to left hand",
      "Repeat sequence"
    ]
  },
  {
    id: "move-8",
    name: "Retreat Dribble (Right & Left Hand)",
    category: 4,
    levels: ["travel", "varsity", "recruit"],
    sequence: "6 dribble sequence",
    balance: "Wide base, looking over forward shoulder",
    modifications: [],
    execution: [
      "Left hand retreat dribbles",
      "Load and push off right foot with each retreat",
      "Think of this as a defensive shuffle with your dribble",
      "Look over your right shoulder as you retreat backwards with left hand",
      "Basketball and right foot hit the ground at the same time",
      "Load and explode together"
    ]
  },
  {
    id: "move-9",
    name: "Pound Wrap Alternating",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Stationary: right hand pound, wrap right hand", "Stationary: left hand pound, wrap left hand"],
    execution: [
      "1st dribble: pound left hand between",
      "2nd dribble: right hand wrap behind back",
      "Footwork on wrap: push off right leg",
      "Before right leg touches left leg, left leg pushes forward and out wide"
    ]
  },
  {
    id: "move-10",
    name: "Pound Behind, Drop Cross Underneath",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Pound behind back off wall and catch (right and left hand)", "3 pounds then behind back", "2 pounds then behind back"],
    execution: [
      "Pound dribble hard",
      "Keep height of dribble below your butt",
      "Cross behind back",
      "Remember: cross should be UNDER YOUR BUTT",
      "Repeat on other side"
    ]
  },
  {
    id: "move-11",
    name: "Pound Between Alternating",
    category: 4,
    levels: ["travel"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand, left foot step, pound between",
      "Mini jump stop",
      "While in the air, rotate hips in direction you are going",
      "Repeat process on other side",
      "Keep dribble around knee height"
    ]
  },
  {
    id: "move-12",
    name: "Inside Out - Left Hand (In Motion)",
    category: 4,
    levels: ["travel", "varsity", "recruit"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Tennis ball inside out dribble catch", "3 dribbles inside out / repeat", "1 dribble inside out / repeat"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound the dribble",
      "As it bounces back up, tilt left hand pinky down",
      "Push basketball toward center of chest",
      "Tilt left hand thumb down toward right arm",
      "Push basketball away from chest back to outside of body",
      "ALL OF THIS HAPPENS WITHIN ONE DRIBBLE"
    ]
  },
  {
    id: "move-13",
    name: "Inside Out - Right Hand (In Motion)",
    category: 4,
    levels: ["travel", "varsity", "recruit"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Tennis ball inside out dribble catch", "3 dribbles inside out / repeat", "1 dribble inside out / repeat"],
    execution: [
      "Keep inside of bicep close to rib cage",
      "Pound the dribble",
      "As it bounces back up, tilt right hand pinky down",
      "Push basketball toward center of chest",
      "Tilt right hand thumb down toward left arm",
      "Push basketball away from chest back to outside of body",
      "ALL OF THIS HAPPENS WITHIN ONE DRIBBLE"
    ]
  },
  {
    id: "move-14",
    name: "Punch Drag Alternating",
    category: 4,
    levels: ["varsity", "recruit"],
    sequence: "In motion / 5 dribble sequence",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Step out with one dribble right hand, right foot STOP TOGETHER", "Step out with one dribble left hand, left foot STOP TOGETHER"],
    execution: [
      "1st dribble: right hand, left foot step",
      "2nd dribble: right hand, right foot step",
      "3rd dribble: cross",
      "4th dribble: left hand, right foot step",
      "5th dribble: left hand, left foot step"
    ]
  },
  {
    id: "move-15",
    name: "Pound Between, Wrap Right Hand (Footwork)",
    category: 4,
    levels: ["recruit"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Stationary: right hand pound, wrap right hand"],
    execution: [
      "1st dribble: pound left hand between",
      "2nd dribble: right hand wrap behind back",
      "Footwork on wrap: push off right leg",
      "Before right leg touches left leg, left leg pushes forward and out wide"
    ]
  },
  {
    id: "move-16",
    name: "Pound Between, Wrap Left Hand (Footwork)",
    category: 4,
    levels: ["recruit"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Stationary: left hand pound, left hand wrap"],
    execution: [
      "1st dribble: pound right hand between",
      "2nd dribble: left hand wrap behind back",
      "Footwork on wrap: push off left leg",
      "Before left leg touches right leg, right leg pushes forward and out wide"
    ]
  },
  {
    id: "move-17",
    name: "Drop Cross, Stepping Right & Left",
    category: 4,
    levels: ["recruit"],
    sequence: "In motion",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: ["Stationary", "One dribble into drop cross"],
    execution: [
      "1st dribble: right hand cross to left hand as you step out diagonally with right foot",
      "2nd dribble: left hand - explode off right foot pushing HARD to the left",
      "Get downhill",
      "Repeat sequence on other side"
    ]
  },
  {
    id: "move-18",
    name: "Underdrag Alternating",
    category: 4,
    levels: ["recruit"],
    sequence: "In motion / 4 dribble sequence",
    balance: "Feet outside shoulders, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand, left foot step",
      "2nd dribble: right hand drag dribble underneath right leg",
      "3rd dribble: left hand, right foot step",
      "4th dribble: left hand drag dribble underneath left leg"
    ]
  },

  // ===== CATEGORY 5: THE BOX =====
  {
    id: "box-1",
    name: "Retreat Dribble (The Box)",
    category: 5,
    levels: ["travel", "varsity", "recruit"],
    sequence: "12 dribble sequence",
    balance: "Wide base, changing levels and speed",
    modifications: [],
    execution: [
      "1st dribble: right hand, left foot step",
      "2nd dribble: right hand, mini jump stop into reverse pivot behind the back",
      "3rd dribble: left hand retreat dribble - load and push off right foot",
      "4th dribble: left hand retreat dribble - load and push off right foot. Look over right shoulder as you retreat backwards with left hand",
      "Mini hop with both feet off ground to square shoulders with opposite baseline",
      "5th dribble: left hand - change level and cross VERY LOW",
      "6th dribble: right hand between legs",
      "7th-12th: Repeat sequence on the other side"
    ],
    tip: "The footwork pattern traces a box shape on the court as you move forward, retreat, and cross back."
  },
  {
    id: "box-2",
    name: "Left Hand/Right Foot Step, Cross (The Box Variation)",
    category: 5,
    levels: ["recruit"],
    sequence: "4 dribbles",
    balance: "Wide base, changing levels and speed",
    modifications: [],
    execution: [
      "1st dribble: left hand - basketball and foot hit ground at same time. Right foot step, rotating right hip through across body aggressively",
      "2nd dribble: left hand hang/float dribble. Mini hop both feet back under shoulders, square to basket. Change level LOW for cross",
      "3rd dribble: right hand - basketball and foot hit ground at same time. Left foot step, rotating left hip through across body aggressively",
      "4th dribble: right hand hang/float dribble. Mini hop both feet back under shoulders, square to basket. Change level LOW for cross",
      "Repeat sequence"
    ]
  },

  // ===== CATEGORY 6: COMBOS =====
  {
    id: "combo-1",
    name: "Pound Between, Back Through - Left Hand",
    category: 6,
    levels: ["travel", "varsity", "recruit"],
    sequence: "3 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: left hand, right foot step between",
      "2nd dribble: right hand back through"
    ]
  },
  {
    id: "combo-2",
    name: "Pound Between, Back Through - Right Hand",
    category: 6,
    levels: ["travel", "varsity", "recruit"],
    sequence: "3 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand, left foot step between",
      "2nd dribble: left hand back through"
    ]
  },
  {
    id: "combo-3",
    name: "Pound Between Behind, Cross (Alternating)",
    category: 6,
    levels: ["travel", "varsity", "recruit"],
    sequence: "8 dribble sequence / full court",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "1st dribble: left hand pound straight down",
      "2nd dribble: pound between legs",
      "3rd dribble: right hand pound behind back (under butt)",
      "4th dribble: left hand cross to right hand",
      "5th dribble: right hand pound straight down",
      "6th dribble: right hand pound between legs",
      "7th dribble: left hand pound behind back (under butt)",
      "8th dribble: right hand pound",
      "Repeat sequence"
    ]
  },
  {
    id: "combo-4",
    name: "Pound Between Behind - Left Hand",
    category: 6,
    levels: ["varsity"],
    sequence: "3 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: left hand pound",
      "2nd dribble: left hand between legs",
      "3rd dribble: right hand behind back",
      "Repeat sequence"
    ]
  },
  {
    id: "combo-5",
    name: "Pound Between Behind - Right Hand",
    category: 6,
    levels: ["varsity"],
    sequence: "3 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand pound",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand behind back",
      "Repeat sequence"
    ]
  },
  {
    id: "combo-6",
    name: "Cross, Cross, Through/Back Through - Left Hand",
    category: 6,
    levels: ["recruit"],
    sequence: "4 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: left hand cross to right hand",
      "2nd dribble: right hand cross back to left",
      "3rd dribble: left hand between legs",
      "4th dribble: right hand back through"
    ]
  },
  {
    id: "combo-7",
    name: "Cross, Cross, Through/Back Through - Right Hand",
    category: 6,
    levels: ["recruit"],
    sequence: "4 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand cross to left hand",
      "2nd dribble: left hand cross back to right",
      "3rd dribble: right hand between legs",
      "4th dribble: left hand back through"
    ]
  },
  {
    id: "combo-8",
    name: "Between Back Through, Cross, Between Back Through, Cross",
    category: 6,
    levels: ["recruit"],
    sequence: "5 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand between legs",
      "2nd dribble: left hand back through",
      "3rd dribble: right hand cross to left hand",
      "4th dribble: between legs",
      "5th dribble: right hand back through to left hand",
      "Repeat sequence"
    ]
  },
  {
    id: "combo-9",
    name: "Inside Out, Between Behind, Back Behind, Punch Dribble (Alternating)",
    category: 6,
    levels: ["recruit"],
    sequence: "9 dribble sequence",
    balance: "Big step, little step, feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand inside out",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand behind back",
      "4th dribble: right hand punch drag (right foot, right hand together)",
      "5th dribble: right hand cross to left hand",
      "6th dribble: left hand inside out",
      "7th dribble: left hand between",
      "8th dribble: right hand behind back",
      "9th dribble: punch drag (left foot, left hand together)"
    ]
  },

  // ===== CATEGORY 9: DROP 'N' DIMES (Passing) =====
  {
    id: "pass-1",
    name: "Two Handed Chest Pass",
    category: 9,
    levels: ["travel"],
    sequence: "Fundamental",
    balance: "Feet shoulder width, step into pass",
    modifications: [],
    execution: [
      "Ball at chest level",
      "Thumbs behind ball, fingers spread",
      "Step toward target",
      "Extend arms, snap wrists",
      "Thumbs point down on follow through"
    ]
  },
  {
    id: "pass-2",
    name: "Two Handed Bounce Pass",
    category: 9,
    levels: ["travel"],
    sequence: "Fundamental",
    balance: "Feet shoulder width, step into pass",
    modifications: [],
    execution: [
      "Ball at chest level",
      "Thumbs behind ball, fingers spread",
      "Step toward target",
      "Aim for spot 2/3 of the way to target",
      "Ball should bounce up to receiver's waist"
    ]
  },
  {
    id: "pass-3",
    name: "One Handed Bounce Pass",
    category: 9,
    levels: ["travel", "varsity"],
    sequence: "Fundamental",
    balance: "Feet shoulder width, step into pass",
    modifications: [],
    execution: [
      "Ball in one hand at hip level",
      "Step toward target",
      "Push through the ball",
      "Aim for spot 2/3 of the way to target"
    ]
  },
  {
    id: "pass-4",
    name: "Step, Two Handed Bounce Pass",
    category: 9,
    levels: ["travel"],
    sequence: "Fundamental",
    balance: "Step creates passing angle",
    modifications: [],
    execution: [
      "Step to create angle around defender",
      "Two handed bounce pass",
      "Use step to protect ball"
    ]
  },
  {
    id: "pass-5",
    name: "Backdoor Cutter Pass",
    category: 9,
    levels: ["travel", "varsity"],
    sequence: "Game situation",
    balance: "Read the cut, lead the receiver",
    modifications: [],
    execution: [
      "See cutter start backdoor cut",
      "Lead pass to basket-side shoulder",
      "Bounce pass or air pass depending on defense",
      "Timing is everything"
    ]
  },
  {
    id: "pass-6",
    name: "Post Feed, Bounce Pass",
    category: 9,
    levels: ["travel"],
    sequence: "Game situation",
    balance: "Read post position",
    modifications: [],
    execution: [
      "See post establish position",
      "Fake high, pass low (or vice versa)",
      "Bounce pass to far hip (away from defender)",
      "Put it where only your teammate can get it"
    ]
  },
  {
    id: "pass-7",
    name: "Over The Top Lead Pass In Transition",
    category: 9,
    levels: ["travel"],
    sequence: "Full court",
    balance: "Must be ahead of receiver",
    modifications: [],
    execution: [
      "See teammate running floor",
      "One-handed overhead pass",
      "Lead receiver toward basket",
      "Put it in their shooting pocket"
    ]
  },
  {
    id: "pass-8",
    name: "One Handed Chest Pass",
    category: 9,
    levels: ["varsity"],
    sequence: "Fundamental",
    balance: "Feet shoulder width",
    modifications: [],
    execution: [
      "Ball in one hand at chest level",
      "Push through with follow through",
      "Quick release"
    ]
  },
  {
    id: "pass-9",
    name: "Step, One Handed Bounce Pass",
    category: 9,
    levels: ["varsity"],
    sequence: "Fundamental",
    balance: "Step creates angle",
    modifications: [],
    execution: [
      "Step to create angle",
      "One handed bounce pass around defender",
      "Quick, accurate"
    ]
  },
  {
    id: "pass-10",
    name: "Post Entry, Side Step, Strong Hand Pass",
    category: 9,
    levels: ["varsity"],
    sequence: "Game situation",
    balance: "Side step creates angle",
    modifications: [],
    execution: [
      "Side step to create passing lane",
      "Strong hand pass to post",
      "Quick and direct"
    ]
  },
  {
    id: "pass-11",
    name: "Post Entry, Over The Top",
    category: 9,
    levels: ["varsity", "recruit"],
    sequence: "Game situation",
    balance: "High release point",
    modifications: [],
    execution: [
      "Read post defender fronting",
      "Lob pass over defender",
      "Put it where post can catch and score"
    ]
  },
  {
    id: "pass-12",
    name: "Off The Dribble Strong Hand Bounce Pass",
    category: 9,
    levels: ["varsity"],
    sequence: "Off the dribble",
    balance: "Attack position",
    modifications: [],
    execution: [
      "Attacking off dribble",
      "Pick up ball, immediate bounce pass",
      "Strong hand, no wind up"
    ]
  },
  {
    id: "pass-13",
    name: "Strong Hand Thread The Needle",
    category: 9,
    levels: ["varsity"],
    sequence: "Game situation",
    balance: "Quick release",
    modifications: [],
    execution: [
      "See small window",
      "Quick, direct pass through traffic",
      "No hesitation"
    ]
  },
  {
    id: "pass-14",
    name: "Off Hand Off The Dribble",
    category: 9,
    levels: ["varsity"],
    sequence: "Off the dribble",
    balance: "Attack position",
    modifications: [],
    execution: [
      "Attacking off dribble",
      "Pass with off hand",
      "Creates unexpected angle"
    ]
  },
  {
    id: "pass-15",
    name: "From Left Wing, Hit Cutter Underneath Basket (Right Hand Pass)",
    category: 9,
    levels: ["varsity"],
    sequence: "Game situation",
    balance: "Left shoulder to baseline",
    modifications: [],
    execution: [
      "From left wing",
      "Left shoulder to baseline",
      "See cutter underneath basket",
      "Right hand pass to cutter"
    ]
  },
  {
    id: "pass-16",
    name: "From Right Wing, Hit Cutter Underneath Basket (Left Hand Pass)",
    category: 9,
    levels: ["varsity"],
    sequence: "Game situation",
    balance: "Right shoulder to baseline",
    modifications: [],
    execution: [
      "From right wing",
      "Right shoulder to baseline",
      "See cutter underneath basket",
      "Left hand pass to cutter"
    ]
  },
  {
    id: "pass-17",
    name: "Post Entry, Side Step, Off Hand Pass",
    category: 9,
    levels: ["recruit"],
    sequence: "Game situation",
    balance: "Side step creates angle",
    modifications: [],
    execution: [
      "Side step to create passing lane",
      "Off hand pass to post",
      "Unexpected angle"
    ]
  },
  {
    id: "pass-18",
    name: "Off The Dribble Off Hand Bounce Pass",
    category: 9,
    levels: ["recruit"],
    sequence: "Off the dribble",
    balance: "Attack position",
    modifications: [],
    execution: [
      "Attacking off dribble",
      "Pick up ball, off hand bounce pass",
      "No wind up, quick release"
    ]
  },
  {
    id: "pass-19",
    name: "Off Hand Thread The Needle",
    category: 9,
    levels: ["recruit"],
    sequence: "Game situation",
    balance: "Quick release",
    modifications: [],
    execution: [
      "See small window",
      "Off hand pass through traffic",
      "Elite level skill"
    ]
  },
  {
    id: "pass-20",
    name: "Pound Behind, Back Pass (Off Hand)",
    category: 9,
    levels: ["recruit"],
    sequence: "Off the dribble",
    balance: "Keep defender guessing",
    modifications: [],
    execution: [
      "Pound dribble",
      "Behind the back pass",
      "Off hand execution"
    ]
  },
  {
    id: "pass-21",
    name: "Pound Behind, Back Pass (Strong Hand)",
    category: 9,
    levels: ["recruit"],
    sequence: "Off the dribble",
    balance: "Keep defender guessing",
    modifications: [],
    execution: [
      "Pound dribble",
      "Behind the back pass",
      "Strong hand execution"
    ]
  },
  {
    id: "pass-22",
    name: "Pocket Pass On Ball Screen",
    category: 9,
    levels: ["recruit"],
    sequence: "Ball screen read",
    balance: "Attack position",
    modifications: [],
    execution: [
      "Use ball screen",
      "Read defender hedging",
      "Quick pocket pass to rolling screener",
      "Put it in their shooting pocket"
    ]
  },

  // ===== CATEGORY 14: PULL THE TRIGGER (Shooting) =====
  {
    id: "shoot-1",
    name: "Form Shooting With Guide Hand",
    category: 14,
    levels: ["travel", "varsity", "recruit"],
    sequence: "T3 / V6 / R9 (Travel: 3 swishes, Varsity: 6 swishes, Recruit: 9 swishes)",
    balance: "Feet shoulder width, elbow underneath wrist, shoot with finger pads NOT palm",
    modifications: [],
    execution: [
      "Start close to basket",
      "Elbow under wrist",
      "Guide hand on side of ball (not pushing)",
      "Shoot with finger pads, not palm",
      "Range appropriate - move back as you master distance",
      "Count swishes, not makes"
    ]
  },
  {
    id: "shoot-2",
    name: "Curl Off Pin Down (Curling Right) - Sidestep",
    category: 14,
    levels: ["recruit"],
    sequence: "Sidestep, catch and shoot",
    balance: "'Bury' or 'Setup' your defender before curling",
    modifications: [],
    execution: [
      "Defender is chasing hip pocket",
      "Set your defender up",
      "DON'T LEAVE SPACE for defender to squeeze through",
      "Curl off pin down screen (rub shoulders with your teammate)",
      "Sidestep footwork into catch: explode off left foot",
      "Catch ball while landing right, left",
      "Land with great balance, feet under shoulders",
      "Shot"
    ]
  },
  {
    id: "shoot-3",
    name: "Curl Off Pin Down (Curling Right) - Sidestep 'Mini Fade'",
    category: 14,
    levels: ["recruit"],
    sequence: "Sidestep, fade, catch and shoot",
    balance: "'Bury' or 'Setup' your defender before curling",
    modifications: [],
    execution: [
      "Defender is chasing hip pocket",
      "Set your defender up",
      "DON'T LEAVE SPACE for defender to squeeze through",
      "Curl off pin down screen (rub shoulders with your teammate)",
      "Sidestep footwork into catch: explode off left foot",
      "Catch ball while landing right, left",
      "Land with great balance but mini fade backwards",
      "Create more space for yourself",
      "Feet slightly behind shoulders as you land and catch",
      "As you fade, focus on back of rim and get basketball in the air"
    ]
  },
  {
    id: "shoot-4",
    name: "Curl Off Pin Down (Curling Left) - Sidestep",
    category: 14,
    levels: ["recruit"],
    sequence: "Sidestep, catch and shoot",
    balance: "'Bury' or 'Setup' your defender before curling",
    modifications: [],
    execution: [
      "Defender is chasing hip pocket",
      "Set your defender up",
      "DON'T LEAVE SPACE for defender to squeeze through",
      "Curl off pin down screen (rub shoulders with your teammate)",
      "Sidestep footwork into catch: explode off right foot",
      "Catch ball while landing left, right",
      "Land with great balance, feet under shoulders",
      "Shot"
    ]
  },
  {
    id: "shoot-5",
    name: "Curl Off Pin Down (Curling Left) - Sidestep 'Mini Fade'",
    category: 14,
    levels: ["recruit"],
    sequence: "Sidestep, fade, catch and shoot",
    balance: "'Bury' or 'Setup' your defender before curling",
    modifications: [],
    execution: [
      "Defender is chasing hip pocket",
      "Set your defender up",
      "DON'T LEAVE SPACE for defender to squeeze through",
      "Curl off pin down screen (rub shoulders with your teammate)",
      "Sidestep footwork into catch: explode off right foot",
      "Catch ball while landing left, right",
      "Land with great balance but mini fade backwards",
      "Create more space for yourself",
      "Feet slightly behind shoulders as you land and catch",
      "As you fade, focus on back of rim and get basketball in the air"
    ]
  },
  {
    id: "shoot-6",
    name: "Flare Off Pin Down",
    category: 14,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Flare, catch and shoot",
    balance: "'Bury' or 'Setup' your defender before curling",
    modifications: [],
    execution: [
      "Defender gets caught under screen",
      "Set your defender up",
      "DON'T LEAVE SPACE for defender to squeeze through",
      "Start to curl",
      "Recognize if your defender gets caught going under the screen",
      "Use your teammate's screen and flare",
      "Put yourself between your screen and your defender",
      "Recognize and make your reads QUICKLY"
    ]
  },

  // ===== CATEGORY 15: FOOTWORK =====
  {
    id: "foot-1",
    name: "Stutter",
    category: 15,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Full court",
    balance: "Stay low, quick feet",
    modifications: [],
    execution: [
      "Short, quick steps",
      "Stay on balls of feet",
      "Head stays level (no bouncing up and down)",
      "Arms pumping in sync with feet",
      "Used to set up defender before explosive move"
    ]
  },
  {
    id: "foot-2",
    name: "Big Step, Little Step",
    category: 15,
    levels: ["travel", "varsity", "recruit"],
    sequence: "In motion",
    balance: "Rhythm and timing",
    modifications: [],
    execution: [
      "Big step to create angle or space",
      "Little step to gather and load",
      "Creates rhythm for next move",
      "Used before crosses, between legs, finishing moves"
    ]
  },
  {
    id: "foot-3",
    name: "Punch Drag",
    category: 15,
    levels: ["travel", "varsity", "recruit"],
    sequence: "In motion",
    balance: "Hand and foot together",
    modifications: [],
    execution: [
      "Right hand dribble, right foot step - TOGETHER",
      "Creates hesitation effect",
      "Defender freezes reading direction",
      "Left hand dribble, left foot step - TOGETHER"
    ]
  },
  {
    id: "foot-4",
    name: "Load, Explode, Glide, Drag, Plant",
    category: 15,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Athletic position",
    modifications: [],
    execution: [
      "Lower center of gravity",
      "Load weight into front foot",
      "Explode in attack direction",
      "Used after hesitations, crossovers, screens"
    ]
  },

  // ===== CATEGORY 16: BALL SCREEN =====
  {
    id: "screen-1",
    name: "Under The Screen Read",
    category: 16,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Ball screen read",
    balance: "Lowest athlete wins",
    modifications: [],
    execution: [
      "Read defender going under screen",
      "Use screen, pull up for shot",
      "Space created by screen",
      "Quick release before defense recovers"
    ]
  },
  {
    id: "screen-2",
    name: "Hip Pocket Read",
    category: 16,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Ball screen read",
    balance: "Turn the corner, get DOWNHILL",
    modifications: [],
    execution: [
      "Read defender hedging",
      "Reject screen, attack baseline or split",
      "Use screener as shield",
      "Attack downhill toward rim"
    ]
  },
  {
    id: "screen-3",
    name: "Hard Hedge/Show Read",
    category: 16,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Ball screen read",
    balance: "Read and react",
    modifications: [],
    execution: [
      "Defender hard hedges (jumps out aggressively)",
      "Option 1: Snake - retreat dribble, re-attack",
      "Option 2: Split - thread between defender and screener",
      "Option 3: Hit roller - pocket pass to screener rolling",
      "Read the defense, make quick decision"
    ]
  },

  // ===== CATEGORY 7: TENNIS BALL =====
  {
    id: "tennis-1",
    name: "Pound Behind - Alternating (Tennis Ball)",
    category: 7,
    levels: ["travel"],
    sequence: "4 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: ["6 dribble sequence", "8 dribble sequence"],
    execution: [
      "1st dribble: right hand pound straight down",
      "2nd dribble: right hand behind back",
      "3rd dribble: left hand pound straight down",
      "4th dribble: left hand behind back",
      "Repeat sequence"
    ]
  },
  {
    id: "tennis-2",
    name: "2 Balls, Inside Out Dribble Alternating (Tennis)",
    category: 7,
    levels: ["travel"],
    sequence: "2 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: ["Off the wall: keep bicep close to rib cage, one dribble push off wall continuous"],
    execution: [
      "1st dribble: right hand pound straight down",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand crossover back to right hand",
      "Repeat sequence"
    ]
  },
  {
    id: "tennis-3",
    name: "Pound Between Alternating (Tennis Ball)",
    category: 7,
    levels: ["varsity"],
    sequence: "4 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: ["2 dribbles before going through legs", "4 dribbles before going through legs"],
    execution: [
      "1st dribble: right hand straight down",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand straight down",
      "4th dribble: left hand between legs"
    ]
  },
  {
    id: "tennis-4",
    name: "Pound Between, Cross - Right Hand (Tennis)",
    category: 7,
    levels: ["varsity"],
    sequence: "3 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: ["4 dribble sequence", "6 dribble sequence"],
    execution: [
      "1st dribble: right hand pound straight down",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand crossover back to right hand",
      "Repeat sequence"
    ]
  },
  {
    id: "tennis-5",
    name: "Pound Between, Cross - Left Hand (Tennis)",
    category: 7,
    levels: ["varsity"],
    sequence: "3 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: ["4 dribble sequence", "6 dribble sequence"],
    execution: [
      "1st dribble: left hand pound straight down",
      "2nd dribble: left hand between legs",
      "3rd dribble: right hand crossover back to left hand",
      "Repeat sequence"
    ]
  },
  {
    id: "tennis-6",
    name: "Inside Out, Between, Cross - Right Hand (Tennis)",
    category: 7,
    levels: ["varsity", "recruit"],
    sequence: "3 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand inside out",
      "2nd dribble: right hand between legs",
      "3rd dribble: left hand crossover",
      "Repeat sequence"
    ]
  },
  {
    id: "tennis-7",
    name: "Inside Out, Between, Cross - Left Hand (Tennis)",
    category: 7,
    levels: ["varsity", "recruit"],
    sequence: "3 dribble sequence",
    balance: "Feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: left hand inside out",
      "2nd dribble: left hand between legs",
      "3rd dribble: right hand crossover",
      "Repeat sequence"
    ]
  },

  // ===== CATEGORY 8: TENNIS BALL + BASKETBALL =====
  {
    id: "tennisbb-1",
    name: "Pound, Cross Underneath Grab - Alternating",
    category: 8,
    levels: ["travel"],
    sequence: "4 dribble sequence, catching tennis ball twice",
    balance: "Feet wide, shoulders over knees",
    modifications: ["Pound both balls, cross underneath catch, STOP, GATHER", "Let tennis ball bounce once before catch"],
    execution: [
      "1st dribble: right hand basketball, left hand tennis ball - bounce both straight down",
      "2nd dribble: right hand basketball cross underneath to left hand",
      "Without letting tennis ball bounce a second time, grab it out of the air with right hand",
      "3rd dribble: left hand basketball, right hand tennis ball - bounce both straight down",
      "4th dribble: left hand basketball cross underneath to right hand",
      "Without letting tennis ball bounce a second time, grab it out of the air with left hand"
    ]
  },
  {
    id: "tennisbb-2",
    name: "Pound, Between Grab - Alternating",
    category: 8,
    levels: ["varsity"],
    sequence: "4 dribble sequence, catching tennis ball twice",
    balance: "Feet wide, shoulders over knees",
    modifications: ["Between legs catch, STOP, GATHER", "Let tennis ball bounce once before catch"],
    execution: [
      "1st dribble: right hand basketball, left hand tennis ball - bounce both straight down",
      "2nd dribble: right hand basketball between legs to left hand",
      "Grab tennis ball out of the air with right hand",
      "3rd dribble: left hand basketball, right hand tennis ball - bounce both straight down",
      "4th dribble: left hand basketball between legs to right hand",
      "Grab tennis ball out of the air with left hand"
    ]
  },
  {
    id: "tennisbb-3",
    name: "Pound, Behind Grab - Alternating",
    category: 8,
    levels: ["varsity"],
    sequence: "4 dribble sequence, catching tennis ball twice",
    balance: "Feet wide, shoulders over knees",
    modifications: ["Behind back catch, STOP, GATHER", "Let tennis ball bounce once before catch"],
    execution: [
      "1st dribble: right hand basketball, left hand tennis ball - bounce both straight down",
      "2nd dribble: right hand basketball behind back to left hand",
      "Grab tennis ball out of the air with right hand",
      "3rd dribble: left hand basketball, right hand tennis ball - bounce both straight down",
      "4th dribble: left hand basketball behind back to right hand",
      "Grab tennis ball out of the air with left hand"
    ]
  },
  {
    id: "tennisbb-4",
    name: "Pound, Between/Behind Grab, Pound Cross - Alternating",
    category: 8,
    levels: ["recruit"],
    sequence: "10 dribble sequence, catching tennis ball twice",
    balance: "Feet wide, shoulders over knees",
    modifications: [],
    execution: [
      "1st dribble: right hand basketball, left hand tennis ball - bounce both straight down",
      "2nd dribble: right hand basketball between legs to left hand",
      "3rd dribble: left hand behind back",
      "Grab tennis ball with left hand",
      "4th dribble: right hand basketball and left hand tennis ball together, pound cross underneath",
      "Repeat sequence on other side (dribbles 5-10)"
    ]
  },

  // ===== CATEGORY 10: PIVOT & JAB =====
  {
    id: "pivot-1",
    name: "Left Foot/Forward Pivot",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Left foot stays planted, pivot on ball of foot",
    modifications: [],
    execution: [
      "Ball in triple threat",
      "Left foot is pivot foot (stays planted)",
      "Right foot steps forward, rotating body",
      "Protect ball, create angle"
    ]
  },
  {
    id: "pivot-2",
    name: "Left Foot/Reverse Pivot",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Left foot stays planted, pivot on ball of foot",
    modifications: [],
    execution: [
      "Ball in triple threat",
      "Left foot is pivot foot (stays planted)",
      "Right foot steps backward, rotating body away from defender",
      "Protect ball, create separation"
    ]
  },
  {
    id: "pivot-3",
    name: "Right Foot/Forward Pivot",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Right foot stays planted, pivot on ball of foot",
    modifications: [],
    execution: [
      "Ball in triple threat",
      "Right foot is pivot foot (stays planted)",
      "Left foot steps forward, rotating body",
      "Protect ball, create angle"
    ]
  },
  {
    id: "pivot-4",
    name: "Right Foot/Reverse Pivot",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Right foot stays planted, pivot on ball of foot",
    modifications: [],
    execution: [
      "Ball in triple threat",
      "Right foot is pivot foot (stays planted)",
      "Left foot steps backward, rotating body away from defender",
      "Protect ball, create separation"
    ]
  },
  {
    id: "pivot-5",
    name: "Left Foot, Forward Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, left foot pivot",
      "Jab right foot forward aggressively",
      "Read defender's reaction",
      "Return to base or attack"
    ]
  },
  {
    id: "pivot-6",
    name: "Left Foot, Side Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, left foot pivot",
      "Jab right foot to the side",
      "Create lateral space",
      "Read defender's reaction"
    ]
  },
  {
    id: "pivot-7",
    name: "Left Foot, Cross Body Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, left foot pivot",
      "Jab right foot across body",
      "Sell the drive one direction",
      "Attack opposite direction"
    ]
  },
  {
    id: "pivot-8",
    name: "Right Foot, Forward Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, right foot pivot",
      "Jab left foot forward aggressively",
      "Read defender's reaction",
      "Return to base or attack"
    ]
  },
  {
    id: "pivot-9",
    name: "Right Foot, Side Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, right foot pivot",
      "Jab left foot to the side",
      "Create lateral space",
      "Read defender's reaction"
    ]
  },
  {
    id: "pivot-10",
    name: "Right Foot, Cross Body Jab Step",
    category: 10,
    levels: ["travel", "varsity", "recruit"],
    sequence: "Fundamental",
    balance: "Quick, aggressive, return to base",
    modifications: [],
    execution: [
      "Ball in triple threat, right foot pivot",
      "Jab left foot across body",
      "Sell the drive one direction",
      "Attack opposite direction"
    ]
  },

  // ===== CATEGORY 11: STEP BACKS =====
  {
    id: "stepback-1",
    name: "Step Back On Dribble - Right Foot, Jump Shot",
    category: 11,
    levels: ["travel", "varsity", "recruit"],
    sequence: "2 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Start in split stance with right foot forward, ball on left hip", "Footwork only"],
    execution: [
      "1st dribble: left hand, right foot step",
      "2nd dribble: left hand, dipping right shoulder",
      "Explode off right foot",
      "Dribble and step are together like a mini explosion",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },
  {
    id: "stepback-2",
    name: "Step Back On Dribble - Left Foot, Jump Shot",
    category: 11,
    levels: ["travel", "varsity", "recruit"],
    sequence: "2 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Start in split stance with left foot forward, ball on right hip", "Footwork only"],
    execution: [
      "1st dribble: right hand, left foot step",
      "2nd dribble: right hand, dipping left shoulder",
      "Explode off left foot",
      "Dribble and step are together like a mini explosion",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },
  {
    id: "stepback-3",
    name: "Step Back On Gather - Right Foot, Jump Shot",
    category: 11,
    levels: ["recruit"],
    sequence: "2 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Start in split stance with right foot forward", "Footwork only"],
    execution: [
      "1st dribble: left hand",
      "2nd dribble: left hand, pushing dribble out away from left hip",
      "Dip right shoulder",
      "Explode off right foot",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },
  {
    id: "stepback-4",
    name: "Step Back On Gather - Left Foot, Jump Shot",
    category: 11,
    levels: ["recruit"],
    sequence: "2 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Start in split stance with left foot forward", "Footwork only"],
    execution: [
      "1st dribble: right hand",
      "2nd dribble: right hand, pushing dribble out away from right hip",
      "Dip left shoulder",
      "Explode off left foot",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },
  {
    id: "stepback-5",
    name: "Step Back, Keep Dribble/Cross, Step Back - Right Foot Start",
    category: 11,
    levels: ["recruit"],
    sequence: "3 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: [],
    execution: [
      "1st dribble: left hand, right foot step",
      "2nd dribble: left hand crossover to right hand",
      "As soon as ball crosses over, rotate hips and step left leg through aggressively",
      "3rd dribble: right hand, dipping left shoulder, exploding off left foot",
      "Dribble and step together like a mini explosion",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },
  {
    id: "stepback-6",
    name: "Step Back, Keep Dribble/Cross, Step Back - Left Foot Start",
    category: 11,
    levels: ["recruit"],
    sequence: "3 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: [],
    execution: [
      "1st dribble: right hand, left foot step",
      "2nd dribble: right hand crossover to left hand",
      "As soon as ball crosses over, rotate hips and step right leg through aggressively",
      "3rd dribble: left hand, dipping right shoulder, exploding off right foot",
      "Dribble and step together like a mini explosion",
      "Land with basketball in shooting pocket, wrist bent ready to shoot"
    ]
  },

  // ===== CATEGORY 12: STEP TO THE SIDE =====
  {
    id: "sidestep-1",
    name: "Side Step, Jump Shot - Left Foot/Right Hand Dribble",
    category: 12,
    levels: ["travel", "varsity", "recruit"],
    sequence: "1 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Hop off left foot landing on right foot", "Hop off right foot landing on left foot", "Footwork only"],
    execution: [
      "1st dribble: right hand, keeping basketball off right hip",
      "Dip left shoulder slightly",
      "Load on left leg",
      "Explode off left foot as you pound ball with right hand",
      "Right foot comes up off ground BEFORE you explode off left foot",
      "Land right foot, left foot",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-2",
    name: "Side Step, Jump Shot - Right Foot/Left Hand Dribble",
    category: 12,
    levels: ["travel", "varsity", "recruit"],
    sequence: "1 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Hop off left foot landing on right foot", "Hop off right foot landing on left foot", "Footwork only"],
    execution: [
      "1st dribble: left hand, keeping basketball off left hip",
      "Dip right shoulder slightly",
      "Load on right leg",
      "Explode off right foot as you pound ball with left hand",
      "Left foot comes up off ground BEFORE you explode off right foot",
      "Land left foot, right foot",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-3",
    name: "Side Step, Cross, Side Step (Alternating) - Right Hand Start",
    category: 12,
    levels: ["recruit"],
    sequence: "6 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Footwork only"],
    execution: [
      "1st dribble: right hand, dip left shoulder, load left leg",
      "Explode off left foot, land right-left",
      "2nd dribble: right hand pound",
      "3rd dribble: right hand cross to left hand",
      "4th dribble: left hand, dip right shoulder, load right leg",
      "Explode off right foot, land left-right",
      "Repeat sequence"
    ]
  },
  {
    id: "sidestep-4",
    name: "Cross, Side Step - Left Hand Dribble, Jump Shot",
    category: 12,
    levels: ["recruit"],
    sequence: "3 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Footwork only"],
    execution: [
      "1st dribble: left hand, dip right shoulder, load right leg",
      "Explode off right foot, land left-right",
      "2nd dribble: left hand crossover",
      "3rd dribble: right hand side step",
      "Explode off left foot, land right-left",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-5",
    name: "Cross, Side Step - Right Hand Dribble, Jump Shot",
    category: 12,
    levels: ["recruit"],
    sequence: "3 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Footwork only"],
    execution: [
      "1st dribble: right hand, dip left shoulder, load left leg",
      "Explode off left foot, land right-left",
      "2nd dribble: right hand crossover",
      "3rd dribble: left hand side step",
      "Explode off right foot, land left-right",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-6",
    name: "Cross, Side Step, Keep Dribble, One More Hard - Left Hand Start",
    category: 12,
    levels: ["recruit"],
    sequence: "4 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["2 side steps back to back", "Footwork only"],
    execution: [
      "1st dribble: left hand side step, explode off right foot",
      "Land left-right",
      "2nd dribble: left hand crossover",
      "3rd dribble: right hand side step, explode off left foot",
      "Land right-left",
      "4th dribble: right hand - explode off left foot again",
      "Land right-left",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-7",
    name: "Cross, Side Step, Keep Dribble, One More Hard - Right Hand Start",
    category: 12,
    levels: ["recruit"],
    sequence: "4 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["2 side steps back to back", "Footwork only"],
    execution: [
      "1st dribble: right hand side step, explode off left foot",
      "Land right-left",
      "2nd dribble: right hand crossover",
      "3rd dribble: left hand side step, explode off right foot",
      "Land left-right",
      "4th dribble: left hand - explode off right foot again",
      "Land left-right",
      "Gather, jumper, knock it down"
    ]
  },
  {
    id: "sidestep-8",
    name: "Aggressive Side Step, Cross (Alternating) Jump Shot - Right Hand Start",
    category: 12,
    levels: ["recruit"],
    sequence: "4 dribble sequence",
    balance: "Dipping shoulders, rotating hips, stepping leg through aggressively",
    modifications: ["Footwork only"],
    execution: [
      "1st dribble: right hand side step, explode off left foot",
      "Land right-left",
      "2nd dribble: right hand crossover",
      "3rd dribble: left hand, dip right shoulder",
      "4th dribble: left hand - explode off right foot",
      "Land left-right",
      "Gather, jumper, knock it down"
    ]
  },

  // ===== CATEGORY 13: LOCK UP (Defense) =====
  {
    id: "lockup-1",
    name: "90 Degrees for 90 Seconds - Ball Above Head",
    category: 13,
    levels: ["varsity", "recruit"],
    sequence: "90 seconds / stamina (Varsity: 45 seconds)",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: [],
    execution: [
      "Feet outside your shoulders",
      "Butt down, back straight",
      "Elbows locked out with basketball above head",
      "Head up, looking forward",
      "KEEP YOUR HEAD UP AND BE A STATUE",
      "Don't move a muscle",
      "LET IT BURN"
    ]
  },
  {
    id: "lockup-2",
    name: "Defensive Shuffle/Slide - Left 1, Right 2, Left 3, Long Aggressive Slide",
    category: 13,
    levels: ["varsity", "recruit"],
    sequence: "Full court / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["3 slides per direction", "6 slides per direction"],
    execution: [
      "Defensive stance - stay low",
      "Shuffle left 1 time",
      "Shuffle right 2 times",
      "Shuffle left 3 times",
      "On the last defensive shuffle: EXPLODE as hard as you can",
      "Lunge out aggressively to stop opponent's progress to the basket",
      "LET IT BURN"
    ]
  },
  {
    id: "lockup-3",
    name: "Defensive Shuffle/Slide - Right 1, Left 2, Right 3, Long Aggressive Slide",
    category: 13,
    levels: ["varsity", "recruit"],
    sequence: "Full court / stamina",
    balance: "Knees 90 degrees, butt down, shoulders back, back straight",
    modifications: ["3 slides per direction", "6 slides per direction"],
    execution: [
      "Defensive stance - stay low",
      "Shuffle right 1 time",
      "Shuffle left 2 times",
      "Shuffle right 3 times",
      "On the last defensive shuffle: EXPLODE as hard as you can",
      "Lunge out aggressively to stop opponent's progress to the basket",
      "LET IT BURN"
    ]
  }
];

// Practice builder presets
const PRACTICE_BUILDERS = {
  warmup: {
    name: "10-Minute Warm-Up",
    duration: 10,
    sections: [
      { name: "Stutter (full court)", minutes: 2, category: 15 },
      { name: "Pound dribbles (waist high, shoulder high)", minutes: 2, category: 3 },
      { name: "Cross alternating", minutes: 2, category: 3 },
      { name: "Between/behind patterns", minutes: 2, category: 3 },
      { name: "Form shooting (T3/V6/R9)", minutes: 2, category: 14 }
    ]
  },
  skillSession: {
    name: "30-Minute Skill Session",
    duration: 30,
    sections: [
      { name: "Footwork patterns", minutes: 5, category: 15 },
      { name: "Handle drills (stationary)", minutes: 5, category: 3 },
      { name: "Handle drills (moving)", minutes: 5, category: 4 },
      { name: "Finishing drills", minutes: 5, category: 2 },
      { name: "Shooting drills", minutes: 5, category: 14 },
      { name: "Ball screen reads", minutes: 5, category: 16 }
    ]
  },
  focusDays: {
    ballHandling: { name: "Ball Handling Day", categories: [3, 4, 5, 6] },
    finishing: { name: "Finishing Day", categories: [1, 2, 15] },
    shooting: { name: "Shooting Day", categories: [11, 12, 14] },
    passing: { name: "Passing Day", categories: [9] },
    defense: { name: "Defense Day", categories: [13] },
    completeGame: { name: "Complete Game", categories: [14, 15, 16] }
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, LEVELS, COACHING_CUES, DRILLS, PRACTICE_BUILDERS };
}
