import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(['msg1', 'msg2', 'msg3'])

  const sendMessages = e => {
    e.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">
    <h1>Facebook Messages Clone</h1>
      <form>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button type='submit' onClick={sendMessages}>Send</button>
      </form>
      {messages.map(msg => {
        return (
          <p>{msg}</p>
        )
      })}
    </div>
  );
}

export default App;
