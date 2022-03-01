//score
let score=0
//song
let song=new Audio('/musiclong.mp3')
song.volume = 0.2;
let song2=new Audio('/gameover.mp3')
song2.volume =0.2;
let blow= new Audio('./blow.wav')
let thankyou= new Audio('/thankyou.mp3')
//Gameover
let gameIsOver = false;
//LifeMinus
let life=3

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
          { x: Math.floor(Math.random() * innerWidth), y: kryptoY-1000},]
  //Civilians Features
let civilianX = 0;
let civilianY = 0;
let civilianLength = 100;
let civilianHeight = 100;
let civilians=[
  { x: Math.floor(Math.random() * innerWidth), y: civilianY-100},
  { x: Math.floor(Math.random() * innerWidth), y: civilianY-400},
  { x: Math.floor(Math.random() * innerWidth), y: civilianY-700},
]

//Images
let bg;
let superman;
let civilian;


function preload() {
  bg= loadImage("/background.jpg")
  superman= loadImage("/superman.png");
  kryptonite=loadImage("/kryptonite.png");
  civilian=loadImage("/civilian.png");
  

  
  }
function setup() {
  const canvas=createCanvas(innerWidth,innerHeight);
  canvas.parent("game-board");
  
 
}

function draw() {
background(bg)
text("Score"+":"+" "+score,50,40);
textStyle(BOLD);
textSize(35);
textFont('Georgia');
text("Lives"+":"+" "+life,1100,40);
textStyle(BOLD);
textSize(35);
textFont('Georgia');
image(superman, supermanX, supermanStartY, supermanWidth, supermanHeight);



for (let i = 0; i < objectArray.length; i++) {
    image(
      kryptonite,
      objectArray[i].x,
      objectArray[i].y,
      kryptoLength,
      kryptoHeight
    );
    objectArray[i].y += 3;
    if (
      objectArray[i].y+ kryptoHeight >=supermanStartY   &&
      //supermanStartY <= objectArray[i].y + kryptoHeight - 40 &&
      supermanX + supermanWidth >= objectArray[i].x &&
      supermanX <= objectArray[i].x + kryptoLength
    ) {objectArray[i].y=-1000
      life--;
      blow.play();
      //gameIsOver = true;
    }
    if(life==0){
      gameIsOver=true
    }
    if (objectArray[i].y > innerHeight) {
      objectArray[i].y = 0;
      score++
    }
    for (let i = 0; i < civilians.length; i++) {
      image(
        civilian,
        civilians[i].x,
        civilians[i].y,
        civilianLength,
        civilianHeight
      );
      civilians[i].y += 0.1;
      if (
        supermanStartY >= civilians[i].y + 20 &&
        supermanStartY <= civilians[i].y + civilianHeight - 40 &&
        supermanX + supermanWidth >= civilians[i].x &&
        supermanX <= civilians[i].x + civilianLength
      ) {civilians[i].y=-1000;
        life++;
        thankyou.play();

      }
      if (civilians[i].y > innerHeight) {
        civilians[i].y = 0;
        
      }}}
  if (keyIsPressed && keyCode === LEFT_ARROW && supermanX > 0) {
    supermanX -= 5;
  } else if (
    keyIsPressed &&
    keyCode === RIGHT_ARROW &&
    supermanX + supermanWidth < width
  ) {
    supermanX += 5;
  }
  if (gameIsOver) {
    gameOver();
  }
}
function playerName(){
  let text;
  let person=prompt("Hey Player! What's your name?");
  if (person == null || person == "") {
    text = "Your Score is:"+" "+score;
    let punteggioFinale=document.getElementById("punteggio")
    punteggioFinale.innerHTML=text;
  } else {
    text = "Hello " + person + "! Your Score is:"+" "+score;
  let punteggioFinale=document.getElementById("punteggio")
punteggioFinale.innerHTML=text;}
}
function gameOver() {
  song.pause();
  playerName();
  introPage.style.display = "none";
  gameBoard.style.display = "none";
  endPage.style.display = "block";
noLoop();
  song2.play();
}
function top10(){
  let topScores=[];
  
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
        life=3;
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
        civilians=[ { x: Math.floor(Math.random() * innerWidth), y: civilianY-100},
          { x: Math.floor(Math.random() * innerWidth), y: civilianY-400},
          { x: Math.floor(Math.random() * innerWidth), y: civilianY-700},]
        loop();
        song.play();
        song2.pause();
      })
    })
    
    
     
    
