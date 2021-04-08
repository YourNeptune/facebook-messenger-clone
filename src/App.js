import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, {username: username, text: input }]);
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", 'desc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your username"));
  }, []);

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessages}
          disabled={!input}
        >
          Send
        </Button>
      </form>

      <FlipMove>
        {messages.map((message) => {
          return <Message key={message.id} username={username} data={message.data} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
