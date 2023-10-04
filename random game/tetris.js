const gameField = document.querySelector(".game-field"),
    fieldItem = Array.from(document.querySelectorAll(".game-field div")),

    score = document.querySelector(".score"),
    level = document.querySelector(".level"),

    nextField = document.querySelector(".next"),
    nextItem = Array.from(document.querySelectorAll(".next div"))

const width = 10;

// The tetrominoes shapes

const lTetromino = [
    [1, width + 1, width * 2 + 1, 2 ],
    [width, width + 1,  width * 2, width * 1 + 2],
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
    [1, 1, width, width + 1]
]

const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [ width, width + 1, width + 2, width + 3],
    [1, width +1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3,]
]

const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

let currentTetrominoPosition = 4;
let current = tetrominoes[4][3];
console.log(current)

function colorTetrominos() {
    current.forEach(index => {
        fieldItem[currentTetrominoPosition + index].classList.add("tetromino");
    });
}

colorTetrominos();
console.log(`add buttons`)