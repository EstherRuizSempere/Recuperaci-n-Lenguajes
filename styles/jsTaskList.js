// Seleccionar elementos del DOM
//selecciono el campo de texto donde voy a escribir la nueva tarea
const nuevaTarea = document.getElementById('nuevaTarea');


//selecciono el botón para añadir la tarea
const botonAdd = document.getElementById('buttonAdd');


//selecciono la lista donde se va a mostrar mi tarea
const taskList = document.getElementById('taskList');

//Paso 2: Función para agregar una nueva tarea
function addTask(){
    //Recojo el texto  en el campo texto
    const textoTarea = nuevaTarea.value;

    //Verifico que el campo no esté vacio
    if (textoTarea){
        //creo el nuevo elemento li para la lista de tareas
        const taskItem = document.createElement('li');
        //Le digo que contiene mi elemento li, que es el texto introducido
        taskItem.textContent = textoTarea; 

        //Creo el botón de eliminar la tarea
        const botonDelete = document.createElement('button');
        botonDelete.textContent = 'X';

        //agrego el evento al botón para eliminar mi tarea
        botonDelete.addEventListener('click', () =>{
            taskItem.remove();
        });

        //Agregar la clase botonDelete
        botonDelete.classList.add('botonDelete');
        //añado el boton eliminar al elemento li
        taskItem.appendChild(botonDelete);

        //añado el elemento li a la lista de tareas
        taskList.appendChild(taskItem);

        //limpiar el campo de texto después de agregar la tarea
        nuevaTarea.value = '';
    }
}
// Agregar evento al botón de agregar tarea
botonAdd.addEventListener('click', addTask);