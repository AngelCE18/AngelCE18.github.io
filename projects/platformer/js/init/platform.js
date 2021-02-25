(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordinate for the platform.
     *      y: The y coordinate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(520, 380, 0.80, 0.6); // (edited) middle right platform

        //my additional platform code
        createPlatform(240, 610, 0.60, 0.5); //bottom platform
        
        createPlatform(14, 525, 0.35, 0.4);  //bottom leftmost platform
        
        createPlatform(12, 375, 0.40, 0.4);  //middle leftmost platform

        createPlatform(230, 450, 0.5, 0.6);  //platform above bottom platform
        
        createPlatform(240, 305, 0.5, 0.5);  //platform to the left of rightmost platform
        
        createPlatform(780, 280, 0.30, 0.5); //upper right platform

        createPlatform(500, 230, 0.50, 0.4);

        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);