const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/myapp?authSource=admin');

async function connectDB() {
  try {
    await client.connect();
    console.log('✅ MongoDB connected');
    return client.db('myapp');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
