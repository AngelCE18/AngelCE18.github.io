/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
      "LEFT": 37,
      "UP": 38,
      "RIGHT": 39,
      "DOWN": 40,
  }

  // Game Item Objects
  var axisX = 0;
  var axisY = 0;
  var xSpeed = 0;
  var ySpeed = 0;

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
    if (event.which === KEY.LEFT){
      xSpeed = -5;
      console.log("left pressed");
    }
    else if (event.which === KEY.UP){
      ySpeed = -5;
      console.log("up pressed");
    }
    else if (event.which === KEY.RIGHT){
      xSpeed = 5;
      console.log("right pressed");
    }
    else {
      ySpeed = 5;
      console.log("down pressed");
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT){
      xSpeed = 0;
      console.log("left released");
    }
    else if (event.which === KEY.UP){
      ySpeed = 0;
      console.log("up released");
    }
    else if (event.which === KEY.RIGHT){
      xSpeed = 0;
      console.log("right released");
    }
    else {
      ySpeed = 0;
      console.log("down released");
    }
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

  function repositionGameItem(){
    // moves the box along the x axis
    axisX += xSpeed;
    
    // moves the box along the y axis
    axisY += ySpeed;
  }

  function redrawGameItem(){
    // draws the box in a new location and positions it away from the left
    $("#gameItem").css("left", axisX);

    // draws the box in a new location and positions it away from the top
    $("#gameItem").css("top", axisY);
  }
}
