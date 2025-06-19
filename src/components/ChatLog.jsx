import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onLike, uniqueSenders}) => {
  const getPosition = (sender) => {
    if (!uniqueSenders || uniqueSenders.length < 2) return 'local';
    return sender === uniqueSenders[1] ? 'remote' : 'local';
  };

  const chatEntryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLike={onLike}
        position={getPosition(entry.sender)}>
      </ChatEntry>
    );
  });

  return (
    <ul className='chat-log'>
      {chatEntryComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender:PropTypes.string.isRequired,
      body:PropTypes.string.isRequired,
      timeStamp:PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLike:PropTypes.func.isRequired,
  uniqueSenders:PropTypes.array.isRequired,
};

export default ChatLog;