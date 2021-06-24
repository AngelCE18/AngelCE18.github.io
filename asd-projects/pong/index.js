/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;


  // variable delcarations 
  var points = 0;
  var positionY = 180;
  var speed = 0;
  var KEY = {
      "UP": 38,
      "DOWN": 40,
      "W": 87,
      "S": 83
  }
  // Game Item Objects
  var paddleL = GameItem($("#leftPaddle"));
  paddleL.speedY = 5;

  var ball = GameItem($("#ball"));
  ball.speedX = 5;
  ball.speedY = 5;
      
  var paddleR = GameItem($("#rightPaddle"));
  paddleR.speedY = 5;
      
  var scoreBoard = GameItem($("#scoreBoard"));
  scoreBoard.speedX = 1;
  scoreBoard.speedY = 1;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // responds to keydown event for handleKeyDown function
  $(document).on('keyup', handleKeyUp);                               // responds to keyup event for handleKeyUp function

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    positionPaddle();
    drawPaddle();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    movePaddles(-5, event.which, KEY.W);
    movePaddles(-5, event.which, KEY.UP);
    movePaddles(5, event.which, KEY.S);
    movePaddles(5, event.which, KEY.DOWN);
  }

  // stops paddles from running off the screen after keyboard events is pressed
  function handleKeyUp(event) {
    movePaddles(0, event.which, KEY.W);
    movePaddles(0, event.which, KEY.UP);
    movePaddles(0, event.which, KEY.S);
    movePaddles(0, event.which, KEY.DOWN);
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function movePaddles(newSpeed, keycode, arrowKey){
    if (keycode === arrowKey){
      speed = newSpeed;
    }
  }

  function positionPaddle(){
    // moves the paddles across the y axis
    positionY += speed;
  }

  function drawPaddle(){
    // draws the paddles in new areas and positions them from the top
    $("#leftPaddle").css("top", positionY);
    $("#rightPaddle").css("top", positionY);
  }

  // factory function to reduce repetition
  function GameItem(id){ 
    var gameItem = {};
      gameItem.id = id;
      gameItem.x = parseFloat($(id).css("left"));
      gameItem.y = parseFloat($(id).css("top"));
      gameItem.width = $(id).width();
      gameItem.height = $(id).height();
      gameItem.speedX = 0;
      gameItem.speedY = 0;
    return gameItem;
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
