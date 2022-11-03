import Game from "./Game.js";
import InputHandler from "./InputHandler.js";
export default class Graphics{
    constructor(spriteWidth, spriteHeight, imagePath, animationStates){
        this.image = new Image();
        this.image = document.getElementById(imagePath);
        this.durationPerImage = 6;
        this.gameFrame = 0;
        this.frameX = 0;
        this.frameY = 0;
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

    update(state){
        let position = Math.floor(this.gameFrame/this.durationPerImage) % this.spriteAnimations[state].loc.length;
        this.frameX = this.spriteAnimations[state].loc[position].x;
        this.frameY = this.spriteAnimations[state].loc[position].y;
        this.gameFrame++;
    }

    draw(game){
        game.ctx.drawImage(this.image, this.frameX, this.frameY, game.width, game.height , game.x, game.y, game.gameWidth, game.gameHeight);
    }


}