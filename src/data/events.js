// =====================================================================
// MARYLAND UNITED FC — GIRLS PROGRAM PARENT TRAVEL GUIDE
// SOURCE OF TRUTH for the site. Edit this file to update the guide.
// ---------------------------------------------------------------------
// EACH EVENT
//   confirmed: true   -> green  "PARTICIPATION CONFIRMED" (on the ECNL/Pre-ECNL accepted team list)
//              false  -> grey   "PENDING CONFIRMATION" (applied; not yet confirmed — e.g. all ECNL RL)
//   action: true      -> red    "ACTION NEEDED" (booking/flights open — see guidance)
//   travel: 'fly'     -> shows the "begin booking flights" guidance when action is true
//
// GUIDANCE BANNER (auto): unconfirmed non-action events tell families NOT to make
// arrangements yet; confirmed fly events tell families they may book flights.
//
// EACH TEAM (inside `teams`): paste booking link into `hotelLink` when it arrives.
//   playerRooms = roster size (one room per player/family, from Playmetrics).
// =====================================================================

export const CLUB = {
  name: 'Maryland United FC',
  program: 'Girls Program',
  season: '2026–2027',
  title: 'Parent Travel Guide',
}

// ---------------------------------------------------------------------
// CENTRAL TEAM TABLE — roster size (from Playmetrics) + head coach.
// Rooms needed = players (one room per player/family) + 1 coach room.
// Every event reads from here, so update rosters/coaches in ONE place.
// ---------------------------------------------------------------------
export const TEAM_INFO = {
  'U10 Red':          { players: 11, coach: 'Andrew Gillis' },
  'U10 White':        { players: 11, coach: 'Clarissa Kirsch Downs' },
  'U11 ECNL':         { players: 13, coach: 'Steve Campbell' },
  'U11 Pre-ECNL':     { players: 13, coach: 'Steve Campbell' },
  'U11 Pre-ECNL RL':  { players: 14, coach: 'Andrew Gillis' },
  'U12 ECNL':         { players: 12, coach: 'Steve Campbell' },
  'U12 Pre-ECNL':     { players: 12, coach: 'Steve Campbell' },
  'U12 Pre-ECNL RL':      { players: 13, coach: 'KJ Davis' },
  'U12 RL':           { players: 13, coach: 'KJ Davis' },
  'U13 ECNL':         { players: 18, coach: 'Darrell Gonzalez' },
  'U13 ECNL RL':      { players: 18, coach: 'KJ Davis' },
  'U13 RL':           { players: 18, coach: 'KJ Davis' },
  'U14 ECNL':         { players: 17, coach: 'Scott Villagran' },
  'U14 ECNL RL':      { players: 17, coach: 'Darrell Gonzalez' },
  'U14 RL':           { players: 17, coach: 'Darrell Gonzalez' },
  'U15 ECNL':         { players: 16, coach: 'Scott Villagran' },
  'U15 ECNL RL':      { players: 16, coach: 'Sara Butler' },
  'U15 Premier':      { players: 16, coach: 'Clarissa Kirsch Downs' },
  'U16 ECNL':         { players: 19, coach: 'Harry Canellakis' },
  'U16 ECNL RL':      { players: 19, coach: 'Win Puffer' },
  'U16 Premier':      { players: 17, coach: 'Clarissa Kirsch Downs' },
  'U17 ECNL':         { players: 17, coach: 'Matt Dwyer' },
  'U17 ECNL RL':      { players: 16, coach: 'Darrell Gonzalez' },
  'U18/19 ECNL':      { players: 17, coach: 'Matt Dwyer' },
  'U18/19 ECNL RL':   { players: 17, coach: 'Win Puffer' },
}

const NJ_BOOKING = 'https://book.onlocationexp.com/ecnl-boys-girls-new-jersey-2026/team-members-booking/'

// Conference away-game rosters differ by season:
//   Fall  = U12–U14 ECNL & ECNL RL
//   Spring = U11 ECNL, plus U12–U18/19 ECNL & ECNL RL (U11 is spring-only)
const FALL_LEAGUE_AGES = ['U12', 'U13', 'U14']
const FALL_LEAGUE_TEAMS = ['U12 Pre-ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL']
const SPRING_LEAGUE_AGES = ['U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18/19']
const SPRING_LEAGUE_TEAMS = [
  'U11 ECNL',
  'U12 ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL',
  'U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL',
  'U18/19 ECNL', 'U18/19 ECNL RL',
]

export const events = [
  // ================= CONFIRMED — ECNL New Jersey (booking open) =================
  {
    no: 1, sortDate: '2026-08-21', ages: ['U13', 'U14'], confirmed: true, action: true, travel: 'drive',
    league: 'ECNL & ECNL RL', name: 'ECNL & ECNL RL Girls New Jersey 2026',
    dates: 'Aug 21–23, 2026 (Fri–Sun)', location: 'Somerset, NJ',
    note: 'Arrival is set by each team’s Friday kickoff: the two 11:40 AM teams (U13 ECNL, U13 ECNL RL) travel up Thursday, Aug 20 and need 3 nights (Thu–Sat). The two afternoon teams (U14 ECNL 1:30 PM, U14 ECNL RL 3:20 PM) drive up Friday morning and need only 2 nights (Fri–Sat). If your U14 team (ECNL or ECNL RL) was booked for 3 nights, you may cancel the first night (Thursday, Aug 20) if you’d like — only the late-kickoff teams have that option. The two U13 teams should keep all 3 nights.',
    teams: [
      {
        team: 'U13 ECNL', bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        kickoff: 'Fri, Aug 21 · 11:40 AM', arrivalDate: 'Thursday, Aug 20 (night before)', nights: '3 · Thu·Fri·Sat',
        players: 18, playerRooms: 18, coaches: 'Darrell Gonzalez', coachRooms: 1,
        teamCode: 'ECN--A8', hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Hampton Inn Princeton', address: '4385 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'DoubleTree Princeton', address: '4355 US Highway 1, Princeton, NJ', rooms: '7 King Rooms w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '5 King Suites w/ Sofa Bed' },
        ],
      },
      {
        team: 'U14 ECNL', bookDeadline: 'Wed, Jul 29 @ 9:00 AM',
        kickoff: 'Fri, Aug 21 · 1:30 PM', arrivalDate: 'Friday, Aug 21 morning (game day)', nights: '2 · Fri·Sat',
        players: 17, playerRooms: 17, coaches: 'Scott Villagran', coachRooms: 1,
        teamCode: 'ECN--M9', hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Delta Hotels Woodbridge', address: '515 US Hwy 1 South, Iselin, NJ', rooms: '2 Double Queen Rooms' },
          { name: 'Courtyard Edison Woodbridge', address: '3105 Woodbridge Ave, Edison, NJ', rooms: '6 Double Queen · 9 King w/ Sofa Bed' },
        ],
      },
      {
        team: 'U13 ECNL RL', bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        kickoff: 'Fri, Aug 21 · 11:40 AM', arrivalDate: 'Thursday, Aug 20 (night before)', nights: '3 · Thu·Fri·Sat',
        players: 18, playerRooms: 18, coaches: 'KJ Davis', coachRooms: 1,
        teamCode: 'ECN--F5', hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Crowne Plaza Edison', address: '2055 Lincoln Hwy, Edison, NJ', rooms: '3 Double Queen · 3 King w/ Sofa Bed' },
          { name: 'Comfort Inn Edison – New Brunswick', address: '831 Route 1 South, Edison, NJ', rooms: '11 Double Queen Rooms' },
        ],
      },
      {
        team: 'U14 ECNL RL', bookDeadline: 'Fri, Jul 31 @ 10:30 AM',
        kickoff: 'Fri, Aug 21 · 3:20 PM', arrivalDate: 'Friday, Aug 21 morning (game day)', nights: '2 · Fri·Sat',
        players: 17, playerRooms: 17, coaches: 'Darrell Gonzalez', coachRooms: 1,
        teamCode: 'ECN--E8', hotelLink: NJ_BOOKING,
        hotels: [
          { name: 'Hyatt Place Princeton', address: '3565 US Highway 1, Princeton, NJ', rooms: '11 Double/Double w/ Sofa Bed' },
          { name: 'Sonesta ES Suites Princeton', address: '4375 US Route 1 South, Princeton, NJ', rooms: '8 King Suites w/ Sofa Bed' },
        ],
      },
    ],
  },

  // ================= CONFIRMED — Pre-ECNL (drive; hotels to follow) =================
  {
    no: 3, sortDate: '2026-10-03', ages: ['U11', 'U12'], confirmed: true, action: true, travel: 'either',
    league: 'Pre-ECNL', name: 'Pre-ECNL Carolina Cup',
    dates: 'Oct 3–4, 2026 (Sat–Sun)', location: 'Wilmington, NC', note: '',
    teams: [
      { team: 'U11 Pre-ECNL', bookDeadline: '', playerRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: '', playerRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 4, sortDate: '2026-10-31', ages: ['U10', 'U11', 'U12'], confirmed: true, action: false, travel: 'drive',
    league: 'Pre-ECNL', name: 'Pre-ECNL East Coast Cup',
    dates: 'Oct 31 – Nov 1, 2026 (Sat–Sun)', location: 'Richmond, VA', note: '',
    teams: [
      { team: 'U10 Red', bookDeadline: '', playerRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U11 Pre-ECNL', bookDeadline: '', playerRooms: null, teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: '', playerRooms: null, teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ================= CONFIRMED — ECNL Florida (FLY — book flights now) =================
  {
    no: 5, sortDate: '2026-12-05', ages: ['U16', 'U17'], confirmed: true, action: true, travel: 'fly',
    league: 'ECNL', name: 'ECNL Orlando',
    dates: 'Dec 5–7, 2026 (Sat–Mon)', location: 'Sanford (Orlando area), FL', note: '',
    teams: [
      { team: 'U16 ECNL', players: 19, playerRooms: 19, coaches: 'Harry Canellakis', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U17 ECNL', players: 17, playerRooms: 17, coaches: 'Matt Dwyer', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 6, sortDate: '2027-01-09', ages: ['U16', 'U17', 'U18/19'], confirmed: true, action: true, travel: 'fly',
    league: 'ECNL', name: 'ECNL Girls Florida — Winter',
    dates: 'Jan 9–11, 2027 (Sat–Mon)', location: 'Lakewood Ranch, FL', note: '',
    teams: [
      { team: 'U16 ECNL', players: 19, playerRooms: 19, coaches: 'Harry Canellakis', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U17 ECNL', players: 17, playerRooms: 17, coaches: 'Matt Dwyer', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U18/19 ECNL', players: 17, playerRooms: 17, coaches: 'Matt Dwyer', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },
  {
    no: 7, sortDate: '2027-02-26', ages: ['U15', 'U18/19'], confirmed: true, action: true, travel: 'fly',
    league: 'ECNL', name: 'ECNL Girls Florida — Spring',
    dates: 'Feb 26–28, 2027 (Fri–Sun)', location: 'Lakewood Ranch, FL', note: '',
    teams: [
      { team: 'U15 ECNL', players: 16, playerRooms: 16, coaches: 'Scott Villagran', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U18/19 ECNL', players: 17, playerRooms: 17, coaches: 'Matt Dwyer', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ================= CONFIRMED — ECNL NC Spring (drive; hotels to follow) =================
  {
    no: 8, sortDate: '2027-05-29', ages: ['U15', 'U16', 'U17'], confirmed: true, action: false, travel: 'drive',
    league: 'ECNL', name: 'ECNL Girls North Carolina — Spring',
    dates: 'May 29–31, 2027 (Sat–Mon)', location: 'Greensboro, NC', note: '',
    teams: [
      { team: 'U15 ECNL', players: 16, playerRooms: 16, coaches: 'Scott Villagran', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U16 ECNL', players: 19, playerRooms: 19, coaches: 'Harry Canellakis', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U17 ECNL', players: 17, playerRooms: 17, coaches: 'Matt Dwyer', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ================= PENDING — ECNL RL showcases (applied; NOT yet confirmed) =================
  {
    no: 10, sortDate: '2027-01-08', ages: ['U17', 'U18/19'], teamsList: ['U17 ECNL RL', 'U18/19 ECNL RL'], confirmed: false, action: false, travel: 'fly',
    league: 'ECNL RL', name: 'ECNL RL Girls Florida — Winter',
    dates: 'Jan 8–10, 2027 (Fri–Sun)', location: 'Sanford, FL',
    note: 'Requested for U17 / U18-19.', teams: [],
  },
  {
    no: 11, sortDate: '2027-02-26', ages: ['U15', 'U16'], teamsList: ['U15 ECNL RL', 'U16 ECNL RL'], confirmed: false, action: false, travel: 'fly',
    league: 'ECNL RL', name: 'ECNL RL Girls Florida — Spring',
    dates: 'Feb 26–28, 2027 (Fri–Sun)', location: 'Lakewood Ranch, FL',
    note: 'Requested for U15–U18/19.', teams: [],
  },
  {
    no: 12, sortDate: '2027-05-28', ages: ['U15', 'U16', 'U17'], teamsList: ['U15 ECNL RL', 'U16 ECNL RL', 'U17 ECNL RL'], confirmed: false, action: false, travel: 'drive',
    league: 'ECNL RL', name: 'ECNL RL Girls North Carolina',
    dates: 'May 28–30, 2027 (Fri–Sun)', location: 'Winston-Salem, NC',
    note: 'Requested for U15 / U16 / U17.', teams: [],
  },

  // ================= PENDING — Non-ECNL travel events (applied; NOT yet confirmed) =================
  {
    no: 13, sortDate: '2026-11-14', ages: ['U10', 'U11', 'U12', 'U13', 'U14'],
    teamsList: ['U10 White', 'U11 Pre-ECNL RL', 'U12 ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL'],
    confirmed: true, action: false, travel: 'drive',
    league: 'Showcase', name: 'NCFC Youngers',
    dates: 'Nov 14–15, 2026', location: 'Raleigh, NC',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 14, sortDate: '2026-12-05', ages: ['U15', 'U16', 'U17', 'U18/19'],
    teamsList: ['U15 ECNL RL', 'U15 Premier', 'U16 ECNL RL', 'U16 Premier', 'U17 ECNL RL', 'U18/19 ECNL RL'],
    confirmed: true, action: false, travel: 'drive',
    league: 'Showcase', name: 'NCFC Olders',
    dates: 'Dec 5–7, 2026', location: 'Raleigh, NC',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 15, sortDate: '2026-11-22', ages: ['U15', 'U16', 'U17', 'U18/19'],
    teamsList: ['U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL', 'U18/19 ECNL', 'U18/19 ECNL RL'],
    confirmed: false, action: false, travel: 'drive',
    league: 'Showcase', name: 'PDA Thanksgiving Showcase',
    dates: 'Nov 22–23, 2026', location: 'New Jersey',
    note: 'Non-ECNL travel showcase.', teams: [],
  },
  {
    no: 16, sortDate: '2027-03-20', ages: ['U15', 'U16', 'U17', 'U18/19'],
    teamsList: ['U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL', 'U18/19 ECNL', 'U18/19 ECNL RL'],
    confirmed: false, action: false, travel: 'drive',
    league: 'Tournament', name: 'Jefferson Cup (Olders)',
    dates: 'March 20–22, 2027', location: 'Richmond, VA',
    note: 'Non-ECNL travel tournament.', teams: [],
  },
  {
    no: 17, sortDate: '2027-05-23', ages: ['U16', 'U17'], teamsList: ['U16 ECNL RL', 'U17 ECNL RL'], confirmed: false, action: false, travel: 'drive',
    league: 'Showcase', name: 'PDA Memorial Day',
    dates: 'May 23–25, 2027', location: 'New Jersey',
    note: 'Non-ECNL travel showcase.', teams: [],
  },

  // ================= CONFIRMED — ECNL Wilmington (U13/U14) =================
  {
    no: 25, sortDate: '2026-10-10', ages: ['U13', 'U14'], confirmed: true, action: true, travel: 'either',
    league: 'ECNL', name: 'ECNL Wilmington (U13/U14)',
    dates: 'Oct 10–12, 2026 (Sat–Mon)', location: 'Wilmington, NC', note: '',
    teams: [
      { team: 'U13 ECNL', players: 18, playerRooms: 18, coaches: 'Darrell Gonzalez', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U14 ECNL', players: 17, playerRooms: 17, coaches: 'Scott Villagran', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
    ],
  },

  // ================= LEAGUE — Conference AWAY games in PA/NJ (locals excluded) =================
  // Families book their OWN hotel near the facility IF their team's kickoff meets the
  // overnight rule (NJ before 1 PM · elsewhere before 11 AM). No action until game times
  // are released; then flip action:true and list only the teams that qualify.
  { no: 18, sortDate: '2026-09-26', league: 'League', type: 'league', confirmed: true, action: true, travel: 'drive',
    ages: FALL_LEAGUE_AGES, teamsList: FALL_LEAGUE_TEAMS,
    name: 'League @ PDA Blue', dates: 'Sat, Sep 26, 2026', location: 'PDA Blue Main Complex, Somerset, NJ', note: '',
    // NJ venue: overnight if kickoff before 1:00 PM
    games: [
      { team: 'U12 Pre-ECNL', time: '10:00 AM', overnight: true },
      { team: 'U12 Pre-ECNL RL', time: '12:00 PM', overnight: true },
      { team: 'U13 ECNL', time: '10:00 AM', overnight: true },
      { team: 'U14 ECNL', time: '12:00 PM', overnight: true },
      { team: 'U13 ECNL RL', time: '2:00 PM', overnight: false },
      { team: 'U14 ECNL RL', time: '4:00 PM', overnight: false },
    ],
    teams: [] },
  { no: 19, sortDate: '2026-09-27', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: FALL_LEAGUE_AGES, teamsList: FALL_LEAGUE_TEAMS,
    name: 'League @ PDA White', dates: 'Sun, Sep 27, 2026', location: 'New Jersey', note: '', teams: [] },
  { no: 20, sortDate: '2026-10-24', league: 'League', type: 'league', confirmed: true, action: true, travel: 'drive',
    ages: FALL_LEAGUE_AGES, teamsList: FALL_LEAGUE_TEAMS,
    name: 'League @ Penn Fusion', dates: 'Sat, Oct 24, 2026', location: 'Downingtown, PA', note: '',
    // PA venue: overnight if kickoff before 11:00 AM
    games: [
      { team: 'U12 Pre-ECNL', time: '10:30 AM', overnight: true },
      { team: 'U12 Pre-ECNL RL', time: '9:00 AM', overnight: true },
      { team: 'U13 ECNL', time: '9:00 AM', overnight: true },
      { team: 'U13 ECNL RL', time: '12:30 PM', overnight: false },
      { team: 'U14 ECNL', time: '10:45 AM', overnight: true },
      { team: 'U14 ECNL RL', time: '12:00 PM', overnight: false },
    ],
    teams: [] },
  { no: 21, sortDate: '2027-03-21', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: SPRING_LEAGUE_AGES, teamsList: SPRING_LEAGUE_TEAMS,
    name: 'League @ Hex FC', dates: 'Sun, Mar 21, 2027', location: 'Pennsylvania', note: '', teams: [] },
  { no: 22, sortDate: '2027-04-11', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: SPRING_LEAGUE_AGES, teamsList: SPRING_LEAGUE_TEAMS,
    name: 'League @ Philadelphia Ukrainians', dates: 'Sun, Apr 11, 2027', location: 'Pennsylvania', note: '', teams: [] },
  { no: 23, sortDate: '2027-04-25', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: SPRING_LEAGUE_AGES, teamsList: SPRING_LEAGUE_TEAMS,
    name: 'League @ Match Fit', dates: 'Sat, Apr 25, 2027', location: 'New Jersey', note: '', teams: [] },
  { no: 24, sortDate: '2027-05-08', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: SPRING_LEAGUE_AGES, teamsList: SPRING_LEAGUE_TEAMS,
    name: 'League @ FC Delco', dates: 'Sat, May 8, 2027', location: 'Pennsylvania', note: '', teams: [] },

  // ================= LEAGUE CUP — away match needing a hotel (U15–U18/19) =================
  { no: 28, sortDate: '2026-12-13', league: 'League', type: 'league', confirmed: true, action: true, travel: 'drive',
    ages: ['U15', 'U16', 'U17', 'U18/19'],
    teamsList: ['U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL', 'U18/19 ECNL', 'U18/19 ECNL RL'],
    name: 'League Cup @ PDA Blue', dates: 'Sun, Dec 13, 2026', location: 'PDA Blue, New Jersey',
    note: 'Sunday AWAY game at PDA Blue (NJ), per the league schedule. Note: every team also has a HOME League Cup game Saturday, Dec 12 (vs Match Fit) — so all teams play in MD Saturday, then drive to NJ and stay Saturday night before Sunday’s game. Sunday kickoffs below are from PDA and pending final confirmation; U18/19 times not yet released.',
    // Away in NJ, but all teams have a Sat 12/12 home game first, so everyone stays Sat night.
    games: [
      { team: 'U15 ECNL', time: '10:00 AM', overnight: true },
      { team: 'U15 ECNL RL', time: '10:00 AM', overnight: true },
      { team: 'U16 ECNL', time: '12:00 PM', overnight: true },
      { team: 'U16 ECNL RL', time: '12:00 PM', overnight: true },
      { team: 'U17 ECNL', time: '2:00 PM', overnight: true },
      { team: 'U17 ECNL RL', time: '2:00 PM', overnight: true },
      { team: 'U18/19 ECNL', time: 'TBD', overnight: null },
      { team: 'U18/19 ECNL RL', time: 'TBD', overnight: null },
    ],
    teams: [] },

  // ================= Jefferson Cup — youngers weekend =================
  { no: 26, sortDate: '2027-03-13', ages: ['U10', 'U11', 'U12', 'U13', 'U14'],
    teamsList: ['U10 Red', 'U11 ECNL', 'U11 Pre-ECNL RL', 'U12 ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL'],
    confirmed: false, action: false, travel: 'drive',
    league: 'Tournament', name: 'Jefferson Cup (Youngers)', dates: 'March 2027 (youngers weekend)', location: 'Richmond, VA',
    note: 'Non-ECNL travel tournament.', teams: [] },

  // ================= PA Classics — Premier (Dec) =================
  { no: 27, sortDate: '2026-12-11', ages: ['U15', 'U16'], teamsList: ['U15 Premier', 'U16 Premier'], confirmed: false, action: false, travel: 'drive',
    league: 'Showcase', name: 'PA Classics', dates: 'December 2026', location: 'Lancaster, PA',
    note: 'Non-ECNL travel showcase (Premier).', teams: [] },
]
