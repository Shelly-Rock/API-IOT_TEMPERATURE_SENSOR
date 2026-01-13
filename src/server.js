import 'dotenv/config';
import dotenv from 'dotenv';
import app from './app.js';

const PORT = process.env.PORT || 3000;
dotenv.config(); // đã import 'dotenv/config', không cần nữa

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
