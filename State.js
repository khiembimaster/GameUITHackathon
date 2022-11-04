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
        if (input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
        else if (input === 'PRESS left') this.player.setState(states.STANDING_LEFT);
        else this.player.physics.vx = 0;
    }
} 

export class StandingLeft extends State{
    constructor(player){
        super('STANDING LEFT');
        this.player = player;
    }
    handleInput(input){
        if (input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
        else if (input === 'PRESS right') this.player.setState(states.STANDING_RIGHT);
    }
} 


export class JumpingLeft extends State{
    constructor(player){
        super('JUMPING LEFT');
        this.player = player;
    }
}

export class JumpingRight extends State{
    constructor(player){
        super('JUMPING RIGHT');
        this.player = player;
    }
}

export class FallingRight extends State{
    constructor(player){
        super('FALLING RIGHT');
        this.player = player;
    }
}

export class FallingLeft extends State{
    constructor(player){
        super('FALLING LEFT');
        this.player = player;
    }
}

export class RunningRight extends State{
    constructor(player){
        super('RUNNING RIGHT');
        this.player = player;
    }
    handleInput(input){
        switch (input){
            case 'PRESS right':
                this.player.physics.vx = 1;
                break;
            case 'RELEASE right':
                this.player.physics.vx = 0;
                this.player.setState(states.STANDING_RIGHT);
                break;
        }
    }
}

export class RunningLeft extends State{
    constructor(player){
        super('RUNNING LEFT');
        this.player = player;
    }
    handleInput(input){
        switch (input){
            case 'PRESS left':
                this.player.physics.vx = -1;
                break;
            case 'RELEASE left':
                this.player.physics.vx = 0;
                this.player.setState(states.STANDING_LEFT);
                break;
        }
    }
}