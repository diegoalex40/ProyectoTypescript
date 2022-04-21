"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
var Course;
(function (Course) {
    Course["FrontEnd"] = "FrontEnd";
    Course["BackEnd"] = "BackEnd";
    Course["DataBase"] = "DataBase";
    Course["Ux"] = "Ux";
    Course["Ui"] = "Ui";
})(Course || (Course = {}));
function addStudent() {
    //El simbolo de ! nos ayuda a decir: "Yo me hago cargo de que si algo pasa lo soluciono"
    //El uso de HTMLInputElement nos ayuda a realizar un casteo: es decir indicar que el Input element si tiene el metodo value
    let currentStudent = {
        dni: parseInt(readFromHtml("dni")),
        fullName: readFromHtml("nombre"),
        level: parseInt(readFromHtml("semestre"))
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        dni: parseInt(readFromHtml("dniTeacher")),
        fullName: readFromHtml("fullNameTeacher"),
        knowledgeArea: readFromHtml("areaTeacher")
    };
    teachers.push(currentTeacher);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFromHtml("nameActivity")
    };
    activities.push(currentActivity);
    console.table(activities);
}
function readFromHtml(id) {
    return document.getElementById(id).value;
}
//funciona para llenar automaticamente el las opciones del select
function initSelect() {
    //Crea la variable para guardar el los elementos del select desde el DOM
    let gradebookCourse = document.getElementById("GradebookSelect");
    //Object nos permite crear un array desde el enumerado Course con su propiedad Value
    let courses = Object.values(Course);
    courses.forEach(
    //Esta es la estrucutra basica de una funcion flecha o lambda
    (value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        gradebookCourse.add(option);
    });
}
initSelect();
