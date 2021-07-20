import Message from "./Message";

function Messages(props) {
    console.log(props);
    
    // const messagesArray = () => {
    //     return props.messagesData.map((single_message) => (
    //         <Message 
    //             key={single_message.id} 
    //             content={single_message.content}
    //             user={single_message.user.name}
    //             created_at={single_message.created_at}
    //         />
    //     ));
    // }

    return (

        <div className="messages">
            <h2>Code Green Messages</h2>
            {/* {props.messagesData ? messagesArray() : "loading" } */}
        </div>
        
    );
}

export default Messages;