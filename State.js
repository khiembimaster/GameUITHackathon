export const states = {
    STANDING_RIGHT: 0,
    STANDING_LEFT: 1,
    JUMPING_RIGHT: 2,
    JUMPING_LEFT: 3,
    FALLING_RIGHT: 4,
    FALLING_LEFT: 5,
    RUNNING_RIGHT: 6,
    RUNNING_LEFT: 7,
    SITING_RIGHT: 8,
    SITING_LEFT: 9,
    ROLLING_RIGHT: 10,
    ROLLING_LEFT: 11,
}

class State {
    constructor(state){
        this.state = state;
    }
}

export class StandingRight extends State{
    constructor(player){
        super('STANDING RIGHT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            switch(element){
                case 'ArrowLeftDOWN': 
                    this.player.setState(states.STANDING_LEFT);
                    break;
                case 'ArrowRightDOWN':
                    this.player.setState(states.RUNNING_RIGHT);
                    break;
                case ' DOWN':
                    this.player.setState(states.JUMPING_RIGHT);
                    break;
            }
            input.keys.shift();
        }); 
    }
    enter(){
        this.player.vx = 0;
        this.player.vy = 0;   
    }
} 

export class StandingLeft extends State{
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            switch(element){
                case 'ArrowRightDOWN': 
                    this.player.setState(states.STANDING_RIGHT);
                    break;
                case 'ArrowLeftDOWN':
                    this.player.setState(states.RUNNING_LEFT);
                    break;
                case ' DOWN':
                    this.player.setState(states.JUMPING_LEFT);
                    break;
            }
            input.keys.shift();
        }); 
    }
    enter(){
        this.player.vx = 0;
        this.player.vy = 0;   
    }
} 

export class JumpingRight extends State{
    constructor(player){
        super('JUMPING RIGHT');
        this.player = player;
        this.timeStamp = 100;
    }
    handleInput(input){
        input.keys.forEach(element => {
            
            // input.keys.shift();
        }); 
        if(this.player.vy === 0)
            this.player.setState(states.FALLING_RIGHT);
    }
    enter(){
        this.player.vy = -20;
    }
}
export class JumpingLeft extends State{
    constructor(player){
        super('JUMPING LEFT');
        this.player = player;
        
    }
    handleInput(input){
        input.keys.forEach(element => {
            // if (element === ' UP') 
            // input.keys.shift();
        }); 
        if(this.player.vy === 0)
            this.player.setState(states.FALLING_LEFT);
    }   
    enter(){
        this.player.vy = -20;
    }
}
export class FallingRight extends State{
    constructor(player){
        super('FALLING RIGHT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            // if(element === 'ArrowRightDOWN') this.player.vx = 20;
            // else if(element === 'ArrowRightUP') this.player.vx = 0;
            // input.keys.shift();
        }); 
        if(this.player.vy === 0){
            if(this.player.vx === 0) this.player.setState(states.STANDING_RIGHT);
            else this.player.setState(states.RUNNING_RIGHT);
        }
    }
    enter(){
        // this.player.vy = 5;
    }
}
export class FallingLeft extends State{
    constructor(player){
        super('FALLING LEFT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            // if(element === 'ArrowLeftDOWN') this.player.vx = -20;
            // else if(element === 'ArrowLeftUP') this.player.vx = 0;
            // input.keys.shift();
        }); 
        if(this.player.vy === 0){
            if(this.player.vx === 0) this.player.setState(states.STANDING_LEFT);
            else this.player.setState(states.RUNNING_LEFT);
        }
            
    }
    enter(){
        // this.player.vy = 5;
    }
}

export class RunningLeft extends State{
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            switch(element){
                case 'ArrowRightDOWN': 
                    this.player.setState(states.RUNNING_RIGHT);
                    break;
                case 'ArrowLeftUP':
                    // console.log(true);
                    this.player.setState(states.STANDING_LEFT);
                    break;
                case ' DOWN':
                    this.player.setState(states.JUMPING_LEFT);
                    break;
            }
            input.keys.shift();
        }); 
        
    }
    enter(){
        this.player.vx = -10;
    }
} 

export class RunningRight extends State{
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
    }
    handleInput(input){
        input.keys.forEach(element => {
            switch(element){
                case 'ArrowLeftDOWN': 
                    this.player.setState(states.RUNNING_LEFT);
                    break;
                case 'ArrowRightUP':
                    this.player.setState(states.STANDING_RIGHT);
                    break;
                case ' DOWN':
                    this.player.setState(states.JUMPING_RIGHT);
                    break;
            }
            input.keys.shift();
        }); 
    }
    enter(){
        this.player.vx = 10;
    }
} 


