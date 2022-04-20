"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
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
function readFromHtml(id) {
    return document.getElementById(id).value;
}
