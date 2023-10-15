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

let currentTetrominoPosition = 4;
let current = tetrominoes[randomTetromino][rotation];

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

                row.forEach(index => {
                    fieldItem[index].classList.remove("stop");
                    fieldItem[index].classList.remove("tetromino")
                })
                const rowCompleted = fieldItem.splice(i, width);
                fieldItem = rowCompleted.concat(fieldItem);
                fieldItem.forEach(particle => gameField.appendChild(particle));
                playSoundStageClear ()
             };    
        }
    }

    const soundStageClear = document.querySelector(".sound-clear-stage")

    function playSoundStageClear () {
        soundStageClear.play()
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

// sound on/ off (just one track, there is no possibility to off sound effects)

sound.addEventListener("click", () => {
    soundOnOff.classList.toggle("active");
})

// results table and local storage

let table = document.querySelector("table"),
    lvl = document.querySelector(".lvl"),
    resultScore = document.querySelector(".result-score")

let resultArray = []; // an array of objects containing data

    function scoreLevel () {

    resultArray.unshift({score: `${score}`, level: `${lvlUp}`});

    if(resultArray.length < 11) { // show 10 last results
        table.insertAdjacentHTML("afterbegin", `<tr class="results">
            <td class="result-score">${score}</td>
            <td class="lvl">${lvlUp}</td>
            </tr>`)
        localStorage.setItem("data", JSON.stringify(resultArray));
    } else {
        table.insertAdjacentHTML("afterbegin", `<tr class="results">
        <td class="result-score">${score}</td>
        <td class="lvl">${lvlUp}</td>
        </tr>`)

        resultArray.pop();
        localStorage.setItem("data", JSON.stringify(resultArray));
        // pop the last element, push the first element and show it
    }
}

function showLastResults () {
    const lastResults = Array.from(document.querySelectorAll(".last-results"));
    let resultsString = `${localStorage.getItem("data", JSON.stringify(resultArray))}`
    let toObject = JSON.parse(localStorage.getItem("data"));
    
     for(let i = 0; i < toObject.length; i++) {
        console.log(typeof Object.values(toObject[i]));
        if (toObject[i].score) {
            lastResults[i].innerHTML = `Score: ${toObject[i].score}, Level: ${toObject[i].level}`
        }     
     }
}

showLastResults ()

const resultsList = document.querySelector(".results-list")
results.addEventListener("click", () => {
    resultsList.classList.toggle("active")
})

const playTrack = document.querySelector(".on"),
    offTrack = document.querySelector(".off"),
    trackSound = document.querySelector(".audio-sound");

function playAudio () {
    trackSound.play();
}

function stopAudio () {
    trackSound.pause();
}

playTrack.addEventListener("click", playAudio);
offTrack.addEventListener("click", stopAudio);

// sound functions of the end of the game and when the game is lost

const soundWin = document.querySelector(".sound-win"),
    soundGameOver = document.querySelector(".sound-game-over")

    function playSoundWin () {
        soundWin.play();
    }
    
    function stopSoundWin () {
        soundWin.pause();
    }

    function playGameOver () {
        soundGameOver.play();
    }
    
    function stopGameOver () {
        soundGameOver.pause();
    }

// game over

function gameOver() {
    if(current.some(index => fieldItem[currentTetrominoPosition + index].classList.contains("stop"))) {
        scoreTable.innerHTML = "Game over";
        fieldItem[53].innerHTML = `Game over \n Score: ${score} \n Level: ${lvlUp}`;
        scoreLevel();
        showLastResults ();
        playGameOver ();
        clearInterval(timer);
        
        for (let i = 0; i < 200; i++) {
            fieldItem[i].classList.remove("stop");
            fieldItem[i].classList.remove("tetromino");
            }
        }

    if (score === 1000) {
        level.innerHTML = `Win!`;
        scoreTable.innerHTML = "Win!";
        playSoundWin ();
        fieldItem[53].innerHTML = `WIN! \n Score: ${score} \n Level: ${lvlUp}`;

        clearInterval(timer);
        
    for (let i = 0; i < 200; i++) {
        fieldItem[i].classList.remove("stop");
        fieldItem[i].classList.remove("tetromino");
        }
    }
}
