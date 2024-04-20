import tarjetas from "./constants.js";

const siguienteButton = document.getElementById("siguiente");
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo");
const descripcion = document.getElementById("descripcion");

let currentIndex = 0;

siguienteButton.addEventListener("click", submit);

function submit() {
  currentIndex = currentIndex + 1 // Incrementa el índice y lo vuelve a cero si llega al final del array
  const tarjetaActual = tarjetas[currentIndex];

  // Aplicar animación a los textos
  titulo.classList.remove("animate__backInDown");
  descripcion.classList.remove("animate__backInDown");
  titulo.classList.add("animate__backOutDown", "animated");
  descripcion.classList.add("animate__backOutDown", "animated");

  // Actualizar la imagen, título y descripción de la tarjeta después de la animación
  setTimeout(() => {
    imagen.src = tarjetaActual.imagen;
    titulo.textContent = tarjetaActual.titulo;
    descripcion.textContent = tarjetaActual.descripcion;

    // Aplicar animación a los nuevos textos
    titulo.classList.remove("animate__backOutDown");
    descripcion.classList.remove("animate__backOutDown");
    titulo.classList.add("animate__backInDown", "animated");
    descripcion.classList.add("animate__backInDown", "animated");
  }, 500); // Espera 0.5 segundos (500 milisegundos) antes de actualizar el contenido y aplicar las nuevas animaciones
  if(currentIndex == tarjetas.length){
    location.href = 'indice/index.html'
  }
}
