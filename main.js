import "./src/css/style.css";
import { setInitialMode } from "./javascript/theme";
import { mostrarPregunta } from "./src/components/script";

setInitialMode();

function main(){


  // generar un codigo para verificar que tematica selecciono el usuario para el quiz y asi seleccionar las pregunas correspondientes
  

  mostrarPregunta(0)
}

main()