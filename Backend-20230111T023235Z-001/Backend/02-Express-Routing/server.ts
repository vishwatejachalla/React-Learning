import express from 'express';
import dotenv from 'dotenv';
import userRouter from "./router/userRouter";
import todosRouter from "./router/todosRouter";

// configure dot-env
dotenv.config({
    path : "./.env"
})

const app:express.Application = express(); // initialize the express js

const port:string|undefined = process.env.PORT || "9000";

app.get('/', (request:express.Request,response:express.Response) => {
    response.status(200);
    response.json({
        msg : 'Welcome to Express Server'
    });
})

// configure routing
app.use('/users', userRouter);
app.use('/todos', todosRouter);

if(port){
    app.listen(Number(port), () => {
        console.log(`Server started at ${port}`);
    })
}