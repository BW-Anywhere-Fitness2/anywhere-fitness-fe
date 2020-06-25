import React from 'react'
import User from './User'

const UserList = props => {
    return (
        <ul>
        {props.users.Users.map(user => {
            return <User key={user.name} user={user} />
        })}
        </ul>
    )
}

export default UserList 