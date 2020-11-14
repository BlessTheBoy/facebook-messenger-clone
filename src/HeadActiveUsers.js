import React from 'react'
import FlipMove from 'react-flip-move';
import './css/headActiveUsers.css'
import UserIcon from './UserIcon';

function HeadActiveUsers({users}) {
    return (
        <FlipMove className="active-users">
            {
                users.map( user => {                
                 return <UserIcon key={user} username={user} />
                })
            }
        </FlipMove>
    )
}

export default React.memo(HeadActiveUsers)
