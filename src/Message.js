import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'
import UserIcon from './UserIcon'

const Message = forwardRef (({user, message, prevUsername}, ref) => {
    const isUser = user.toLowerCase() === message.username.toLowerCase()
    const isFirst = !(message.username.toLowerCase() === prevUsername.toLowerCase())
    const showIcon = (!isUser) && isFirst
    console.log(prevUsername, isUser, isFirst, showIcon)
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            {showIcon && <UserIcon username={message.username} />}
            <Card className={isUser ? 'message__userCard' : "message_guestCard"}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {!isUser && `${message.username || "Unknown User"}: `} {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
