import {
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

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
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your username"));
  }, []);

  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"
        alt="Messenger Logo"
      />
      <h1> Messenger </h1>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <IconButton
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessages}
          disabled={!input}
        >
          <SendIcon />
        </IconButton>
      </form>

      <FlipMove>
        {messages.map((message) => {
          return (
            <Message key={message.id} username={username} data={message.data} />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
