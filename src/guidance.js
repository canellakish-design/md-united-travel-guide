// Shared guidance-banner logic used by the event detail view.
export function getGuidance(event, hasHotels) {
  if (event.action && event.travel === 'fly') {
    return { cls: 'fly', text: '✈ Flights required. Families may begin booking flights now — team hotel details will follow.' }
  }
  if (event.action && event.travel === 'either') {
    return { cls: 'fly', text: '✈/🚗 Long-distance trip — families may fly or drive. If flying, you may begin booking flights now. Team hotel details will follow.' }
  }
  if (!event.confirmed && !event.action) {
    return { cls: 'caution', text: 'This event is on our travel plan but participation is NOT yet confirmed. Please do not book flights, hotels, or make any travel arrangements until participation is confirmed.' }
  }
  if (event.confirmed && !hasHotels && !event.action) {
    return { cls: 'info', text: 'Participation confirmed. Team hotel details will be posted here soon.' }
  }
  return null
}

// The teams/age groups attending an event, as short labels.
export function attendingLabels(event) {
  if (event.teams && event.teams.length) return event.teams.map((t) => t.team)
  return event.ages || []
}
