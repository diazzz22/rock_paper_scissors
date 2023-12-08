function getComputerChoice () {
    const opciones = ["piedra","papel","tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
console.log("El contricante ha elegido:");
console.log(getComputerChoice());

//constante para la selección del pc
const computerSelection = getComputerChoice();

function playRound (playerSelection,computerSelection){
   // const jugador = playerSelection.toLowerCase();
//tres opciones del piedra del jugador 
    if (computerSelection == "papel" && playerSelection == "piedra") {
        console.log("has perdido");
    } 
    if (computerSelection == "piedra" && playerSelection == "piedra") {
        console.log("empate");
    }
    if (computerSelection == "tijeras" && playerSelection == "piedra") {
        console.log("has ganado");
    }
//tres opciones del papel del jugador 
    if (computerSelection == "piedra" && playerSelection == "papel ") {
        console.log("has ganado");
    }
    if (computerSelection == "papel" && playerSelection == "papel ") {
        console.log("empate");
    }
    if (computerSelection == "tijeras" && playerSelection == "papel ") {
        console.log("has perdido");
    }
//tres opciones del tijeras del jugador
    if (computerSelection == "piedra" && playerSelection == "tijeras ") {
    console.log("has perdidos");
    }
    if (computerSelection == "papel" && playerSelection == "tijeras ") {
    console.log("has ganado");
    }
    if (computerSelection == "tijera" && playerSelection == "tijeras ") {
    console.log("empate");
    }
}


//contante para la selección del jugador
const playerSelection = "piedra";
//DESCOMENTAR CUANDO SE ACABEN LAS COMPROBACIONES
console.log(playRound(playerSelection,computerSelection));


/*function funcion_general (seleccion_jugador,seleccion_pc) {
    const jugador = seleccion_jugador.toLowerCase();
    const pc = seleccion_pc;
}*/