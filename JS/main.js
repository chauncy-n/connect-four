//apps state (variables)
var currentPlayer = "red";



var gridArray = [
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null]
];

 
//cached element references

var resetBtn = document.getElementById("reset");
console.log(resetBtn);
//event listeners
resetBtn.addEventListener('click', reset);
//functions
 
function reset(e){
    var getGrid = document.getElementsByClassName('grid');
    for(i =0; i < getGrid.length; i++){
        console.log(getGrid[i]);
    };
}    
   
    // getGrid.style.backgroundColor = "brown";
                                



function getRow(e){
    var column = document.getElementsByClassName(e);
     for (i = column.length - 1; i >= 0; i--){
         if(column[i].style.backgroundColor !== "black" && column[i].style.backgroundColor !== "red"
         && currentPlayer === "red") { 
            column[i].style.backgroundColor = currentPlayer;
            currentPlayer = "black"
            
            console.log(currentPlayer);
            break; 
        }else if(currentPlayer === "black" && column[i].style.backgroundColor !== "red"
        && column[i].style.backgroundColor !== "black") {
            column[i].style.backgroundColor = currentPlayer;
            currentPlayer = "red";
            console.log(currentPlayer);
            break;
        }                   
    }
}    





