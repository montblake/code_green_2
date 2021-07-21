import moment from 'moment';

function Message(props) {

    function handleDelete(){
        props.deleteMessage(props.messageid);
        //alert(props.messageid);
        //alert(props.messageid);
    }

    return (
        <div className="message">
            <h4>{props.user} 
            <span className="messagetime">{moment(props.created_at).format('LT')} 
            &middot; {moment(props.created_at).format('LL')}</span>
            </h4>
            <h3>{props.content}</h3>
            <button onClick={handleDelete}>DEL {props.messageid}</button>
        </div>
    )
}

export default Message;