// =====================================================================
//  Inhoud van de timeline. Pas hier gerust teksten aan — de opmaak in
//  PersonalLeadershipJourney.jsx / .css verandert hier niet door.
// =====================================================================

// Korte labels voor Covey's eigenschappen (gebruikt in de "pinnen").
export const habitNames = {
  1: 'Proactief',
  2: 'Eind voor ogen',
  3: 'Belangrijkste eerst',
  4: 'Win-win',
  5: 'Eerst begrijpen',
  6: 'Synergie',
  7: 'Zaag scherp',
};

export const hero = {
  status: 'Persoonlijk Leiderschap · Meeting 10',
  eyebrow: 'Final presentation',
  // De titel is de rode draad uit mijn masterplan.
  titlePre: 'Bijdragen ',
  titleSpark: 'zonder',
  titlePost: ' te domineren',
  subtitle: 'Mijn route door Covey’s zeven eigenschappen.',
  byline: 'Jesse de Koe · 1897635 · HBO-ICT Software Development, Hogeschool Utrecht',
  intro:
    'Ik begon met één doel: meer regie nemen over mijn eigen leven. Wat volgde is geen rechte lijn, maar een route met bochten — soldeerpunt voor soldeerpunt. Scroll mee over de print.',
};

export const nodes = [
  {
    refdes: 'PWR',
    tag: 'Vertrekpunt',
    icon: 'power',
    title: 'Regie nemen',
    body:
      'Toen ik hoorde dat er extra lessen waren, koos ik bewust voor Persoonlijk Leiderschap. Niet omdat het moest, maar omdat ik regie wilde nemen over waar ik heen ga: embedded software engineer in de lucht- en ruimtevaart.',
    habits: [],
  },
  {
    refdes: 'U1',
    tag: 'Critical incident · werk',
    icon: 'chip',
    title: 'De eerste indruk',
    body:
      'Ik wilde een nieuwe collega warm verwelkomen, maar sloeg dicht en noemde alleen mijn naam. Pas later — in een gesprek over ruimtevaart en embedded software — brak het ijs. Toen luisterde ik eindelijk om te begrijpen, niet om te antwoorden.',
    habits: [1, 2, 4, 5, 6],
  },
  {
    refdes: 'U2',
    tag: 'Critical incident · privé',
    icon: 'iron',
    title: 'De stille muis',
    body:
      'Mijn muis klikte te luid. In plaats van klagen of een nieuwe kopen, soldeerde ik er zelf stille switches in. Het heteluchtpistool durfde ik amper aan na een eerdere misser — maar wat al uit elkaar lag, kon niet nóg kapotter. Het lukte.',
    habits: [1, 3, 7],
  },
  {
    refdes: 'H1',
    tag: 'Held',
    icon: 'mug',
    title: 'Menno',
    body:
      'Een collega bij NBIP, vlak voor zijn pensioen. Bij de koffieautomaat zei hij dat hij zichzelf in mij zag. Hij maakte iets wakker: ik ben niet “dom”, ik moet alleen leren hoe het systeem werkt. Die paradigm shift duwt me richting een WO-master.',
    note: '↳ empathisch luisteren',
    habits: [],
  },
  {
    refdes: 'H2',
    tag: 'Held',
    icon: 'terminal',
    title: 'Linus Torvalds',
    body:
      'Hij bouwde Linux én Git — en gaf ze gratis weg. Software hoort van iedereen te zijn. Dat heeft me mijn eigen code opener laten maken en grote techbedrijven die op mijn data draaien uit mijn leven geweerd. Kennis om bij te dragen, niet te bezitten.',
    note: '↳ technische visie tussen gelijken',
    habits: [],
  },
  {
    refdes: 'IDL',
    tag: 'Ideale leider',
    icon: 'ear',
    title: 'Naast je, niet boven je',
    body:
      'Mijn ideale leider luistert empathisch zoals Menno en deelt domeinkennis als gelijke, zoals Linus. Iemand die bijdraagt in plaats van domineert. Ik hoef zelf geen leider boven anderen te zijn — maar mijn luisterkwaliteit vertaalt zich daar wél naartoe.',
    habits: [],
  },
  {
    refdes: 'EIG·1',
    tag: 'Grootste verschuiving',
    icon: 'target',
    title: 'Wees proactief',
    body:
      'Ik dacht dat proactief “je beste beentje voorzetten” betekende. Het gaat juist over regie: bewust kiezen wie ik wil zijn en daarnaar handelen. Leergierig, betrouwbaar, en de tijd nemen om mensen écht te horen — dát is voor mij proactief leven.',
    habits: [1],
  },
  {
    refdes: 'EIG·4',
    tag: 'Grootste verschuiving',
    icon: 'target',
    title: 'Denk win-win',
    body:
      'Win-win betekende voor mij: allebei inleveren. Een gesprek met Nienke draaide dat om — een innerlijke win is óók winst. Als iemand iets meer krijgt en het mij oprecht niet uitmaakt, verlies ik niet. Ik win van binnen.',
    habits: [4],
  },
  {
    refdes: 'EIG·5',
    tag: 'Grootste verschuiving',
    icon: 'target',
    title: 'Eerst begrijpen, dan begrepen worden',
    body:
      'Vroeger was mijn visie DÉ visie. Inmiddels ben ik vooral nieuwsgierig naar waaróm iemand denkt wat die denkt. Covey gaf me taal voor iets dat ik al voelde: luisteren is meer dan wachten tot je mag praten.',
    habits: [5],
  },
  {
    refdes: 'MCU',
    tag: 'De kern',
    icon: 'core',
    title: 'De rode draad',
    body:
      'Alles komt samen in één zin: bijdragen zonder te domineren. Mijn mission statement (gemaakt met de FranklinCovey-builder, met hulp van mijn zus) maakte dat scherp. Regie nemen is geen vinkje — het is een keuze die ik elke dag opnieuw mag maken.',
    habits: [],
  },
];

export const outro = {
  boot: '[ OK ] board powered · ready to ship',
  titlePre: '…en het ',
  titleSpark: 'begin',
  titlePost: ' van',
  thanks:
    'Dank aan mijn medestudenten — voor jullie verhalen, jullie eerlijkheid en de gesprekken die mij scherper maakten. En dank aan mijn docent, voor het gereedschap én de ruimte om écht naar mezelf te kijken.',
  sign: '— Jesse',
};
