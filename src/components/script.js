import { datajs } from "../../javascript/data/data-javascript";

let contador = 0
let score = 0
let numeroPregunta = 1

const btnNext = document.querySelector("#btn-next")    
const totalText = document.querySelector('.progress')

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

const opcionesBox = document.querySelector("#options-list")

// mostrar pregunta en el contenedor correspondiente
export function mostrarPregunta(index){

    actualizarContador(index)
    const preguntaText = document.querySelector('#questionS')
    
    preguntaText.textContent = `${index+1}. ${datajs[index].pregunta}`

    let options = `<button id="A" class="option">
                    <div class="option-box">A</div>
                    ${datajs[index].opciones[0]}
                </button>
                <button id="B" class="option">
                    <div class="option-box">B</div>
                    ${datajs[index].opciones[1]}
                </button>
                <button id="C" class="option">
                    <div class="option-box">C</div>
                    ${datajs[index].opciones[2]}
                </button>
                <button id="D" class="option">
                    <div class="option-box">D</div>
                    ${datajs[index].opciones[3]}
                </button>`;
    
    opcionesBox.innerHTML = options;

}

function actualizarContador(index){

    totalText.innerHTML = ` ${index+1} de ${datajs.length} preguntas `
    console.log(` <p> ${index+1} de ${datajs.length} preguntas </p> `);
    
}