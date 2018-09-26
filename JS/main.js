//apps state (variables)
var currentPlayer = "red";

var gridElements = document.getElementsByClassName('grid');

var text = document.getElementById('textDisplay');
//cached element references
var displayCurrentPlayer = document.getElementById('playerTurn');

var resetBtn = document.getElementById("reset");




//event listeners
resetBtn.addEventListener('click', reset);

//functions
// create function to check for win after a piece has been played 


function displayWin(){
    text.textContent = currentPlayer.toLocaleUpperCase() + " WINS";
}




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

function getColumnName(columnLetter){
    var columnName = columnArray[playedRow].classList.contains("columnLetter");
    console.log(columnName);
    return columnName;
}


function getColor(playedRow, columnArray) {
    // returns color for the position of current piece placed. 
        console.log(columnArray[playedRow].classList.contains("G"));
        // if(getColumnName("G") == true){
        //     console.log("good");
        // }
    
    console.log(columnArray[playedRow]);
    console.log(columnArray[playedRow].style.backgroundColor);
    return columnArray[playedRow].style.backgroundColor;    
}
// need to take this position and check one up 

// Given column name, return the column name to the right
function nextColumn(columnName) {
    if (columnName == "G")  return null 
    else if (columnName == "F")  return "G";
    else if (columnName == "E")  return "F";
    else if (columnName == "D")  return "E";
    else if (columnName == "C")  return "D";
    else if (columnName == "B")  return "C";
    else if (columnName == "A")  return "B"
}
// Given column name return column name to the left
function prevColumn(columnName) {
    if (columnName == "A")  return null 
    else if (columnName == "B")  return "A";
    else if (columnName == "C")  return "B";
    else if (columnName == "D")  return "C";
    else if (columnName == "E")  return "D";
    else if (columnName == "F")  return "E";
    else if (columnName == "G")  return "F";
}
// given row number return number above
function nextRow(playedRow){
    if (playedRow == "5") return null;
    else if (playedRow == "4") return "5";
    else if (playedRow == "3") return "4";
    else if (playedRow == "2") return "3";
    else if (playedRow == "1") return "2";
    else if (playedRow == "0") return "1";
}
// given row number return number below
function prevRow(playedRow){
    if (playedRow == "0") return null;
    else if (playedRow == "5") return "4";
    else if (playedRow == "4") return "3";
    else if (playedRow == "3") return "2";
    else if (playedRow == "2") return "1";
    else if (playedRow == "1") return "0";
}

//
// If the cell above, below, left or right or any of the four diagonals is
// the same color as the current cell, it's a win. If we are at an edge, don't
// check off the grid.
//
// CurrentColor = color in the current cell
// if CurrentColor == color in the cell above then return win
// if CurrentColor == color in the cell below then return win

//
function checkForVerticalWinInConnectTwo(playedRow, playedColumn) {
    if (getColor(playedRow, playedColumn) == getColor(playedRow+1, playedColumn)) {  
        // return true
        console.log("you win")
    }    
    else if (getColor(playedRow, playedColumn) == getColor(playedRow, nextColumn(columnName))){
        console.log("you win")
        //    console log 
    }
}

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








function reset(e){ 
    for(let i = 0; i < gridElements.length; i++){
        if (gridElements[i].style.backgroundColor === "black" || gridElements[i].style.backgroundColor === "red") {
            gridElements[i].style.backgroundColor = 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')';                                       
        }
    }
}    
   // get parent node.class

function evaluateGameConditions(e){
    var columnArray = document.getElementsByClassName(e);
    console.log(columnArray);

     for (var indexValue = columnArray.length - 1; indexValue >= 0; indexValue--){
         if(columnArray[indexValue].style.backgroundColor !== "black" && columnArray[indexValue].style.backgroundColor !== "red"
         && currentPlayer === "red") { 
            columnArray[indexValue].style.backgroundColor = currentPlayer;
            // console.log(columnName[indexValue]);
            // console.log(indexValue);
             
           
            //  this gets the class name of the row this row for the column that was selected. 
            //It this number will be used to find the column  and row cross section to find color
            console.log(playedRow = columnArray[indexValue].parentNode);
            playedRow = columnArray[indexValue].parentNode.classList.value;
            //console.log(columnName[playedRow]);
            getColor(playedRow, columnArray);
           
            //checkForVerticalWinInConnectTwo(playedRow, columnName);
            getColumnName("G");
            currentPlayer = "black";
            displayCurrentPlayer.textContent = "Player turn: " + currentPlayer;
            
            break; 
        }else if(currentPlayer === "black" && columnArray[indexValue].style.backgroundColor !== "red"
        && columnArray[indexValue].style.backgroundColor !== "black") {
            columnArray[indexValue].style.backgroundColor = currentPlayer;
            
            //console.log(playedRow= columnName[indexValue].parentNode.classList.value);
            playedRow = columnArray[indexValue].parentNode.classList.value;
            //console.log(columnName[playedRow]);
            getColor(playedRow, columnArray);
                    
            currentPlayer = "red";
            displayCurrentPlayer.textContent =  "Player turn: " + currentPlayer;
            break;
        }                   
    }
}    





