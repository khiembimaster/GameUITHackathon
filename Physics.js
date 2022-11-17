import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){

    }
    update(game){
        game.vy += 1*game.weight;
        // game.y += game.vy;
    }
    isCollide(a, b) {
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width*0.5) < b.x) ||
            (a.x > (b.x + b.width))
        );
    }   
}