function getComputerChoice () {
    const opciones = ["piedra","papel","tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
const seleccion_pc = getComputerChoice();
console.log(seleccion_pc);
function getPlayerChoice() {
    let opcion = "";
    
    while (opcion !== 4) {
    console.log("1. piedra");
    console.log("2. papel");
    console.log("3. tijera");
    console.log("4. salir");

    opcion = prompt("Elige una opción (1-4):");

    switch (opcion) {
        case "1":
            console.log("Seleccionaste piedra");
            let seleccionjugador = "piedra";
            break;
        case "2":
            console.log("Seleccionaste papel");
            seleccionjugador = "papel";
            break;
        case "3":
            console.log("Seleccionaste tijera");
            seleccionjugador = "tijera";
            break;
        case "4":
            console.log("Seleccionaste salir");
            break;
        default:
            console.log("Opción no válida. Por favor, elige una opción válida");
            break;
        }
    }
}
getPlayerChoice();
/*function funcion_general (seleccion_jugador,seleccion_pc) {
    const jugador = seleccion_jugador.toLowerCase();
    const pc = seleccion_pc;
}*/