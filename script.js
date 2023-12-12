function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Que eliges? Piedra, papel o tijeras?");
        console.log("---- Ronda " + (i+1) + " ----");
        function getComputerChoice () {
            const opciones = ["piedra","papel","tijeras"];
            const indiceAleatorio = Math.floor(Math.random() * opciones.length);
            return opciones[indiceAleatorio];
        }
        console.log("El contricante ha elegido:");
        //constante para la selección del pc
        const computerSelection = getComputerChoice();
        console.log(computerSelection); 
 
        function playRound (playerSelection,computerSelection){    
        const jugador = playerSelection.toLowerCase();
        //tres opciones del piedra del jugador
            
        if (computerSelection == "papel" && jugador == "piedra" ||
            computerSelection == "tijeras" && jugador == "papel" || 
            computerSelection == "piedra" && jugador == "tijeras") {
            console.log("has perdido");
        } 
        if (computerSelection == "piedra" && jugador == "piedra" || 
            computerSelection == "papel" && jugador == "papel" ||
            computerSelection == "tijera" && jugador == "tijeras"){
            console.log("empate");
        }
        if (computerSelection == "tijeras" && jugador == "piedra" || 
            computerSelection == "piedra" && jugador == "papel" || 
            computerSelection == "papel" && jugador == "tijeras") {
            console.log("has ganado");
        }
        }
        
        //contante para la selección del jugador
        //const playerSelection = "piedra";
        
        //DESCOMENTAR CUANDO SE ACABEN LAS COMPROBACIONES
        playRound(playerSelection,computerSelection);
        //console.log(playRound(playerSelection,computerSelection));
    }
}
game();
