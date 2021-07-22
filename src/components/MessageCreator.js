import { useState } from "react";

function MessageCreator(props) {
    const [messageForm, setMessageForm] = useState({ content: "", topic: "general", user_id: 4 });

    const handleChange = (event) => {
        setMessageForm({ ...messageForm, content: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createMessage(messageForm);
        setMessageForm({ content: "" });
    }

    return (
        <div className="message-creator">
            <form className="message-form" onSubmit={handleSubmit}>
                <textarea
                    autoFocus
                    name="content"
                    onChange={handleChange}
                    value={messageForm.content}
                    className="messagetextarea"
                ></textarea>
                <input className="postmessagebutton" type="submit" name="message-form-submit-btn" value="Post Message"></input>
            </form>
        </div>

    );
};

export default MessageCreator;