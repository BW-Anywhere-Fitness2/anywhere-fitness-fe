import React from 'react'
import User from './User'

const UserList = props => {
    return (
        <ul>
            {props.users.characters.map(user => {
                return <User key={user.name} user={user} />
            })}
            {console.log(props)}
        </ul>
    )
}

export default UserList 