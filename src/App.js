import { FormControl, Input, IconButton } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import Header from './Header';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState(true)

  useEffect(() => {
    const xColor = () => {
      const colors = ['EB3C27', '#FEC925', '#2E3588', '#FA8A3B', '#FDD944', '#3B73B9', '#FABBA3']
      return colors[Math.floor(Math.random() * colors.length)]
    }
    const yColor = xColor()
    setUser({
      data: {
        username: prompt("Please enter your name"),
        userColor: yColor
      }
    })
  }, [])

  useEffect(() => {
    db.collection('messaged').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
    db.collection('users').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setUsers(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
    console.log(users)
  }, [])

  useEffect(() => {    
    console.log('users Changed')
    if (users.length > 0) {
      for(let use of users){
        console.log(use)
        if (use.data.username.toLowerCase() === user.data.username.toLowerCase()) {
          setNewUser(false)
          setUser(use)
          break
        }
      }
    }
  }, [users])

  useEffect(() => {
    var element = document.querySelector(".app__messages")
    element.scrollTop = element.scrollHeight - element.clientHeight
    window.scrollTo(0,document.querySelector(".app__messages").scrollHeight)
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messaged').add({
      username: user.data.username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("")

    
    if (newUser) {
      db.collection('users').add({
        ...user.data,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setNewUser(false)
    } else {
      db.collection('users').doc(user.id).set({
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true })
    }
    
  }

  return (
    <div className="App">
      <Header userH = {users.slice(0, 4)}/> 
      <FlipMove className="app__messages">
        {
          messages.map(({id, data}) => {
            return <Message key={id} username={user.username} message={data} />
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
