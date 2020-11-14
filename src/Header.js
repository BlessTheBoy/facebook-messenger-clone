import React, { useEffect, useState } from 'react'
import Hambuger from './Hambuger'
import HeadActiveUsers from './HeadActiveUsers'
import Options from './Options'
import './css/header.css'
import Title from './Title'

function Header({messages, user}) {    
//   const [users, setUsers] = useState([])
  const [usernames, setUsernames] = useState([])
  useEffect(() => {
    // let tempUsers = []
    let tempUsernames = []
    for(let i = (messages.length - 1); i>=0 ; i-- ){
        if (tempUsernames.length < 4) {
            let present = false
            let username = messages[i].data.username
            for (let index = 0; index < tempUsernames.length; index++) {
                if (tempUsernames[index].toLowerCase() === username.toLowerCase()) {
                    present = true
                    break
                }                
            } 
                        
            if (!present) {                
                // let timestamp = messages[i].data.timestamp
                // let userColor = ['EB3C27', '#FEC925', '#2E3588', '#FA8A3B', '#FDD944', '#3B73B9', '#FABBA3'][Math.floor(Math.random() * 7)]
                
                // tempUsers.push({username, timestamp, userColor})
                tempUsernames.push(username)
            }
        } else {
            break
        }
    }
    // setUsers(tempUsers)
    setUsernames(tempUsernames)
  }, [messages])
    return (
        <header className="header">
            <Hambuger />
            <div className="header_wrap">
                <Title />
                {/* <h1 className="header_wrap_title" >Chat App</h1> */}
                <HeadActiveUsers users = {usernames}/>
            </div>
            <Options />
        </header>
    )
}

export default React.memo(Header)
