import express from 'express';
import dotenv from 'dotenv';
import {DBUtil} from "./db/DBUtil";

// configure dot-env
dotenv.config({
    path: "./.env"
})

const app: express.Application = express(); // initialize the express js

const port: string | undefined = process.env.PORT || "9000";
const dbUrl: string | undefined = process.env.EXPRESS_APP_MONGO_DB_CLOUD_URL;
const dbName: string | undefined = process.env.EXPRESS_APP_MONGO_DB_DATABASE_NAME;

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200);
    response.json({
        msg: 'Welcome to Express Server'
    });
})

if (port && dbUrl && dbName) {
    app.listen(Number(port), () => {
        if (dbUrl && dbName) {
            DBUtil.connectToDB(dbUrl, dbName).then((dbResponse) => {
                console.log(dbResponse);
            }).catch((error) => {
                console.error(error);
                process.exit(0); // stops the node js process
            });
        }
        console.log(`Server started at ${port}`);
    })
}