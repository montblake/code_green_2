import moment from 'moment';

function Message(props) {
    return (
        <div className="message">
            
            <h4>{props.user} 
            <span class="messagetime">{moment(props.created_at).format('LT')} 
            &middot; {moment(props.created_at).format('LL')}</span>
            </h4>
           
            <p></p>
            <h3>{props.content}</h3>
        </div>
    )
}

export default Message;