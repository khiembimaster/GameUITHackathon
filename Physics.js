export default class Physics{
    constructor(){
        this.vx = 0;
        this.vy = 0;
    }
    update(game){
        if(this.onGround(game)){
            this.vy = 0;
        }
        else this.vy = game.weight;

        game.x += this.vx;
        game.y += this.vy;
    }
    onGround(game){
        if(game.gameHeight === (game.y + game.height)){
            return true;
        }
    }
}