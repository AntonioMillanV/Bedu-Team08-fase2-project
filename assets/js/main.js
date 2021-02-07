//INICIO DEL CODIGO
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