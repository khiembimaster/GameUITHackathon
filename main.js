// 1 - Import packages
import Game from './Game.js';
// 2 - Define constants

// 3 - Initialize the world

// 4 - Load assets: image(s), sound(s), etc....


window.addEventListener('load', function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d'); 
    canvas.width = 800;
    canvas.height = 720;

    // 5 - Initialize variables
    const game = new Game(ctx, canvas.width, canvas.height, 200, 181, "playerImage");

    function animate(){

        game.update();
        
        ctx.clearRect(0,0,canvas.width,canvas.height);

        game.draw();

        requestAnimationFrame(animate);
    }
    animate();
});