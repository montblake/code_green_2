import moment from 'moment';

function Message(props) {
    return (
        <div className="message">
            
            <h4>{props.user}</h4>
            {/* <p>{moment(props.created_at).format('MMMM Do YYYY')}</p>
            <p>{moment(props.created_at).fromNow()}</p> */}
            <p>{moment(props.created_at).format('LT')}</p>
            <p>{moment(props.created_at).format('LL')}</p>
            <h3>{props.content}</h3>
        </div>
    )
}

export default Message;