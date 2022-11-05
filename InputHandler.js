export default class InputHandler {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', (e) =>{
            if((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp'   ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'||
                e.key === ' '
                )&& this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key + 'DOWN');
            }
            // console.log(this.lastKey);
        });
        window.addEventListener('keyup', (e) =>{
            if((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp'   ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'||
                e.key === ' '    
                )&& this.keys.indexOf(e.key) === -1){
                    this.keys.push(e.key + 'UP');
            }
            // console.log(this.lastKey);
          
        });
    }
}
