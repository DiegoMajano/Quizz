
// variables de control
let contador = 0
let puntuacion = 0
let total = 0
let preguntas = []

// contenedores donde se mostrará el contenido del quiz
const btnNext = document.querySelector("#btn-next")    
const totalText = document.querySelector('.n-preguntas')
const opcionesBox = document.querySelector(".options-list")


// agregando un event listener al boton siguiente
btnNext.addEventListener('click', ()=>{
    // verificar que se muestren la cantidad de preguntas que existen en el quiz
    if(contador < total - 1){
        contador++;
        mostrarPregunta(contador, preguntas)
    } else{
        console.log(`Quiz completado. Usuario ha obtenido: ${puntuacion} preguntas correctas`);
    }   
})

/**
 * 
 * @param {number} index el indice de la pregunta
 * @param {{pregunta: string, opciones: string[], correcta: string}[]} data arreglo de las preguntas
 */

// mostrar pregunta en el contenedor correspondiente segun el indice y arreglo dado
export function mostrarPregunta(index, data){
    preguntas = data
    actualizarContador(index)
    const preguntaText = document.querySelector('#questionS')
    
    preguntaText.textContent = `${index+1}. ${data[index].pregunta}`

    let opciones = `
    
    <button id="A" class="option">A. ${data[index].opciones[0]}</button>
    <button id="B" class="option">B. ${data[index].opciones[1]}</button>
    <button id="C" class="option">C. ${data[index].opciones[2]}</button>
    <button id="D" class="option">D. ${data[index].opciones[3]}</button>
    `;
    
    opcionesBox.innerHTML = opciones;

    const opcion = document.querySelectorAll('.option')
    opcion.forEach(op => {
        op.addEventListener('click', function() {
            // Llama a la función con 'this' que representa el elemento clickeado
            verSeleccion(this,data);
        });
    });

    total = data.length
}
/**
 * 
 * @param {Element} respuesta elemento obtenido del html
 * @param {{pregunta: string, opciones: string[], correcta: string}[]} data preguntas del quiz
 */
// funcion 
function verSeleccion(respuesta,data){
    // con el slice se elimina el "1. "
    let respuestaSeleccionada = respuesta.textContent.slice(3,respuesta.length);
    let respuestaCorrecta = data[contador].correcta
    
    
    // verificar que ha seleccionado la respuesta correcta
         
    if(respuestaSeleccionada == respuestaCorrecta){
        respuesta.classList.add('correcta')
        puntuacion++;
        actualizarPuntuacion();
    } else{
        respuesta.classList.add('incorrecta')
        // si se equivocó mostrar cual era la respuesta correcta
        for(let i = 0; i < opcionesBox.children.length; i++){
            if(opcionesBox.children[i].textContent == respuestaCorrecta){
                opcionesBox.children[i].classList.add('correcta')
            } 
        }
    }   

    // un ciclo for para desactivar las opciones ya que solo se puede seleccionar una respuesta a la vez
    for(let i = 0; i < opcionesBox.children.length; i++){
        opcionesBox.children[i].classList.add('desactivado')
    }
    
}

// funcion para actualizar por cual pregunta va el usuario
function actualizarContador(index){
    totalText.innerHTML = ` ${index+1} de ${total} preguntas `
}

// funcion para actualizar la puntuacion o cuantas preguntas ha seleccionado correctamente
function actualizarPuntuacion(){
    const puntuacionText = document.querySelector('.score')
    puntuacionText.textContent = `Puntuación: ${puntuacion} / ${total}`
}