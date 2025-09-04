// Seleccionamos el span donde mostraremos el dato
const dataSpan = document.getElementById("data");

// Obtenemos el valor desde localStorage
const texto = localStorage.getItem("textoGuardado");

// Mostramos el valor, o un mensaje si no hay nada guardado
dataSpan.textContent = texto ? texto : "No hay datos guardados.";
