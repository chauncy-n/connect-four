//apps state (variables)
var currentPlayer = "red";


// var gridArray = [
//     [null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null]
// ];

 
//cached element references
var displayCurrentPlayer = document.getElementById('playerTurn');

var resetBtn = document.getElementById("reset");

//event listeners
resetBtn.addEventListener('click', reset);
//functions
 
function reset(e){
    var gridElements = document.getElementsByClassName('grid');
    for(i =0; i < gridElements.length; i++){

        if (gridElements[i].style.backgroundColor === "black" || gridElements[i].style.backgroundColor === "red") {
            gridElements[i].style.backgroundColor = 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')';                                        
        }else{
        
        }
    }
}    
   
                                



function getRow(e){
    var column = document.getElementsByClassName(e);
     for (i = column.length - 1; i >= 0; i--){
         if(column[i].style.backgroundColor !== "black" && column[i].style.backgroundColor !== "red"
         && currentPlayer === "red") { 
            column[i].style.backgroundColor = currentPlayer;
            currentPlayer = "black";
            displayCurrentPlayer.textContent = "Player turn: " + currentPlayer;
            console.log(displayCurrentPlayer);  
            break; 
        }else if(currentPlayer === "black" && column[i].style.backgroundColor !== "red"
        && column[i].style.backgroundColor !== "black") {
            column[i].style.backgroundColor = currentPlayer;
            currentPlayer = "red";
            displayCurrentPlayer.textContent =  "Player turn: " + currentPlayer;
            break;
        }                   
    }
}    





