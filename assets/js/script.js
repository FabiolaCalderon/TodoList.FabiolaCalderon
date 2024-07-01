const listaDeTareas = document.querySelector("#tbody")
const tareasInput = document.querySelector("#nuevaTarea")
const tareasRealizadas = document.querySelector("#total-realizadas")
const tareasTotal = document.querySelector("#total-tareas")
const tareaBorrar = document.querySelector("#tareaBorrar")
const btnagregarTarea = document.querySelector("#agregarTarea")
const tareaRealizada = document.querySelector("#tarecheck")

const tareas = [
    {id: Date.now(), nombre: "Generar pagos directos desde SAP", completado: false},
    {id: Date.now()+ 1, nombre: "Gestionar cheques y pago de Costas", completado: false},
    {id: Date.now()+ 2, nombre: "Realizar pagos de Multas", completado: false},
];

 
btnagregarTarea.addEventListener("click", () => {
  const nuevaTarea = { id: Date.now(), nombre: tareasInput.value, completado: false};
  tareas.push(nuevaTarea);
  tareasInput.value = "";

render();
});

function render() {
    let html = "";
    for(const tarea of tareas) {
        html += `
        <tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre}</td>
         <td>
         <input type="checkbox" ${tarea.completado ? "checked" : "" } onchange="realizadas(${tarea.id})">
         <button id="tareaborrar" onclick="borrar(${tarea.id})">x</button>
        </td>
        </tr>`;
    }

    listaDeTareas.innerHTML = html;
    tareasTotal.innerHTML = tareas.length
    tareasRealizadas.innerHTML = tareas.filter(t => t.completado).length;
    }


function borrar(id) {
        const index = tareas.findIndex(t => t.id === id);
        if (index !== -1) {
            tareas.splice(index, 1);
            render();
        } }

function realizadas (id){
            const index = tareas.findIndex(t => t.id === id);
            if (index !== -1) {
                tareas[index].completado = !tareas[index].completado;
                render();
            } }

render();