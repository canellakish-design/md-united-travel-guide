# Handover → Claude Chrome
**Maryland United FC — Girls Parent Travel Guide**
Prepared 12 Sep 2026. Everything below needs a real browser; it could not be verified from the Claude Code session.

## Context

Harry Canellakis is Girls Director of Coaching at Maryland United FC. The club publishes a Parent Travel Guide (a React site) that tells families which events each team attends, which hotel block to book, and by when. Live site: **https://quiet-horse-8ca539.netlify.app/**

Parents are being pointed at the PDA booking links **this week**, with a hard deadline of **Friday, Sept 25 @ 8:00 AM**. Task 1 is therefore urgent.

---

## TASK 1 — Verify the PDA hotel booking links actually work ⚠️ URGENT

**Why:** A non-JS fetch of one link returned *"No hotels available for your selected dates… this occurs when booking outside event dates."* That may just be an artifact of JavaScript not running — or it may be real. If it's real, every family who clicks the guide this week hits a dead end before a hard deadline.

**Background:** These are On Location / Anthony Travel team blocks for the **PDA Girls Invitational 2026**. Games are **Sat–Sun, Nov 21–22**. Hotels are booked **Fri Nov 20 → Sun Nov 22 (2 nights, Fri & Sat)**. Note the vendor's own confirmation header confusingly says "November 20–21" and PDA's marketing email says "November 22–23" — Harry has confirmed games are Sat/Sun with Fri/Sat hotel nights.

**What to do:** Open 2–3 of the links below in Chrome. For each, confirm:
1. The page loads a real booking screen (not an error).
2. It shows **the correct hotel** for that team.
3. **Rooms are actually available** for Nov 20 → Nov 22.
4. The team code is applied (or can be entered successfully).
5. The nightly rate roughly matches the expected rate below.

If you get "No hotels available," try adjusting the check-in/check-out dates on the page to see whether a different range returns inventory — that would tell us the block dates are wrong, which is a big deal worth flagging immediately.

### The 12 blocks (8 teams; 4 teams have a second overflow hotel)

| Team | Code | Hotel | Rooms | Rate |
|---|---|---|---|---|
| U15 ECNL | `PDA--T7` | Hyatt House Branchburg/Bridgewater | 15 | $144 |
| U15 ECNL | `PDA--U8` | Residence Inn Bridgewater Branchburg | 3 | $150 |
| U15 ECNL RL | `PDA--N9` | Sonesta Select Whippany Hanover | 17 | $169 |
| U16 ECNL | `PDA--O9` | Delta Hotels Basking Ridge (pet-free) | 14 | $169 |
| U16 ECNL | `PDA--D9` | Residence Inn Bridgewater Branchburg | 6 | $150 |
| U16 ECNL RL | `PDA--N6` | DoubleTree Princeton | 20 | $179 / $199 |
| U17 ECNL | `PDA--J5` | Courtyard Ewing Princeton | 15 | $144 |
| U17 ECNL RL | `PDA--Z2` | Holiday Inn Express North Brunswick | 14 | $139 |
| U17 ECNL RL | `PDA--K8` | The Heldrich, New Brunswick | 3 | $135 |
| U18/19 ECNL | `PDA--Q7` | Crowne Plaza Edison | 11 | $149 |
| U18/19 ECNL | `PDA--D2` | Home2 Suites Edison | 8 | $159 |
| U18/19 ECNL RL | `PDA--O4` | Sonesta Select Whippany Hanover | 18 | $169 |

**IMPORTANT — `PDA--O9` and `PDA--O4` use the LETTER O, not a zero.** Codes use a **double dash**. Help line: **(866) 386-0059**, PDA@onlocationexp.com.

**Test links** (each is scoped to one block; they're in the guide and in Harry's inbox from PDA@onlocationexp.com, subject "Book Your Room for PDA Girls Invitational 2026"):

- U15 ECNL / Hyatt House:
  `https://book.onlocationexp.com/pda-girls-invitational-2026/?booking=0&team-members-booking=1&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzUiLCJ0ZWFtX2NvZGUiOiJQREEtLVQ3IiwidGltZXN0YW1wIjoxNzg5MTYyODE4LCJyYW5kb20iOiJuRnFFeWJldnpOM05ueEhEIn18YWJiYTRlOTkzOWUyN2ViYWM1N2Q5YWMxZmJhM2U1NzM3ZjZlNTk1MTQ5ZjBlOGNjMzRkNjg5YTA5YWY5YmU0OQ=&team_code=PDA--T7&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjU4`

- U16 ECNL / Delta Basking Ridge:
  `https://book.onlocationexp.com/pda-girls-invitational-2026/?booking=0&team-members-booking=1&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzNzMiLCJ0ZWFtX2NvZGUiOiJQREEtLU85IiwidGltZXN0YW1wIjoxNzg5MTYzNDQwLCJyYW5kb20iOiIwdFY3V29RSnh3YjVQQTFhIn18Yjc5OGNmNWM4ODU1ODM2NjMzNTg1MjFlMmNjNmYxZjA2NGQ4ZjIzZTcxYjU0ZDhkMGM3NDU1Njc3ZWRmOThkMA=&team_code=PDA--O9&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=NjYz`

- U18/19 ECNL RL / Sonesta:
  `https://book.onlocationexp.com/pda-girls-invitational-2026/?booking=0&team-members-booking=1&team_invite_token=eyJib29raW5nX2lkIjoiR0RMUkpQMTAzODciLCJ0ZWFtX2NvZGUiOiJQREEtLU80IiwidGltZXN0YW1wIjoxNzg5MTY0NzMxLCJyYW5kb20iOiJ5UGlHaW84c3VjelZQaExqIn18MDRkZDBlNWJkY2NlOTMyNjMxYzc0NmI0NmMyNDk3NTBmNjlhM2Q4YjVhYWRjZDgzMTkwYWM2NDA2NGUwNGVhYw=&team_code=PDA--O4&gdlr-check-in=2026-11-20&gdlr-check-out=2026-11-22&email_identifier=Njc5`

**Report back:** works / doesn't work, and if broken, the exact error and whether other dates return inventory.

---

## TASK 2 — ECNL acceptance team lists (which of our teams are actually placed)

**Why:** The guide marks each event "Participation Confirmed" (green) or "Pending Confirmation" (grey). Several are guesses. The authoritative source is the team-list spreadsheet linked from each event on the ECNL site.

**Where:**
- ECNL Girls: **https://theecnl.com/sports/ecnl-girls/schedule/2026-27**
- ECNL Regional League Girls: **https://theecnl.com/sports/ecnl-regional-league-girls/schedule/2026-27**
- Pre-ECNL Girls: **https://theecnl.com/sports/pre-ecnl-girls/schedule/2026-27**

Each event row has a **TEAM LIST** link (Google Sheets). **Make sure you're on the GIRLS pages — boys events are listed separately.**

**Search each team list for "Maryland United"** and record which age groups appear. Priority events:

| Event | Dates | Ages | What we currently believe |
|---|---|---|---|
| ECNL New Jersey | Aug 21–23 | U13–U14 | Attended (done) |
| ECNL St. Louis | Sep 11–13 | U13–U14 | We declined — confirm we're NOT on it |
| **ECNL NC Fall (Wilmington)** | Oct 10–12 | U13–U14 | **We applied and were NOT placed** — confirm still absent, and whether a waitlist spot opened |
| ECNL Florida Fall (Sanford) | Dec 5–7 | U16–U18/19 | Guide says confirmed for U16 + U17 — **verify** |
| ECNL Florida Winter | Jan 9–11 | U16–U18/19 | Guide says confirmed U16/U17/U18-19 — **verify** |
| ECNL Florida Spring | Feb 26–28 | U15–U18/19 | Guide says confirmed U15 + U18/19 — **verify** |
| ECNL NC Spring (Greensboro) | May 29–31 | U15–U17 | Guide says confirmed U15/U16/U17 — **verify** |
| ECNL South Carolina (Greer) | May 7–9 | U12–U15 | We are NOT on it (declined). Harry asked ECNL about adding U13/U14 — **check if we've since been added** |
| **RL Florida Winter (Sanford)** | Jan 8–10 | U17–U18/19 | Guide says *pending* — **verify placement** |
| **RL North Carolina (Winston-Salem)** | May 28–30 | U15–U17 | Believed U15 + U16 RL in, U17 RL **not** placed — verify |

Also worth grabbing while you're there: the **Pre-ECNL East Coast Cup** (Oct 31–Nov 1, Richmond) list — we should have U10 Red, U11 Pre-ECNL, U11 Pre-ECNL RL, U12 Pre-ECNL, U12 Pre-ECNL RL (five teams).

**Report back:** a simple table of event → which Maryland United teams are listed. Flag any mismatch with the "currently believe" column above.

---

## TASK 3 — PDA Girls Invitational application status

Harry submitted the club's application on **Sept 12**; acceptance is pending and PDA said they were near capacity. The guide currently shows this event as **Pending Confirmation** with booking still live.

- Event page: **https://www.pdasoccer.org/pda-girls-invitational-showcase-11.aspx**
- Check for an accepted-teams list, or any indication registration has closed.
- Contact on file: Darren Marshall, PDA Tournaments, 978-400-8144.

**Report back:** whether Maryland United appears as accepted, and whether all 8 teams (U15/U16/U17/U18-19, ECNL and RL) are in or only some. A partial acceptance would mean splitting the card.

---

## TASK 4 — Quick visual check of the live guide

Open **https://quiet-horse-8ca539.netlify.app/** and confirm:
- The PDA Girls Invitational card shows **8 teams**, each with hotel(s), team code, "Book Rooms" button, and the Sept 25 deadline.
- The four teams with two hotels (U15 ECNL, U16 ECNL, U17 ECNL RL, U18/19 ECNL) show a **"Book this block →"** link on each hotel line.
- Carolina Cup and East Coast Cup show a grey **Closed** tag (deadlines passed).
- Nothing renders broken on a phone-width screen.

---

## Lower priority, if there's time

- **WAGS** (wagstournament.com/fields/) — confirm 2026 field allocations: U13–U14 upper flights in Loudoun County, U13–U14 middle/lower in Northern Fairfax, **U16–U19 in Fredericksburg**. The guide deliberately omits WAGS as a day-trip (no hotels) on the basis that no MDU team plays Fredericksburg. If 2026 allocations changed, that assumption breaks.
- **Jefferson Cup 2027** (jeffcup.org) — the guide has placeholder dates: Olders "March 20–22", Youngers "March 2027". Get real dates.

---

## How to hand results back

Send Harry the findings. Anything that changes the guide gets edited in **`src/data/events.js`** in the `canellakish-design/md-united-travel-guide` repo — one object per event; `confirmed` / `action` / `closed` booleans drive the status tags, and `teams[].hotels[]` holds hotel names, rates, codes, and `bookLink`s. The Claude Code session can make those edits once it has your answers.
