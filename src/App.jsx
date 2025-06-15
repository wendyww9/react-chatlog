import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.jsx';
import { useState } from 'react';

const getLikeCount = (data) => {
  return data.filter(chat => chat.liked).length;
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

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <span id="heartWidget">{getLikeCount(chatData)} ❤️s</span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onLike={chatLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
