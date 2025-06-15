import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries}) => {
  const chatEntryComponents = entries.map((chatEntry) => {
    return (
      <li key={chatEntry.id}>
        <ChatEntry
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}>
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
};

export default ChatLog;