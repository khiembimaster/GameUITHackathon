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
        this.player.vx = 0;
    }
    handleInput(input){
        input.keys.forEach(element => {
            if (element === 'ArrowLeftDOWN') {
                this.player.setState(states.STANDING_LEFT);  
            }
            if (element === 'ArrowRightDOWN') {
                this.player.setState(states.RUNNING_RIGHT);    
            }
            if (element === ' DOWN') 
                this.player.setState(states.JUMPING_RIGHT);
            input.keys.shift();
        }); 
    }
} 

export class StandingLeft extends State{
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
        this.player.vx = 0;
    }
    handleInput(input){
        input.keys.forEach(element => {
            if (element === 'ArrowRightDOWN') {
                this.player.setState(states.STANDING_RIGHT);  
            }
            if (element === 'ArrowLeftDOWN') {
                this.player.setState(states.RUNNING_LEFT);    
            }
            if (element === ' DOWN') 
                this.player.setState(states.JUMPING_LEFT);
            input.keys.shift();
        }); 
    }
} 

export class JumpingRight extends State{
    constructor(player){
        super('JUMPING RIGHT');
        this.player = player;
        // this.player.vx = -10;
        this.timeStamp = 100;
    }
    handleInput(input){
        input.keys.forEach(element => {
            
            input.keys.shift();
        }); 
        if(this.timeStamp >= 0){
            this.timeStamp--;
        }else {
            this.player.setState(states.FALLING_RIGHT);
            this.timeStamp = 100;
        }
    }
}
export class JumpingLeft extends State{
    constructor(player){
        super('JUMPING LEFT');
        this.player = player;
        // this.player.vx = -10;
        this.timeStamp = 100;
    }
    handleInput(input){
        input.keys.forEach(element => {
            // if (element === ' UP') 
            input.keys.shift();
        }); 
        if(this.timeStamp >= 0){
            this.timeStamp--;
        }
        else {
            this.player.setState(states.FALLING_LEFT);
            this.timeStamp = 100;
        }
    }   
}
export class FallingRight extends State{
    constructor(player){
        super('FALLING RIGHT');
        this.player = player;
        // this.player.vx = -10;
        this.timeStamp = 100;
    }
    handleInput(input){
        input.keys.forEach(element => {
            input.keys.shift();
        }); 
        if(this.timeStamp >= 0)
            this.timeStamp--;
        else {
            this.player.setState(states.STANDING_RIGHT);
            this.timeStamp = 100;
        }
    }
}
export class FallingLeft extends State{
    constructor(player){
        super('FALLING LEFT');
        this.player = player;
        // this.player.vx = -10;
        this.timeStamp = 100;
    }
    handleInput(input){
        input.keys.forEach(element => {
            input.keys.shift();
        }); 
        if(this.timeStamp >= 0)
            this.timeStamp--;
        else { 
            this.player.setState(states.STANDING_LEFT);
            this.timeStamp = 100;
        }
    }
}

export class RunningLeft extends State{
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
        this.player.vx = -10;
    }
    handleInput(input){
        input.keys.forEach(element => {
            if (element === 'ArrowRightDOWN')
                this.player.setState(states.RUNNING_RIGHT);  
            if (element === 'ArrowLeftUP') 
                this.player.setState(states.STANDING_LEFT);
            if (element === ' DOWN') 
                this.player.setState(states.JUMPING_LEFT);
            input.keys.shift();
        }); 
    }
} 

export class RunningRight extends State{
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
        this.player.vx = 10;
    }
    handleInput(input){
        input.keys.forEach(element => {
            if (element === 'ArrowLeftDOWN')
                this.player.setState(states.RUNNING_LEFT);  
            if (element === 'ArrowRightUP') 
                this.player.setState(states.STANDING_RIGHT);
            if (element === ' DOWN') 
                this.player.setState(states.JUMPING_RIGHT);
            input.keys.shift();
        }); 
    }
} 


