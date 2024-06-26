let click = true;
let color = 'black';

function fillBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", colorSquare);
      square.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", square);
    }
  }
  
  fillBoard(16);
  
  function changeSize(input) {
    if (input >= 2 && input <= 100) {
      fillBoard(input);
    } else {
      console.log("Too many or too few squares.")
    }
  }
  
  function colorSquare() {
    if (click) {
        this.style.backgroundColor = color;
    }
  }
  function changeColor(choice) {
    color = choice;
  }
  
  function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }
  