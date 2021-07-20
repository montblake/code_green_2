import './styles.css';
import { useState, useEffect } from "react";
import {Switch, Route} from 'react-router-dom';
import Auth from './pages/Auth';
import MessageBoard from './pages/MessageBoard';


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
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route path="/messagesboard">
          <MessageBoard createMessage={createMessage} messagesData={messagesData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
