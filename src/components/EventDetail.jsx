import { getGuidance, attendingLabels } from '../guidance.js'
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
          {event.action && <span className="indicator indicator-red">Action Needed</span>}
          {event.travel === 'fly' && <span className="indicator indicator-blue">✈ Flights</span>}
          {event.travel === 'either' && <span className="indicator indicator-blue">✈/🚗 Fly or Drive</span>}
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
      ) : (
        <p className="detail-ages">
          <span className="detail-ages-label">Age groups:</span> {attendingLabels(event).join(' · ')}
        </p>
      )}
    </div>
  )
}
