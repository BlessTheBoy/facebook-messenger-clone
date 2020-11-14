import React, { useEffect, useState } from 'react'
import db from './firebase'
import Header from './Header'
import Messages from './Messages'

function MainParts({user}) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messaged').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
          setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [])
    
    return (
        <div>
            <Header user={user} messages={messages} />
            <Messages user={user} messages={messages} />
        </div>
    )
}

export default MainParts