const mongoose = require('mongoose');

let mongod = null;
let MongoMemoryServer = null;

try {
    MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
} catch (error) {
    // mongodb-memory-server not available (production)
}

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    try {
        if (uri) {
            await mongoose.connect(uri, {
                serverSelectionTimeoutMS: 10000,
                socketTimeoutMS: 45000
            });
            console.log('✅ MongoDB connected');
            return true;
        }

        if (MongoMemoryServer && !mongod) {
            mongod = await MongoMemoryServer.create();
            const localUri = mongod.getUri();
            await mongoose.connect(localUri, {
                serverSelectionTimeoutMS: 10000,
                socketTimeoutMS: 45000
            });
            console.log('✅ MongoDB connected to local in-memory server');
            return true;
        }

        console.log('⚠️ Starting server without database. Set MONGODB_URI in environment variables.');
        return false;
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        console.log('⚠️ Starting server without database.');
        return false;
    }
};

module.exports = connectDB;