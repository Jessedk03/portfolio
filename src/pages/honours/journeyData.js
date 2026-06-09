// =====================================================================
//  Timeline content. Feel free to edit the text here — the styling in
//  PersonalLeadershipJourney.jsx / .css is not affected by this.
// =====================================================================

// Short labels for Covey's habits (used in the "pins").
export const habitNames = {
  1: 'Proactive',
  2: 'End in mind',
  3: 'First things first',
  4: 'Win-win',
  5: 'Understand first',
  6: 'Synergize',
  7: 'Sharpen the saw',
};

export const hero = {
  status: 'Personal Leadership · Meeting 10',
  eyebrow: 'Final presentation',
  // The title is the common thread from my master plan.
  titlePre: 'Contribute ',
  titleSpark: 'without',
  titlePost: ' dominating',
  subtitle: 'My route through Covey’s seven habits.',
  byline: 'Jesse de Koe · 1897635 · HBO-ICT Software Development, Hogeschool Utrecht',
  intro:
      'I started with one goal: to take more control over my own life. What followed isn’t a straight line, but a route full of bends — solder joint by solder joint. Scroll along the board.',
};

export const nodes = [
  {
    refdes: 'PWR',
    tag: 'Starting point',
    icon: 'power',
    title: 'Taking control',
    body:
        'When I heard there were extra classes on offer, I deliberately chose Personal Leadership. Not because I had to, but because I wanted to take control of where I’m heading: embedded software engineer in the aerospace sector.',
    habits: [],
  },
  {
    refdes: 'U1',
    tag: 'Critical incident · work',
    icon: 'chip',
    title: 'The first impression',
    body:
        'I wanted to give a new colleague a warm welcome, but I froze and only said my name. It was only later — in a conversation about space travel and embedded software — that the ice broke. That’s when I finally listened to understand, not to reply.',
    habits: [1, 2, 4, 5, 6],
  },
  {
    refdes: 'U2',
    tag: 'Critical incident · personal',
    icon: 'iron',
    title: 'The silent mouse',
    body:
        'My mouse clicked too loudly. Instead of complaining or buying a new one, I soldered in silent switches myself. I hardly dared touch the heat gun after an earlier mishap — but what was already taken apart couldn’t break any further. It worked.',
    habits: [1, 3, 7],
  },
  {
    refdes: 'H1',
    tag: 'Hero',
    icon: 'mug',
    title: 'Menno',
    body:
        'A colleague at NBIP, just before he retired. At the coffee machine he told me he saw himself in me. He woke something up in me: I’m not “dumb”, I just need to learn how the system works. That paradigm shift is pushing me toward a university (WO) master’s.',
    note: '↳ empathetic listening',
    habits: [],
  },
  {
    refdes: 'H2',
    tag: 'Hero',
    icon: 'terminal',
    title: 'Linus Torvalds',
    body:
        'He built Linux and Git — and gave them away for free. Software should belong to everyone. That made me open up my own code and keep the big tech companies that run on my data out of my life. Knowledge to contribute, not to own.',
    note: '↳ technical vision among equals',
    habits: [],
  },
  {
    refdes: 'IDL',
    tag: 'Ideal leader',
    icon: 'ear',
    title: 'Beside you, not above you',
    body:
        'My ideal leader listens empathetically like Menno and shares domain knowledge as an equal, like Linus. Someone who contributes rather than dominates. I don’t need to be a leader above others myself — but my listening skills do translate to that.',
    habits: [],
  },
  {
    refdes: 'HAB·1',
    tag: 'Biggest shift',
    icon: 'target',
    title: 'Be proactive',
    body:
        'I thought being proactive meant “putting your best foot forward.” It’s actually about control: consciously choosing who I want to be and acting on it. Eager to learn, reliable, and taking the time to truly hear people — that, to me, is living proactively.',
    habits: [1],
  },
  {
    refdes: 'HAB·4',
    tag: 'Biggest shift',
    icon: 'target',
    title: 'Think win-win',
    body:
        'To me, win-win meant: both sides give something up. A conversation with Nienke flipped that around — an inner win is a win too. If someone gets a little more and I honestly don’t mind, I don’t lose. I win on the inside.',
    habits: [4],
  },
  {
    refdes: 'HAB·5',
    tag: 'Biggest shift',
    icon: 'target',
    title: 'Seek first to understand, then to be understood',
    body:
        'I used to think my view was THE view. These days I’m mostly curious about why someone thinks what they think. Covey gave me language for something I already felt: listening is more than waiting for your turn to speak.',
    habits: [5],
  },
  {
    refdes: 'MCU',
    tag: 'The core',
    icon: 'core',
    title: 'The common thread',
    body:
        'It all comes together in one sentence: contribute without dominating. My mission statement (made with the FranklinCovey builder, with help from my sister) brought that into focus. Taking control isn’t a box to tick — it’s a choice I get to make again every day.',
    habits: [],
  },
];

export const outro = {
  boot: '[ OK ] board powered · ready to ship',
  titlePre: '…and the ',
  titleSpark: 'beginning',
  titlePost: ' of',
  thanks:
      'Thanks to my fellow students — for your stories, your honesty, and the conversations that sharpened me. And thanks to my teacher, for the tools and the space to truly look at myself.',
  sign: '— Jesse',
};