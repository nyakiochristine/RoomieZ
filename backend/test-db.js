const { MongoClient } = require('mongodb');

const uri = 'mongodb://admin:password@localhost:27017/myapp?authSource=admin';
const client = new MongoClient(uri, {
  maxPoolSize: 10,           // Connection pooling
  serverSelectionTimeoutMS: 5000,  // Faster timeout
  socketTimeoutMS: 45000
});

async function testConnection() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected successfully!');
    
    const db = client.db("myapp");
    const adminDb = client.db("admin");
    
    // Test 1: List databases
    const dbs = await db.admin().listDatabases();
    console.log(`📂 Found ${dbs.databases.length} databases`);
    
    // Test 2: Test collection operations
    const testCollection = db.collection("test");
    const result = await testCollection.insertOne({ 
      message: "CI/CD demo works!", 
      timestamp: new Date(),
      env: process.env.NODE_ENV || 'test'
    });
    
    // Test 3: Read back the document
    const inserted = await testCollection.findOne({ _id: result.insertedId });
    console.log('📄 Inserted document:', inserted);
    
    // Test 4: Test indexing (create if doesn't exist)
    await testCollection.createIndex({ timestamp: -1 });
    console.log('🔖 Indexes verified');
    
    // Test 5: Connection stats
    const status = await adminDb.command({ connectionStatus: 1 });
    console.log(`📊 Active connections: ${status.hosts?.length || 0}`);
    
    console.log('🎉 All MongoDB tests passed!');
    
  } catch (error) {
    console.error('❌ MongoDB error:', error.message);
    console.error('💡 Troubleshooting:');
    console.error('   - Is Docker running? `docker ps`');
    console.error('   - Is MongoDB container up? `docker logs mongodb`');
    console.error('   - Check connection string matches .env');
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}

process.on('SIGINT', async () => {
  console.log('\n👋 Shutting down...');
  await client.close();
  process.exit(0);
});

testConnection();
