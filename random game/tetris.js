const gameField = document.querySelector(".game-field"),

    scoreTable = document.querySelector(".score")
    level = document.querySelector(".level"),

    nextField = document.querySelector(".next"),
    nextItem = document.querySelectorAll(".next div")

let fieldItem = Array.from(document.querySelectorAll(".game-field div"));

const width = 10;
const nextFieldWidth = 4;
let nextRandomTetromino = 0;
let score = 0;

// The tetrominoes shapes

const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1,  width * 2 + 2, width * 1 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
];

const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2,  width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
];

const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
];

const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
]

const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [ width, width + 1, width + 2, width + 3],
    [1, width +1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
]

const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

// random tetromino

let rotation = 0;
let randomTetromino = Math.floor(Math.random()*tetrominoes.length);
// let randomRotation = Math.floor(Math.random()*4);
console.log(randomTetromino, rotation)

let currentTetrominoPosition = 4;
let current = tetrominoes[randomTetromino][rotation];
console.log(current)

function colorTetrominos() {
    current.forEach(index => {
        fieldItem[currentTetrominoPosition + index].classList.add("tetromino");
    });
}

colorTetrominos();

// remove tetromino

function removeTetromino() {
    current.forEach(index => {
        fieldItem[currentTetrominoPosition + index].classList.remove("tetromino");
    });
}

// buttons

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

let timer;

start.addEventListener("click", () => {
    prevent;
    fieldItem[53].innerHTML = "";
    if (score === 0) {
        scoreTable.innerHTML = `Score: ${score = 0}`;
    }

    if (scoreTable.innerHTML === "Game over") {
        score = 0;
        level.innerHTML = `Level: ${lvlUp = 0}`;
    }
    scoreTable.innerHTML = `Score: ${score}`;
    colorTetrominos();
    timer = setInterval(moveTetromino, 300);
    nextRandomTetromino = Math.floor(Math.random()*tetrominoes.length);
    colorNextTetromino();
})

// start.addEventListener("click", () => {
//     prevent;
//     if(timer) {
//         clearInterval(timer);
//         timer = null;
//     } else {
//         colorTetrominos();
//         timer = setInterval(moveTetromino, 1000);
//         nextRandomTetromino = Math.floor(Math.random()*tetrominoes.length);
//         colorNextTetromino();
//     }
// })

pause.addEventListener("click", () => {
    prevent;
    clearInterval(timer);
})

// fix restart

restart.addEventListener("click", () => {
    prevent;
    removeTetromino();
    clearInterval(timer);
    fieldItem[53].innerHTML = "";
    scoreTable.innerHTML = `Score: ${score = 0}`;
    level.innerHTML = `Level: ${lvlUp = 0}`;

   for (let i = 0; i < 200; i++) {
    fieldItem[i].classList.remove("stop");
    fieldItem[i].classList.remove("tetromino");
   }

    currentTetrominoPosition = 4;
    colorTetrominos();
    nextRandomTetromino = Math.floor(Math.random()*tetrominoes.length);
    colorNextTetromino();

    console.log(fieldItem.length - 10);
})

function prevent(event) {
    event.preventDefault();
}

start.addEventListener("click", prevent, false);
pause.addEventListener("click", prevent, false);
restart.addEventListener("click", prevent, false);

// move tetromino

function moveTetromino() {
        removeTetromino();
        currentTetrominoPosition += width;
        colorTetrominos();
        stopMoving();
        
        // console.log(currentTetrominoPosition)
}

function stopMoving() {
    if(current.some(index => fieldItem[currentTetrominoPosition + index + width].classList.contains("stop"))) {
        current.forEach(index => fieldItem[currentTetrominoPosition + index].classList.add("stop"));

        randomTetromino = nextRandomTetromino;
        nextRandomTetromino = Math.floor(Math.random()*tetrominoes.length);
        current = tetrominoes[randomTetromino][rotation];
        currentTetrominoPosition = 4;
        colorTetrominos();
        colorNextTetromino();
        showScore();
        gameOver();
    }   

        // if(currentTetrominoPosition > 174) {
        // clearInterval(timer);

        // randomTetromino = Math.floor(Math.random()*tetrominoes.length);
        // current = tetrominoes[randomTetromino][randomRotation];
        // currentTetrominoPosition = 4;
        // // colorTetrominos();
        // }
}

// const testTetromino = [
//     [1, width, width + 1,  width + 2, width * 2 + 1],
//     [width + 1, width + 2,  width * 2, width * 2 + 1],
//     [0, width, width + 1, width * 2 + 1],
//     [width + 1, width + 2, width * 2, width * 2 + 1]
// ];

// function test() {
//     currentTetrominoPosition = 0;
//     current = testTetromino[0];
//     current.forEach(index => {
//         fieldItem[currentTetrominoPosition + index].classList.add("tetromino");
//     });
// }
// test()

console.log(`add buttons`);


// move tetromino left/right and change its rotation

function moveTetrominoLeft() {
    removeTetromino();
    const isAtLeft = current.some(index => (currentTetrominoPosition + index) % width === 0);

    if(!isAtLeft) {
        currentTetrominoPosition -= 1;
    }

    if(current.some(index => fieldItem[currentTetrominoPosition + index].classList.contains("stop"))) {
        currentTetrominoPosition += 1;
    }

    colorTetrominos();
}

function slice(number) {
    let numberToString = number.toString();
    if(numberToString.length <= 1) {
      return +numberToString;
    }
    let result = numberToString.slice(numberToString.length - 1);
    return +result
  }

function moveTetrominoRight() {
    removeTetromino();
    const isAtRight = current.some(index => slice(currentTetrominoPosition + index) === 9);

    if(!isAtRight) {
        currentTetrominoPosition += 1;
    }

    if(current.some(index => fieldItem[currentTetrominoPosition + index].classList.contains("stop"))) {
        currentTetrominoPosition -= 1;
    }

    colorTetrominos();
}

function rotateTetromino() {
    removeTetromino();
    rotation++;
    if(rotation === current.length) {
        rotation = 0
    }
    current = tetrominoes[randomTetromino][rotation];
    colorTetrominos()
}

document.addEventListener("keyup", (event) => {
    if(event.code === "KeyQ") {
        moveTetrominoLeft()
        console.log("left")
    }

    if(event.code === "KeyE") {
        moveTetrominoRight()
        console.log("right")
    }

    if(event.code === "KeyW") {
        rotateTetromino()
        console.log("rotate")
    }
});

// show the next tetromino on a separate field

let nextTetrominoIndex = 0;

const nextTetrominoShapes = [
    [1, nextFieldWidth + 1, nextFieldWidth * 2 + 1, 2],
    [0, nextFieldWidth, nextFieldWidth + 1, nextFieldWidth * 2 + 1],
    [1, nextFieldWidth, nextFieldWidth + 1, nextFieldWidth + 2],
    [0, 1, nextFieldWidth, nextFieldWidth + 1],
    [1, nextFieldWidth + 1, nextFieldWidth * 2 + 1, nextFieldWidth * 3 + 1]
]

function colorNextTetromino() {
    nextItem.forEach(item => {
        item.classList.remove("tetromino");
    })
    nextTetrominoShapes[nextRandomTetromino].forEach(index => nextItem[nextTetrominoIndex + index].classList.add("tetromino"));
}

// remove the row that is completed and show score
let lvlUp = 0;

function showScore() {
    for(let i = 0; i < 199; i += 10) {
        let row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];

        if (row.every(index =>
             fieldItem[index].classList.contains("stop"))){
                score +=10;
                scoreTable.innerHTML = `Score: ${score}`;
                if (score % 100 == 0) {
                    lvlUp += 1;
                }

                level.innerHTML = `Level: ${lvlUp}`;

                // if (score === 20) {
                //     level.innerHTML = `Win!`;
                // }
                

                row.forEach(index => {
                    fieldItem[index].classList.remove("stop");
                    fieldItem[index].classList.remove("tetromino")
                })
                const rowCompleted = fieldItem.splice(i, width);
                fieldItem = rowCompleted.concat(fieldItem);
                fieldItem.forEach(particle => gameField.appendChild(particle));
             };    
        }
    }

 // menu, variables

const settings = document.querySelector(".settings"),
    controls = document.querySelector(".controls"),
    controlsItems = document.querySelector(".controls .control-list"),
    sound = document.querySelector(".sound"),
    color = document.querySelector(".color"),
    bodyBackground = document.querySelector("body")
    lightColor = document.querySelector(".light"),
    darkColor = document.querySelector(".dark"),
    backgroundThemes = document.querySelector(".color .options"),
    soundOnOff = document.querySelector(".sound .options"),
    results = document.querySelector(".results"),
    ghIcon = document.querySelector(".footer-item a img"), 
    span = document.querySelectorAll("span");

// show controls

controls.addEventListener("click", () => {
    controlsItems.classList.toggle("active");
})


// change background color

color.addEventListener("click", () => {
     backgroundThemes.classList.toggle("active");
})

darkColor.addEventListener("click", () => {
    bodyBackground.style = "background-color: #000; color: #fff";
    ghIcon.style = "background-color: #fff; border-radius: 25px";
    span.forEach(item => item.style = "color: #fff");
})

lightColor.addEventListener("click", () => {
    bodyBackground.style = "background-color: #d3dec2; color: #000";
    ghIcon.style = "background-color: #d3dec2";
    span.forEach(item => item.style = "color: #000");
})

// sound on/ off

sound.addEventListener("click", () => {
    soundOnOff.classList.toggle("active");
})

// results table and local storage

let table = document.querySelector("table"),
    lvl = document.querySelectorAll(".lvl");

let resultArray = []; // an array of objects containing data
let resultArrayHtml = []; // an array for html elements of a table

    function scoreLevel () {

        resultArray.unshift({score: `${score}`, level: `${lvlUp}`});
        resultArrayHtml.unshift(`<tr class="results">
        <td class="result-score">${score}</td>
        <td class="lvl">${lvlUp}</td>
    </tr>`) 

    if(resultArray.length < 3){
        table.innerHTML += resultArrayHtml[0];
        localStorage.setItem("data", JSON.stringify(resultArray));
    }
}

// game over

function gameOver() {
    if(current.some(index => fieldItem[currentTetrominoPosition + index].classList.contains("stop"))) {
        scoreTable.innerHTML = "Game over";
        fieldItem[53].innerHTML = `Game over \n Score: ${score} \n Level: ${lvlUp}`;
        scoreLevel();
        clearInterval(timer);
        
        for (let i = 0; i < 200; i++) {
            fieldItem[i].classList.remove("stop");
            fieldItem[i].classList.remove("tetromino");
            }
        }

    if (score === 1000) {
        level.innerHTML = `Win!`;
        scoreTable.innerHTML = "Win!";
        fieldItem[53].innerHTML = `WIN! \n Score: ${score} \n Level: ${lvlUp}`;

        clearInterval(timer);
        
    for (let i = 0; i < 200; i++) {
        fieldItem[i].classList.remove("stop");
        fieldItem[i].classList.remove("tetromino");
        }
    }
}