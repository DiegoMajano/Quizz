import "./src/css/style.css";
import { setInitialMode } from "./javascript/theme";
import { mostrarPregunta } from "./src/components/script";
import { dataJs } from "./javascript/data/data-javascript";
import { dataCss } from "./javascript/data/data-css";
import { dataHtml } from "./javascript/data/data-html";
import { dataAcce } from "./javascript/data/data-accessibility";


setInitialMode();

function main(){
  console.log(dataJs);
  
  // generar un codigo para verificar que tematica selecciono el usuario para el quiz y asi seleccionar las pregunas correspondientes
  
  mostrarPregunta(0, dataJs)
}

main()