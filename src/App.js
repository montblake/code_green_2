import './styles.css';
import { useState } from "react";
import Auth from './pages/Auth';
import MessageBoard from './pages/MessageBoard';


function App() {

  const [ messagesData, setMessagesData ] = useState(null);
  const [ userData, setUserData ] = useState(null);

  //const URL = "http://localhost:3000/";
  const URL = "https://testing1293.herokuapp.com/";

  async function getMessages(token) {
    console.log("trying to get messages");
    const response = await fetch(URL + 'messages', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + token,
      }
    });
    const data = await response.json();
    console.log("messages: ", data);
    setMessagesData(data);
  }

  const handleLogin = async (formData) => {
    const response = await fetch(URL + 'login',{
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    console.log(data.user.name);
    getMessages(data.token);
    setUserData({name: data.user.name, token: data.token});
  
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

  async function deleteMessage(messageid){

    await fetch(URL + 'messages/' + messageid, {
      method: "DELETE",
      headers: {
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + userData.token
      },
    });
    getMessages(userData.token);
  }


  const ifUser = () => {
    return (
      <div className="App">
        <MessageBoard deleteMessage={deleteMessage} createMessage={createMessage} messagesData={messagesData} />
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

  // useEffect(() => {
  //   if (!!userData) {
  //     getMessages();
  //   }
  // }, []);

  return (
    <>
      { userData ? ifUser() : noUser() }
    </>
  )

}

export default App;
