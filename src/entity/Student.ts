import { Person } from "./person";

export interface Student extends Person {
    level : number,
    dni : number
}