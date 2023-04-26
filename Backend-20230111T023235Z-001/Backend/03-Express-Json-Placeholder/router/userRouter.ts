import express, {Request, Response, Router} from "express";
import path from "path";
import {JSONUtil} from "../util/JSONUtil";
import {IUser} from "../models/IUser";

const userRouter:Router = Router();

/*
    @usage : get all the users
    @url : http://127.0.0.1:9000/users/
    @method : GET
    @form-params : no-params
    @url-params : no-params
 */
userRouter.get('/', async (request:Request, response:Response) => {
    try {
        let users:IUser[] = await JSONUtil.getAllUsers();
        response.status(200).json(users);
    }
    catch (error){
        response.status(500).json({error : error})
    }
})

/*
    @usage : get a user
    @url : http://127.0.0.1:9000/users/:userId
    @method : GET
    @form-params : no-params
    @url-params : no-params
 */
userRouter.get('/:userId', async (request:Request, response:Response) => {
    let {userId} = request.params;
    try {
        let user:IUser | undefined = await JSONUtil.getUser(Number(userId));
        if(user){
            response.status(200).json(user);
        }
        else{
            response.status(404).json({error : "no user found"})
        }
     }
    catch (error){
        response.status(500).json({error : error})
    }
})


export default userRouter;
