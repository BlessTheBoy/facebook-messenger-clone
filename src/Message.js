import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'
import UserIcon from './UserIcon'

const Message = forwardRef (({user, message, prevUsername}, ref) => {
    const isUser = user.toLowerCase() === message.username.toLowerCase()
    const isFirst = !(message.username.toLowerCase() === prevUsername.toLowerCase())
    const showIcon = (!isUser) && isFirst
    console.log(prevUsername, isUser, isFirst, showIcon)

    const compareDates = (d1) => {
        let d2 = new Date()
        let date = ""
        let day2 = d2.getDate();
        let month2 = d2.toLocaleString("default", { month: "short" })
        let year2 = d2.getFullYear()
        let day = d1.getDate();
        let month = d1.toLocaleString("default", { month: "short" })
        let year = d1.getFullYear()
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let weekDay = weekDays[d1.getDay()]
        if (year2 > year) {     
            date = month + " " + day + ", " + year 
        } else {
            if (month2 != month) {
                date = month + " " + day
            } else {
                if (day != day2) {
                    date = weekDay + " " + day
                }
            }
        }
        let timeH = d1.getHours()
        let am = ""
        if (timeH == 24) {
            timeH = "00"
            am = "AM"
        } else if (timeH > 12) {
            timeH -= 12
            am = "PM"
        }else if (timeH < 12){
            am = "AM"
        } else if (timeH == 12) {
            am = "PM"
        }
        
        let timeM = d1.getMinutes()
        if (timeM < 10) {
            timeM = "0" + timeM
        }
        let time =   timeH + ":" + timeM + " " + am
        return date + " " + time 
    }
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
            <div>
                {!isUser && <span >{message.username}</span>}
                {message.timestamp && <span style={{color: 'black'}}>{compareDates(new Date(message.timestamp.toDate()))}</span>}
            </div>            
        </div>
    )
})

export default Message
