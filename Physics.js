import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){
        // this.vx = 0;
        // this.vy = 0;
    }
    update(game){
        
        if(!game.onGround()) game.vy += 0.5;

        game.y += game.vy;

    }

    
}