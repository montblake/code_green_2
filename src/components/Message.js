import moment from 'moment';
import MessageCreator from './MessageCreator';
import { useState, useEffect } from 'react';

function Message(props) {

    const [ messageForm, setMessageForm ] = useState(null);

    const [editFormVisible, setEditFormVisible ] = useState(false);

    function toggleForm() {
        setEditFormVisible(!editFormVisible)
    }

    function handleDelete() {
        props.deleteMessage(props.messageid);
    }

    useEffect(() => {
        if(props.content) {
          setMessageForm({
            content: props.content,
          })
        } 
      }, [props.content]);

    return ( editFormVisible ?
        <MessageCreator toggleForm={toggleForm} content={messageForm.content} messageid={props.messageid} updateMessage={props.updateMessage}/>
        :
        <div className="message">



             <h4 className="blakeh4">
                 
                 
                 {props.user}
                <span className="messagetime">{moment(props.created_at).format('LT')}
                &middot; {moment(props.created_at).format('LL')}</span>


                { props.user === props.userData.name ?  
                
                
                <div>
                   
                   
                    <button onClick={handleDelete} className="crudbutton deleteButton">
                    <i className="fa fa-trash-o fa-2x" aria-hidden="true"> </i>
                    </button>
                    <button onClick={toggleForm} className="crudbutton editButton">
                        <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                    </button>


                    
                </div>   
                :
                <div></div>
                }
            </h4>
            <span className="messagetext">{props.content}</span>
        </div> 
    )
}

export default Message;