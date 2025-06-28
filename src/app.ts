import express, { Application, NextFunction, Request, Response } from 'express';
import { config } from './config/app.config.js';
import cors from 'cors';
import { HTTPSTATUS } from './config/http.config.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json' assert { type: 'json' };
import { errorHandler } from './middlewares/errorHandler.js';
import { asyncHandler } from './middlewares/asyncHandler.js';
import { BadRequestException } from './utils/app-error.js';


const app: Application = express();
const BASE_PATH = config.BASE_PATH; 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: config.FRONTEND_ORIGIN,
  credentials: true,
}))


// Sample Route
app.get('/', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
 
   throw new BadRequestException("throwing async error",);
   res.status(HTTPSTATUS.OK).json({
      message: 'Welcome to the ZapMeet Backend',
   })
 } 
));


app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export default app;
