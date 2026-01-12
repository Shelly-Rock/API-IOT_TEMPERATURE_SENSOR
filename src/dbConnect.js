import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri ='mongodb://127.0.0.1:27017/IOT_TEMPERATURE';
    
    await mongoose.connect(uri);
    console.log('🍃 MongoDB Connected Successfully!');
  } catch (error) {
    console.error(error.message);
    process.exit(1); 
  }
};

export default connectDB;