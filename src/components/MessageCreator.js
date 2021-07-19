import { useState } from "react";

function MessageCreator(props) {
    const [messageForm, setMessageForm] = useState({ content: "" });

    const handleChange = (event) => {
        setMessageForm({ content: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createMessage(messageForm.content);
        setMessageForm({content: ""});
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