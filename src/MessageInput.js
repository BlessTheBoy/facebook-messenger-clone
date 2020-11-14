import React, { useState } from 'react'
import db from './firebase'
import firebase from 'firebase'
import { FormControl, IconButton, Input } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

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
            <FormControl className="app__input">
                <Input placeholder="Enter a message..." type="text" value={input} onChange={ e => setInput(e.target.value)} />
            </FormControl>
            <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                <SendIcon />
            </IconButton>
        </form>
    )
}

export default MessageInput
