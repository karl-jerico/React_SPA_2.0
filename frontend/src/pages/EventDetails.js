import React from 'react'
import { useRouteLoaderData, json } from 'react-router-dom'

import EventItem from '../components/EventItem'

const EventDetails = () => {
  const data = useRouteLoaderData('event-detail')

    return (
      <EventItem event={data.event} />
    )
}

export default EventDetails

export async function loader({request, params}) {
  const id = params.eventId

  const response = await fetch('http://localhost:8080/events/' + id)
  
  if (!response.ok) {
    throw json({ message: 'Could not fetch deatails for selected event'}, {
      status: 500,
    })
  } else {
    return response
  }
}