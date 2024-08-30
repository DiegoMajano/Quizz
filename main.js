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
      btn_HTML.classList.add('btn-selected');
      setTimeout(function() {
        seleccionarQuiz(0);
      }, 500)
    } );
    btn_CSS.addEventListener('click', () => {
      btn_CSS.classList.add('btn-selected')
      setTimeout(function() {
        seleccionarQuiz(1);
      }, 500)
    });
    btn_JS.addEventListener('click', () => {
      btn_JS.classList.add('btn-selected')
      setTimeout(function() {
        seleccionarQuiz(2);
      }, 500)
    });
    btn_ACC.addEventListener('click', () => {
      btn_ACC.classList.add('btn-selected')
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
      document.querySelector('#icon-html').classList.remove('d-none');
      break;
    case 1:
      mostrarPregunta(0, dataCss)
      document.querySelector('#icon-css').classList.remove('d-none');
      break;
    case 2:
      mostrarPregunta(0, dataJs)
      document.querySelector('#icon-js').classList.remove('d-none');
      break;
    case 3:
      mostrarPregunta(0, dataAcce)
      document.querySelector('#icon-acce').classList.remove('d-none');
      break;
  
    default:
      break;
  }
}

main()