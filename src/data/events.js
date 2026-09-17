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
  'U11 Pre-ECNL':     { players: 13, coach: 'Steve Campbell' },
  'U11 Pre-ECNL RL':  { players: 14, coach: 'Andrew Gillis' },
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
// PDA Girls Invitational (Nov 21–22) — On Location / Anthony Travel per-block booking invites
// (from the "Book Your Room" emails, Sep 11). Each link is scoped to one team's block via its
// TEAM CODE — codes use a DOUBLE dash, and note PDA--O9 / PDA--O4 use the LETTER O, not zero.
// Help line: (866) 386-0059.
const PDA_BK = 'https://book.onlocationexp.com/pda-girls-invitational-2026/?booking=0&team-members-booking=1'
const PDA_BK_T7 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzUiLCJ0ZWFtX2NvZGUiOiJQREEtLVQ3IiwidGltZXN0YW1wIjoxNzg5MTYyODE4LCJyYW5kb20iOiJuRnFFeWJldnpOM05ueEhEIn18YWJiYTRlOTkzOWUyN2ViYWM1N2Q5YWMxZmJhM2U1NzM3ZjZlNTk1MTQ5ZjBlOGNjMzRkNjg5YTA5YWY5YmU0OQ=&team_code=PDA--T7&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjU4'
const PDA_BK_U8 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzOTkiLCJ0ZWFtX2NvZGUiOiJQREEtLVU4IiwidGltZXN0YW1wIjoxNzg5MTYzMTAxLCJyYW5kb20iOiI0blBSY0VsdGIyWGVKT1RaIn18OWUxMWY2ZmU3ZGM3YTNkMGFiZmRmYjA5NDIwNGRlMmNkMDQyOWY2NjgxMzljNmNhZmRjNTU0YThmN2M3OTBmMQ=&team_code=PDA--U8&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjU5'
const PDA_BK_N9 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzOTciLCJ0ZWFtX2NvZGUiOiJQREEtLU45IiwidGltZXN0YW1wIjoxNzg5MTYzMjUwLCJyYW5kb20iOiJRZW9OWXlpdXMxMzh6Z1VKIn18M2IzOGY1MzAyNTlhMjdlMmNmZjRmMThjYzBlZDE4ZDBlNWJkMGU2MjAxN2U3NDM3NTVlZmM0ZWZhNTE4YzMyYw=&team_code=PDA--N9&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjYx'
const PDA_BK_O9 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzMiLCJ0ZWFtX2NvZGUiOiJQREEtLU85IiwidGltZXN0YW1wIjoxNzg5MTYzNDQwLCJyYW5kb20iOiIwdFY3V29RSnh3YjVQQTFhIn18Yjc5OGNmNWM4ODU1ODM2NjMzNTg1MjFlMmNjNmYxZjA2NGQ4ZjIzZTcxYjU0ZDhkMGM3NDU1Njc3ZWRmOThkMA=&team_code=PDA--O9&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjYz'
const PDA_BK_D9 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzOTUiLCJ0ZWFtX2NvZGUiOiJQREEtLUQ5IiwidGltZXN0YW1wIjoxNzg5MTYzNTk4LCJyYW5kb20iOiIxU2xnbGdMZGRwZlRrT1pyIn18ZTUxYmVmMmE0ZDExMjcxZjVhOWNkNDk3MWIxMTVjZDhhZDNkNmE5YTE3OWU4M2EyM2ZlNTI3ZTMyODkwZDFlMA=&team_code=PDA--D9&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjY1'
const PDA_BK_N6 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzciLCJ0ZWFtX2NvZGUiOiJQREEtLU42IiwidGltZXN0YW1wIjoxNzg5MTYzNzY4LCJyYW5kb20iOiJLbmRUR3NCeFJqOU5jS1lIIn18MjZlNDBjNTQ2NzgxODVhMjg0YzZmNDczOTM0NGZkNDg3YzI0Y2NjMzVkODM0NjRhYTFiZTA0NmQwZjM4YzBmYg=&team_code=PDA--N6&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjY3'
const PDA_BK_J5 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzkiLCJ0ZWFtX2NvZGUiOiJQREEtLUo1IiwidGltZXN0YW1wIjoxNzg5MTYzOTMzLCJyYW5kb20iOiI1dHhnRTFVaEZqQTB2RHRiIn18YzZjN2Y0MTAzMTliMjE4NjdlMjA3MGEzNGE1YTM1MzIyODY2ODdmZmQ1ODgyMjQ3ZTI3ZTRiYmVkZDA0YjFmMw=&team_code=PDA--J5&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjY5'
const PDA_BK_K8 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzOTMiLCJ0ZWFtX2NvZGUiOiJQREEtLUs4IiwidGltZXN0YW1wIjoxNzg5MTY0MTE1LCJyYW5kb20iOiI5ZXRFeEd2NFNtNE1oM01qIn18YTZhNzc4ZTE4Y2FjMzAzOGU0MDBiNjZiM2Y0MGYwMWUwYmIwY2YwZWFlOGEzNGRmODhmOTRkMzYxMjViMWIzZg=&team_code=PDA--K8&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njcx'
const PDA_BK_Z2 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzODkiLCJ0ZWFtX2NvZGUiOiJQREEtLVoyIiwidGltZXN0YW1wIjoxNzg5MTY0MjY2LCJyYW5kb20iOiJiSElWNlJRZmVJYmV4eURQIn18YWM5Y2RhODE0ZDIxYzJlNjIxN2RiMzVlN2NmYTA2NDc0MzljY2I3Njc3NjFmYTM1OTllNjA1MTJhZjBhYThlMQ=&team_code=PDA--Z2&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njcz'
const PDA_BK_D2 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzODMiLCJ0ZWFtX2NvZGUiOiJQREEtLUQyIiwidGltZXN0YW1wIjoxNzg5MTY0NDQ3LCJyYW5kb20iOiJhUGVkZ3huQmVVWmZ6dkNwIn18MjJjYTIxZjkyODExMTBmOWYxOWFhNmVjYjc4ZmFkNDAyMWFiZmFkYWVjNDNmNWFiMmYxNzE3ZmRlMGJkYjQ2Mg=&team_code=PDA--D2&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njc1'
const PDA_BK_Q7 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzODUiLCJ0ZWFtX2NvZGUiOiJQREEtLVE3IiwidGltZXN0YW1wIjoxNzg5MTY0NjAxLCJyYW5kb20iOiI1cnJwQ2JWSGhpZ0xKT1NQIn18Mjg2NjYyZWE4ZmYyNTVkOWExMTYwMjdjNWNhMTdiMTIzMDIyNjQ5NmNlYWNkOGU0MGQ1MGQxODNkYmNiOGI1Yg=&team_code=PDA--Q7&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njc3'
const PDA_BK_O4 = PDA_BK + '&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzODciLCJ0ZWFtX2NvZGUiOiJQREEtLU80IiwidGltZXN0YW1wIjoxNzg5MTY0NzMxLCJyYW5kb20iOiJ5UGlHaW84c3VjelZQaExqIn18MDRkZDBlNWJkY2NlOTMyNjMxYzc0NmI0NmMyNDk3NTBmNjlhM2Q4YjVhYWRjZDgzMTkwYWM2NDA2NGUwNGVhYw=&team_code=PDA--O4&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njc5'
// Field/venue for the PDA events in Somerset, NJ (from the ECNL NJ team itineraries).
const PDA_COMPLEX = 'PDA Soccer Complex, 1 Upper Pond Road, Somerset, NJ 08873'

// Pre-ECNL Carolina Cup (Wilmington, Oct 3–4) EventConnect room-block booking links (Jen, Aug 10).
const WILMINGTON_U11_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFakjlA1Lkc0sUnTH13iWurCxmUGjpZ77E2WigXxn8abJk5lQ39U8KA2sRjGB76Z5qVijYtpKG88Re7TnkJkEdyXDB0PDQ2rMtEPJ6Gtd-2BneIvukGK6xA9HVZOlAWd1fWUHpUIX8jbFXYhzaxdqEqcji-2BqUNs55G73-2BWE7Mxlwaz0D8hhWKw-2BuDQCcep-2FhBy3EmFkkWxgoikVNx5WG4Npfk-2Fx7C1YPIzogaWVhoJO3dQHYJ02zPdPhJS-2BmQtVGMGtko-3DXBuh_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKTCsO0mGpLlQe4Rsf89l3ru8kJ2aW2NBUPlqeqKyUU5YlAf1DSzRo5H2D3lDaT5HWh6Wx5qnK4lEZLITD1njdrLl8tMmFBEK7VRP3MiNpvpzVFlbdqYQGM4PT8YrLh5D1Ee0imIR-2FsHisgq7A5z6VzhqmHvRflBIVOqbbNyAAcFEm4KRZUk1jPvSMOjDPNmOGsLv1kUCws-2FV5Tx3c4-2F-2FBu-2FaRZRYc9En3eiyPjTKSFf6d-2BrHLXPiwY-2F7BpKEcQk2qCeLMBKehuTCkXQ0n1w1Qo-2B5F5lPJxnr2Y86KUBDv8fqyiomtNaB-2BbKq9DXm6MtivPkKgQ72JTYmAJpqO82rtP-2BNdtzQ8xR6b98X8EqjFlAA'
const WILMINGTON_U12_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFakjlA1Lkc0sUnTH13iWurCxmUGjpZ77E2WigXxn8abJgYuAmiN5Vg2a0-2Fg0wed9XYrCsBUDTef5nXTDOUX4Tpw18drltjTzSE2O02BIw3uDjnqbjxic89yAA3oRSOjuRV0Vr7iDrQqWndZCI2ti-2BnbIdWwCov-2FtR8Hz9Ml5ZdVdozQpANWI1-2FGoY-2FqQAliZYGOyg-2B1k7yM3VcJ1FqLLfL0P9vEKG9VgaMgeU8Rw-2BowkTdYXl7xZPR7-2BQjoxwwdRII-3DdGSO_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKTCsO0mGpLlQe4Rsf89l3ru8kJ2aW2NBUPlqeqKyUU5YlAf1DSzRo5H2D3lDaT5HWmpw5FpSoatHe3OdinmarI-2Buo-2FkAUrWHs4Qj5NjUIbbNJOwxicI4IfHputLUxOZIN9mS-2FDehbmcPzo1kgpdpmLoIH8gla268Hrd5ZOvezE9f00TnAnWQjaPUpPIx8bkD2qhDuBmZ6-2Fy0YB1MBvEq0xWlf4azKYogVhaNhbWyHig0cdGKHtY9eDF8tot-2FEv9qdGHBmC81pIWsbUUm9PMLjIhhrDgeiE46JP41TUwIcKnU7o-2BqluDsa7h-2B54P-2BQBJ8mG6p8A7-2FafyoIVSSy1Qruo8B0-2FbewZqutQRNUdOQSxDX'

// Pre-ECNL East Coast Cup (Richmond, Oct 31–Nov 1) EventConnect room-block booking links
// (blocks created by Jen, Aug 31; booking open until Sun, Sep 6 @ 7:00 PM).
const ECC_U10_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFavKojd8IFN6IHmQoTChTGTZ4UmRrgOO5-2B6Illhi54UqrxTYh31hOy4B-2FQHo3nmTd8mcI0ex1CExU5OvZB593hJOS6OiyMXx7rzw8OH70yTDyo6HuhBmnC5iB1oNc1AAOqMykVDvHRFpiL5ldnF-2B7GwZjn31u7uJxpKPGkwpIi1KyQmPEPSOwVHwmG9ipnTsAiUN9BiV6FT5WaQSR7Z2qGOBtsXJgGlyeGNCRZslMsjtOtABPTOJluW8xtvlniAcb0-3DsMzx_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKfLSROQg5VH8jzWqkSWGm-2BU9R27ldh3u2hpjNCQvTRmBIhi8g7lu16ejLVRUUy3INTuzup6QikLSl2FIzB5hKmpzzWBdq3HAzcxvUOYDT29tg9wLCrBcYuZvbvlE1OCLRbOnDYkIeSqrTNW5vKP0BdkVARgEeqUaSkhqmPXYssMrj62TzW141G05VYMwHR0DJr7BmEuGDLkbFvDxFlahzjTNVYXsmVvR3GDn1-2B8POVjX7Nh6J8F0Ah85azvbYxOpQBYL9QLS2TUpJ27lgsKW5G0g-2F462E5wU6ibz74JA4HFF8TFYgCEZJUwBr8OvUBQgz20L5HT3pt6liLIm2bCaSO4IafMrCRsu-2BQvbwnJx6hP8'
const ECC_U11_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFavKojd8IFN6IHmQoTChTGTZ4UmRrgOO5-2B6Illhi54UqjTW7D0AHgYOC50Q9dyo6GIKLO5kdoebLk96lGT1sBq05wrTEOApcHdwkZFHlrexWMpYhWgZnT2AiXuU7Yt6NUUAVktHeyPchpYKybB8RjP3LWTt-2FTc19hMfqXMFZMr5GJjGnlDK4vCOqgntMjKFctz11JEcUNAACctrJ8OS-2FD3-2Bt0M6-2Boh5RETOWdXa8g6F4BGMCb6V5W4wx-2FtoW-2BypPEQ-3DDVom_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKfLSROQg5VH8jzWqkSWGm-2BU9R27ldh3u2hpjNCQvTRmBIhi8g7lu16ejLVRUUy3INdIDTkOE3RROrOKEiIIZKMR4JbZhlqtxTLMBBYlwrRqt-2BJcPct6FI0dU68IFuSt-2FK8EcrVQI9mGZlnyC7-2B9lVrvHY9WBWJ1OcXyWizMuGnCMyvGcsw0nYs403lJ9-2BHmoF4c3966ToUhuRlwUXVz1Vjsnwv-2F-2FwoQnD9OMBzwe81BgPm3hYUFUglE-2BrsWzKpkFlfrOXMpP8CSXSZxttpQ953JrqXNanN3YBxqMYZWqJSWOExU4au4VkPnIT1J6bBmSUwgR1DOxpIf2Gjw8q-2FLR0XPd2VjBMX8zLCwDgXjhB7YU'
const ECC_U11RL_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFavKojd8IFN6IHmQoTChTGTZ4UmRrgOO5-2B6Illhi54UqjZaTgvXR546AkiUOQ3q38rUeSz-2FroSiwZ5olQLwcaMZtbtaORW-2BDElLMgappa4K0vKXmEWpKaiCv-2FZ0Sp1rm9Sbek3FSEquBFJ-2Fg6cnsEteTjQlywyALv9txq7VdqOk27NLXCfKLtU8LzxI7KJduWyynyEzM47U-2FHB19cTaZNPp41hFtaE2jWF79ZGL-2BRm2h4cwDqZ8UEaVUl2FcJ1V2O8-3DwQPr_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKfLSROQg5VH8jzWqkSWGm-2BU9R27ldh3u2hpjNCQvTRmBIhi8g7lu16ejLVRUUy3INVXB5J0LCjd2O12bZZ0yt74TfrLRkMh87dEkna3Rniv8flf8u79sd7OFzLi5hJJ8O0pxODlE6nwMN4PPdqJXfOi4k6prlwC6hI2kyq6vN9T1tG-2B4Dc6X-2Bmy3iG2ytZhEitSqMoInIjqaTXw6l0-2FvD3Dme7uTbB6w9KK5ZkZNb40fDVbVBIb31iLlrgQ-2BTHmiqwkJzJ-2BCeeK6uoBcog-2BjBAZqFlwOKsVhkH4EKUYmY3Ek4tika-2F-2FfBjyGFxlClFCYc59oqqetYRZKoVozX2rMHFs-3D'
const ECC_U12_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFavKojd8IFN6IHmQoTChTGTZ4UmRrgOO5-2B6Illhi54Uqtb-2Fa7M4TieFZVvcPfONBVWC56O6UisLr3lDJVKeY6WIQmw7utaeFgfbUZWO5ujlyS-2FRCl0Ezg9dBlO56qFqsqoNKt5lKCfvwkdSQ2-2FZ8auKfGXhG9qA2EnYPcdpoXfoN3nJaHb2gUZA-2Br0UjJH-2FxxqUv7ngsTIv-2FGt198LhEQrza-2Bmi1-2FLsCOBoZWWtQPy-2BG9-2Fvp3yeuSvyHhN15o61AQE-3DeWTD_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKfLSROQg5VH8jzWqkSWGm-2BU9R27ldh3u2hpjNCQvTRmBIhi8g7lu16ejLVRUUy3INU7fJPQojIL3cCO60oGBuFWkv33kVTkcwZnde1sP-2BWSBD6vH4DQtb6C7wbxpSfR0QZFxxHS1zcprM9QYW2nnftcBg66kzQ3-2FWIoEDcRwnVWpGrl0gJfBeJyuY2d-2FlDXeQ3mC1ttYphaP7J56WBmrolxrQnpUxbJ-2FEZx0-2FEqBMqaYClWnrMz-2FLYEcg5uK0YcFX4Ou8DhFnhsyYZIWZd1782IZqEKIwsHC2GAFVPB3fH7v4iihYYuwXdjEjm06zhPqavgXHhc-2Fz-2BIXG16vQ3QlJCA-3D'
const ECC_U12RL_BOOKING = 'http://url5260.eventconnect.io/ls/click?upn=u001.cUCSVxMZY2gTfuHKt-2FJ5Q5bv00MV60A6WyEsD9ygjFavKojd8IFN6IHmQoTChTGTZ4UmRrgOO5-2B6Illhi54UqmpzHuDVozMM4r-2FTLVK71TITEMK-2Fy6atqekNrz1-2BqRpcSInmYsq8XppRDvWsw-2FU0mgjahaPQt-2B1b9wIdvQ4nZ3AV7Ap8rxRlSKULIkwAMLcr8y7yeHseg1B4kMpWSmDr9xGsOyT0TCrSld5imPyfDs-2FjxoqD0-2FAoVDzEE6gGGmm5OAh2UP9RKP-2Fm-2F7p0X51X-2FyIdFrLC7oaL3LTEO9e9x9o-3DIKhg_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8CmtOVHSTYjjQ9P5Y0sbNsEQcr3eCGFrUQz2cwXGQCurFLoZ6-2Fk3w-2Fmh9K8AoVa0qvd81Xcl2yQHD1YPgjSn7foNxyq2LIpXAvPu4665MsKfLSROQg5VH8jzWqkSWGm-2BU9R27ldh3u2hpjNCQvTRmBIhi8g7lu16ejLVRUUy3INZ5McI2A-2FJIzi4fdYgObPFEqbR-2Bp-2Bfy-2BowT4slWnhuLfAFnLvtDmKha23AqDghYT3p1JqHhWsxLwWOg896dF8Tg0xWXijxrRNvObOw9IkmHllxh7AwTNRPqSMzdUEbv2UGhS5syaTa-2Fb-2Bo473UlLQ5nKb6A32lP-2FBqG9AHWBIw16TUmHwfbIoyTDwl-2FIk08Y-2FBXraqieJmL9pQZ1Fzot-2F9nisxXXkvfXY-2F0myfhlwwLHr6UFvXg4z9H9VYcHFbCd1cOp7-2FMRGGMVwtc9lvnCYmY-3D'

// NCFC Girls Junior Showcase (Raleigh, Nov 7–8) — Team Travel Source group-block links
// (blocks created by Jen, Sep 16; rooms release back to general inventory Wed, Sep 23).
const NCFC_U13RL_BOOKING = 'https://u45467925.ct.sendgrid.net/ls/click?upn=u001.twiocRcK7Q2WvNS2eAoUiP7gSc3ysU7EqTeI696kqeVCCpGxqPFR8tToevsnQiFABhlis8rpEtfMAqfE8F4iBE5e6By954x5EO0ysFcHTorSOl4l-2F3OFgm3Y-2B5O8mMKmCclK_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr9vFd1Nu-2F-2Fdx-2Bva-2Bb-2BEM4etJCm6gXu1ZcAt70AsgZoTARgCT9MJnuvOJg1mmtbdGSxpsEZEujjmWavhof1f69bAUQR9pPBVdGxZ4bAlkQEpaLA8GoZCgfF0IPBp8tKllUrj3IZq2Pz0F9Jv5zM4ZGVga4Ev-2B6Qr-2Bq7nFwWv9A3muQ-3D-3D'
const NCFC_U14RL_BOOKING = 'https://u45467925.ct.sendgrid.net/ls/click?upn=u001.twiocRcK7Q2WvNS2eAoUiP7gSc3ysU7EqTeI696kqeVCCpGxqPFR8tToevsnQiFABhlis8rpEtfMAqfE8F4iBE5e6By954x5EO0ysFcHTorl0eU34jHx3rvffjHmsIv8udQJ_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr97Nq8Vakr8stFpll0ayDuRWx-2BtbnV-2FYUzil4SthhgTUkprs-2FPSUS7D0-2FKrORx0ucUaW1-2FBXus3vIZbwhZCkdaQKs1yurB-2FWHd41ecxe014qa4wWoukH7Wza-2FSsQnZCd4KNyaG0hj0s4-2B5apMkbNf5dQCqkF32lYV2PoiLn9a3CPQ-3D-3D'
// Block is registered with TTS as "MD United U12G (2014/2015) South Calvert".
const NCFC_U12_SOUTHCALVERT_BOOKING = 'https://u45467925.ct.sendgrid.net/ls/click?upn=u001.twiocRcK7Q2WvNS2eAoUiP7gSc3ysU7EqTeI696kqeVCCpGxqPFR8tToevsnQiFABhlis8rpEtfMAqfE8F4iBE5e6By954x5EO0ysFcHTooGaJLoj4mBHUwIFF7pd-2BEY7XP-_w31U-2F1YMhLU7dy-2BxDmaakwuTWn8o4WB6JO1lMeHYmr8zftzC71Vzsh4KzFg73Nb-2B2kiXwGFHqqtYnFt2sBqL75Wb5NuQ69AlbWr83iRwB9QhJAZJEqzl9N4YBWJ8RRcaGvR1kRHnnKFhKDcPGI5Mv76Qr2CMD8pNtLzxjMpkEVEWu9i4IQET3MjzlChDrLBcPYLE0eBCvvhXYN1XpYpl9Q-3D-3D'

// Conference away-game rosters differ by season:
//   Fall  = U12 Pre-ECNL & Pre-ECNL RL, U13–U14 ECNL & ECNL RL
//   Spring = U11 Pre-ECNL, plus U12–U18/19 ECNL & ECNL RL (U11 is spring-only)
const FALL_LEAGUE_AGES = ['U12', 'U13', 'U14']
const FALL_LEAGUE_TEAMS = ['U12 Pre-ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL']
const SPRING_LEAGUE_AGES = ['U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18/19']
const SPRING_LEAGUE_TEAMS = [
  'U11 Pre-ECNL',
  'U12 Pre-ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL',
  'U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL',
  'U18/19 ECNL', 'U18/19 ECNL RL',
]

// Nov 2026 – Feb 2027: Harry is covering U15 ECNL RL for Sara Butler. He's
// local, so the covering coach needs no hotel room (coachRooms: 0). Applied
// via `coverage` on each in-window event.
const SARA_COVER = { 'U15 ECNL RL': { coach: 'Sara Butler (Harry covering)', coachRooms: 0 } }
// Feb RL Florida — Harry likely covering but not confirmed, so coach + room are TBD.
const SARA_COVER_TBD = { 'U15 ECNL RL': { coach: 'Sara Butler (Harry covering — TBD)', coachRooms: 'TBD' } }

export const events = [
  // ================= CONFIRMED — ECNL New Jersey (COMPLETE — booking closed, event underway) =================
  {
    no: 1, sortDate: '2026-08-21', ages: ['U13', 'U14'], confirmed: true, action: false, closed: true, travel: 'drive',
    league: 'ECNL & ECNL RL', name: 'ECNL & ECNL RL Girls New Jersey 2026',
    dates: 'Aug 21–23, 2026 (Fri–Sun)', location: 'Somerset, NJ', venue: PDA_COMPLEX,
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

  // ================= CONFIRMED — Pre-ECNL (booking CLOSED — deadlines passed) =================
  {
    no: 3, sortDate: '2026-10-03', ages: ['U11', 'U12'], confirmed: true, action: false, closed: true, travel: 'either',
    league: 'Pre-ECNL', name: 'Pre-ECNL Carolina Cup',
    dates: 'Oct 3–4, 2026 (Sat–Sun)', location: 'Wilmington, NC',
    note: 'Hotel booking closed Sun, Aug 16. Both teams are at the Hampton Inn Wilmington — 2 Queen Beds w/ breakfast, $140/night, 2 nights (Fri 10/2 & Sat 10/3). Coach Steve Campbell’s room is in the U12 block. If you still need a room, contact your team manager.',
    teams: [
      {
        team: 'U11 Pre-ECNL', bookDeadline: 'Sun, Aug 16 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 2 (night before)', nights: '2 · Fri·Sat',
        players: 13, playerRooms: 13, coaches: 'Steve Campbell', coachRooms: 0,
        teamCode: '', hotelLink: WILMINGTON_U11_BOOKING,
        hotels: [
          { name: 'Hampton Inn Wilmington – University Area/Smith Creek Station', address: '124 Old Eastwood Rd, Wilmington, NC 28403', rooms: '13-room block · 2 Queen Beds w/ breakfast · $140/night' },
        ],
      },
      {
        team: 'U12 Pre-ECNL', bookDeadline: 'Sun, Aug 16 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 2 (night before)', nights: '2 · Fri·Sat',
        players: 12, playerRooms: 12, coaches: 'Steve Campbell', coachRooms: 1,
        teamCode: '', hotelLink: WILMINGTON_U12_BOOKING,
        hotels: [
          { name: 'Hampton Inn Wilmington – University Area/Smith Creek Station', address: '124 Old Eastwood Rd, Wilmington, NC 28403', rooms: '13-room block (12 players + coach) · 2 Queen Beds w/ breakfast · $140/night' },
        ],
      },
    ],
  },
  {
    no: 4, sortDate: '2026-10-31', ages: ['U10', 'U11', 'U12'], confirmed: true, action: false, closed: true, travel: 'drive',
    league: 'Pre-ECNL', name: 'Pre-ECNL East Coast Cup',
    dates: 'Oct 31 – Nov 1, 2026 (Sat–Sun)', location: 'Richmond, VA',
    note: 'Hotel booking closed Sun, Sep 6 @ 7:00 PM. All five teams check in Friday, Oct 30 (2 nights, Fri & Sat). If you still need a room, contact your team manager, or EventConnect at (888) 723-2064.',
    teams: [
      { team: 'U10 Red', bookDeadline: 'Sun, Sep 6 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 30', nights: '2 · Fri·Sat',
        teamCode: '', hotelLink: ECC_U10_BOOKING,
        hotels: [
          { name: 'Hampton Inn Richmond West Innsbrook', address: '10800 W Broad St, Glen Allen, VA', rooms: '13-room block · 2 Queen Beds · $179/night avg (shares hotel with U11 Pre-ECNL RL)' },
        ] },
      { team: 'U11 Pre-ECNL', bookDeadline: 'Sun, Sep 6 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 30', nights: '2 · Fri·Sat',
        teamCode: '', hotelLink: ECC_U11_BOOKING,
        hotels: [
          { name: 'Richmond Marriott Short Pump', address: '4240 Dominion Boulevard, Glen Allen, VA', rooms: '13-room block · 2 Queen Beds · $169/night avg (shares hotel with U12 Pre-ECNL)' },
        ] },
      { team: 'U11 Pre-ECNL RL', bookDeadline: 'Sun, Sep 6 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 30', nights: '2 · Fri·Sat',
        teamCode: '', hotelLink: ECC_U11RL_BOOKING,
        hotels: [
          { name: 'Hampton Inn Richmond West Innsbrook', address: '10800 W Broad St, Glen Allen, VA', rooms: '14-room block · 2 Queen Beds · $179/night avg (shares hotel with U10 Red)' },
        ] },
      { team: 'U12 Pre-ECNL', bookDeadline: 'Sun, Sep 6 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 30', nights: '2 · Fri·Sat',
        teamCode: '', hotelLink: ECC_U12_BOOKING,
        hotels: [
          { name: 'Richmond Marriott Short Pump', address: '4240 Dominion Boulevard, Glen Allen, VA', rooms: '13-room block · 2 Queen Beds · $169/night avg (shares hotel with U11 Pre-ECNL)' },
        ] },
      { team: 'U12 Pre-ECNL RL', bookDeadline: 'Sun, Sep 6 @ 7:00 PM',
        arrivalDate: 'Fri, Oct 30', nights: '2 · Fri·Sat',
        teamCode: '', hotelLink: ECC_U12RL_BOOKING,
        hotels: [
          { name: 'Hyatt House Richmond / Short Pump', address: '11800 W Broad Street, Richmond, VA', rooms: '14-room block · 2 Queen Beds · $179/night avg' },
        ] },
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

  // ================= ECNL RL showcases =================
  {
    no: 10, sortDate: '2027-01-08', ages: ['U17', 'U18/19'], teamsList: ['U17 ECNL RL', 'U18/19 ECNL RL'], confirmed: true, action: false, travel: 'fly',
    league: 'ECNL RL', name: 'ECNL RL Girls Florida — Winter',
    dates: 'Jan 8–10, 2027 (Fri–Sun)', location: 'Sanford, FL',
    note: 'Both the U17 and U18/19 ECNL RL are placed in this event. Hotel and flight details will follow.', teams: [],
  },
  // ── OFF the guide (per Win, Sep 12): ECNL RL Florida — Spring (Feb 26–28) is Leaders Cup
  //    qualifiers only at U15–U17; we are NOT attending. Restore if that changes. ──
  // {
  //   no: 11, sortDate: '2027-02-26', ages: ['U15', 'U16'], teamsList: ['U15 ECNL RL', 'U16 ECNL RL'], confirmed: false, action: false, travel: 'fly',
  //   league: 'ECNL RL', name: 'ECNL RL Girls Florida — Spring',
  //   dates: 'Feb 26–28, 2027 (Fri–Sun)', location: 'Lakewood Ranch, FL',
  //   note: 'Requested for U15–U18/19.', coverage: SARA_COVER_TBD, teams: [],
  // },
  {
    no: 12, sortDate: '2027-05-28', ages: ['U15', 'U16'], teamsList: ['U15 ECNL RL', 'U16 ECNL RL'], confirmed: true, action: false, travel: 'drive',
    league: 'ECNL RL', name: 'ECNL RL Girls North Carolina',
    dates: 'May 28–30, 2027 (Fri–Sun)', location: 'Winston-Salem, NC',
    note: 'U15 and U16 ECNL RL are in. (U17 RL is not placed in this event.)', teams: [],
  },

  // NOTE: WAGS Tournament (Oct 10–12, Northern VA — U12 RL + 13/14 ECNL & RL) is deliberately
  // NOT on the guide: day-trip event, no team hotels (Loudoun / N. Fairfax fields; Fredericksburg is U16–19 only).

  // ================= PENDING — Non-ECNL travel events (applied; NOT yet confirmed) =================
  {
    no: 13, sortDate: '2026-11-07', ages: ['U10', 'U11', 'U12', 'U13', 'U14'],
    confirmed: true, action: true, travel: 'drive',
    league: 'Showcase', name: 'NCFC Girls Junior Showcase',
    dates: 'Nov 7–8, 2026 (Sat–Sun)', location: 'Raleigh, NC', venue: 'WRAL Soccer Park, Raleigh, NC',
    note: 'Hotel blocks are open through Team Travel Source — ROOMS RELEASE WEDNESDAY, SEPT 23, so book before then or unclaimed rooms go back to general inventory. Blocks are in place for U12 South Calvert and the U13 and U14 ECNL RL below; more to follow for the remaining teams. Questions: Team Travel Source, (502) 354-9103.',
    teams: [
      { team: 'U10 White', bookDeadline: 'Wed, Sep 23 (rooms release)', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U11 Pre-ECNL RL', bookDeadline: 'Wed, Sep 23 (rooms release)', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL', bookDeadline: 'Wed, Sep 23 (rooms release)', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 Pre-ECNL RL', bookDeadline: 'Wed, Sep 23 (rooms release)', teamCode: '', hotelLink: '', hotels: [] },
      { team: 'U12 South Calvert', bookDeadline: 'Wed, Sep 23 (rooms release)',
        teamCode: 'Group G-00777448', hotelLink: NCFC_U12_SOUTHCALVERT_BOOKING,
        hotels: [
          { name: 'La Quinta Inn by Wyndham Raleigh Durham Airport', address: 'Raleigh Durham Airport, Morrisville, NC', rooms: '32 room nights held · Group G-00777448', bookLink: NCFC_U12_SOUTHCALVERT_BOOKING },
        ] },
      { team: 'U13 ECNL RL', bookDeadline: 'Wed, Sep 23 (rooms release)',
        teamCode: 'Group G-00777460', hotelLink: NCFC_U13RL_BOOKING,
        hotels: [
          { name: 'Holiday Inn Express & Suites Research Triangle Park', address: 'Research Triangle Park, Durham, NC', rooms: '36 room nights held · Group G-00777460', bookLink: NCFC_U13RL_BOOKING },
        ] },
      { team: 'U14 ECNL RL', bookDeadline: 'Wed, Sep 23 (rooms release)',
        teamCode: 'Group G-00773628', hotelLink: NCFC_U14RL_BOOKING,
        hotels: [
          { name: 'Holiday Inn Express & Suites Raleigh Durham Airport', address: 'Raleigh Durham Airport, Morrisville, NC', rooms: '36 room nights held · Group G-00773628', bookLink: NCFC_U14RL_BOOKING },
        ] },
    ],
  },
  {
    no: 14, sortDate: '2026-11-20', ages: ['U15', 'U16'],
    teamsList: ['U15 Premier', 'U16 Premier'],
    confirmed: true, action: false, travel: 'drive',
    league: 'Showcase', name: 'NCFC Girls College Showcase',
    dates: 'Nov 20–22, 2026', location: 'Raleigh, NC', venue: 'WRAL Soccer Park, Raleigh, NC',
    note: 'Non-ECNL travel showcase (NCFC visitRaleigh.com Girls College Showcase). Premier teams only — the ECNL RL teams play the PDA Girls Invitational (Nov 21–22) that same weekend, not this event.', teams: [],
  },
  {
    no: 15, sortDate: '2026-11-21', ages: ['U15', 'U16', 'U17', 'U18/19'],
    teamsList: ['U15 ECNL', 'U15 ECNL RL', 'U16 ECNL', 'U16 ECNL RL', 'U17 ECNL', 'U17 ECNL RL', 'U18/19 ECNL', 'U18/19 ECNL RL'],
    confirmed: false, action: true, travel: 'drive',
    league: 'Showcase', name: 'PDA Girls Invitational (Thanksgiving Showcase)',
    dates: 'Nov 21–22, 2026 (Sat–Sun)', location: 'New Jersey', venue: PDA_COMPLEX,
    note: 'Our application is submitted and we expect acceptance shortly — please go ahead and BOOK YOUR ROOMS NOW, because the blocks are already held in our name and the deadline is firm: FRIDAY, SEPT 25 @ 8:00 AM. All blocks are Friday & Saturday nights (check in Fri, Nov 20 · check out Sun, Nov 22). Use your team’s Book link and TEAM CODE below — codes use a DOUBLE dash, and note PDA--O9 / PDA--O4 are the LETTER O, not zero. Please contact On Location Anthony Travel at (866) 386-0059 if you need help making your reservation.',
    coverage: SARA_COVER,
    teams: [
      { team: 'U15 ECNL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--T7', hotelLink: PDA_BK_T7,
        hotels: [
          { name: 'Hyatt House Branchburg/Bridgewater', address: '3141 U.S. 22, Branchburg, NJ', rooms: '15 rooms · 1-BR Suite, King + sofa bed · $144/night · Code PDA--T7', bookLink: PDA_BK_T7 },
          { name: 'Residence Inn Bridgewater Branchburg', address: '3241 Route 22, Branchburg, NJ', rooms: '3 overflow rooms · King + sofa bed · $150/night · Code PDA--U8', bookLink: PDA_BK_U8 },
        ] },
      { team: 'U15 ECNL RL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM', coaches: 'Sara Butler (Harry covering)', coachRooms: 0,
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--N9', hotelLink: PDA_BK_N9,
        hotels: [
          { name: 'Sonesta Select Whippany Hanover', address: '157 New Jersey 10, Whippany, NJ', rooms: '17 rooms · 2 Queen Beds · $169/night · Code PDA--N9', bookLink: PDA_BK_N9 },
        ] },
      { team: 'U16 ECNL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--O9 (letter O)', hotelLink: PDA_BK_O9,
        hotels: [
          { name: 'Delta Hotels by Marriott Basking Ridge', address: '80 Allen Rd, Basking Ridge, NJ', rooms: '14 rooms · 2 Queen Beds · $169/night · Code PDA--O9 (letter O, not zero) · pet-free hotel', bookLink: PDA_BK_O9 },
          { name: 'Residence Inn Bridgewater Branchburg', address: '3241 Route 22, Branchburg, NJ', rooms: '6 overflow rooms · King + sofa bed · $150/night · Code PDA--D9', bookLink: PDA_BK_D9 },
        ] },
      { team: 'U16 ECNL RL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--N6', hotelLink: PDA_BK_N6,
        hotels: [
          { name: 'DoubleTree by Hilton Princeton', address: '4355 U.S. 1, Princeton, NJ', rooms: '20 rooms · 7 King + sofa bed ($179/night) & 13 × 2 Queen ($199/night) · Code PDA--N6', bookLink: PDA_BK_N6 },
        ] },
      { team: 'U17 ECNL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--J5', hotelLink: PDA_BK_J5,
        hotels: [
          { name: 'Courtyard by Marriott Ewing Princeton', address: '360 Scotch Road, Ewing Township, NJ', rooms: '15 rooms · 2 Queen Beds · $144/night · Code PDA--J5', bookLink: PDA_BK_J5 },
        ] },
      { team: 'U17 ECNL RL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--Z2', hotelLink: PDA_BK_Z2,
        hotels: [
          { name: 'Holiday Inn Express and Suites North Brunswick', address: '2095 US Hwy 1, North Brunswick, NJ', rooms: '14 rooms · 2 Queen Beds · $139/night · Code PDA--Z2', bookLink: PDA_BK_Z2 },
          { name: 'The Heldrich Hotel', address: '10 Livingston Avenue, New Brunswick, NJ', rooms: '3 overflow rooms · 2 Double Beds · $135/night · Code PDA--K8', bookLink: PDA_BK_K8 },
        ] },
      { team: 'U18/19 ECNL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--Q7', hotelLink: PDA_BK_Q7,
        hotels: [
          { name: 'Crowne Plaza Edison', address: '2055 Lincoln Hwy, Edison, NJ', rooms: '11 rooms · 2 Queen Beds · $149/night · Code PDA--Q7', bookLink: PDA_BK_Q7 },
          { name: 'Home2 Suites by Hilton Edison', address: '858 New Durham Road, Edison, NJ', rooms: '8 overflow rooms · King + sofa bed · $159/night · Code PDA--D2', bookLink: PDA_BK_D2 },
        ] },
      { team: 'U18/19 ECNL RL', bookDeadline: 'Fri, Sep 25 @ 8:00 AM',
        arrivalDate: 'Fri, Nov 20', nights: '2 · Fri·Sat', teamCode: 'PDA--O4 (letter O)', hotelLink: PDA_BK_O4,
        hotels: [
          { name: 'Sonesta Select Whippany Hanover', address: '157 New Jersey 10, Whippany, NJ', rooms: '18 rooms · 2 Queen Beds · $169/night · Code PDA--O4 (letter O, not zero)', bookLink: PDA_BK_O4 },
        ] },
    ],
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
    no: 17, sortDate: '2027-05-28', ages: ['U17'], teamsList: ['U17 ECNL RL'], confirmed: false, action: false, travel: 'drive',
    league: 'Showcase', name: 'PDA Memorial Day',
    dates: 'Memorial Day weekend, May 2027 — dates being finalized', location: 'New Jersey',
    note: 'Only the U17 ECNL RL are going. Memorial Day falls late this year, so this lands the same weekend as ECNL RL North Carolina — final dates are being adjusted. The 13s and 14s may be added as well (TBD).', teams: [],
  },

  // ================= CONFIRMED — ECNL Wilmington (U13/U14) =================
  // ── Temporarily off the guide (per Harry, Aug 2026): ECNL Wilmington U13/U14. Uncomment to restore. ──
  // {
  //   no: 25, sortDate: '2026-10-10', ages: ['U13', 'U14'], confirmed: true, action: true, travel: 'either',
  //   league: 'ECNL', name: 'ECNL Wilmington (U13/U14)',
  //   dates: 'Oct 10–12, 2026 (Sat–Mon)', location: 'Wilmington, NC', note: '',
  //   teams: [
  //     { team: 'U13 ECNL', players: 18, playerRooms: 18, coaches: 'Darrell Gonzalez', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
  //     { team: 'U14 ECNL', players: 17, playerRooms: 17, coaches: 'Scott Villagran', coachRooms: 1, bookDeadline: '', teamCode: '', hotelLink: '', hotels: [] },
  //   ],
  // },

  // ================= LEAGUE — Conference AWAY games in PA/NJ (locals excluded) =================
  // Families book their OWN hotel near the facility IF their team's kickoff meets the
  // overnight rule (NJ before 1 PM · elsewhere before 11 AM). No action until game times
  // are released; then flip action:true and list only the teams that qualify.
  { no: 18, sortDate: '2026-09-26', league: 'League', type: 'league', confirmed: true, action: true, travel: 'drive',
    ages: FALL_LEAGUE_AGES, teamsList: FALL_LEAGUE_TEAMS,
    name: 'League @ PDA Blue', dates: 'Sat, Sep 26, 2026', location: 'PDA Blue Main Complex, Somerset, NJ', venue: PDA_COMPLEX,
    note: 'Schedule update (Aug 26, from PDA): ECNL’s new 9v9 field-size rule moved both U12 games to Field 7 (grass), and the U12 Pre-ECNL RL kickoff moved to 4:00 PM — that team NO longer needs the Friday-night stay.',
    // NJ venue: overnight if kickoff before 1:00 PM. Times/fields per Sandra O'Neill (PDA), Aug 26,
    // cross-checked against the PlayMetrics team calendars.
    games: [
      { team: 'U12 Pre-ECNL', time: '12:00 PM · Field 7 (grass)', overnight: true },
      { team: 'U12 Pre-ECNL RL', time: '4:00 PM · Field 7 (grass)', overnight: false },
      { team: 'U13 ECNL', time: '10:00 AM · Field 1', overnight: true },
      { team: 'U14 ECNL', time: '12:00 PM · Field 5', overnight: true },
      { team: 'U13 ECNL RL', time: '4:00 PM · Field 5', overnight: false },
      { team: 'U14 ECNL RL', time: '2:00 PM · Field 5', overnight: false },
    ],
    teams: [] },
  { no: 19, sortDate: '2026-09-27', league: 'League', type: 'league', confirmed: true, action: false, travel: 'drive',
    ages: FALL_LEAGUE_AGES, teamsList: FALL_LEAGUE_TEAMS,
    name: 'League @ PDA White', dates: 'Sun, Sep 27, 2026', location: 'PDA White, New Jersey',
    note: 'Sunday game times are still being finalized with PDA White — please hold off on booking hotels for this one. Teams also play at PDA Blue on Saturday (Sep 26), so we expect most families will stay over Saturday night; we’ll confirm and flag who needs to book as soon as the times are locked.',
    // Hold parents off booking until Sunday times are released (per Harry). Flip action:true
    // and set overnight true/false per team once PDA publishes the Sunday schedule.
    games: [
      { team: 'U12 Pre-ECNL', time: 'Sun — TBD', overnight: null },
      { team: 'U12 Pre-ECNL RL', time: 'Sun — TBD', overnight: null },
      { team: 'U13 ECNL', time: 'Sun — TBD', overnight: null },
      { team: 'U13 ECNL RL', time: 'Sun — TBD', overnight: null },
      { team: 'U14 ECNL', time: 'Sun — TBD', overnight: null },
      { team: 'U14 ECNL RL', time: 'Sun — TBD', overnight: null },
    ],
    teams: [] },
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
    name: 'League Cup @ PDA Blue', dates: 'Sun, Dec 13, 2026', location: 'PDA Blue, New Jersey', venue: PDA_COMPLEX,
    coverage: SARA_COVER,
    note: 'Sunday AWAY game at PDA Blue (NJ), per the league schedule. Note: every team also has a HOME League Cup game Saturday, Dec 12 (vs Match Fit) — so all teams play in MD Saturday, then drive to NJ and stay Saturday night before Sunday’s game. Kickoffs below are confirmed in PlayMetrics/Athlete One (ECNL teams on Field 5, RL teams on Field 3). U15 ECNL RL is shown with the same slot as U15 ECNL — confirm once its schedule posts.',
    // Away in NJ, but all teams have a Sat 12/12 home game first, so everyone stays Sat night.
    // Times from the PlayMetrics team calendars (League Cup schedules activated in A1, Aug 27).
    games: [
      { team: 'U16 ECNL', time: '10:00 AM · Field 5', overnight: true },
      { team: 'U16 ECNL RL', time: '10:00 AM · Field 3', overnight: true },
      { team: 'U15 ECNL', time: '12:00 PM · Field 5', overnight: true },
      { team: 'U15 ECNL RL', time: '12:00 PM · Field 3', overnight: true },
      { team: 'U17 ECNL', time: '2:00 PM · Field 5', overnight: true },
      { team: 'U17 ECNL RL', time: '2:00 PM · Field 3', overnight: true },
      { team: 'U18/19 ECNL', time: '4:00 PM · Field 5', overnight: true },
      { team: 'U18/19 ECNL RL', time: '4:00 PM · Field 3', overnight: true },
    ],
    teams: [] },

  // ================= Jefferson Cup — youngers weekend =================
  { no: 26, sortDate: '2027-03-13', ages: ['U10', 'U11', 'U12', 'U13', 'U14'],
    teamsList: ['U10 Red', 'U11 Pre-ECNL', 'U11 Pre-ECNL RL', 'U12 Pre-ECNL', 'U12 Pre-ECNL RL', 'U13 ECNL', 'U13 ECNL RL', 'U14 ECNL', 'U14 ECNL RL'],
    confirmed: false, action: false, travel: 'drive',
    league: 'Tournament', name: 'Jefferson Cup (Youngers)', dates: 'March 2027 (youngers weekend)', location: 'Richmond, VA',
    note: 'Non-ECNL travel tournament.', teams: [] },

  // ================= PA Classics — Premier (Dec) =================
  { no: 27, sortDate: '2026-12-11', ages: ['U15', 'U16'], teamsList: ['U15 Premier', 'U16 Premier'], confirmed: false, action: false, travel: 'drive',
    league: 'Showcase', name: 'PA Classics', dates: 'December 2026', location: 'Lancaster, PA',
    note: 'Non-ECNL travel showcase (Premier).', teams: [] },
]
