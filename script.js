//gameBoard
const gameBoardModule = (function (){
    //Creacion de gameBoardField en matriz
    let fila1 = [,,]
    let fila2 = [,,]
    let fila3 = [,,]

    let gameBoardField = [fila1, fila2, fila3];

    //Mecánica de Juego
    let valorAccion = "X"

    function mecanicaJuego(CoorY, CoorX) {
        if(player1Activo == true){
            valorAccion = "X"
        } else {
            valorAccion = "O"
        }
        llenadoMatriz(CoorY, CoorX, valorAccion);
        conteOport = conteOport - 1;
        win(player1Activo);
        cambioTurno();
        if (conteEmpate == 1 || conteWin == 1){
            limpiarTablero();
            conteEmpate = 0;
            conteWin = 0;
        }
    }


    //Cambio de turno
    let player1Activo = true

    function cambioTurno () {
        player1Activo = !player1Activo;
    }

    //Valor en Cambio de turno
    let valorPlayer1Activo = "X";
    
    function valorCambioTurno() {
    if(player1Activo == true){
            valorAccion = "X"
        } else {
            valorAccion = "O"
        }
    }

    //Llenado de matriz
    function llenadoMatriz(CoorY, CoorX, valor) {
        if (gameBoardField[CoorY][CoorX] > 0){
            gameBoardField[CoorY][CoorX] = valor;
        }
        else {
            console.log("Este lugar está ocupado")
        }
    }

    //Reiniciar el tablero
    function limpiarTablero(){
        for(i = 0; i < 3; i++){
            for(j = 0; j < 3; j++){
                gameBoardField [i][j] = Array.from({length: 1}, () => Math.random() * 100);
            }
        }
        player1Activo = true;
    }


    //Conteo de oportunidades para la victoria
    let conteOport = 9;
    let conteWin = 0;
    let conteEmpate = 0;

    //Anuncio de jugador ganador 
    function whoIsWinner(jugador) {
        conteWin = 1;
        if(player1Activo == true) {
            console.log("Gana jugador 1")
            player1Winner();
            alert("Gana Jugador 1");
            return;
        } else {
            console.log("Gana jugador 2")
            player2Winner();
            alert("Gana Jugador 2");
            return;
        }
    }

    //Función que verifica el ganador en el tablero
    function win(player1Activo) {
        //Victoria diagonal X2Y2, X1Y1, X3Y3
        if(gameBoardField[0][0] == gameBoardField[1][1] && gameBoardField[1][1] == gameBoardField[2][2]){
            console.log("win diagonal derecha inferior")
            whoIsWinner(player1Activo);
        }

        //Victoria diagonal X2Y2, X1Y3, X3Y1
        if(gameBoardField[0][2] == gameBoardField[1][1] && gameBoardField[1][1] == gameBoardField[2][0]){
            console.log("win diagonal derecha superior")
            whoIsWinner(player1Activo);
        }
        
        for (i = 0; i < 3; i++){
            //Victoria por 3 horizontal
            if(gameBoardField[i][0] == gameBoardField[i][1] && gameBoardField[i][1] == gameBoardField[i][2]) {
                console.log("win horizontal")
                whoIsWinner(player1Activo);
            }

            //Victoria por 3 vertical
            if(gameBoardField[0][i] == gameBoardField[1][i] && gameBoardField[1][i] == gameBoardField[2][i]) {
                console.log("win vertical")
                whoIsWinner(player1Activo);
            }
        }

        //Empate y resta de acciones
        if (conteWin == 0 && conteOport == 0){
            conteEmpate = 1;
            console.log("Empate")
        }
    }

    //Creacion de Players para mantener puntuación
    player1Score = 0;
    player2Score = 0;

    //Suma de Score
    function player1Winner() {
        player1Score = ++player1Score;
    }

    function player2Winner() {
        player2Score = ++player2Score;
    }

    //Obtener Score
    function player1GetScore() {
        console.log(player1Score);
    }

    function player2GetScore() {
        console.log(player2Score);
    }

    //Revisar tablero
    function revisarTablero(){
        for(i = 0; i < 3; i++){
            for(j = 0; j < 3; j++){
                console.log(gameBoardField[i][j]);
            }
        }
    }

    return {win, player1Winner, player2Winner, player1GetScore, 
        player2GetScore, llenadoMatriz, mecanicaJuego, cambioTurno, 
    limpiarTablero, revisarTablero, valorCambioTurno};
})();


//gameBoardModule.revisarTablero();

const fieldModule = (function () {

    //Actualizar el tablero
    let gameBoardFieldDiv = document.querySelector(".gameBoardContainer");
    let gameBoardFieldDivChild = document.querySelectorAll(".gameBoardPanel")
    //console.log(gameBoardFieldDivChild)

    function gameBoardPanelEvento() {
    gameBoardFieldDiv.addEventListener("click", (e) => {
    if(e.target.className == "gameBoardPanel") {
        //console.log(e.target.dataset.y)
        //console.log(e.target.dataset.x)
        console.log(e.target.dataset.number)
        actualizarField(e.target.dataset.number, "X")
    }
    });
    }

    function actualizarField(numberField, valorAccion) {
    let nodoField = Array.from(gameBoardFieldDivChild).find(e => (e.dataset.number == numberField));
    nodoField.textContent = valorAccion
    nodoField.style.fontSize = "200%"
    }

    //Actualizar contadores superiores
    let player1ScoreDiv = document.querySelector("#player1ScoreDiv");
    let playeTurnDiv = document.querySelector("#playerTurnDiv");
    let player2ScoreDiv = document.querySelector("#player2ScoreDiv");



    function actualizarContadores(contadorPlayer1, contadorPlayer2, turnoAviso) {
        player1ScoreDiv.textContent = contadorPlayer1;
        player2ScoreDiv.textContent = contadorPlayer2;
        playeTurnDiv.textContent = turnoAviso;
    }



    return {gameBoardPanelEvento, };
})();



/*

function prueba() {
    gameBoardFieldDiv.addEventListener("click", (e) => {
    if(e.target.className == "gameBoardPanel") {
        //console.log(e.target.dataset.y)
        //console.log(e.target.dataset.x)
        console.log(e.target.dataset.number)
        actualizarField(e.target.dataset.number, "X")
    }
    });
    }
*/














