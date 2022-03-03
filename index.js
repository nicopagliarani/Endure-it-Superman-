//score
let currentScore=0
let highscores=[];
let highScoresTable=document.getElementById("high-scores-table")
//song
let song=new Audio('musiclong.mp3')
song.volume = 0.2;
let song2=new Audio('gameover.mp3')
song2.volume =0.2;
let blow= new Audio('blow.wav')
let thankyou= new Audio('thankyou.mp3')
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
let supermanHeight = 120;
let supermanWidth = 110;
let supermanX = 600;
let supermanStartY = innerHeight - supermanHeight;
//Kryptonite features
let speedKrypto=4
let kryptoX = 0;
let kryptoY = 0;
let kryptoLength = 70;
let kryptoHeight = 70;
let objectArray = [
  { x: Math.floor(Math.random() * 900), y: kryptoY},
  { x: Math.floor(Math.random() * 900), y: kryptoY-100},
  { x: Math.floor(Math.random() * 900), y: kryptoY-200},
  { x: Math.floor(Math.random() * 900), y: kryptoY-300},
  { x: Math.floor(Math.random() * 900), y: kryptoY-400},
  { x: Math.floor(Math.random() * 900), y: kryptoY-500},
  { x: Math.floor(Math.random() * 900), y: kryptoY-600},
  { x: Math.floor(Math.random() * 900), y: kryptoY-700},
  { x: Math.floor(Math.random() * 900), y: kryptoY-800},
  { x: Math.floor(Math.random() * 900), y: kryptoY-900},
  { x: Math.floor(Math.random() * 900), y: kryptoY-1000},]
  //Civilians Features
let civilianX = 0;
let civilianY = 0;
let civilianLength = 100;
let civilianHeight = 100;
let civilians=[
  { x: Math.floor(Math.random() * 900), y: civilianY-100},
  { x: Math.floor(Math.random() * 900), y: civilianY-400},
  { x: Math.floor(Math.random() * 900), y: civilianY-700},
]

//Images
let bg;
let superman;
let civilian;
let myCloud;
let myCloud2;



function preload() {
  bg= loadImage("background.jpg")
  superman= loadImage("superman.png");
  kryptonite=loadImage("kryptonite.png");
  civilian=loadImage("civilian.png");
  

  
  }
function setup() {
  const canvas=createCanvas(1000,innerHeight);
  canvas.parent("game-board");
  myCloud = new Cloud(10, 120);
  myCloud2 = new Cloud(240, 150);
  }
class Cloud {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.colour = color(400, 400, 400);
  }

  moveX() {
    this.x += 1;
    if (this.x > width) {
      this.x = 0;
    }
  }
display() {
    noStroke()
    fill(255)
    ellipse(this.x, this.y, 100, 50);
    ellipse(this.x+50, this.y+20, 100, 50);
    ellipse(this.x-40, this.y+15, 100, 50);
}}
function drawSun() {
  fill(300, 300, 100)
  ellipse(30, 30, 100)
}




function draw() {
background(72,180,224)
fill(0);
text("Score"+":"+" "+currentScore,90,40);
textStyle(BOLD);
textSize(35);
textFont('Georgia');
text("Lives"+":"+" "+life,800,40);
textStyle(BOLD);
textSize(35);
textFont('Georgia');
image(superman, supermanX, supermanStartY, supermanWidth, supermanHeight);

myCloud.moveX();
myCloud.display();

myCloud2.moveX();
myCloud2.display();
drawSun();

for (let i = 0; i < objectArray.length; i++) {
    image(
      kryptonite,
      objectArray[i].x,
      objectArray[i].y,
      kryptoLength,
      kryptoHeight
    );
    objectArray[i].y += 2.5;
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
      currentScore++
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
        civilians[i].y+ kryptoHeight >=supermanStartY   &&
        //supermanStartY <= civilians[i].y + civilianHeight - 40 &&
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
    text = "Your Score is:"+" "+currentScore;
    let punteggioFinale=document.getElementById("punteggio")
    punteggioFinale.innerHTML=text;
  } else {
    text = "Hello " + person + "! Your Score is:"+" "+currentScore;
  let punteggioFinale=document.getElementById("punteggio")
punteggioFinale.innerHTML=text;}
}
function highScores(){
  
  let text1;
  let namess=prompt("Wow! That's a new record! Enter your name:");
  if(namess ==null || namess == ""){
    text1="???"
    
    let currentHighScore={name:text1,
  score:currentScore}
  highscores.push(currentHighScore)
  let sorted=highscores.sort((a,b)=>{
    return b.score-a.score
     
   })
    
  }else{
    text1= namess
    currentHighScore={name:text1,
    score:currentScore}
    highscores.push(currentHighScore)
    console.log("first",highscores)
      let sorted=highscores.sort((a,b)=>{
       return b.score-a.score
        
      })
      highscores=sorted
    console.log("second",sorted)
    
  }
}
function displayHighScores(){
  for(let i=0;i<highscores.length;i++){
    let list=document.createElement('li')
    list.innerText=`${highscores[i].name}:-${highscores[i].score}`
    highScoresTable.appendChild(list)
  }
}
function gameOver() {
  song.pause();
  playerName();
  highScores();
  displayHighScores();
  introPage.style.display = "none";
  gameBoard.style.display = "none";
  endPage.style.display = "block";
noLoop();
  song2.play();
}

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
        highScoresTable.innerHTML="";
        introPage.style.display = "none";
        gameBoard.style.display = "flex";
        endPage.style.display = "none";
        supermanX=600;
        gameIsOver = false;
        currentScore=0;
        life=3;
        objectArray = [
          { x: Math.floor(Math.random() * 900), y: kryptoY},
          { x: Math.floor(Math.random() * 900), y: kryptoY-100},
          { x: Math.floor(Math.random() * 900), y: kryptoY-200},
          { x: Math.floor(Math.random() * 900), y: kryptoY-300},
          { x: Math.floor(Math.random() * 900), y: kryptoY-400},
          { x: Math.floor(Math.random() * 900), y: kryptoY-500},
          { x: Math.floor(Math.random() * 900), y: kryptoY-600},
          { x: Math.floor(Math.random() * 900), y: kryptoY-700},
          { x: Math.floor(Math.random() * 900), y: kryptoY-800},
          { x: Math.floor(Math.random() * 900), y: kryptoY-900},
          { x: Math.floor(Math.random() * 900), y: kryptoY-1000},];
        civilians=[ { x: Math.floor(Math.random() * 900), y: civilianY-100},
          { x: Math.floor(Math.random() * 900), y: civilianY-400},
          { x: Math.floor(Math.random() * 900), y: civilianY-700},]
        loop();
        song.play();
        song2.pause();
      })
    })

  //const supermanWidth=125;
  //const supermanHeight=125;
  //const groundLevel=height-supermanHeight;
  //const middle=width/2-supermanWidth/2
  
    
  
  //background(bg);
  //image(player,middle,groundLevel,supermanWidth,supermanHeight);
    
    
     
    
