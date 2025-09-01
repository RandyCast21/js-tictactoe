//GameBoard
let fila1 = [1,2,2]
let fila2 = [1,2,6]
let fila3 = [1,5,2]

let GameBoard = [fila1, fila2, fila3];

function win() {
    //Victoria diagonal X2Y2, X1Y1, X3Y3
    if(GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2]){
        console.log("win diagonal derecha inferior")
    }

    //Victoria diagonal X2Y2, X1Y3, X3Y1
    if(GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0]){
        console.log("win diagonal derecha superior")
    }

    for (i = 0; i < 3; i++){
        //Victoria por 3 horizontal
        if(GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2]) {
            console.log("win horizontal")
        }

        //Victoria por 3 vertical
        if(GameBoard[0][i] == GameBoard[1][i] && GameBoard[1][i] == GameBoard[2][i]) {
            console.log("win vertical")
        }
    }
}

win();