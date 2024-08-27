import { datajs } from "../../javascript/data/data-javascript";

let contador = 0
let score = 0

const btnNext = document.querySelector("#btn-next")    
const totalText = document.querySelector('.n-preguntas')

// agregando un event listener

btnNext.addEventListener('click', ()=>{
    // verificar que se muestren la cantidad de preguntas que existen en el quiz
    if(contador < datajs.length - 1){
        contador++;
        mostrarPregunta(contador)
    } else{
        console.log('Quiz completado');
    }   
})

const opcionesBox = document.querySelector(".options-list")

// mostrar pregunta en el contenedor correspondiente
export function mostrarPregunta(index){

    actualizarContador(index)
    const preguntaText = document.querySelector('#questionS')
    
    preguntaText.textContent = `${index+1}. ${datajs[index].pregunta}`

    let options = `
    
    <button id="A" class="option">A. ${datajs[index].opciones[0]}</button>
    <button id="B" class="option">B. ${datajs[index].opciones[1]}</button>
    <button id="C" class="option">C. ${datajs[index].opciones[2]}</button>
    <button id="D" class="option">D. ${datajs[index].opciones[3]}</button>
    `;
    
    opcionesBox.innerHTML = options;

    const option = document.querySelectorAll('.option')
    option.forEach(op => {
        op.addEventListener('click', function() {
            // Llama a la función con 'this' que representa el elemento clickeado
            seleccionarOpcion(this);
        });
    });
}

function seleccionarOpcion(respuesta){
    let respuestaSeleccionada = respuesta.textContent.slice(3,respuesta.length);
    let respuestaCorrecta = datajs[contador].correcta
    
    
    // console.log(respuestaCorrecta);    
         
    if(respuestaSeleccionada == respuestaCorrecta){
        respuesta.classList.add('correcta')
        score++;
        actualizarScore();
    } else{
        respuesta.classList.add('incorrecta')

        for(let i = 0; i < opcionesBox.children.length; i++){
            if(opcionesBox.children[i].textContent == respuestaCorrecta){
                opcionesBox.children[i].classList.add('correcta')
            } 
        }

    }   

    for(let i = 0; i < opcionesBox.children.length; i++){
        opcionesBox.children[i].classList.add('desactivado')
    }
    
}

function actualizarContador(index){
    totalText.innerHTML = ` ${index+1} de ${datajs.length} preguntas `
}

function actualizarScore(){
    const scoreText = document.querySelector('.score')
    scoreText.textContent = `Puntuación: ${score} / ${datajs.length}`
}