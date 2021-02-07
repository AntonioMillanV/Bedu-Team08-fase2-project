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