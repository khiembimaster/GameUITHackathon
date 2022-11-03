import Graphics from "./Graphics.js";
import InputHandler from "./InputHandler.js";

export default class Game{
    constructor(ctx, gameWidth, gameHeight, width, height,  imagePath){
        this.ctx = ctx;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight; 
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        //Components
        this.input = new InputHandler();
        this.graphic = new Graphics(this.width, this.height, imagePath, [
            {
                name : "STANDING RIGHT",
                frames : 7
            },
            {   
                name : "STANDING LEFT",
                frames : 7
            },
            {   
                name : "JUMPING RIGHT",
                frames : 7
            },
            {   
                name : "JUMPING LEFT",
                frames : 7
            },
            {   
                name : "FALLING RIGHT",
                frames : 7
            },
            {   
                name : "FALLING LEFT",
                frames : 7
            },
            {   
                name : "RUNNING RIGHT",
                frames : 9
            },
            {   
                name : "RUNNING LEFT",
                frames : 9
            },
            {   
                name : "SHITTING RIGHT",
                frames : 5
            },
            {   
                name : "SHITTING LEFT",
                frames : 5
            },
            {   
                name : "ROLLING RIGHT",
                frames : 7
            },
            {   
                name : "ROLLING LEFT",
                frames : 7
            },
        ]);
        // this.physics = new ;
    }
    update(){
        this.graphic.update('STANDING LEFT');
    }
    draw(){
        this.graphic.draw(this);
    }

}