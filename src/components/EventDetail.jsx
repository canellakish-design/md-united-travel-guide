import { getGuidance, attendingLabels } from '../guidance.js'
import { TEAM_INFO } from '../data/events.js'
import TeamBlock from './TeamBlock.jsx'

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
            const pending = g.overnight == null
            return (
              <li key={i} className="game-row">
                <span className="game-team">{g.team}</span>
                <span className="game-time">{g.time}</span>
                <span className={`game-flag ${pending ? 'tbd' : g.overnight ? 'on' : 'off'}`}>
                  {pending ? 'Time TBD' : g.overnight ? 'Stay night before' : 'Same-day OK'}
                </span>
                {info.players != null && <span className="game-meta">{info.players} rooms + 1 coach</span>}
                {info.coach && <span className="game-meta">Coach: {info.coach}</span>}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul className="team-info-list">
          {attendingLabels(event).map((label) => {
            const info = TEAM_INFO[label] || {}
            return (
              <li key={label} className="ti-row">
                <span className="ti-team">{label}</span>
                {info.players != null && (
                  <span className="ti-rooms">{info.players} player rooms · 1 coach room</span>
                )}
                {info.coach && <span className="ti-coach">Coach: {info.coach}</span>}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
