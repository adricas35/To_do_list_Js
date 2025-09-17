// Creamos las constantes globales para los elementos principales son globales porque no estan dentro de una fuction

const input= document.getElementById("to-do-input");
const addBtn= document.getElementById("add-btn");
const toDoList= document.getElementById("cont-to-do-list");
const copletedList= document.getElementById("cont-copleted-list");


// Cramos la funcion que nos permite crear una nueva tarea apartir del formulario 
// Toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente
function CreateToDoItem(textoItem){

    // Creamos el nodo o elemento padre o contenedor
    const item= document.createElement('div');
    item.classList.add("item-to-do");

    // Creamos el nodo hijo del input y le agragamos el type checkbox
    const checkbox= document.createElement('input');
    checkbox.type= "checkbox";

    // Creamos el siguiente nodo hijo parrafo
    const p= document.createElement("P");
    // A este parrafo le asigno el valor del argumento de la  fuction, es decir lo que escribe el usuario en el campo
    p.textContent= textoItem;

    // Creamos el último nodo hijo, del boton de eliminar
    const deleteBtn= document.createElement("button");
    deleteBtn.textContent="x";

    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Utilizamos el return para retornar o dar respuesta del elemento creado ya que lo usaremos en otra funcion más adelante
    return item;
}

// Detectamos el click o el evento click sobre el boton con un evento de escucha sobre el boton agregar (+) 
// Para que apartir de este evento se agregue la tarea dentro del contenedor

addBtn.addEventListener('click', ()=>{
    const textoItem= input.value.trim();
    if (textoItem=="") {
        alert= "No se puede crear una tarea vacia"; 
    }else {
        const newItem= CreateToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value="";
    }
});





