# Endure-it-Superman-
Description
Endure it Superman is a game where the player has to move Superman in order to avoid the Kryptonite and increase the score. If Superman catches a Civilian, he gets 1 extra life.The game ends when Superman finishes all the lives he has. After that, a score is calculated based on how many Kryptonites Superman has avoided.

MVP (DOM - CANVAS)
-game has Superman that moves horizontally
-kryptonites fall randomly from the top and hurt Superman
-civilians fall randomly from the top and add and extra life if caught

BACKLOG
add scoreboard
add alert to make the player insert his name

Data Structure
MAIN.JS
function setup(){}
function draw () {}

GAME.JS
-in the function draw (){} are present:
a function to draw the kryptonite and the civilians,
a function to check the collision between Superman and the obstacles,
a function to check if Superman is on the screen,
a function to reset the position of the obstacle when Superman is hit,
a function that adds the score everytime a kryptonite goes through the bottom line,
a function that adds an extra life when Superman gets a Civilian,
a function that allows Superman to move left and right.
-function playerName();
-function highScores();
-function displayHighScores();
-function gameOver();
-function startGame();
-window.addEventListener('load', () => { 
-startBtn.addEventListener("click", () => {
-restartBtn.addEventListener("click", () => {
-Added sounds for every event of the game(collision,gameover and startgame)

STATES Y STATES TRANSITIONS
Definition of the different states and their transition (transition functions)
-introPage
-gameBoard
-endPage 

TASK
-build introPage,gameBoard,endPage;
-add start button and restart button in introPage
-draw Superman and do a function that allows Superman to move left and right;
-draw kryptonites;
-add Collision with Kryptonite;
-add Score count for every Kryptonite;
-draw Civilians;
-add Collision with Civilians;
-add Life up for every Civilian;
-add prompt in order to give in endPage the score and the name of the player
-add prompt in order to build in endPage an highscore list
-add sounds for startGame,gameOver and Collisions
-improve background Canvas in gameBoard

LINK URL
Git
URls for the project repo and deploy 
-https://github.com/nicopagliarani/Endure-it-Superman-.git (repository)
-https://nicopagliarani.github.io/Endure-it-Superman-/ (game)

Slides
URls for the project presentation (slides) https://docs.google.com/presentation/d/17g1j2yS4SAbrxSnxKNjzy9gpN3-5RoZ_oGy6oaSvWgQ/edit?usp=sharing