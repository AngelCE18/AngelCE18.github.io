/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 // var BOARD_WIDTH = $('#board').width();
 // var BOARD_HEIGHT = $('#board').height();
  var posX = 0;
  var posY = 0;
  var xSpeed = 0;
  var ySpeed = 0;
  var KEY = {
      "LEFT": 37,
      "UP": 38,
      "RIGHT": 39,
      "DOWN": 40,
  }

  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);                               // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    changeXPos(-5, event.which, KEY.LEFT);
    console.log("left pressed");

    changeXPos(5, event.which, KEY.RIGHT);
    console.log("right pressed");

    changeYPos(-5, event.which, KEY.UP);
    console.log("top pressed");

    changeYPos(5, event.which, KEY.DOWN);
    console.log("down pressed");

  }

  function handleKeyUp(event) {
    changeXPos(0, event.which, KEY.LEFT);
    console.log("left released");

    changeXPos(0, event.which, KEY.RIGHT);
    console.log("right released");

    changeYPos(0, event.which, KEY.UP);
    console.log("top released");

    changeYPos(0, event.which, KEY.DOWN);
    console.log("down released");
    
  }  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  

  function changeXPos(newSpeed, keycode, arrowKey){
    if (keycode === arrowKey)
    xSpeed = newSpeed;
  }

  function changeYPos(newSpeed, keycode, arrowKey){
    if (keycode === arrowKey)
    ySpeed = newSpeed;
  }

  function repositionGameItem(){
    // moves the box along the x axis
    posX += xSpeed;
    
    // moves the box along the y axis
    posY += ySpeed;
  }

  function redrawGameItem(){
    // draws the box in a new location and positions it away from the left
    $("#gameItem").css("left", posX);

    // draws the box in a new location and positions it away from the top
    $("#gameItem").css("top", posY);
  }

  
}