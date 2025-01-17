let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg")

let turnO = true;
let count = 0;

const winPattrns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("clicked");
        count++;
        console.log(count);
        
        if (turnO) {
            box.innerText ="O";
            box.style.color = "rgb(0, 102, 255)"
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red"
            turnO = true;
        }
        box.disabled = true;

        if (count >= 9) {
            draw();
        }

        checkWinner();
    });
});

let disableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner) {
    msg.innerText = `Congratuations! The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
function draw() {
    msg.innerText = `Match is draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for (let pattern of winPattrns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
        
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);