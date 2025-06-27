import swaggerAutogen from 'swagger-autogen';
import { config } from './src/config/app.config.js';


const doc = {
  info: {
    title: 'ZapMeet API',
    description: 'Backend API for ZapMeet video conferencing app',
  },
  host: `${config.SWAGGER_HOST}:${config.PORT}`,
  schemes: ['http'],
  tags: [
    {
      name: 'Auth',
      description: 'Authentication endpoints',
    },
    {
      name: 'Meetings',
      description: 'Meeting management endpoints',
    },
  ],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/index.ts']; // Or your entry point file

swaggerAutogen(outputFile, endpointsFiles, doc);