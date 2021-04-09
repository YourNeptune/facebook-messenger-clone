import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import Message from "./Components/Message";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import UsernameForm from "./Components/UsernameForm";
import ExitButton from "./Components/ExitButton";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [startChat, setStartChat] = useState(false);

  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  const sendUsername = () => {
    setStartChat(true);
  };

  const onChange = (e) => setInput(e.target.value);

  const exit = () => {
    setStartChat(false)
    setUsername('')
  }

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div>
      <Logo />
      {!startChat && (
        <UsernameForm
          username={username}
          onChange={(e) => setUsername(e.target.value)}
          onSend={sendUsername}
        />
      )}

      {startChat && (
        <div>
          <ExitButton onClick={exit}/>
          <Form input={input} onChange={onChange} onSend={sendMessages} />
          <FlipMove>
            {messages.map((message) => {
              return (
                <Message
                  key={message.id}
                  username={username}
                  data={message.data}
                />
              );
            })}
          </FlipMove>
        </div>
      )}
    </div>
  );
}

export default App;
