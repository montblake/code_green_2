import './styles.css';
import { useState } from "react";
import Auth from './pages/Auth';
import MessageBoard from './pages/MessageBoard';


function App() {

  const [messagesData, setMessagesData] = useState(null);
  const [userData, setUserData] = useState(null);

  //const URL = "http://localhost:3000/";
  const URL = "https://testing1293.herokuapp.com/";

  async function getMessages(token) {

    const response = await fetch(URL + 'messages', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + token,
      }
    });
    const data = await response.json();
    setMessagesData(data);
  }

  function logOut(){
    setUserData(null);
    setMessagesData(null);
  }

  const handleLogin = async (formData) => {
    const response = await fetch(URL + 'login', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setInterval(() => getMessages(data.token), 2000);
    getMessages(data.token);
    setUserData({ name: data.user.name, token: data.token });

  }

  async function createMessage(message) {
    console.log(userData.token);
    await fetch(URL + 'messages', {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + userData.token
      },
      body: JSON.stringify(message),
    });
    getMessages(userData.token);
  };

  async function deleteMessage(messageid) {

    await fetch(URL + 'messages/' + messageid, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + userData.token
      },
    });
    getMessages(userData.token);
  }

  async function updateMessage(message, messageid) {
    console.log('message:', message);
    console.log('message_id:', messageid);
    await fetch(URL + 'messages/' + messageid, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": "Bearer " + userData.token
      },
      body: JSON.stringify({content: message})
    });
    getMessages(userData.token);
  }

  const ifUser = () => {
    return (
      <div className="App">
       <MessageBoard 
        deleteMessage={deleteMessage} 
        createMessage={createMessage} 
        messagesData={messagesData} 
        userData={userData} 
        logOut={logOut} 
        updateMessage={updateMessage} />
      </div>
    )
  }

  const noUser = () => {
    return (
      <div className="App">
        <Auth handleLogin={handleLogin} />
      </div>
    )
  }

  return (
    <>
      {userData ? ifUser() : noUser()}
    </>
  )

}

export default App;
