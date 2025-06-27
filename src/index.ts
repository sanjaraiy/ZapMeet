import dotenv from 'dotenv';
import app from './app.js';
import { config } from './config/app.config.js';
dotenv.config();


const PORT = config.PORT;






app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT} in ${config.NODE_ENV} mode`);
});