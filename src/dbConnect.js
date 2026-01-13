import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Lấy URI từ environment variable, nếu không có fallback về local
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/IOT_TEMP';
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('🍃 MongoDB Connected Successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // dừng server nếu không kết nối được
  }
};

// Optional: thêm event listener cho debug
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection is open ✅');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

export default connectDB;
