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
        <MessageCreator createMessage={props.createMessage}/>
        <Messages messagesData={props.messagesData} />
      </>
    )
}

export default MessageBoard;