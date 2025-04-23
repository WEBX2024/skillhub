import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

app.use(cors());
app.use(express.json())

app.get('/', (_req, res)=>{
    res.send("Auth service is running...");
});

mongoose
    .connect(MONGO_URI)
    .then(()=>{
        console.log('connected to MongoDB');
        app.listen(PORT, ()=>{
            console.log(`Auth service is running at http://localhost:${PORT}`);
        });
    })
    .catch((err)=>{
        console.error('MongoDB connection error:',err);
    });
