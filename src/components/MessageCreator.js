import { useState } from "react";

function MessageCreator(props) {
    const [messageForm, setMessageForm] = useState({ content: "", topic: "general", user_id: 4});

    const handleChange = (event) => {
        setMessageForm({...messageForm, content: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();    
        console.log(messageForm);
        props.createMessage(messageForm);
        setMessageForm({...messageForm, content: ""});
    }

    return (
        <div className="message-creator">
           <form className="message-form" onSubmit={handleSubmit}>
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={messageForm.content}
                ></textarea>
                <input type="submit" name="message-form-submit-btn" value="Post Message"></input>
           </form>
        </div>
        
    );
};

export default MessageCreator;