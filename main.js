import "./src/css/style.css";
import { setInitialMode } from "./javascript/theme";
import { mostrarPregunta } from "./src/components/script";
import { dataJs } from "./javascript/data/data-javascript";
import { dataCss } from "./javascript/data/data-css";
import { dataHtml } from "./javascript/data/data-html";
import { dataAcce } from "./javascript/data/data-accessibility";


setInitialMode();

function main(){
  document.addEventListener('DOMContentLoaded', () => {
    const btn_HTML = document.querySelector('#HTML');
    const btn_CSS = document.querySelector('#CSS'); 
    const btn_JS = document.querySelector('#JavaScript'); 
    const btn_ACC = document.querySelector('#Accessibility'); 

    btn_HTML.addEventListener('click', () => {
      btn_HTML.style.backgroundColor = '#778fb5'
      setTimeout(function() {
        seleccionarQuiz(0);
      }, 500)
    } );
    btn_CSS.addEventListener('click', () => {
      btn_CSS.style.backgroundColor = '#778fb5'
      setTimeout(function() {
        seleccionarQuiz(1);
      }, 500)
    });
    btn_JS.addEventListener('click', () => {
      btn_JS.style.backgroundColor = '#778fb5'
      setTimeout(function() {
        seleccionarQuiz(2);
      }, 500)
    });
    btn_ACC.addEventListener('click', () => {
      btn_ACC.style.backgroundColor = '#778fb5'
      setTimeout(function() {
        seleccionarQuiz(3);
      }, 500)
    });
  })
}

/**
 * 
 * @param {number} nQuiz numero de quiz seleccionado (0-HTML, 1-CSS, 2-JAVASCRIPT, 3-ACCESSIBILITY)
 */

function seleccionarQuiz(nQuiz){
  switch (nQuiz) {
    case 0:
      mostrarPregunta(0, dataHtml)
      break;
    case 1:
      mostrarPregunta(0, dataCss)
      break;
    case 2:
      mostrarPregunta(0, dataJs)
      break;
    case 3:
      mostrarPregunta(0, dataAcce)
      break;
  
    default:
      break;
  }
}

main()