import dotenv from 'dotenv';
import app from './app.js';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000; // Render cung cấp process.env.PORT
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
