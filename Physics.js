import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){

    }
    update(game){
        game.vy += 1;
        game.y += game.vy;
    }

    
}