import Graphics from "./Graphics.js";
import ParallaxBackground from "./Background.js";
import InputHandler from "./InputHandler.js";
import Physics from "./Physics.js";
import {WINDOW} from './Constants.js';
import {FallingLeft, FallingRight, JumpingLeft, JumpingRight, RunningLeft, RunningRight, StandingLeft, StandingRight} from './State.js'
class Game{ // Game is a base class which store what a Game object needed
    constructor(ctx, width, height){
        this.ctx = ctx; // Context which stores 2d api for rendering
        this.width = width;     //Game object size_width
        this.height = height;   //Game object size_height
        this.vx = 0;
        this.vy = 0;
        this.physics = new Physics();
    }
}

export class Ground extends Game{
    constructor(ctx, x, y){
        super(ctx, WINDOW.WINDOW_WIDTH,WINDOW.GROUND_HEIGHT);
        this.weight = 0;
        this.x = x;
        this.y = y ;
    }
    update(player){
        this.x -= player.vx;
        this.y -= player.vy;
    }
    draw(){
        // console.log("draw");
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}



export default class Player extends Game{
    constructor(ctx, world){
        super(ctx, 200, 181); // init base class
        //Components => differ from type of Game object
        //A Player would have access to inputs, graphics, physics, stateManger;
        this.weight = 1;
        this.x = WINDOW.WINDOW_WIDTH*0.5;
        this.y = WINDOW.WINDOW_HEIGHT - this.height - WINDOW.GROUND_HEIGHT;
        this.background = new ParallaxBackground(ctx);
        this.states = [ 
                        new StandingRight(this),
                        new StandingLeft(this),
                        new JumpingRight(this),
                        new JumpingLeft(this),
                        new FallingRight(this),
                        new FallingLeft(this),
                        new RunningRight(this),
                        new RunningLeft(this),
                    ];

        this.curState = this.states[0];
        this.input = new InputHandler();
        this.graphic = new Graphics(this.width, this.height, "playerImage", [
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

        this.world = world;
    }
    update(){

        this.curState.handleInput(this.input);
        // if(this.onGround()) 
        this.physics.update(this);

        if(this.onGround()){
            this.vy -= 1 * this.weight;
        }
        // console.log(this.vy);
        this.world.forEach(element => {
            element.update(this);
        });
        this.background.updateAll(this);
    }
    draw(){
        this.background.drawAll(this);
        this.world.forEach(element => {
            element.draw();
        });
        this.graphic.draw(this);
    }
    setState(stateIndex){
        this.curState = this.states[stateIndex];
        this.curState.enter();
    }
    onGround(){
        // if(WINDOW.WINDOW_HEIGHT - WINDOW.GROUND_HEIGHT <= (this.y + this.height)){
        //     return true;
        // }
        let result = false;
        this.world.forEach(element => {
            if(this.physics.isCollide(this, element)) {
                // console.log("onground");
                result = true;
            }
        });
        return result;
    }
}