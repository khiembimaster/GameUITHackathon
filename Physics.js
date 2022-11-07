import { WINDOW } from "./Constants.js";
export default class Physics{
    constructor(){
        // this.vx = 0;
        // this.vy = 0;
    }
    update(game){

        let isOnGround = this.onGround(game);
        if(game.curState.state === 'FALLING LEFT' || game.curState.state === 'FALLING RIGHT' ){
            if(isOnGround){
                game.vy = 0;
                // game.vx = 1;
            }
        }
        
        if(!isOnGround)game.vy += 1;
        game.y += game.vy;
        game.x += game.vx;
        
        // if (game.x > WINDOW.WINDOW_HEIGHT

    }

    onGround(game){
        if(WINDOW.WINDOW_HEIGHT === (game.y + game.height)){
            return true;
        }
        else return false;
    }
}