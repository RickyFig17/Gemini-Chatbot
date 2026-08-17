import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const askAI = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();
    setReply(data.reply);
  };

  return (
    <>
      <form onSubmit={askAI}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Ask</button>
      </form>
      <p>
        <strong>Answer:</strong> {reply}
      </p>
    </>
  );
}

export default App;
