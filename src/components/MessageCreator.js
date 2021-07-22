import { useState, useEffect} from "react";

function MessageCreator(props) {
    const [messageForm, setMessageForm] = useState({ content: "", topic: "general", user_id: 4});

    const handleChange = (event) => {
        setMessageForm({ ...messageForm, content: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.content) {
            console.log(messageForm.content);
            console.log(props.messageid);
            props.updateMessage(messageForm.content, props.messageid);
            props.toggleForm();
        } else {
            props.createMessage(messageForm);
            setMessageForm({content: ""});
        }
    }

    useEffect(() => {
        if(props.content) {
          setMessageForm({
            content: props.content,
            message_id: props.messageid
          })
        } 
      }, [props.content, props.messageid]);

    return (
        <div className="message-creator">
           <form className="message-form" onSubmit={handleSubmit}>
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={messageForm.content}
                    className="messagetextarea"
                ></textarea>
                <input className="postmessagebutton" type="submit" name="message-form-submit-btn" value={props.content ? "Update Message" : "Post Message"}></input>
           </form>
        </div>
        
    );
};

export default MessageCreator;