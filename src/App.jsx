import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const setChatLiked = (id) => {
    setChatData(chatData => {
      return chatData.map(chat => {
        return (chat.id === id) ? { ...chat, liked: !chat.liked } : chat;
      });
    });
  };

  const likeCount = chatData.reduce((totalLikes, currentChat) => {
    return totalLikes + (currentChat.liked ? 1 : 0);
  }, 0);

  const extractUniqueSenders = (chatLog) => {
    const uniqueSenders = [];

    for (const message of chatLog) {
      if (!uniqueSenders.includes(message.sender)) {
        uniqueSenders.push(message.sender);
      }
    }

    return uniqueSenders;
  };
  const uniqueSenders = extractUniqueSenders(chatData);

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${uniqueSenders[0]} and ${uniqueSenders[1]}`}</h1>
        <section>
          <p className='widget' id="heartWidget">{likeCount} ❤️s</p>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLike={setChatLiked}
          uniqueSenders={uniqueSenders}
        />
      </main>
    </div>
  );
};

export default App;
