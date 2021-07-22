import moment from 'moment';

function Message(props) {

    function handleDelete() {
        props.deleteMessage(props.messageid);
    }

    return (
        <div className="message">

            <div className="messageLeftside">
                <h4>{props.user}
                    <span className="messagetime">{moment(props.created_at).format('LT')}
                        &middot; {moment(props.created_at).format('LL')}</span>

                    <button onClick={handleDelete} className="crudbutton deleteButton">
                        <i className="fa fa-trash-o fa-2x" aria-hidden="true"> </i>
                    </button>
                    <button className="crudbutton editButton">
                        <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                    </button>

                </h4>
                <h3>{props.content}</h3>
            </div>

        </div>
    )
}

export default Message;