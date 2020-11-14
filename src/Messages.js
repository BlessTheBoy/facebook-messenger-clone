import React, { useEffect } from 'react'
import FlipMove from 'react-flip-move';
import Message from './Message';

function Messages({messages, user}) {
    let prevUser = user

    useEffect(() => {
        var element = document.querySelector(".app__messages")
        element.scrollTop = element.scrollHeight - element.clientHeight
        window.scrollTo(0,document.querySelector(".app__messages").scrollHeight)
    }, [messages])

    return (
        <FlipMove className="app__messages">
        {
          messages.map(({id, data}) => {
              let prev = prevUser
              prevUser = data.username
            return <Message key={id} user={user} message={data} prevUsername = {prev}/>
          })
        }
      </FlipMove>
    )
}

export default Messages
