import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';

const getLikeCount = (data) => {
  return data.filter(chat => chat.liked).length;
};

const extractUniqueSenders = (chatLog) => {
  const uniqueSenders = [];

  for (const message of chatLog) {
    if (!uniqueSenders.includes(message.sender)) {
      uniqueSenders.push(message.sender);
    }
  }

  return uniqueSenders;
};

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const chatLiked = (id) => {
    setChatData(chatData => {
      return chatData.map(chat => {
        if (chat.id === id) {
          return {...chat, liked: !chat.liked};
        } else {
          return chat;
        }
      });
    });
  };

  const uniqueSenders = extractUniqueSenders(chatData);

  return (
    <div id="App">
      <header>
        <h1>{`Chat between ${uniqueSenders[0]} and ${uniqueSenders[1]}`}</h1>
        <section>
          <span id="heartWidget">{getLikeCount(chatData)} ❤️s</span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onLike={chatLiked} uniqueSenders={uniqueSenders}></ChatLog>
      </main>
    </div>
  );
};

export default App;
