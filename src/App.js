import React, {useEffect, useState} from 'react'
import './App.css';
import MainParts from './MainParts';
import MessageInput from './MessageInput';

function App() {
  const [user, setUser] = useState("")
  console.log("app rerendered")

  useEffect(() => {
    setUser(prompt("Please enter your name"))
  }, [])

  return (
    <div className="App">
      <div className="container">
        <MainParts user={user} />
        <MessageInput user={user} />
      </div>      
    </div>
  );
}

export default App;
