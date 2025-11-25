import express from 'express';
import cors from 'cors';

const app = express();

// Configure CORS to allow requests from your frontend's URL
const corsOptions = {
    origin: 'http://localhost:5173', // Must match your Vite development port
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
// ... other middleware and routes