//CREACION DE TAREAS
class Task {
    static id = 0 //CONTADOR PARA EL ID
    constructor(tarea) {
        this.tarea = tarea;
        this.id = Task.id += 1;
        this.completado = false
        this.creado = new Date()

    }
}

//TODOLIST, ARREGLO PARA NUESTRA LISTA DE TAREAS
class TodoList {

    constructor() {
        this.tasks = []
    }

    nuevoTodo(todo) {
        this.tasks.push(todo);
    }

    eliminarTodo() {


    }

    marcarCompletado(id) {
        for (let i of this.tasks) {
            if (i.id == id) {
                i.completado = !i.completado;
                break
            }
        }
    }

    eliminarCompletados(id) {
        this.tasks = this.tasks.filter(todo => todo.id != id)
    }
}



//CREACION DEL HTML
let appContent = document.querySelector('#app');
//CREACION DEL HEADER
const createHeader = () => {
        const header = document.createElement('header');
        header.innerHTML = `
    <img src="./assets/img/logo-bedu.svg" alt="">
    <h1>Mis Tareas</h1>
    `;
        header.classList.add('header')
        return header;
    }
    //CREACION DEL LA FILA PARA CREAR LAS TAREAS
const createRowTask = () => {
    const tasks = document.createElement('div');
    tasks.innerHTML = `
    <section class="tasks">
            <input " type="text " name=" " id="inputTask" placeholder="QUE TENEMOS QUE HACER ">
            <button class="btn add">Agregar</button>
        </section>`;
    tasks.classList.add('generateTask')
    return tasks;
}

//CREACION DEL CONTENEDOR DE TAREAS
const createTaskContent = () => {
    const taskContent = document.createElement('section');
    taskContent.innerHTML = '<ul class="todo-list"></ul>';
    taskContent.classList.add('main');
    return taskContent;
}

//AGREGANDO LA ESTRUCTURA DEL SITIO
appContent.appendChild(createHeader());
appContent.appendChild(createRowTask());
appContent.appendChild(createTaskContent());


//VARIABLE PARA INSTANCIAR NUEVAS TAREAS
let todoList = new TodoList();
const txtAgregar = document.querySelector('.add'),
    inputTask = document.querySelector('#inputTask');



//REFERENCIAS AL HTML
const list = document.querySelector('.todo-list')
console.log(list);
// CREACION DE TAREAS
let crearTASK = (task) => {
    let htmlTask = document.createElement('li') //CREACION HTML DEL LAS TAREAS
    htmlTask.innerHTML =
        `
		<div class="view">
		    <input class="toggle" type="checkbox" ${task.completado ? 'checked' : ''}>
		    <label>${task.tarea}</label>
			<button class="destroy">X</button>
						</div>
    `
    htmlTask.setAttribute("data-id", task.id); //OBTENIENDO EL ID DE LA TAREA
    task.completado ? htmlTask.classList.add('completado') : '';
    list.appendChild(htmlTask)
    return htmlTask;
}
//EVENTO 
//BOTON AGREGAR
txtAgregar.addEventListener('click', () => {
    if (inputTask.value.length > 0) {
        console.log('dentro del task');
        const newTask = new Task(inputTask.value);
        todoList.nuevoTodo(newTask);
        console.log(todoList);
        crearTASK(newTask);
        inputTask.value = '';
    }
})
//AGREGAR MEDIANTE LA TECLA ENTER
inputTask.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && inputTask.value.length > 0) {
        console.log('dentro del task');
        const newTask = new Task(inputTask.value);
        todoList.nuevoTodo(newTask);
        crearTASK(newTask);
        inputTask.value = ''; //VACIAR EL IMPUT
    }
})
//MARCAR Y ELIMINAR
list.addEventListener('click', (event) => {
    let nameElement = event.target.localName, //OBTENIENDO EL NOMBRE DONDE APUNTA EL CLICK
        CompleteElement = event.target.parentElement.parentElement, //OBTENIENDO A TODO EL ELEMENTO LI
        idElement = CompleteElement.getAttribute('data-id') //OBTIENDO SU ID
    //MARCAR COMPLETADO
    if (nameElement.includes('input')) {
        todoList.marcarCompletado(idElement)
        CompleteElement.classList.toggle('completed'); //AGREGANDO Y QUITANDO LA CLASE COMPLETED
        console.log(todoList);
    } else if (nameElement.includes('button')) { //ELIMINANDO LOS ELEMENTOS
        todoList.eliminarCompletados(idElement);
        list.removeChild(CompleteElement);
        console.log(todoList);
    }
});


/************************************* */
