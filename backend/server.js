import  Express  from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import cors from 'cors';


const app = Express();
app.use(Express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    
}))

mongoose.connect("mongodb://localhost/fasal_assignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use('/api', userRouter);

app.use((req, res) => {
    res.send("server is ready")
})

app.listen(5000, () => {
    console.log('http://localhost:5000')
})