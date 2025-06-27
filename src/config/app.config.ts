import { getEnv } from "../utils/get-env.js"

const appConfig = () => ({
     PORT: getEnv("PORT", "8000"),
     
     NODE_ENV: getEnv("NODE_ENV", "development"),
     BASE_PATH: getEnv("BASE_PATH", "/api"),

     DATABASE_URI: getEnv("DATABASE_URI", "mongodb://localhost:27017/myapp"),
     
     SWAGGER_HOST: getEnv("SWAGGER_HOST", "localhost"),

     JWT_SECRET: getEnv("JWT_SECRET", "defaultsecret"),
     JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "1d"),

     GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID", "aefeedc1234567890abcdefg.apps.googleusercontent.com"),
     GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET", "defaultsecret1234567890"),  
     GOOGLE_REDIRECT_URI: getEnv("GOOGLE_REDIRECT_URI", "http://localhost:8000/api/auth/google/callback"),   

     FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:3000"),
     FRONTEND_INTEGRATION_URI: getEnv("FRONTEND_INTEGRATION_URI", "http://localhost:3000/integration"),
    

});

export const config = appConfig();
