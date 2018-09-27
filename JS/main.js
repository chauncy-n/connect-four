//apps state (variables)
var currentPlayer = "red";

var gridElements = document.getElementsByClassName('grid');

var text = document.getElementById('textDisplay');
//cached element references
var displayCurrentPlayer = document.getElementById('playerTurn');

var currentPiecePosition;

var resetBtn = document.getElementById("reset");

var gridButtons = document.getElementById("gridBtn");

var arr = [];
//event listeners
resetBtn.addEventListener('click', reset);

gridButtons.addEventListener('click',playMove);

//functions
//  Playmove contains functions checkSpaceIsEmpty, updateCurrentPlayerColor, placePiece, checkForWin 


function playMove(evt){
    fillArrayWithDomReferencesAndUpdate();
    columnId = evt.target.id;
    var columnArray = document.getElementsByClassName(columnId); 
    checkSpaceIsEmptyPlacepieceStorePosition(columnArray);
    checkForHorizontalWinInConnectfour();
    
    //console.log(arr);
       
}
function fillArrayWithDomReferencesAndUpdate(){
    var newArr = [];
    for(let i = 0; i < 7; i++){
        var columnLetter = gridButtons.children[i].id;
        newArr.push(document.getElementsByClassName(columnLetter));
    arr = newArr.slice(0);
    }
}
     

    // This will go through every position in the array
    // for(let col = 0; col < 7; col++) {
    //     //Do stuff in this column
    //     for(let row = 0; row < 7; row++) {
    //         //Do stuff in this row
    //         console.log(arr[col][row]);
    //     }
    // }
//}
function checkSpaceIsEmptyPlacepieceStorePosition(columnArray){
    for (var indexValue = columnArray.length - 1; indexValue >= 0; indexValue--){
        if(columnArray[indexValue].style.backgroundColor !== "black" 
        && columnArray[indexValue].style.backgroundColor !== "red") { 
            // currentPiecePosition = columnArray[indexValue];
            placePiece(columnArray[indexValue]);
            updateCurrentPlayerColor();
            console.log(indexValue);
            // console.log(currentPiecePosition.indexValue)
            
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
    if(arr[col][row].style.backgroundColor == "red" && arr[col + 1][row].style.backgroundColor == "red" && arr[col + 2][row].style.backgroundColor == "red" ){
        console.log("you win")
        console.log(currentPlayer);
    }else if(arr[col][row].style.backgroundColor == "black" && arr[col + 1][row].style.backgroundColor == "black" && arr[col + 2][row].style.backgroundColor == "black"){
        console.log("you win")
        console.log(col + 2)
    }
}
function checkForHorizontalWinInConnectfour(playedRow, playedColumn) {
    for(let col = 0; col < 7; col++) {
        var row = 0;
        //console.log(arr[col][row]);
         console.log(col + 1 );
        if (col + 1 < 7 && col + 2 < 7 && col + 3 < 7){
            checkRowForWin(col, row);
        }
    }
        //Do stuff in this column
        for(let row = 0; row < 7; row++) {
            //Do stuff in this row
            //console.log(arr[col][row]);
        }
    }

function checkForWin(){


}


function displayWin(){
    text.textContent = currentPlayer.toLocaleUpperCase() + " WINS";
}

function reset(e){

}







// function reset(e){ 
//     for(let i = 0; i < gridElements.length; i++){
//         if (gridElements[i].style.backgroundColor === "black" || gridElements[i].style.backgroundColor === "red") {
//             gridElements[i].style.backgroundColor = 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')';                                       
//         }
//     }
// }    
   // get parent node.class

             
           
//             
//         }else if(currentPlayer === "black" && columnArray[indexValue].style.backgroundColor !== "red"
//         && columnArray[indexValue].style.backgroundColor !== "black") {
//             columnArray[indexValue].style.backgroundColor = currentPlayer;
            
//             //console.log(playedRow= columnName[indexValue].parentNode.classList.value);
//             playedRow = columnArray[indexValue].parentNode.classList.value;
//             //console.log(columnName[playedRow]);
//             getColor(playedRow, columnArray);
                    
//             currentPlayer = "red";
//             displayCurrentPlayer.textContent =  "Player turn: " + currentPlayer;
//             break;
//         }                   
//     }
// }    






// function checkHorizontalWin(location){
//     var sum = 0; 
//     for (var index = location; index <= gridElements.length - 1; i++) {
//         if(location[sum + 0].style.backgroundColor === gridElements[sum + 1].style.backgroundColor
//             && gridElements[sum + 1].innerHTML !== "&nbsp") {
//             console.log(gridElements[sum + 0]);           
//             console.log(gridElements[sum + 1]);
//             sum = sum + 1;
//             console.log(sum);
//             console.log(gridElements[index]);                   
//             if(sum === 4){
//                 displayWin();
//                 console.log('you win')
//                 break;
//             }
//         }else{
//             break;
//         }      
//     }      
// }
//function take columnName and find out what column it isin class name for which column it's in 

// function getColumnName(playedRow, columnArray, columnLetter){
//     var columnName = columnArray[playedRow].classList.contains(columnLetter);
//     console.log(columnName);
//     // if (columnName == true){
//     //     console.log("this worked");
//     //}  
//     return columnName;
    
// }


// function getColor(playedRow, columnArray) {
//     // returns color for the position of current piece placed. 
//         console.log(columnArray[playedRow].classList.contains("G"));
       
//     console.log(columnArray[playedRow]);
//     console.log(columnArray[playedRow].style.backgroundColor);
//     return columnArray[playedRow].style.backgroundColor;    
// }
// // need to take this position and check one up 

// // Given column name, return the column name to the right
// function nextColumn(columnName) {
//     if (columnName == true){  
//         console.log('this worked'); 
//         return null }
//     else if (columnName == "F") {  return "G"; }
//     else if (columnName == "E") {  return "F"; }
//     else if (columnName == "D") { return "E"; }
//     else if (columnName == "C") { return "D"; }
//     else if (columnName == "B") { return "C"; }
//     else if (columnName == "A") { return "B"; }
// }
// // Given column name return column name to the left
// function prevColumn(columnName) {
//     if (columnName == "A")  return null 
//     else if (columnName == "B")  return "A";
//     else if (columnName == "C")  return "B";
//     else if (columnName == "D")  return "C";
//     else if (columnName == "E")  return "D";
//     else if (columnName == "F")  return "E";
//     else if (columnName == "G")  return "F";
// }
// // given row number return number above
// function nextRow(playedRow){
//     if (playedRow == "5") return null;
//     else if (playedRow == "4") return "5";
//     else if (playedRow == "3") return "4";
//     else if (playedRow == "2") return "3";
//     else if (playedRow == "1") return "2";
//     else if (playedRow == "0") return "1";
// }
// // given row number return number below
// function prevRow(playedRow){
//     if (playedRow == "0") return null;
//     else if (playedRow == "5") return "4";
//     else if (playedRow == "4") return "3";
//     else if (playedRow == "3") return "2";
//     else if (playedRow == "2") return "1";
//     else if (playedRow == "1") return "0";
// }

// //
// // If the cell above, below, left or right or any of the four diagonals is
// // the same color as the current cell, it's a win. If we are at an edge, don't
// // check off the grid.
// //
// // CurrentColor = color in the current cell
// // if CurrentColor == color in the cell above then return win
// // if CurrentColor == color in the cell below then return win

// //
// function checkForVerticalWinInConnectTwo(playedRow, playedColumn) {
//     if (getColor(playedRow, playedColumn) == getColor(playedRow+1, playedColumn)) {  
//         // return true
//         console.log("you win")
//     }    
//     else if (getColor(playedRow, playedColumn) == getColor(playedRow, nextColumn(columnName))){
//         console.log("you win")
//         //    console log 
//     }
// }

// function checkVerticalWin(column, i){
//     var sum = 5;  
//     console.log(column[i + 1]);
//     console.log(column[i]);
//     console.log(column[0]);
//     // if the current played cell selected is in the grid and the next cell below is also on the grid i === row number
//     //need
//     if(column[i] >= 0 && column[i + 1] !== undefined){
//         //if the two cells have the same played tile background color and not the original background color
//         if (column[i].style.backgroundColor === column[i + 1].style.backgroundColor
//             && column[i + 1].style.backgroundColor !== 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')'){
//             for (var index = column.length - 1; index >= 0; i--) {
//                 if(column[index].style.backgroundColor === column[sum + 1].style.backgroundColor){
//                     sum = sum - 1;
//                     console.log(sum); 
                                       
//                     if(sum === 2){
//                         displayWin();
//                         console.log('you win')
//                         break;
//                     }
//                 }else{
//                     break;
//                 }
                
//             }
            
//         }
//     }      
// }










