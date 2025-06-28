import { AppDataSource } from "../config/database.config.js";

export const initializeDatabase = async () => {
   try {
      await AppDataSource.initialize();
      console.log("Database connection established successfully.");
   } catch (error) {
      console.error("Error establishing database connection:", error);
      process.exit(1); // Exit the process if database connection fails
   }
}