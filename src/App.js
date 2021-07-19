import './styles.css';
import MessageCreator from "./components/MessageCreator";
import Messages from "./components/Messages";
import { useState, useEffect } from "react";



function App() {

  const [ messagesData, setMessagesData ] = useState(null);

  const URL = "http://localhost:3000/messages";

  async function getMessages() {
    const response = await fetch(URL);
    const data = await response.json();
    setMessagesData(data);
  }

  function createMessage() {
    console.log('Message being created');
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="App">
      <MessageCreator createMessage={createMessage}/>
      <Messages messagesData={messagesData} />
    </div>
  );
}

export default App;
