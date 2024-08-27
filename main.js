import "./src/css/style.css";
import { setInitialMode } from "./javascript/theme";
import { mostrarPregunta } from "./src/components/script";

setInitialMode();

function main(){
  mostrarPregunta(0)
}

main()