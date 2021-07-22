import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MessageCreator from '../components/MessageCreator';
import Messages from '../components/Messages';

const MessageBoard = (props) => {
    return (
      <>  


      <div className="headerrow">
        <Header /> 
        <Nav logOut={props.logOut} userData={props.userData} />
        </div>


        <div className="messagescontainer">
        <Messages messagesData={props.messagesData} deleteMessage={props.deleteMessage} userData={props.userData} updateMessage={props.updateMessage}/>
        </div>
        <MessageCreator createMessage={props.createMessage} updateMessage={props.updateMessage}/>
        
      </>
    )
}

export default MessageBoard;