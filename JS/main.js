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
// function to change paragraph textContent to you win and make it big

function displayWin(){
    text.textContent = currentPlayer.toLocaleUpperCase() + " WINS";
}



function checkForWin(location){
    index = location;
    console.log(index);
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







// function checkVerticalWin(column){
//     var sum = 5; 
//     console.log(column);  
//     if(let i >= 0 && column[i + 1] !== undefined){
//         if (column[i].style.backgroundColor === column[i + 1].style.backgroundColor
//             && column[i + 1].style.backgroundColor !== 'rgb(' + 206 + ',' + 168 + ',' + 122  + ')'){
//             for (var index = column[i]; index >= 0; i--) {
//                 if(column[index].style.backgroundColor === column[sum - 1].style.backgroundColor){
//                     sum = sum - 1;                   
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
   

function getRow(e){
    var column = document.getElementsByClassName(e);

     for (let i = column.length - 1; i >= 0; i--){
         if(column[i].style.backgroundColor !== "black" && column[i].style.backgroundColor !== "red"
         && currentPlayer === "red") { 
            column[i].style.backgroundColor = currentPlayer;

            console.log(column[i].className);
            
            //  var location = Array.prototype.filter.call(gridElements, function(element, index, gridElements){
            //     //  return element.classList();
            //     //  console.log(location);
            //  });
            
             console.log(location); 
            currentPlayer = "black";
            displayCurrentPlayer.textContent = "Player turn: " + currentPlayer;
            
            break; 
        }else if(currentPlayer === "black" && column[i].style.backgroundColor !== "red"
        && column[i].style.backgroundColor !== "black") {
            column[i].style.backgroundColor = currentPlayer;
            
            var grdLocation = column[i].getElementsByClassName('grid');
            var location = Array.prototype.filter.call(grdLocation, function(element, index, grdlocation){
                 return element.classList[i];
             });
             console.log(location);
            // location = column[i].classList
            
            console.log(column[i].classList)
            currentPlayer = "red";
            displayCurrentPlayer.textContent =  "Player turn: " + currentPlayer;
            break;
        }                   
    }
}    





