import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){
        // this.vx = 0;
        // this.vy = 0;
    }
    update(game){
        
        if(!game.onGround()) game.vy += 1;

        game.y += game.vy;

    }

    
}