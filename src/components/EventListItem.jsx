import { attendingLabels } from '../guidance.js'

export default function EventListItem({ event, number }) {
  const teams = attendingLabels(event)

  return (
    <a className="list-row" href={`#/event/${event.no}`}>
      <span className="list-num">{number}</span>
      <span className="list-main">
        <span className="list-name">{event.name}</span>
        <span className="list-meta">{event.dates} &nbsp;·&nbsp; {event.location}</span>
        <span className="list-teams">{teams.join(' · ')}</span>
      </span>
      <span className="list-tags">
        <span className={`dot ${event.confirmed ? 'dot-green' : 'dot-grey'}`} title={event.confirmed ? 'Participation Confirmed' : 'Pending Confirmation'} />
        {event.type === 'league' && <span className="tag tag-grey">League</span>}
        {event.action && <span className="tag tag-red">Action</span>}
        {event.travel === 'fly' && <span className="tag tag-blue">✈</span>}
        {event.travel === 'either' && <span className="tag tag-blue">✈ – 🚗</span>}
        <span className="list-chevron" aria-hidden="true" />
      </span>
    </a>
  )
}
