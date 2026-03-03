const Message = require('../models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('⚡ User connected:', socket.id);

    // Join a specific match room
    socket.on('join_room', (matchId) => {
      socket.join(matchId);
      console.log(`👤 User joined room: ${matchId}`);
    });

    // Handle sending messages [cite: 32, 58]
    socket.on('send_message', async (data) => {
      const { matchId, senderId, text } = data;

      try {
        // 1. Persist message to database [cite: 30]
        const newMessage = new Message({
          matchId,
          senderId,
          text
        });
        await newMessage.save();

        // 2. Emit to the specific match room
        io.to(matchId).emit('receive_message', {
          matchId,
          senderId,
          text,
          createdAt: newMessage.createdAt
        });
      } catch (err) {
        console.error('❌ Socket Message Error:', err);
      }
    });

    // Optional: Typing indicators for "near real-time" feel [cite: 16, 85]
    socket.on('typing', (data) => {
      socket.to(data.matchId).emit('display_typing', data);
    });

    socket.on('disconnect', () => {
      console.log('🔌 User disconnected');
    });
  });
};