import { Student } from "./entity/Student";

let students: Student[] = [];

function addStudent (): void{
    //El simbolo de ! nos ayuda a decir: "Yo me hago cargo de que si algo pasa lo soluciono"
 console.log((<HTMLInputElement>document.getElementById("nombre")!).value);

}