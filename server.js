import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToMongo from './Schemas/ConnectToMongo.js';
import AuthRoutes from './Routes/AuthRoutes.js';
import BookRoutes from './Routes/BookRoutes.js';
import UserRoutes from './Routes/UserRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend's origin
    credentials: true,              // If using cookies or other credentials
}));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use("/api/auth",AuthRoutes);
app.use("/book",BookRoutes);
app.use("/users",UserRoutes);
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true
  }));

app.listen(process.env.PORT, () => {
    connectToMongo();
    console.log(`Server is running on port ${process.env.PORT}`);
});
