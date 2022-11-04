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
        // if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
        if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
    }
} 

export class StandingLeft extends State{
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    handleInput(input){
        // if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
        if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT);
    }
} 
