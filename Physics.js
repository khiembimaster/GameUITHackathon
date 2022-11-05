export default class Physics{
    constructor(){
        this.vx = 0;
        this.vy = 0;
    }
    update(game){
        // if(game.curState.state == Fall) 
        // if((!this.onGround(game))) this.vy += game.weight;
        // // else if(this.onGround(game)) this.vy = 0;
        // game.x += this.vx;      
        // game.y += this.vy; 

        // // if(this.vx > 0) this.vx--;
        // // if(this.vx < 0) this.vx++;
    }

    onGround(game){
        if(game.gameHeight === (game.y + game.height)){
            return true;
        }
    }
}