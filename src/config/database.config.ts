import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { DataSource } from "typeorm";

// Load environment variables from .env
config();

// Fix for __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validate and extract DATABASE_URI
const databaseUri = process.env.DATABASE_URI;

if (!databaseUri) {
    throw new Error("DATABASE_URI is not defined in environment variables.");
}

export const getDatabaseConfig = () => {
    const isProduction = process.env.NODE_ENV === "production";

    return new DataSource({
        type: "postgres",
        url: databaseUri,
        entities: [path.join(__dirname, "../database/entities/*.{js,ts}")],
        migrations: [path.join(__dirname, "../database/migrations/*.{js,ts}")],
        synchronize: !isProduction, // Never enable this in production
        logging: isProduction ? ["error"] : false,
        ssl: isProduction
            ? { rejectUnauthorized: true }
            : false,
    });
};

export const AppDataSource = getDatabaseConfig();
