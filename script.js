function getComputerChoice () {
    var numero = Math.floor(Math.random() * 1);
    switch (0) {
        case 0:
            return 'piedra';
        case 1:
            return 'papel';
        case 2:
            return 'tijeras';
    
    }
}
console.log(getComputerChoice(0,3));