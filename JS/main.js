
var gameOver = false;

var currentPlayer = "red";

var gridElements = document.getElementsByClassName('grid');

var text = document.getElementById('textDisplay');

var displayCurrentPlayer = document.getElementById('playerTurn');

var currentPiecePosition = [];

var resetBtn = document.getElementById("reset");

var gridButtons = document.getElementById("gridBtn");

var arr = [];

resetBtn.addEventListener('click', reset);

gridButtons.addEventListener('click',playMove);

function playMove(evt){
    if(!gameOver){
        fillArrayWithDomReferencesAndUpdate();
        columnId = evt.target.id;
        var columnArray = document.getElementsByClassName(columnId); 
        checkSpaceIsEmptyPlacepieceStorePosition(columnArray);
        checkForHorizontalWinInConnectfour(0,0);
        checkForVerticalWinInConnectFour();
        checkTopLeftDiagonalWins();
        checkBottomLeftDiagonalWin();
        updateCurrentPlayerColor();
    }
}
function fillArrayWithDomReferencesAndUpdate(){
    var newArr = [];
    for(let i = 0; i < 7; i++){
        var columnLetter = gridButtons.children[i].id;
        newArr.push(document.getElementsByClassName(columnLetter));
    arr = newArr.slice(0);
    }
}
function checkSpaceIsEmptyPlacepieceStorePosition(columnArray){
    for (var indexValue = columnArray.length - 1; indexValue >= 0; indexValue--){
        if(columnArray[indexValue].style.backgroundColor !== "black" 
        && columnArray[indexValue].style.backgroundColor !== "red") { 
            placePiece(columnArray[indexValue]);
            break;
        }            
    }
}
function placePiece(columnArray){
    columnArray.style.backgroundColor = currentPlayer;   
}
function updateCurrentPlayerColor(){
    if(currentPlayer === "red"){
        currentPlayer = "black";
        displayCurrentPlayer.textContent = "Player turn: " + currentPlayer; 
    }else{
        currentPlayer = "red"
        displayCurrentPlayer.textContent = "Player turn: " + currentPlayer; 
    }
}

function checkRowForWin(col, row){
    if(arr[col][row].style.backgroundColor == currentPlayer && arr[col + 1][row].style.backgroundColor == currentPlayer && arr[col + 2][row].style.backgroundColor == currentPlayer && arr[col + 3][row].style.backgroundColor == currentPlayer){
        displayWin();  
        gameOver = true;  
     }
}
function checkColumnForWin(col, row){
    if(arr[col][row].style.backgroundColor == currentPlayer && arr[col][row + 1].style.backgroundColor == currentPlayer && arr[col][row + 2].style.backgroundColor == currentPlayer && arr[col][row + 3].style.backgroundColor == currentPlayer){
        displayWin();
        gameOver = true;
     }
}
function checkFromTopLeftDiagonal(col, row){
    if(row + 3 < 6){
        if(arr[col][row].style.backgroundColor == currentPlayer && arr[col + 1][row + 1].style.backgroundColor == currentPlayer && arr[col + 2][row + 2].style.backgroundColor == currentPlayer && arr[col + 3][row + 3].style.backgroundColor == currentPlayer){
            displayWin();
            gameOver = true;
        }
     }
}
function checkFromBtmLeftDiagonal(col, row){
    if(arr[col][row].style.backgroundColor == currentPlayer && arr[col + 1][row - 1].style.backgroundColor == currentPlayer && arr[col + 2][row - 2].style.backgroundColor == currentPlayer && arr[col + 3][row - 3].style.backgroundColor == currentPlayer){
        displayWin();
        gameOver = true;
     }
}
function checkForHorizontalWinInConnectfour() {
    for(let col = 0; col < 7; col++) {
        var row = 0;
        if (col + 1 < 7 && col + 2 < 7 && col + 3 < 7 && row + 3 < 6 && row + 4 < 6 && row + 5 < 6){
            checkRowForWin(col, row);
            checkRowForWin(col,row + 1);
            checkRowForWin(col,row + 2);
            checkRowForWin(col,row + 3);
            checkRowForWin(col,row + 4);
            checkRowForWin(col,row + 5);
        }
    }
}
function checkForVerticalWinInConnectFour(){
    for(let row = 0; row < 3; row++) {
        var col = 0;
        if(row + 1 < 6 && row + 2 < 6){
            checkColumnForWin(col, row);
            checkColumnForWin(col + 1, row);
            checkColumnForWin(col + 2, row);
            checkColumnForWin(col + 3, row);
            checkColumnForWin(col + 4, row);
            checkColumnForWin(col + 5, row);
            checkColumnForWin(col + 6, row);
        }
    }
}
function checkTopLeftDiagonalWins(){
    checkFromTopLeftDiagonal(0,0);
    checkFromTopLeftDiagonal(1,1);
    checkFromTopLeftDiagonal(2,2);
    checkFromTopLeftDiagonal(1, 0);
    checkFromTopLeftDiagonal(2, 1);
    checkFromTopLeftDiagonal(3, 2);
    checkFromTopLeftDiagonal(2, 0);
    checkFromTopLeftDiagonal(3, 0);
    checkFromTopLeftDiagonal(3, 1);
    checkFromTopLeftDiagonal(0, 1);
    checkFromTopLeftDiagonal(1, 2);
    checkFromTopLeftDiagonal(0, 2);                
}
    

function checkBottomLeftDiagonalWin(){
    checkFromBtmLeftDiagonal(0, 5);
    checkFromBtmLeftDiagonal(0, 4);
    checkFromBtmLeftDiagonal(0, 3);
    checkFromBtmLeftDiagonal(1, 5);
    checkFromBtmLeftDiagonal(1, 4);
    checkFromBtmLeftDiagonal(1, 3);
    checkFromBtmLeftDiagonal(2, 5);
    checkFromBtmLeftDiagonal(2, 4);
    checkFromBtmLeftDiagonal(2, 3);
    checkFromBtmLeftDiagonal(3, 5);
    checkFromBtmLeftDiagonal(3, 4);
    checkFromBtmLeftDiagonal(3, 3);
}    
function displayWin(){
    text.textContent = currentPlayer.toLocaleUpperCase() + " WINS";
}
function reset(e){ 
    gameOver = false;
    for(let i = 0; i < gridElements.length; i++){
        if (gridElements[i].style.backgroundColor === "black" || gridElements[i].style.backgroundColor === "red") {
            gridElements[i].style.backgroundColor = 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')'; 
                                              
        }
    }
}    
   
