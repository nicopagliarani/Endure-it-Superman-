
//score
let score=0
//song
let song=new Audio('/musiclong.mp3')
song.volume = 0.2;
let song2=new Audio('/gameover.mp3')
song2.volume =0.2;
//Gameover
let gameIsOver = false;
//Screens
const introPage=document.querySelector(".mainpage");
const gameBoard = document.getElementById("game-board");
const endPage= document.getElementById("game-over");
//Buttons
let startBtn = document.querySelector("#startBtn");
let restartBtn = document.querySelector("#restartBtn");
//Superman features
let supermanHeight = 150;
let supermanWidth = 120;
let supermanX =600;
let supermanStartY = innerHeight - supermanHeight;
//Kryptonite features
let kryptoX = 0;
let kryptoY = 0;
let kryptoLength = 70;
let kryptoHeight = 70;
let objectArray = [
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-50},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-100},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-150},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-200},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-250},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-300},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-350},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-400},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-450},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-500},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-550},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-600},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-650},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-700},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-750},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-800},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-850},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-900},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-950},
  { x: Math.floor(Math.random() * innerWidth), y: kryptoY-1000},
 
  
  
  ];
let bg;
let superman;

function preload() {
  bg= loadImage("/background.jpg")
  superman= loadImage("/superman.png");
  kryptonite=loadImage("/kryptonite.png");
  
  }
function setup() {
  const canvas=createCanvas(innerWidth,innerHeight);
  canvas.parent("game-board");
  
 
}

function draw() {
background(bg)
text("Score"+":"+" "+score,50,40)
textStyle(BOLD)
textSize(35);
textFont('Georgia')

image(superman, supermanX, supermanStartY, supermanWidth, supermanHeight);
  for (let i = 0; i < objectArray.length; i++) {
    image(
      kryptonite,
      objectArray[i].x,
      objectArray[i].y,
      kryptoLength,
      kryptoHeight
    );
    objectArray[i].y += 8;
    if (
      supermanStartY >= objectArray[i].y + 20 &&
      supermanStartY <= objectArray[i].y + kryptoHeight - 40 &&
      supermanX + supermanWidth >= objectArray[i].x &&
      supermanX <= objectArray[i].x + kryptoLength
    ) {
      gameIsOver = true;
    }
    if (objectArray[i].y > innerHeight) {
      objectArray[i].y = 0;
      score++
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
  } //else if (keyIsPressed && keyCode === UP_ARROW && supermanStartY > 0) {
    //supermanStartY -= 5;
  //} else if (
    //keyIsPressed &&
    //keyCode === DOWN_ARROW &&
    //supermanStartY + supermanHeight < height
  //) {
    //supermanStartY += 5;
  //}
  if (gameIsOver) {
    gameOver();
  }
}
function gameOver() {
  introPage.style.display = "none";
  gameBoard.style.display = "none";
  endPage.style.display = "block";
noLoop();
  song.pause();
  song2.play();
}

  //const supermanWidth=125;
  //const supermanHeight=125;
  //const groundLevel=height-supermanHeight;
  //const middle=width/2-supermanWidth/2
  
    
  
  //background(bg);
  //image(player,middle,groundLevel,supermanWidth,supermanHeight);
  
  
  
  function startGame() {loop();
    introPage.style.display="none";
     const gameBoard = document.getElementById("game-board")
     gameBoard.style.display="flex";
     const endPage= document.getElementById("game-over")
     endPage.style.display="none";}
    

     window.addEventListener('load', () => {    
  noLoop();
 
  startBtn.addEventListener("click", () => {
      startGame();
      song.play();
    song2.pause();})
    

       restartBtn.addEventListener("click", () => {
        introPage.style.display = "none";
        gameBoard.style.display = "flex";
        endPage.style.display = "none";
        supermanX=600;
        gameIsOver = false;
        score=0;
        objectArray = [
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-50},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-100},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-150},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-200},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-250},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-300},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-350},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-400},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-450},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-500},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-550},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-600},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-650},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-700},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-750},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-800},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-850},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-900},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-950},
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-1000},
          
        ];
        loop();
        song.play();
        song2.pause();
      })
    })
    
    
     
    
