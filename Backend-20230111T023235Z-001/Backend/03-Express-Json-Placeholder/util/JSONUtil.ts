import jsonfile from 'jsonfile';
import * as path from "path";
import {IUser} from "../models/IUser";
import {domainToASCII} from "url";

export class JSONUtil{

    private static userFilePath:string = path.join(__dirname, "..", "db", "users.json");

    public static getAllUsers():Promise<IUser[]>{
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userFilePath, (err, data) => {
                if(err){ reject(err)}
                if(data) { resolve(data)}
            })
        })
    }

    public static getUser(userId:number):Promise<IUser | undefined>{
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userFilePath, (err, data) => {
                if(err){ reject(err)}
                let users:IUser[] = data;
                if(users) {
                    resolve(users.find(user => user.id === userId))
                }
            })
        })
    }


}