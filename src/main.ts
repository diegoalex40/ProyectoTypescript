import { Student } from "./entity/Student";
import { Teacher } from "./entity/Teacher";
import { Activity } from "./entity/Activity"

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];

enum Course {
    FrontEnd = "FrontEnd",
    BackEnd = "BackEnd",
    DataBase = "DataBase",
    Ux = "Ux",
    Ui = "Ui"
}

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

function addActivity (): void{
    let currentActivity: Activity =
    {
        name: readFromHtml("nameActivity")
    }

    activities.push(currentActivity);
    console.table(activities);
}


function readFromHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value
}

//funciona para llenar automaticamente el las opciones del select
function initSelect():void {
    //Crea la variable para guardar el los elementos del select desde el DOM
    let gradebookCourse = document.getElementById("GradebookSelect") as HTMLSelectElement;

    //Object nos permite crear un array desde el enumerado Course con su propiedad Value
    let courses = Object.values(Course);
    courses.forEach(
      //Esta es la estrucutra basica de una funcion flecha o lambda
        (value) =>  {
            let option = document.createElement("option");
            option.value = value;
            option.text = value;
            gradebookCourse.add(option);
        }
    )

}

initSelect();