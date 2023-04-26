// import express module
import express from 'express';
import dotenv from 'dotenv';
import userRouter from "./router/userRouter";

const app: express.Application = express(); // initialize the express js

// configure dot-env
dotenv.config({
    path: "./.env"
})

// configure express to read form data
app.use(express.json());

const port: string | undefined = process.env.PORT || "9000";

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200);
    response.contentType('application/json');
    response.json({
        msg: 'Welcome to Express Server'
    });
})

// routing configuration
app.use("/users", userRouter);

if (port) {
    app.listen(Number(port), () => {
        console.log(`Server started at ${port}`);
    })
}