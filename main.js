// 1 - Import packages
import Player from './Game.js';
import {WINDOW} from './Constants.js';

// import ParallaxBackground from './Background.js'
// 2 - Define constants

// 3 - Initialize the world

// 4 - Load assets: image(s), sound(s), etc....


window.addEventListener('load', function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d'); 
    canvas.width = WINDOW.WINDOW_WIDTH;
    canvas.height = WINDOW.WINDOW_HEIGHT;

    // 5 - Initialize variables
    const player = new Player(ctx);
    function animate(){
        
        player.update();
        
        ctx.clearRect(0,0,canvas.width,canvas.height);

        player.draw();
        
        requestAnimationFrame(animate);
    }
    animate();
});