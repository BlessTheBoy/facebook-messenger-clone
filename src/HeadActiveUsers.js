import React from 'react'
import FlipMove from 'react-flip-move';
import './css/headActiveUsers.css'

function HeadActiveUsers({users}) {
    return (
        <FlipMove className="active-users">
            {
                users.map( user => {
                 return <div className="active-users__icon" style={{backgroundColor: user.data.userColor }} key={user.id}>{user.data.username[0]}</div>
                })
            }
        </FlipMove>
    )
}

export default HeadActiveUsers
