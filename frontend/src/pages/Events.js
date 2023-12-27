import React from 'react'
import { Link } from 'react-router-dom'

const EVENTS = [
    { id: 'Package 1', title: 'Event 1' },
    { id: 'Package 2', title: 'Event 2' },
    { id: 'Package 3', title: 'Event 3' },
    { id: 'Package 4', title: 'Event 4' }
]

const Events = () => {
    return (
        <>
            <h1>Event Page</h1>
            <ul>
                {EVENTS.map((evnt) => (
                    <li key={evnt.id}>
                        <Link to={evnt.id}>{evnt.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Events