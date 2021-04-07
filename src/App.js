import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Message from "./Components/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "User", text: "Hello" },
    { username: "Guest", text: "Hi!" },
  ]);
  const [username, setUsername] = useState("User");

  const sendMessages = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messages Clone</h1>
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
      {messages.map((msg) => {
        return <Message username={username} msg={msg} />;
      })}
    </div>
  );
}

export default App;
