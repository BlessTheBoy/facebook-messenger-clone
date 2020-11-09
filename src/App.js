import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  
  console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, input])
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
          return <p>{message}</p>
        })
      }
    </div>
  );
}

export default App;
