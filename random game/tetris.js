const gameField = document.querySelector(".game-field"),
    fieldItem = Array.from(document.querySelectorAll(".game-field div")),

    score = document.querySelector(".score"),
    level = document.querySelector(".level"),

    nextField = document.querySelector(".next"),
    nextItem = document.querySelectorAll(".next div")

const width = 10;
const nextFieldWidth = 4;
let nextRandomTetromino = 0;

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
let randomRotation = Math.floor(Math.random()*4);
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

// remove tetromino (it should be used later)

function removeTetromino() {
    current.forEach(index => {
        fieldItem[currentTetrominoPosition + index].classList.remove("tetromino");
    });
}

// move tetromino
// buttons

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");

let timer;

start.addEventListener("click", () => {
    prevent;
    timer = setInterval(moveTetromino, 1000);
})

pause.addEventListener("click", () => {
    prevent;
    clearInterval(timer);
})

// fix restart

restart.addEventListener("click", () => {
    clearInterval(timer);
    removeTetromino();
    randomTetromino = Math.floor(Math.random()*tetrominoes.length);
    current = tetrominoes[randomTetromino][rotation];
    currentTetrominoPosition = 4;
    colorTetrominos();
})

function prevent(event) {
    event.preventDefault();
}

start.addEventListener("click", prevent, false);
pause.addEventListener("click", prevent, false);
restart.addEventListener("click", prevent, false);

function moveTetromino() {
        removeTetromino();
        currentTetrominoPosition += width;
        colorTetrominos();
        stopMoving();
        
        console.log(currentTetrominoPosition)
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
    result = numberToString.toString().slice(numberToString.length - 1);
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

console.log(`1 fix restart button 3 look through the code once again`)