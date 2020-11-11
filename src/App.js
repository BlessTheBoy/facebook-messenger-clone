import { FormControl, Input, IconButton } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("Faruq")

  useEffect(() => {
    db.collection('messaged').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  useEffect(() => {
    var element = document.querySelector(".app__messages")
    element.scrollTop = element.scrollHeight - element.clientHeight
    window.scrollTo(0,document.querySelector(".app__messages").scrollHeight)
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messaged').add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")
  }

  return (
    <div className="App">
      <div className="app__image">
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger logo" />
      </div>
      
      <h1>Hello {username}</h1>      
      <FlipMove className="app__messages">
        {
          messages.map(({id, data}) => {
            return <Message key={id} username={username} message={data} />
          })
        }
      </FlipMove>

      <form className="app__form"> 
        <FormControl className="app__input">
          <Input placeholder="Enter a message..." type="text" value={input} onChange={ e => setInput(e.target.value)} />
        </FormControl>
        <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default App;
