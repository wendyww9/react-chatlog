import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import {useState} from 'react';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState(props.liked);
  const toggleLiked = () => {
    setLiked(!liked);
  };
  const nameColor = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={toggleLiked}>{nameColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body:PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;
