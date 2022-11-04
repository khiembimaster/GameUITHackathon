export default class InputHandler {
    constructor(){
        this.lastKey = '';
        window.addEventListener('keydown', (e) =>{
            switch(e.key){
                case 'ArrowDown':
                    this.lastKey = 'PRESS down';
                    break;
                case 'ArrowUp':
                    this.lastKey = 'PRESS up';
                    break;
                case 'ArrowLeft':
                    this.lastKey = 'PRESS left';
                    break;
                case 'ArrowRight':
                    this.lastKey = 'PRESS right';
                    break;
                case 'A':
                    this.lastKey = 'PRESS left';
                    break;
                case 'S':
                    this.lastKey = 'PRESS down';
                    break;
                case 'D':
                    this.lastKey = 'PRESS right';
                    break;
                case 'W':
                    this.lastKey = 'PRESS up';
                    break;
            }
            // console.log(this.lastKey);
        });
        window.addEventListener('keyup', (e) =>{
            switch(e.key){
                case 'ArrowDown':
                    this.lastKey = 'RELEASE down';
                    break;
                case 'ArrowUp':
                    this.lastKey = 'RELEASE up';
                    break;
                case 'ArrowLeft':
                    this.lastKey = 'RELEASE left';
                    break;
                case 'ArrowRight':
                    this.lastKey = 'RELEASE right';
                    break;
                case 'A':
                    this.lastKey = 'RELEASE left';
                    break;
                case 'S':
                    this.lastKey = 'RELEASE down';
                    break;
                case 'D':
                    this.lastKey = 'RELEASE right';
                    break;
                case 'W':
                    this.lastKey = 'RELEASE up';
                    break;
            }
            // console.log(this.lastKey);
        });
    }
}
