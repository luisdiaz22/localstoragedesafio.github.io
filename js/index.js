// Seleccionamos los elementos del DOM
const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

// Evento al hacer click en el botón
buttonText.addEventListener("click", () => {
  const valor = inputText.value; // obtenemos lo que el usuario escribió

  // Guardamos en localStorage
  localStorage.setItem("textoGuardado", valor);

  // limpiar el input
  inputText.value = "";
});