import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import './App.css';
import db from './firebase';
import Message from './Message';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("Faruq")

  useEffect(() => {
    db.collection('messaged').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, { username: username, text: input }])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Hello world</h1>

      <form> 
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input type="text" value={input} onChange={ e => setInput(e.target.value)} />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </form>
      
      {
        messages.map(message => {
          return <Message username={username} message={message} />
        })
      }
    </div>
  );
}

export default App;
