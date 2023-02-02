const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cells = $$(".container li");

const restartBtn = $(".restartBtn");
const statusText = $(".status");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
console.log(1+2+'3');
let options = ["","","","","","","","",""];
let currentPlayer ="X";
let running = false;

initGame();
function initGame() {
    cells.forEach((element )=> {
        element.addEventListener("click", cellClicked);
    });
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked () {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) return;
    updateCell(this,cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function checkWinner() {
    let roundWon = false;
    for(let i = 0; i< winCondition.length; i++)
       {
            let condition = winCondition[i];           
            let cellA = options[condition[0]];
            let cellB = options[condition[1]];
            let cellC = options[condition[2]];
           
            if(cellA == "" || cellB == "" || cellC == "") 
            {
                continue;
            }
            if(cellA == cellB && cellB == cellC) 
            {
                roundWon = true;
                break;
            }
       }
        if (roundWon) 
        {
                statusText.textContent = `${currentPlayer} wins!`
                running = false;
               
        }
    else if (!options.includes("")) {
       
        statusText.textContent = `Draw!`;
        running = false;
    }
    else {
        changePlayer();
        
    } 
       
}
function changePlayer() {
    if(currentPlayer == "X") 
    { 
        currentPlayer = "O";
    }
    else if (currentPlayer == "O") 
    { 
        currentPlayer="X";

    } 

    statusText.textContent = `${currentPlayer}'s turn`;
}
function restartGame() {
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    cells.forEach((element )=> {
        element.textContent="";
    });
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
 
}