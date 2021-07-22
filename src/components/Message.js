import moment from 'moment';

function Message(props) {

    function handleDelete() {
        props.deleteMessage(props.messageid);
    }

    function userMessage(){
        return (
            <div className="message">
    
                    <h4><span className="myusername">
                        {props.user}</span>
                        <span className="messagetime">{moment(props.created_at).format('LT')}
                            &middot; {moment(props.created_at).format('LL')}</span>
    
                        <button onClick={handleDelete} className="crudbutton deleteButton">
                            <i className="fa fa-trash-o fa-2x" aria-hidden="true"> </i>
                        </button>
                        <button className="crudbutton editButton">
                            <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                        </button>
    
                    </h4>
                    <span className="messagetext">{props.content}</span>
            
            </div>
        )
    }

    function nonUserMessage(){
        return (
            <div className="message">
    
                    <h4 className="nonUser">{props.user}
                        <span className="messagetime">{moment(props.created_at).format('LT')}
                            &middot; {moment(props.created_at).format('LL')}</span>
    
                    </h4>
                    <span className="messagetext">{props.content}</span>
            </div>
        )
    }

    return (
        <>
            { props.user === props.userData.name ? userMessage() : nonUserMessage() }
        </>
    )
}

export default Message;