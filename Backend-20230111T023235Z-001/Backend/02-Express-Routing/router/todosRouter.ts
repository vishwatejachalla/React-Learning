import express, {Request, Response} from "express";

const todosRouter:express.Router = express.Router();

// router configurations
todosRouter.get('/', (request:Request, response:Response) => {
    response.status(200).json({
        msg : "Iam from Todo Router",
        url : request.url
    });
})


export default todosRouter;
