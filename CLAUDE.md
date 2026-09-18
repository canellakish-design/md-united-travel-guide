# Maryland United FC — Girls Parent Travel Guide

Static React/Vite site. Single source of truth: `src/data/events.js`.
Deploys from `main` via Netlify.

## House style: data, not editorializing

Parents open this to find a fact fast. Every `note` is **data only** — what, where,
when, how much, by when. No commentary, no reassurance, no advice, no reasoning,
no shouting.

Put in a note:
- Times, dates, venues, addresses, field numbers
- Hotel, rate, room count, team code, deadline
- Which teams are in, which nights they stay
- The source and date of a schedule change, when it explains a discrepancy

Leave out:
- Inferred travel/departure times ("leaving around 7:15 AM")
- Distances and drive-time estimates we haven't been told
- Urging or reassurance ("book now", "we expect acceptance shortly", "don't worry")
- ALL CAPS for emphasis
- Explaining our own reasoning to parents

If a fact is uncertain, say it plainly and briefly, or leave it out. Don't pad it
with hedging prose.

## Data model

One object per event in the `events` array:

- `confirmed` — on the accepted team list (green tag) vs applied/pending (grey)
- `action` — booking or flights are open (red "Action Needed" tag)
- `closed` — deadline passed (grey "Closed" tag)
- `travel` — `'drive' | 'fly' | 'either'`; drives the guidance banner
- `venue` — one address string; renders as a Google Maps link
- `teams[]` — per-team `bookDeadline`, `arrivalDate`, `nights`, `teamCode`,
  `hotelLink`, and `hotels[]` (each with `name`, `address`, `rooms`, `bookLink`)
- `games[]` — league fixtures: `team`, `time`, `overnight` (`true`/`false`/`null` for TBD)
- `coverage` — per-event coach override, e.g. Harry covering for Sara Butler

Rosters and head coaches live once in `TEAM_INFO` at the top of the file; events
read from it.

Overnight rule for league away games: New Jersey venues, stay the night before if
kickoff is before 1:00 PM; elsewhere, before 11:00 AM.

## Never guess a team mapping

Booking systems label teams differently from this guide — birth-year pairs
(`G2013/14`), flights (`Flight I`), site names (`South Calvert`). If a booking
email's team name doesn't clearly match a team here, leave the link off and ask.
Sending one team's families to another team's block is worse than a missing link.

## Workflow

`npm run build` before committing (run `npm install` first if `node_modules` is
missing). Commit, then push to **both** `main` and
`claude/tournament-detail-access-xa0rtf` — Netlify serves `main`.
