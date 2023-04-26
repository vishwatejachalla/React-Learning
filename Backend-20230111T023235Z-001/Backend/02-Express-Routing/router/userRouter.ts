import express, {Request, Response, Router} from "express";

const userRouter:Router = Router();

// router configurations
// http://127.0.0.1:9000/users/
userRouter.get('/', (request:Request, response:Response) => {
    response.status(200).json({
        msg : "Iam from User Router",
        baseUrl : request.baseUrl,
        url  : request.url,
        hostname : request.hostname,
        port : request.originalUrl
    });
})

// http://127.0.0.1:9000/users/24234234?username=naveen&lang=express
userRouter.get('/:userId', (request:Request, response:Response) => {
    let {userId} = request.params;
    let {username, lang} = request.query;
    if(username && lang){
        response.status(200).json({
            msg : "Iam from User Router",
            hostname : request.hostname,
            url : request.originalUrl,
            userId : userId,
            params : request.params,
            query : request.query
        });
    }
    else{
        response.status(400).json({
            msg : "Invalid Query string"
        });
    }

})


export default userRouter;
