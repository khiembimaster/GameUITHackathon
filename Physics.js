import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){
        // this.vx = 0;
        // this.vy = 0;
    }
    update(game){
        
        if(!game.onGround()) game.vy += 1;

        game.y += game.vy;
        // game.vx *= 0.9;
        // game.vy *= 0.9;

    }

    
}