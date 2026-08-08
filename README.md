# Maryland United FC — Parent Travel Guide

Standalone site for the Maryland United FC Girls Program travel guide. Each tournament /
showcase is a card; each team inside it has its hotel block, booking deadline, team code,
and a booking link.

## The one file you edit

**`src/data/events.js`** is the source of truth. To update the guide:

- Each object in `events` is one card. `status` is `"action" | "confirmed" | "pending" | "tentative"`.
- Inside `teams`, each entry is one team's hotel block.
- When a booking link arrives, paste it into that team's `hotelLink` (leave `""` to show "coming soon").
- Add hotels as `{ name, address, rooms }`.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Deploys as a static site (Netlify config included in `netlify.toml`).

## Stack

React + Vite. No backend, no database — content lives in `src/data/events.js`.
