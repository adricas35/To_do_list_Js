// Creamos las constantes globales para los elementos principales son globales porque no estan dentro de una fuction

constInput= document.getElementById("to-do-input");
constAddBtn= document.getElementById("add-btn");
constToDoList= document.getElementById("cont-to-do-list");
constCopletedList= document.getElementById("cont-copleted-list");


// Cramos la funcion que nos permite crear una nueva tarea apartir del formulario 
// Toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente
function CreateToDoItem(){

    // Creamos el nodo o elemento padre
    const item= document.createElement('div');
    item.classList.add("item-to-do");
// Creamos el nodo hijo del input y le agragamos el type checkbox
    const checkbox= document.createElement('input');
    checkbox.type= "checkbox";


}





