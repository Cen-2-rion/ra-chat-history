import '@fortawesome/fontawesome-free/css/all.min.css';
import { MessageType, MessageList } from './types';

const MessageHistory = ({ list }: MessageList) => {
    
    const Message = ({ from, time, text }: MessageType) => (
        <li className='clearfix'>
            <div className='message-data align-right'>
                <span className='message-data-time'>{time}</span> &nbsp;&nbsp;
                <span className='message-data-name'>{from.name} </span>
                <i className='fa fa-circle me'></i>
            </div>
            <div className='message other-message float-right'>
                {text}
            </div>
        </li>
    );
    
    const Response = ({ from, time, text }: MessageType) => (
        <li>
            <div className='message-data'>
                <span className='message-data-name'><i className='fa fa-circle online'></i>{from.name}</span>
                <span className='message-data-time'>{time}</span>
            </div>
            <div className='message my-message'>
                {text}
            </div>
        </li>
    );
    
    const Typing = ({ from, time }: MessageType) => (
        <li>
            <div className='message-data'>
                <span className='message-data-name'><i className='fa fa-circle online'></i>{from.name}</span>
                <span className='message-data-time'>{time}</span>
            </div>
            <div className="message-typing-indicator">
            {[...Array(3)].map((_, i) => (
                <i key={i} className="fa fa-circle online" style={{ animationDelay: `${i * 0.2}s` }}></i>
            ))}
        </div>
        </li>
    );
    
    return (
        <ul>
            {list.map(message => {
                switch (message.type) {
                    case 'message': return <Message key={message.id} {...message} />;
                    case 'response': return <Response key={message.id} {...message} />;
                    case 'typing': return <Typing key={message.id} {...message} />;
                    default: return null;
                }
            })}
        </ul>
    );
}

export default MessageHistory;
