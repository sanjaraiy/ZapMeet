import express, { Application } from 'express';


const app: Application = express();


// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Meeting App API is running!');
});

export default app;
