let gameIsOver = false;
//Screens
const introPage=document.querySelector(".mainpage");
const gameBoard = document.getElementById("game-board");
const endPage= document.getElementById("game-over");
//Buttons
let startBtn = document.querySelector("#btn btn-danger");
let restartBtn = document.querySelector("#btn btn-warning");
//Superman features
let supermanHeight = 150;
let supermanWidth = 175;
let supermanX = 20;
let supermanStartY = innerHeight - supermanHeight - 20;
//Kryptonite features
let kryptoX = 1000;
let kryptoY = 20;
let kryptoLength = 300;
let kryptoHeight = 300;
let objectArray = [
  { x: kryptoX, y: kryptoY },
  { x: kryptoX + 1200, y: kryptoY + 200 },
  { x: kryptoX + 2000, y: kryptoY + 400 },
];
let bg;
let player;

function preload() {
  bg= loadImage("/background.jpg")
  superman= loadImage("/superman.png");
  kryptonite=loadImage("/kryptonite.png");

}
function setup() {
  //const canvas= createCanvas(innerWidth/3,innerHeight);
  const canvas=createCanvas(innerWidth,innerHeight);
  canvas.parent("game-board");
  
 
}

function draw() {
  background(bg)
  image(superman, supermanX, supermanStartY, supermanWidth, supermanHeight);
  for (let i = 0; i < objectArray.length; i++) {
    image(
      kryptonite,
      objectArray[i].x,
      objectArray[i].y,
      kryptoLength,
      kryptoHeight
    );
    objectArray[i].x -= 10;
    if (
      supermanStartY >= objectArray[i].y + 20 &&
      supermanStartY <= objectArray[i].y + kryptoHeight - 40 &&
      supermanX + supermanWidth >= objectArray[i].x &&
      supermanX <= objectArray[i].x + kryptoLength
    ) {
      gameIsOver = true;
    }
    if (objectArray[i].x < -500) {
      objectArray[i].x = 2000;
    }
  }
  if (keyIsPressed && keyCode === LEFT_ARROW && supermanX > 0) {
    supermanX -= 5;
  } else if (
    keyIsPressed &&
    keyCode === RIGHT_ARROW &&
    supermanX + supermanWidth < width
  ) {
    supermanX += 5;
  } else if (keyIsPressed && keyCode === UP_ARROW && supermanStartY > 0) {
    supermanStartY -= 5;
  } else if (
    keyIsPressed &&
    keyCode === DOWN_ARROW &&
    supermanStartY + supermanHeight < height
  ) {
    supermanStartY += 5;
  }
  if (gameIsOver) {
    gameOver();
  }
}
function gameOver() {
  introPage.style.display = "none";
  gameBoard.style.display = "none";
  endPage.style.display = "block";
  
  noLoop();
}

  //const supermanWidth=125;
  //const supermanHeight=125;
  //const groundLevel=height-supermanHeight;
  //const middle=width/2-supermanWidth/2
  
    
  
  //background(bg);
  //image(player,middle,groundLevel,supermanWidth,supermanHeight);
  
  
  
  

window.onload = function() {
    document.querySelector("button.btn-danger").onclick = function() {
      startGame();
    }
    function startGame() {
      introPage.style.display="none";
       const gameBoard = document.getElementById("game-board")
       gameBoard.style.display="flex";
       const endPage= document.getElementById("game-over")
       endPage.style.display="none";}}

       restartBtn.addEventListener("click", () => {
        introPage.style.display = "none";
        gameBoard.style.display = "flex";
        endPage.style.display = "none";
        gameIsOver = false;
        objectArray = [
          { x: kryptoX, y: kryptoY },
          { x: kryptoX + 800, y: kryptoY + 200 },
          { x: kryptoX + 1400, y: kryptoY + 400 },
        ];
        loop();
      });
    
      
     
      
