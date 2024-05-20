import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { MensRouter } from './routes/mens-route.js';
import { WomensRouter } from './routes/womens-route.js';
import { KidsRouter } from './routes/kids-route.js';
import authRoutes from './routes/auth.js';
import connectDB from './config/DBconnect.js';

// Load environment variables
dotenv.config({ path: './config/config.env' });
const app = express();

// Connect to the database
connectDB();

// Middleware setup
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: "https://shopy-kq3s.vercel.app",
    methods: ['GET', 'POST'],
    credentials: true,
    optionsSuccessStatus: 200
}));

// Basic route to confirm server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Register routes
app.use('/api/v1/mens', MensRouter);
app.use('/api/v1/womens', WomensRouter);
app.use('/api/v1/kids', KidsRouter);
app.use('/api/v1/auth', authRoutes); // Ensure the auth route is under /api/v1/auth

// Start the server
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
