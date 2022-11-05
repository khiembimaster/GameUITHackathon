import { window } from "./Constants.js";
export default class Graphics{
    constructor(spriteWidth, spriteHeight, imagePath, animationStates){
        this.image = new Image();
        this.image = document.getElementById(imagePath);
        this.durationPerImage = 6;
        this.gameFrame = 0;
        this.spriteAnimations = [];
        animationStates.forEach((state, index) => {
            let frames = {
                loc: [],
            }
            for(let j = 0; j < state.frames; j++){
                let positionX = j * spriteWidth;
                let positionY = index * spriteHeight;
                frames.loc.push({x:positionX, y:positionY});
            }
            this.spriteAnimations[state.name] = frames;
        });
    }
    draw(game){
        let state = game.curState.state;
        let position = Math.floor(this.gameFrame/this.durationPerImage) % this.spriteAnimations[state].loc.length;
        let frameX = this.spriteAnimations[state].loc[position].x;
        let frameY = this.spriteAnimations[state].loc[position].y;
        
        // game.ctx.fillRect()
        game.ctx.drawImage(
            this.image, frameX, frameY, 
            game.width, game.height ,
            0.5*(window.WINDOW_WIDTH - game.width), 
            window.WINDOW_HEIGHT - game.height, 
            window.WINDOW_WIDTH*0.2, window.WINDOW_HEIGHT*0.2);
        
        this.gameFrame++;
    }

}