import "./src/css/style.css";
import { setInitialMode } from "./javascript/theme";
import { mostrarPregunta } from "./src/components/script";
import { dataJs } from "./javascript/data/data-javascript";
import { dataCss } from "./javascript/data/data-css";
import { dataHtml } from "./javascript/data/data-html";
import { dataAcce } from "./javascript/data/data-accessibility";


setInitialMode();

function main(){
  
  // generar un codigo para verificar que tematica selecciono el usuario para el quiz y asi seleccionar las pregunas correspondientes
  console.log(dataJs);
    
  //mostrarPregunta(0, dataHtml)

  document.addEventListener('DOMContentLoaded', () => {
    const btn_HTML = document.querySelector('#HTML');
    const btn_CSS = document.querySelector('#CSS'); 
    const btn_JS = document.querySelector('#JavaScript'); 
    const btn_ACC = document.querySelector('#Accessibility'); 

    btn_HTML.addEventListener('click', () => {
      seleccionarQuiz(0);
    } );
    btn_CSS.addEventListener('click', () => {
      seleccionarQuiz(1);
    });
    btn_JS.addEventListener('click', () => {
      seleccionarQuiz(2);
    });
    btn_ACC.addEventListener('click', () => {
      seleccionarQuiz(3);
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
      console.log('seleccionado html');
      mostrarPregunta(0, dataHtml)
      break;
    case 1:
      console.log('seleccionado css');
      break;
    case 2:
      console.log('seleccionado js');
      mostrarPregunta(0, dataJs)
      break;
    case 3:
      console.log('seleccionado acc');
      mostrarPregunta(0,dataAcce)
      break;
  
    default:
      break;
  }
}



main()