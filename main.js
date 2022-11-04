// 1 - Import packages
import Player from './Game.js';
// 2 - Define constants

// 3 - Initialize the world

// 4 - Load assets: image(s), sound(s), etc....


window.addEventListener('load', function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d'); 
    canvas.width = 1000;
    canvas.height = 1000;

    // 5 - Initialize variables
    const player = new Player(ctx, canvas.width, canvas.height, 200, 181, "playerImage", 0, 0);

    function animate(){

        player.update();
        
        ctx.clearRect(0,0,canvas.width,canvas.height);

        player.draw();

        requestAnimationFrame(animate);
    }
    animate();
});