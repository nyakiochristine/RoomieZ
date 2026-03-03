require('dotenv').config();
const { MongoClient } = require('mongodb');

// Connection options for production performance
const client = new MongoClient(process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/myapp?authSource=admin', {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000
});

let db = null;

async function connectDB() {
  try {
    if (db) return db; // Return existing connection
    
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    db = client.db('myapp');
    console.log('✅ MongoDB connected');
    
    // Graceful shutdown handler
    process.on('SIGINT', async () => {
      console.log('\n👋 Closing MongoDB connection...');
      await client.close();
      process.exit(0);
    });
    
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    console.error('💡 Check: docker ps, docker logs mongodb');
    process.exit(1);
  }
}

module.exports = connectDB;
