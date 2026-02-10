const { MongoClient } = require('mongodb');
async function testConnection() {
  try {
    const client = new MongoClient('mongodb://admin:password@localhost:27017/myapp?authSource=admin');
    await client.connect();
    await client.db("myapp").collection("test").insertOne({ message: "CI/CD demo works!" });
    console.log('✅ MongoDB connected and working!');
    await client.close();
  } catch (error) {
    console.error('❌ MongoDB error:', error.message);
  }
}

testConnection();