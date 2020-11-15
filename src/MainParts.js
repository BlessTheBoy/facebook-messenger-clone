import React, { useEffect, useState } from 'react'
import db from './firebase'
import Header from './Header'
import Messages from './Messages'
import './css/mainparts.css'

function MainParts({user}) {
    const [messages, setMessages] = useState([])
    console.log("main parts rerendered")
    useEffect(() => {
        const listen = db.collection('messaged').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
        return listen
    }, [])
    
    return (
        <div className="mainpart">
            <Header user={user} messages={messages} />
            <Messages user={user} messages={messages} />
        </div>
    )
}

export default React.memo(MainParts)