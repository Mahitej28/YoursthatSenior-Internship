let turn = 'X';
let gameover = false;
let reset = document.getElementById('restartBtn');

//Function to change turn

const ChnageTurn = ()=>{

    return turn === 'X' ? "0" : 'X';
}

// unction to check Victory

const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6 , 7, 8, 5, 25, 0],
        [0 , 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(e => {

        if((boxtext[e[0]].innerHTML == boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML == boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== '')){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerHTML + " Won🥳🥳 ";        
            gameover = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }   
        
    });


}

//Game Logic

let boxes = document.getElementsByClassName('box');

arr = Array.from(boxes)

arr.forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{

        if (boxtext.innerHTML == ''){

            boxtext.innerHTML = turn;
            turn = ChnageTurn();
            checkWin();
            if(gameover == false){
                document.querySelector('.info').innerHTML = "Turn for" + " " + turn;
            }
        }


    })
});

//Restart Function
reset.addEventListener('click', ()=>{

    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        
        element.innerHTML='';
    });
    document.querySelector('.info').innerHTML = "Turn for" + " " + turn;
    document.querySelector(".line").style.width = "0vw";
})