// let board = {
//     1: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     2: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     3: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     4: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     5: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     6: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     7: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"},
//     8: {A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H"}
// }

//TODO make a move with piece
let clickCounter = 0;

function addImage(place, piece) {
  blackRockUrl =
    "https://cdn1.iconfinder.com/data/icons/chess-57/512/chess_gambit_rook_sport_game_checkmate-1024.png";
  var img = document.createElement("img");

  switch (piece) {
    case "blackRock":
      img.src = blackRockUrl;
  }
  document.querySelector(".black-rock").appendChild(img);
}

addImage("place", "blackRock");

//TODO check that user choosed square with piece

function colorTwoSquares() {
  if (clickCounter % 3 == 0) {
    console.log("cliked twise");
    for (let i = 2; i <= 9; i++) {
      for (let j = 2; j <= 9; j++) {
        let squarePath = `body > table > tbody > tr:nth-child(${i}) > td:nth-child(${j})`;
        let square = document.querySelector(squarePath);
        let lightGray = "rgb(238, 238, 238)";
        let darkGray = "rgb(170, 170, 170)";

        if (square.className.slice(0, 4) === "dark") {
          square.style.background = darkGray;
        } else if (square.className.slice(0, 5) === "light") {
          square.style.background = lightGray;
        } else {
          'unknown option'
        }
      }
    }
  } else {
    ("clicked not twise");
  }
}

//TODO check if user choosed any other squares
function changeColor(squarePath) {
  let square = document.querySelector(squarePath);
  let lightGray = "rgb(238, 238, 238)";
  let darkGray = "rgb(170, 170, 170)";
  let green = "rgb(208, 240, 192)";

  if (
    square.style.background === green &&
    square.className.slice(0, 4) === "dark"
  ) {
    square.style.background = darkGray;
  } else if (
    square.style.background === green &&
    square.className.slice(0, 5) === "light"
  ) {
    square.style.background = lightGray;
  } else {
    square.style.background = green;
  }
  clickCounter++;
  colorTwoSquares();
  console.log(clickCounter);
}

function chooseSquare() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
      let squarePath = `body > table > tbody > tr:nth-child(${i}) > td:nth-child(${j})`;
      let square = document.querySelector(squarePath);
      square.addEventListener(
        "click",
        function () {
          console.log(squarePath);
          changeColor(squarePath);
        },
        false
      );
    }
  }
}

chooseSquare();
