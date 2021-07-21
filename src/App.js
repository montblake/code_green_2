import './styles.css';
import { useState, useEffect } from "react";
import Auth from './pages/Auth';
import MessageBoard from './pages/MessageBoard';


function App() {

  const [ messagesData, setMessagesData ] = useState(null);
  const [ userData, setUserData ] = useState(null);

  const URL = "http://localhost:3000/";

  const handleLogin = async (formData) => {
    const response = await fetch(URL + 'login',{
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setUserData({token: data["token"]}); 
  }

  async function getMessages() {
    const response = await fetch(URL + 'messages', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + userData,
      }
    });
    const data = await response.json();
    setMessagesData(data);
  }

  async function createMessage(message) {
    const response = await fetch(URL + 'messages', {
      method: "POST",
      headers: {
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + userData.token
      },
      body: JSON.stringify(message),
    });
    getMessages();
  };

  const ifUser = () => {
    return (
      <div className="App">
        <MessageBoard createMessage={createMessage} messagesData={messagesData} />
      </div>
    )
  }

  const noUser = () => {
    return (
      <div className="App">
        <Auth handleLogin={handleLogin}/>
      </div>
    )
  }

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      { userData ? ifUser() : noUser() }
    </>
  )

}

export default App;
