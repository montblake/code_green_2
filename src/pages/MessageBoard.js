import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MessageCreator from '../components/MessageCreator';
import Messages from '../components/Messages';

const MessageBoard = (props) => {
    return (
      <>  
        <Header /> 
        <Nav />
        <div className="messagescontainer">
        <Messages messagesData={props.messagesData} deleteMessage={props.deleteMessage}/>
        </div>
        <MessageCreator createMessage={props.createMessage}/>
        
      </>
    )
}

export default MessageBoard;