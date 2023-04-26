import {ResultsEntity} from "./models/ResultsEntity";
import {UserService} from "./services/UserService";

const users: ResultsEntity[] | undefined = UserService.getAllUsers();
if (users) {
    console.log(users);
}

