// =====================================================================
// MARYLAND UNITED FC — GIRLS PROGRAM PARENT TRAVEL GUIDE
// SOURCE OF TRUTH for the site. Edit this file to update the guide.
// ---------------------------------------------------------------------
// HOW TO EDIT
//   • Each object in `events` is one card on the site.
//   • `status` controls the badge:  "action" | "pending" | "tentative" | "confirmed"
//   • Inside `teams`, each entry is one team's hotel block.
//   • When Jen sends a booking link, paste it into that team's `hotelLink`.
//     Leave hotelLink as "" (empty) and it shows as "Link coming soon".
//   • Add hotels as { name, address, rooms } objects.
//   • Dates are free text so they read exactly how you want them.
// =====================================================================

export const CLUB = {
  name: 'Maryland United FC',
  program: 'Girls Program',
  season: '2026–2027',
  title: 'Parent Travel Guide',
}

// Status badge definitions (label + color key used by the UI)
export const STATUS = {
  action:    { label: 'Action Needed — Book Now', tone: 'red' },
  confirmed: { label: 'Confirmed',                tone: 'green' },
  pending:   { label: 'Hotels Coming Soon',       tone: 'amber' },
  tentative: { label: 'Tentative — Pending Assignment', tone: 'grey' },
}

export const events = [
  // ---------------------------------------------------------------
  // EVENT 1 — fully populated from the current guide
  // ---------------------------------------------------------------
  {
    no: 1,
    status: 'action',
    name: 'ECNL Girls New Jersey 2026',
    dates: 'Aug 21–23, 2026 (Fri–Sun)',
    location: 'Somerset, NJ',
    note: '',
    teams: [
      {
        team: 'U13 ECNL',
        arrivalDate: '',
        bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        numRooms: 18,
        teamCode: 'ECN--A8',
        hotelLink: '',
        hotels: [
          { name: 'Hampton Inn Princeton', address: '4385 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'DoubleTree Princeton', address: '4355 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '5 King Bedroom Suites w/ Sofa Bed' },
        ],
      },
      {
        team: 'U14 ECNL',
        arrivalDate: '',
        bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        numRooms: 18,
        teamCode: 'ECN--M9',
        hotelLink: '',
        hotels: [
          { name: 'Delta Hotels Woodbridge', address: '515 US Hwy 1 South, Iselin, NJ', rooms: '2 Double Queen Rooms' },
          { name: 'Courtyard Edison Woodbridge', address: '3105 Woodbridge Ave, Edison, NJ', rooms: '6 Double Queen Rooms · 9 King Rooms w/ Sofa Bed' },
        ],
      },
      {
        team: 'U13 RL',
        arrivalDate: '',
        bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        numRooms: 18,
        teamCode: 'ECN--F5',
        hotelLink: '',
        hotels: [
          { name: 'Crowne Plaza Edison', address: '2055 Lincoln Hwy, Edison, NJ', rooms: '3 Double Queen Rooms · 3 King Rooms w/ Sofa Bed' },
          { name: 'Comfort Inn Edison – New Brunswick', address: '831 Route 1 South, Edison, NJ', rooms: '11 Double Queen Rooms' },
        ],
      },
      {
        team: 'U14 RL',
        arrivalDate: '',
        bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        numRooms: 18,
        teamCode: 'ECN--E8',
        hotelLink: '',
        hotels: [
          { name: 'Hyatt Place Princeton', address: '3565 US Highway 1, Princeton, NJ', rooms: '11 Double/Double Rooms w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '8 King Suites w/ Sofa Bed' },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // APPLIED — direct entries (hotels/links to be added)
  // ---------------------------------------------------------------
  {
    no: 2,
    status: 'confirmed',
    name: 'Pre-ECNL Carolina Cup',
    dates: 'Oct 3–4, 2026 (Sat–Sun)',
    location: 'Wilmington, NC',
    note: 'Confirmed. Hotel blocks to be posted.',
    teams: [
      { team: 'U11 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 3,
    status: 'pending',
    name: 'ECNL Girls North Carolina — Fall',
    dates: 'Oct 10–12, 2026 (Sat–Mon)',
    location: 'Wilmington, NC',
    note: '',
    teams: [
      { team: 'U13 ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U14 ECNL', bookDeadline: '', numRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 4,
    status: 'pending',
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
  // TENTATIVE — older-team showcase preferences (final assignments pending)
  // Trim or promote these to "pending"/"confirmed" as the league assigns.
  // ---------------------------------------------------------------
  {
    no: 5,
    status: 'tentative',
    name: 'ECNL Girls Florida — Fall',
    dates: 'Dec 5–7, 2026 (Sat–Mon)',
    location: 'Sanford, FL',
    note: 'Requested for U16 / U17 / U18-19.',
    teams: [],
  },
  {
    no: 6,
    status: 'tentative',
    name: 'ECNL RL Girls Florida — Fall',
    dates: 'Dec 4–6, 2026 (Fri–Sun)',
    location: 'Naples / Ocala, FL',
    note: 'Requested for U17 / U18-19 RL.',
    teams: [],
  },
  {
    no: 7,
    status: 'tentative',
    name: 'ECNL Girls Florida — Winter',
    dates: 'Jan 9–11, 2027 (Sat–Mon)',
    location: 'Lakewood Ranch, FL',
    note: 'Requested for U16 / U17 / U18-19.',
    teams: [],
  },
  {
    no: 8,
    status: 'tentative',
    name: 'ECNL RL Girls Florida — Winter',
    dates: 'Jan 8–10, 2027 (Fri–Sun)',
    location: 'Sanford, FL',
    note: 'Requested for U17 / U18-19 RL.',
    teams: [],
  },
  {
    no: 9,
    status: 'tentative',
    name: 'ECNL Girls Dallas',
    dates: 'Feb 13–15, 2027 (Sat–Mon)',
    location: 'Dallas, TX',
    note: 'Requested for U15 / U16 / U17.',
    teams: [],
  },
  {
    no: 10,
    status: 'tentative',
    name: 'ECNL Girls Florida — Spring',
    dates: 'Feb 26–28, 2027 (Fri–Sun)',
    location: 'Lakewood Ranch, FL',
    note: 'Requested for U15–U18/19 (ECNL & RL).',
    teams: [],
  },
  {
    no: 11,
    status: 'tentative',
    name: 'ECNL RL Girls North Carolina',
    dates: 'May 28–30, 2027 (Fri–Sun)',
    location: 'Winston-Salem, NC',
    note: 'Requested for U15 / U16 / U17 RL.',
    teams: [],
  },
  {
    no: 12,
    status: 'tentative',
    name: 'ECNL Girls North Carolina — Spring',
    dates: 'May 29–31, 2027 (Sat–Mon)',
    location: 'Greensboro, NC',
    note: 'Requested for U15 / U16 / U17.',
    teams: [],
  },
]
