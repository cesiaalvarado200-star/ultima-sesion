
// Obtener los elementos del HTML
const entrada = document.getElementById("tarea");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

// Función para agregar tareas
function agregarTarea() {

    const texto = entrada.value.trim();

    // Validar que no esté vacío
    if (texto === "") {

        mensaje.textContent = "¡Escribe una tarea primero!";

        return;
    }

    // Crear elemento de la lista
    const elemento = document.createElement("li");

    // Crear el texto de la tarea
    const nombre = document.createElement("span");

    nombre.textContent = texto;

    // Marcar tarea como completada
    nombre.addEventListener("click", function() {

        nombre.classList.toggle("completada");

    });

    // Crear botón eliminar
    const eliminar = document.createElement("button");

    eliminar.textContent = "Eliminar";

    eliminar.classList.add("eliminar");

    // Eliminar tarea
    eliminar.addEventListener("click", function() {

        elemento.remove();

        mensaje.textContent = "Tarea eliminada correctamente.";

    });

    // Agregar elementos a la lista
    elemento.appendChild(nombre);

    elemento.appendChild(eliminar);

    lista.appendChild(elemento);

    // Limpiar el campo de entrada
    entrada.value = "";

    mensaje.textContent = "¡Tarea agregada correctamente! ♡";

    entrada.focus();
}

// Evento del botón agregar
botonAgregar.addEventListener("click", agregarTarea);

// Agregar tarea presionando Enter
entrada.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        agregarTarea();

    }

});
