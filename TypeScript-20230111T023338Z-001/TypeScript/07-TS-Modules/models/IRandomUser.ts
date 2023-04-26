import {ResultsEntity} from "./ResultsEntity";
import {Info} from "./Info";

export interface IRandomUser {
    results?: ResultsEntity[];
    info: Info;
}
