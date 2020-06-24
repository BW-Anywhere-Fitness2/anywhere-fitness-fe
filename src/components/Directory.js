import React from 'react'
import axios from 'axios'

export default function Directory(props) {
    const {
        instructors,
        clients,
        classes
    } = props

    if (!instructors || clients) {
        return <h3> Fetching your instructor and client details...</h3>
    }


    return (

        <div>
            <h1>
                Classes:&nbsp;
            </h1>
            <div>
                {instructors.map(instructor => {
                    return (
                        <p> {classes}</p>

                    )
                })}
            </div>
            <h1>
                Instructors:&nbsp;
            </h1>
            <div>
                {instructors.map(instructor => {
                    return (
                        <p>Email: {instructor.email}</p>

                    )
                })}
            </div>
            <h1>
                Clients:&nbsp;
            </h1>
            <div>
                {clients.map(client => {
                    return (
                        <p>Email: {client.email}</p>
                    )
                })}
            </div>
        </div>
    )
}