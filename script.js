//gameBoard
const gameBoardModule = (function (){
    let fila1 = [1,2,2]
    let fila2 = [1,2,6]
    let fila3 = [1,5,2]

    let gameBoardField = [fila1, fila2, fila3];

    //Función que verifica el ganador en el tablero
    function win() {
        //Victoria diagonal X2Y2, X1Y1, X3Y3
        if(gameBoardField[0][0] == gameBoardField[1][1] && gameBoardField[1][1] == gameBoardField[2][2]){
            console.log("win diagonal derecha inferior")
        }

        //Victoria diagonal X2Y2, X1Y3, X3Y1
        if(gameBoardField[0][2] == gameBoardField[1][1] && gameBoardField[1][1] == gameBoardField[2][0]){
            console.log("win diagonal derecha superior")
        }

        for (i = 0; i < 3; i++){
            //Victoria por 3 horizontal
            if(gameBoardField[i][0] == gameBoardField[i][1] && gameBoardField[i][1] == gameBoardField[i][2]) {
                console.log("win horizontal")
            }

            //Victoria por 3 vertical
            if(gameBoardField[0][i] == gameBoardField[1][i] && gameBoardField[1][i] == gameBoardField[2][i]) {
                console.log("win vertical")
            }
        }
    }

    return {win};
})();

gameBoardModule.win();