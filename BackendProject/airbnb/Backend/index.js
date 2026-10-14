import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import ConnectDb from './configs/db.js'
import authRouter from './routes/auto.route.js'

import listingRouter from './routes/listing.route.js'

dotenv.config()

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 

app.get('/', (req, res) => {
    res.send("Hello");
});
app.use('/api/auth',authRouter)
app.use("/api/listing",listingRouter)
app.listen(3000, () => {
    ConnectDb()
    console.log("Listen on 3000");
});