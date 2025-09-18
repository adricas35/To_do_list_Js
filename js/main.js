// Creamos las constantes globales para los elementos principales son globales porque no estan dentro de una fuction

const input = document.getElementById("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const copletedList = document.getElementById("cont-copleted-list");

// Esta function solo crea la estructura html y la deja en limbo o memoria temporal para ser agregada luego mediante un appenChild
// Cramos la funcion que nos permite crear una nueva tarea apartir del formulario 
// Toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente
function CreateToDoItem(textoItem) {

    // Creamos el nodo o elemento padre o contenedor
    const item = document.createElement('div');
    item.classList.add("item-to-do");

    // Creamos el nodo hijo del input y le agragamos el type checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    // Creamos el siguiente nodo hijo parrafo
    const p = document.createElement("P");
    // A este parrafo le asigno el valor del argumento de la  fuction, es decir lo que escribe el usuario en el campo
    p.textContent = textoItem;

    // Creamos el último nodo hijo, del boton de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";

    // Ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Utilizamos el return para retornar o dar respuesta del elemento creado ya que lo usaremos en otra funcion más adelante
    return item;
}




// Detectamos el click o el evento click sobre el boton con un evento de escucha sobre el boton agregar (+) 
// Para que apartir de este evento se agregue la tarea dentro del contenedor

addBtn.addEventListener('click', () => {
    const textoItem = input.value.trim();
    if (textoItem == "") {
        alert = "No se puede crear una tarea vacia";
    }
    else {
        const newItem = CreateToDoItem(textoItem);
        toDoList.appendChild(newItem);
        eventsToItem(newItem);
        input.value = "";
    }
});



// La siguiente function nos permitira agregar el funcionamiento principal sobre las tareas es decir marcar la tarea como completada o en dado caso eliminarla
function eventsToItem(item) {
    // utilizamos querySelector para capturar el input y button que estan del item
    const checkbox = item.querySelector("input");
    const deleteBtn = item.querySelector("button");
    // completar la tarea
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            copletedList.appendChild(item);
        }
        else {
            toDoList.appendChild(item);
        }
    });

    deleteBtn.addEventListener('click', () => {
        item.remove();
    })
}

const btnStyles = document.getElementById("change-styles");
btnStyles.addEventListener('click', () => {
    const linkCss = document.getElementById("enlace-estilos");


    if (linkCss.getAttribute('href') == "css/styles.css") {
        linkCss.setAttribute("href", "css/styles-dia.css");
        btnStyles.textContent = "modo dia"
    }
    else {
       
        linkCss.setAttribute("href", "css/styles.css");
        btnStyles.textContent = "modo noche"
    }

})









