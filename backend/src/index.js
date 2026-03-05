require('dotenv').config();
const cors = require('cors');
const express = require('express');
const http = require('http'); // 1. Import HTTP module
const { Server } = require('socket.io'); // 2. Import Socket.io
const connectDB = require('./server.js');
const socketHandler = require('./sockets/chat'); // Your chat logic

// Routes
const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/matches');
const profileRoutes = require('./routes/profiles');
const chatRoutes = require('./routes/chat');

const app = express();
const server = http.createServer(app); // 3. Create HTTP server from Express app

// 4. Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust for production (e.g., your Vercel URL)
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/matches', matchRoutes);

app.use('/api/profile', profileRoutes);
app.use('/api/chat', chatRoutes);

// 5. Initialize Chat Socket Logic
socketHandler(io);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Romiez API 🚀', status: 'OK' });
});

// Health check
app.get('/health', async (req, res) => {
  try {
    const db = await connectDB();
    res.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      db: 'connected'
    });
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', error: error.message });
  }
});

async function startServer() {
  try {
    await connectDB();
    // 6. Listen on 'server', NOT 'app'
    server.listen(PORT, () => {
      console.log(`🚀 Server & Sockets running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('💥 Failed to start server:', error);
    process.exit(1);
  }
}

startServer();