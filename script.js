let boxes = document.querySelectorAll(".box")
let start = document.getElementById("start")
let reset = document.getElementById("resets")
let choose1 = document.getElementById("choose1")
let choose2 = document.getElementById("choose2")

let turn0 = true;
let text = true;
let play = false;
let c1 = false,c2 = false;
let gameover = false;

let array = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {

        if(gameover)
        {
            return;
        }

        else if(!c1 && !c2)
        {
            start.innerHTML = "Choose X or O";
        }
        else if (box.innerHTML !== "") 
        {
            return;
        }

        else if(turn0 && c2)
        {
            box.innerHTML = "O";
            turn0 = false;
            c1 = true;
            choose1.disabled = true;
            choose2.disabled = true;
            if(text)
            {
                start.innerHTML = "Play Again";
                text = false;
                play = true;
            }

        }
        else
        {
            box.innerHTML = "X";
            turn0 = true;
            c2 = true;
            choose1.disabled = true;
            choose2.disabled = true;                    
            if(text)
            {
                start.innerHTML = "Play Again";
                text = false;
                play = true;
            }

        }

        checkwinner();
    })
})

reset.addEventListener("click" , () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        if(play)
        {
            start.innerHTML = "Game Started";
            play = true;
            text = true;
            c1 = false;
            c2 = false;
            flag = false;
            gameover = false;
            choose1.disabled = false;
            choose2.disabled = false;
        }
    });
})

function checkwinner(){

    let isDraw = true;

    for(let pattern of array)
    {
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "")
        {
            if(pos1 === pos2 && pos2 === pos3 && pos3 === pos1)
            {
                start.innerHTML = `Winner is ${pos1}`;
                boxes[pattern[0]].style.background = "yellow"
                boxes[pattern[1]].style.background = "yellow"
                boxes[pattern[2]].style.background = "yellow"
                gameover = true;
                return;
            }
        }
    }

    boxes.forEach((box) => {
        if (box.innerHTML === "") {
            isDraw = false; 
        }
    });

    if (isDraw && !gameover) {
        start.innerHTML = "It's a Draw!";
        gameover = true;
    }

}


choose1.addEventListener("click", () => {
    c1 = true;
    c2 = false;
})

choose2.addEventListener("click", () => {
    c2 = true;
    c1 = false;
})

