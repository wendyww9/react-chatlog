import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onLike}) => {
  const chatEntryComponents = entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLike={onLike}>
        </ChatEntry>
      </li>
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
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;