import Graphics from "./Graphics.js";
import InputHandler from "./InputHandler.js";
import {StandingLeft, StandingRight} from './State.js'
class Game{ // Game is a base class which store what a Game object needed
    constructor(ctx, gameWidth, gameHeight, width, height, x, y){
        this.ctx = ctx; // Context which stores 2d api for rendering
        this.gameWidth = gameWidth;     //| Game world-width where we place objects, image,...
        this.gameHeight = gameHeight;   //| Game world-height
        this.width = width;     //Game object size_width
        this.height = height;   //Game object size_height
        this.x = x;             //where we place the image of game object x
        this.y = y;             //where we place the image of game object y
    }
}

export default class Player extends Game{
    constructor(ctx, gameWidth, gameHeight, width, height,  imagePath, x, y){
        super(ctx, gameWidth, gameHeight, width, height, x, y); // init base class
        //Components => differ from type of Game object
        //A Player would have access to inputs, graphics, physics, stateManger;
        
        // this.physics = new ;
        this.states = [new StandingRight(this), new StandingLeft(this)];
        this.curState = this.states[0];
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
                name : "SITTING RIGHT",
                frames : 5
            },
            {   
                name : "SITTING LEFT",
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
    }
    update(){
        // console.log(this.input);
        this.curState.handleInput(this.input.lastKey);

    }
    draw(){
        this.graphic.draw(this);
    }
    setState(stateIndex){
        this.curState = this.states[stateIndex];
    }
}