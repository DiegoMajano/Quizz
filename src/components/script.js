// variables de control
let contador = 0
let puntuacion = 0
let total = 0
let preguntas = []
let respuestaSeleccionada = null;  // Nueva variable para guardar la selección

// contenedores donde se mostrará el contenido del quiz
const btnNext = document.querySelector("#btn-next")    
const totalText = document.querySelector('.n-preguntas')
const opcionesBox = document.querySelector(".options-list")
const bar = document.querySelector('#bar');

btnNext.addEventListener('click', ()=>{
    // Verificar si se seleccionó una opción antes de avanzar
    if (respuestaSeleccionada) {
        mostrarResultado();  // Mostrar si la respuesta seleccionada es correcta o incorrecta
        respuestaSeleccionada = null;  // Resetear la selección
        btnNext.disabled = true;  // Deshabilitar el botón hasta que el usuario elija la siguiente respuesta
    }

    // Verificar que no se superen la cantidad de preguntas del quiz
    if (contador < total - 1) {
        contador++;
        //Mostrará si la respuesta seleccionada fue correcta o no, luego de 1.2seg pasará a la siguiente
        setTimeout(function() {
            mostrarPregunta(contador, preguntas);
        }, 1200)
        
    } else {
        console.log(`Quiz completado. Usuario ha obtenido: ${puntuacion} preguntas correctas`);
    }
});

/**
 * 
 * @param {number} index el indice de la pregunta
 * @param {{pregunta: string, opciones: string[], correcta: string}[]} data arreglo de las preguntas
 */

// Mostrar pregunta en el contenedor correspondiente según el índice y arreglo dado
export function mostrarPregunta(index, data){
    preguntas = data
    total = preguntas.length
    actualizarContador(index)

    const preguntaText = document.querySelector('#questions')
    const contenedorQuiz = document.querySelector('.quizz')
    const contenedorInfo = document.querySelector('.quiz-content')
    const menu = document.querySelector('.menu')

    contenedorInfo.classList.add('mostrar')
    contenedorQuiz.classList.add('mostrar')
    menu.classList.add('no-mostrar')


    //opcion para que no permita clickear el boton siguiente sin seleccionar respuesta
    btnNext.disabled = true;
    
    preguntaText.textContent = `${index+1}. ${data[index].pregunta}`;

    let opciones = `
    <button id="A" class="option"><div class="option-box">A</div>${data[index].opciones[0]}</button>
    <button id="B" class="option"><div class="option-box">B</div>${data[index].opciones[1]}</button>
    <button id="C" class="option"><div class="option-box">C</div>${data[index].opciones[2]}</button>
    <button id="D" class="option"><div class="option-box">D</div>${data[index].opciones[3]}</button>
    `;
    
    opcionesBox.innerHTML = opciones;

    const opcion = document.querySelectorAll('.option');
    opcion.forEach(op => {
        op.addEventListener('click', function() {
            // Guardar la selección del usuario
            respuestaSeleccionada = this;
            this.style.backgroundColor = '#778fb5'
            btnNext.disabled = false;  // Habilitar el botón "Siguiente"
            
        }); 
    });

    //total = data.length;
}

/**
 * Función que se ejecuta al hacer clic en "Siguiente pregunta"
 */
function mostrarResultado() {
    if (respuestaSeleccionada) {
        let respuestaSeleccionadaTexto = respuestaSeleccionada.textContent.slice(1);
        let respuestaCorrecta = preguntas[contador].correcta;
        

        // Verificar si la respuesta seleccionada es correcta
        if (respuestaSeleccionadaTexto == respuestaCorrecta) {
            respuestaSeleccionada.style.backgroundColor = '#26D782';
            console.log(respuestaSeleccionada);
            
            puntuacion++;
            actualizarPuntuacion();
        } else {
            respuestaSeleccionada.style.backgroundColor = '#EE5454';
            // Mostrar la respuesta correcta
            for (let i = 0; i < opcionesBox.children.length; i++) {
                if (opcionesBox.children[i].textContent.slice(1) === respuestaCorrecta) {
                    opcionesBox.children[i].style.backgroundColor = '#26D782';
                }
            }
        }

        // Desactivar las opciones después de mostrar el resultado
        for (let i = 0; i < opcionesBox.children.length; i++) {
            opcionesBox.children[i].classList.add('desactivado');
        }
    }
}

// Función para actualizar por cuál pregunta va el usuario
function actualizarContador(index){
    totalText.innerHTML = ` ${index+1} de ${total} preguntas `;
    bar.style.width = ` ${(index+1)*10}%`;
}

// Función para actualizar la puntuación o cuántas preguntas ha seleccionado correctamente
function actualizarPuntuacion(){
    const puntuacionText = document.querySelector('.score');
    puntuacionText.textContent = `Puntuación: ${puntuacion} / ${total}`;
}


