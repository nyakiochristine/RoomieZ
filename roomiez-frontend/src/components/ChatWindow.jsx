import React, { useState, useEffect } from 'react';
import socket from '../services/socket';
import api from '../api/axios';

const ChatWindow = ({ matchId, currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // 1. Load History from your Backend
    api.get(`/chat/${matchId}`).then(res => setMessages(res.data));

    // 2. Join Socket Room
    socket.emit('join_room', matchId);

    // 3. Listen for new messages
    socket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off('receive_message');
  }, [matchId]);

  const sendMsg = () => {
    if (!input.trim()) return;
    const msgData = { matchId, senderId: currentUser.id, text: input };
    socket.emit('send_message', msgData);
    setInput('');
  };

  return (
    <div className="card" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            textAlign: m.senderId === currentUser.id ? 'right' : 'left',
            margin: '10px 0'
          }}>
            <span style={{
              background: m.senderId === currentUser.id ? 'var(--primary-coral)' : '#eee',
              color: m.senderId === currentUser.id ? 'white' : 'black',
              padding: '8px 12px', borderRadius: '12px'
            }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..." style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
        <button onClick={sendMsg} className="btn-primary">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;

