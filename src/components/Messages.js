import Message from "./Message";
import React, { useEffect, useRef } from 'react'

function Messages(props) {

    // UseEffect hook for scrolling to bottom and see newest messages
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [props.messagesData]);

    const messagesArray = () => {
        return props.messagesData.map((single_message) => (
            <Message
                key={single_message.id}
                messageid={single_message.id}
                content={single_message.content}
                user={single_message.user.name}
                created_at={single_message.created_at}
                deleteMessage={props.deleteMessage}
                userData={props.userData}
                updateMessage={props.updateMessage}
            />
        ));
    }

    return (
        <div className="messages" id="scrollablecontainer">
            <h2>Code Green Messages</h2>
            {props.messagesData ? messagesArray() : "loading"}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default Messages;