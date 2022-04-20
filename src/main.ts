import { Student } from "./entity/Student";
import { Teacher } from "./entity/Teacher";

let students: Student[] = [];
let teachers: Teacher[] = [];

function addStudent (): void{
    //El simbolo de ! nos ayuda a decir: "Yo me hago cargo de que si algo pasa lo soluciono"
    //El uso de HTMLInputElement nos ayuda a realizar un casteo: es decir indicar que el Input element si tiene el metodo value
    let currentStudent: Student = 
    {
        dni: parseInt(readFromHtml("dni")),
        fullName: readFromHtml("nombre"),
        level: parseInt(readFromHtml("semestre"))
    }

    students.push(currentStudent);
    console.table(students);
}

function addTeacher (): void{
    let currentTeacher: Teacher =
    {
        dni: parseInt(readFromHtml("dniTeacher")),
        fullName: readFromHtml("fullNameTeacher"),
        knowledgeArea: readFromHtml("areaTeacher") as unknown as "Software" | "Marketing" | "Arte"
    }

    teachers.push(currentTeacher);
    console.table(teachers);
}

function readFromHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value
}