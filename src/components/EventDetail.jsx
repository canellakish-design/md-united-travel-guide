import { getGuidance, attendingLabels } from '../guidance.js'
import { TEAM_INFO } from '../data/events.js'
import TeamBlock from './TeamBlock.jsx'

// Resolve the coach + coach-room count for a team on an event, applying any
// per-event `coverage` override (e.g. Harry covering Sara Butler, no hotel).
function coachFor(event, label, info) {
  const ov = event.coverage && event.coverage[label]
  return {
    coach: (ov && ov.coach) || info.coach,
    coachRooms: ov ? ov.coachRooms : info.coach ? 1 : 0,
  }
}

const coachRoomText = (n) =>
  n === 0 ? 'no coach room'
    : typeof n === 'number' ? `${n} coach room${n === 1 ? '' : 's'}`
    : `coach room: ${n}` // e.g. "coach room: TBD"

export default function EventDetail({ event }) {
  const hasTeams = event.teams && event.teams.length > 0
  const hasHotels = hasTeams && event.teams.some((t) => t.hotels && t.hotels.length > 0)
  const guidance = getGuidance(event, hasHotels)

  return (
    <div className="detail">
      <a className="detail-back" href="#/">← All events</a>

      <div className="detail-head">
        <h2 className="detail-name">{event.name}</h2>
        <p className="detail-meta">{event.dates} &nbsp;·&nbsp; {event.location}</p>
        <div className="indicators">
          <span className={`indicator ${event.confirmed ? 'indicator-green' : 'indicator-grey'}`}>
            {event.confirmed ? 'Participation Confirmed' : 'Pending Confirmation'}
          </span>
          {event.type === 'league' && <span className="indicator indicator-blue">League Game</span>}
          {event.closed
            ? <span className="indicator indicator-grey">Closed</span>
            : event.action
              ? <span className="indicator indicator-red">Action Needed</span>
              : <span className="indicator indicator-green">No Action Needed</span>}
          {event.travel === 'fly' && <span className="indicator indicator-blue">✈ Flights</span>}
          {event.travel === 'either' && <span className="indicator indicator-blue">✈ – 🚗 Fly or Drive</span>}
        </div>
      </div>

      {guidance && <p className={`guidance guidance-${guidance.cls}`}>{guidance.text}</p>}
      {event.note && <p className="event-note">{event.note}</p>}

      {hasTeams ? (
        <div className="team-list">
          {event.teams.map((team, i) => (
            <TeamBlock key={`${team.team}-${i}`} team={team} />
          ))}
        </div>
      ) : event.games ? (
        <ul className="games">
          {event.games.map((g, i) => {
            const info = TEAM_INFO[g.team] || {}
            const { coach, coachRooms } = coachFor(event, g.team, info)
            const pending = g.overnight == null
            return (
              <li key={i} className="game-row">
                <span className="game-team">{g.team}</span>
                <span className="game-time">{g.time}</span>
                <span className={`game-flag ${pending ? 'tbd' : g.overnight ? 'on' : 'off'}`}>
                  {pending ? 'Time TBD' : g.overnight ? 'Stay night before' : 'Same-day OK'}
                </span>
                {info.players != null && <span className="game-meta">{info.players} rooms + {coachRooms === 0 ? 'no coach room' : typeof coachRooms === 'number' ? `${coachRooms} coach` : `coach: ${coachRooms}`}</span>}
                {coach && <span className="game-meta">Coach: {coach}</span>}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul className="team-info-list">
          {attendingLabels(event).map((label) => {
            const info = TEAM_INFO[label] || {}
            const { coach, coachRooms } = coachFor(event, label, info)
            return (
              <li key={label} className="ti-row">
                <span className="ti-team">{label}</span>
                {info.players != null && (
                  <span className="ti-rooms">{info.players} player rooms · {coachRoomText(coachRooms)}</span>
                )}
                {coach && <span className="ti-coach">Coach: {coach}</span>}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
