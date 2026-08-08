// =====================================================================
// MARYLAND UNITED FC — GIRLS PROGRAM PARENT TRAVEL GUIDE
// SOURCE OF TRUTH for the site. Edit this file to update the guide.
// ---------------------------------------------------------------------
// EACH EVENT
//   confirmed: true   -> green  "PARTICIPATION CONFIRMED"
//              false  -> grey   "PENDING CONFIRMATION"
//     Rule of thumb: ECNL (where we're listed) = confirmed, Pre-ECNL = confirmed,
//     ECNL RL = not confirmed until the league assigns.
//   action: true      -> red    "ACTION NEEDED" (booking is open — book before the deadline)
//
// EACH TEAM (inside `teams`)
//   When a booking link arrives, paste it into `hotelLink`
//   (leave "" and it shows "Booking link coming soon").
//   Add hotels as { name, address, rooms }.
// =====================================================================

export const CLUB = {
  name: 'Maryland United FC',
  program: 'Girls Program',
  season: '2026–2027',
  title: 'Parent Travel Guide',
}

const NJ_BOOKING = 'https://book.onlocationexp.com/ecnl-boys-girls-new-jersey-2026/team-members-booking/'

export const events = [
  // ---------------------------------------------------------------
  // ECNL New Jersey — CONFIRMED — booking open
  // ---------------------------------------------------------------
  {
    no: 1,
    ages: ['U13','U14'],
    confirmed: true,
    action: true,
    league: 'ECNL',
    name: 'ECNL Girls New Jersey 2026',
    dates: 'Aug 21–23, 2026 (Fri–Sun)',
    location: 'Somerset, NJ',
    note: '',
    teams: [
      {
        team: 'U13 ECNL',
        bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        players: 18,
        numRooms: 18,
        coaches: 'Darrell Gonzalez',
        teamCode: 'ECN--A8',
        hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Hampton Inn Princeton', address: '4385 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'DoubleTree Princeton', address: '4355 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '5 King Suites w/ Sofa Bed' },
        ],
      },
      {
        team: 'U14 ECNL',
        bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        players: 17,
        numRooms: 17,
        coaches: 'Scott Villagran',
        teamCode: 'ECN--M9',
        hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Delta Hotels Woodbridge', address: '515 US Hwy 1 South, Iselin, NJ', rooms: '2 Double Queen Rooms' },
          { name: 'Courtyard Edison Woodbridge', address: '3105 Woodbridge Ave, Edison, NJ', rooms: '6 Double Queen · 9 King w/ Sofa Bed' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // ECNL RL New Jersey — NOT yet confirmed — booking open
  // ---------------------------------------------------------------
  {
    no: 2,
    ages: ['U13','U14'],
    confirmed: false,
    action: true,
    league: 'ECNL RL',
    name: 'ECNL RL Girls New Jersey 2026',
    dates: 'Aug 21–23, 2026 (Fri–Sun)',
    location: 'Somerset, NJ',
    note: '',
    teams: [
      {
        team: 'U13 RL',
        bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        players: 18,
        numRooms: 18,
        coaches: 'KJ Davis',
        teamCode: 'ECN--F5',
        hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Crowne Plaza Edison', address: '2055 Lincoln Hwy, Edison, NJ', rooms: '3 Double Queen · 3 King w/ Sofa Bed' },
          { name: 'Comfort Inn Edison – New Brunswick', address: '831 Route 1 South, Edison, NJ', rooms: '11 Double Queen Rooms' },
        ],
      },
      {
        team: 'U14 RL',
        bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        players: 17,
        numRooms: 17,
        coaches: 'Darrell Gonzalez',
        teamCode: 'ECN--E8',
        hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Hyatt Place Princeton', address: '3565 US Highway 1, Princeton, NJ', rooms: '11 Double/Double w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '8 King Suites w/ Sofa Bed' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // Pre-ECNL — CONFIRMED — hotels to be posted
  // ---------------------------------------------------------------
  {
    no: 3,
    ages: ['U11','U12'],
    confirmed: true,
    action: false,
    league: 'Pre-ECNL',
    name: 'Pre-ECNL Carolina Cup',
    dates: 'Oct 3–4, 2026 (Sat–Sun)',
    location: 'Wilmington, NC',
    note: '',
    teams: [
      { team: 'U11 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 4,
    ages: ['U10','U11','U12'],
    confirmed: true,
    action: false,
    league: 'Pre-ECNL',
    name: 'Pre-ECNL East Coast Cup',
    dates: 'Oct 31 – Nov 1, 2026 (Sat–Sun)',
    location: 'Richmond, VA',
    note: '',
    teams: [
      { team: 'U10 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U11 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ---------------------------------------------------------------
  // ECNL North Carolina Fall — CONFIRMED — hotels to be posted
  // ---------------------------------------------------------------
  {
    no: 5,
    ages: ['U13','U14'],
    confirmed: true,
    action: false,
    league: 'ECNL',
    name: 'ECNL Girls North Carolina — Fall',
    dates: 'Oct 10–12, 2026 (Sat–Mon)',
    location: 'Wilmington, NC',
    note: '',
    teams: [
      { team: 'U13 ECNL', players: 18, numRooms: 18, coaches: 'Darrell Gonzalez', bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U14 ECNL', players: 17, numRooms: 17, coaches: 'Scott Villagran', bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ---------------------------------------------------------------
  // Older-team showcases — requested, PENDING CONFIRMATION / assignment
  // (ECNL preferences not yet listed; all RL events not confirmed)
  // ---------------------------------------------------------------
  {
    no: 6,
    ages: ['U16','U17','U18/19'], confirmed: false, action: false, league: 'ECNL',
    name: 'ECNL Girls Florida — Fall', dates: 'Dec 5–7, 2026 (Sat–Mon)', location: 'Sanford, FL',
    note: 'Requested for U16 / U17 / U18-19.', teams: [],
  },
  {
    no: 7,
    ages: ['U17','U18/19'], confirmed: false, action: false, league: 'ECNL RL',
    name: 'ECNL RL Girls Florida — Fall', dates: 'Dec 4–6, 2026 (Fri–Sun)', location: 'Naples / Ocala, FL',
    note: 'Requested for U17 / U18-19.', teams: [],
  },
  {
    no: 8,
    ages: ['U16','U17','U18/19'], confirmed: false, action: false, league: 'ECNL',
    name: 'ECNL Girls Florida — Winter', dates: 'Jan 9–11, 2027 (Sat–Mon)', location: 'Lakewood Ranch, FL',
    note: 'Requested for U16 / U17 / U18-19.', teams: [],
  },
  {
    no: 9,
    ages: ['U17','U18/19'], confirmed: false, action: false, league: 'ECNL RL',
    name: 'ECNL RL Girls Florida — Winter', dates: 'Jan 8–10, 2027 (Fri–Sun)', location: 'Sanford, FL',
    note: 'Requested for U17 / U18-19.', teams: [],
  },
  {
    no: 10,
    ages: ['U15','U16','U17'], confirmed: false, action: false, league: 'ECNL',
    name: 'ECNL Girls Dallas', dates: 'Feb 13–15, 2027 (Sat–Mon)', location: 'Dallas, TX',
    note: 'Requested for U15 / U16 / U17.', teams: [],
  },
  {
    no: 11,
    ages: ['U15','U16','U17','U18/19'], confirmed: false, action: false, league: 'ECNL',
    name: 'ECNL Girls Florida — Spring', dates: 'Feb 26–28, 2027 (Fri–Sun)', location: 'Lakewood Ranch, FL',
    note: 'Requested for U15–U18/19.', teams: [],
  },
  {
    no: 12,
    ages: ['U15','U16','U17','U18/19'], confirmed: false, action: false, league: 'ECNL RL',
    name: 'ECNL RL Girls Florida — Spring', dates: 'Feb 26–28, 2027 (Fri–Sun)', location: 'Lakewood Ranch, FL',
    note: 'Requested for U15–U18/19.', teams: [],
  },
  {
    no: 13,
    ages: ['U15','U16','U17'], confirmed: false, action: false, league: 'ECNL RL',
    name: 'ECNL RL Girls North Carolina', dates: 'May 28–30, 2027 (Fri–Sun)', location: 'Winston-Salem, NC',
    note: 'Requested for U15 / U16 / U17.', teams: [],
  },
  {
    no: 14,
    ages: ['U15','U16','U17'], confirmed: false, action: false, league: 'ECNL',
    name: 'ECNL Girls North Carolina — Spring', dates: 'May 29–31, 2027 (Sat–Mon)', location: 'Greensboro, NC',
    note: 'Requested for U15 / U16 / U17.', teams: [],
  },

  // ---------------------------------------------------------------
  // NON-ECNL TRAVEL EVENTS (overnight) — from the girls tabs of the
  // Tournament & Event Detail sheet. Local Annapolis/DC-area tournaments
  // are intentionally excluded. Dates below are from a July draft — VERIFY.
  // ---------------------------------------------------------------
  {
    no: 15,
    ages: ['U13', 'U14'], confirmed: false, action: false, league: 'Showcase',
    name: 'NCFC Jr. Showcase', dates: 'Nov 14–15, 2026', location: 'Raleigh, NC',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 16,
    ages: ['U16', 'U17', 'U18/19'], confirmed: false, action: false, league: 'Showcase',
    name: 'NCFC Showcase', dates: 'Dec 5–7, 2026', location: 'Raleigh, NC',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 17,
    ages: ['U15', 'U16', 'U17', 'U18/19'], confirmed: false, action: false, league: 'Showcase',
    name: 'PDA Thanksgiving Showcase', dates: 'Nov 22–23, 2026', location: 'New Jersey',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 18,
    ages: ['U15', 'U16', 'U17', 'U18/19'], confirmed: false, action: false, league: 'Tournament',
    name: 'Jefferson Cup', dates: 'March 20–22, 2027', location: 'Richmond, VA',
    note: 'Non-ECNL travel tournament.', teams: [],
  },
  {
    no: 19,
    ages: ['U16', 'U17'], confirmed: false, action: false, league: 'Showcase',
    name: 'PDA Memorial Day', dates: 'May 23–25, 2027', location: 'New Jersey',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
]
