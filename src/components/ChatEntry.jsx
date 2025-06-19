import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';



const ChatEntry = (props) => {
  const nameColor = props.liked ? '❤️' : '🤍';

  return (
    <li className={`chat-entry ${props.position}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className='entry-body'>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={() => props.onLike(props.id)}>{nameColor}</button>
      </section>
    </li>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  onLike:PropTypes.func.isRequired,
  position:PropTypes.string.isRequired,
};

export default ChatEntry;
