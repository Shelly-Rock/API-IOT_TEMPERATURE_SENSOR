import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI not set!");

    // ✅ Mongoose 6+ không cần useNewUrlParser & useUnifiedTopology
    await mongoose.connect(uri);

    console.log('🍃 MongoDB Connected Successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

mongoose.connection.on('connected', () => console.log('MongoDB connection is open ✅'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));

export default connectDB;
