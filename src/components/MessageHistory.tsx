import {MessageType, MessageList} from './types';

const MessageHistory = ({list}: MessageList) => {
    
    const Message = ({from, message}: MessageType) => (
        <li className='clearfix'>
            <div className='message-data align-right'>
                <span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
                <span className='message-data-name'>{from.name}</span>
                <i className='fa fa-circle me'></i>
            </div>
            <div className='message other-message float-right'>
                {message.text}
            </div>
        </li>
    );
    
    const Response = ({from, message}: MessageType) => (
        <li>
            <div className='message-data'>
                <span className='message-data-name'><i className='fa fa-circle online'></i>{from.name}</span>
                <span className='message-data-time'>{message.time}</span>
            </div>
            <div className='message my-message'>
                {message.text}
            </div>
        </li>
    );
    
    const Typing = ({from, message}: MessageType) => (
        <li>
            <div className='message-data'>
                <span className='message-data-name'><i className='fa fa-circle online'></i>{from.name}</span>
                <span className='message-data-time'>{message.time}</span>
            </div>
            <div>
                <span>typing...</span>
            </div>
        </li>
    );

    return (
        <ul>
            {list.map(message => {
                switch (message.type) {
                    case'message': return <Message id={message.id} from={message.from} message={message}/>;
                    case'response': return <Response id={message.id} from={message.from} message={message}/>;
                    case 'typing': return <Typing id={message.id} from={message.from} message={message}/>;
                    default: return null;
                }
            })}
        </ul>
    );
}

export default MessageHistory;
