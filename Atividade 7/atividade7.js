function jogar(escolhaUsuario) {
    var escolhaComputador = Math.random();
    if (escolhaComputador < 0.34) {
        escolhaComputador = 'pedra';
    } else if(escolhaComputador <= 0.67) {
        escolhaComputador = 'papel';
    } else {
        escolhaComputador = 'tesoura';
    }

    var resultado = '';
    if(escolhaUsuario === escolhaComputador){
        resultado = 'Empate!';
    } else if((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
              (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
              (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    alert('Usuário: ' + escolhaUsuario + '\nComputador: ' + escolhaComputador + '\n' + resultado);
}
