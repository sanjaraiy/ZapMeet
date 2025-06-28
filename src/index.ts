import dotenv from 'dotenv';
import app from './app.js';
import { config } from './config/app.config.js';
import { initializeDatabase } from './database/database.js';
dotenv.config();


const PORT = config.PORT;






app.listen(PORT, async () => {
   await initializeDatabase();
  console.log(`Server running on port ${PORT} in ${config.NODE_ENV} mode`);
});