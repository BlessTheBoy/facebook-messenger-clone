import React, { useState } from 'react'
import db from './firebase'
import firebase from 'firebase'
import { FormControl, IconButton, Input } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import './css/messageinput.css'

function MessageInput({user}) {    
  const [input, setInput] = useState("")

    const sendMessage = (event) => {
        event.preventDefault()
    
        db.collection('messaged').add({
          username: user,
          text: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")        
      }
      
    return (
        <form className="app__form">
          <input className="input" placeholder="Enter a message..." type="text" value={input} onChange={ e => setInput(e.target.value)} />
          <button className="send" disabled={!input} type="submit" onClick={sendMessage}>
            <i class="fas fa-paper-plane"></i>
          </button>
          {/* <IconButton className="send" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >
              <SendIcon />
          </IconButton> */}
            {/* <FormControl >
                <Input />
            </FormControl>
             */}
        </form>
    )
}

export default MessageInput
