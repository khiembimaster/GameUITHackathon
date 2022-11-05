class Layer{
    constructor(ctx, image, speedModifier){
        this.gameSpeed = 5;
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = (gameSpeed * this.speedModifier);
        if(this.x <= -this.width){
            this.x = 0;
        }
        this.x = this.x - this.speed;
        // this.x = -((gameFrame* this.speed % this.width) );
    }
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}
export default class ParallaxBackground{
    constructor(ctx){
        this.ctx = ctx;
        this.layers = [];
        // this.no_layer = no_layer;

        const backgroundLayer1 = document.getElementById('background-1');
        const backgroundLayer2 = document.getElementById('background-2');
        const backgroundLayer3 = document.getElementById('background-3');
        const backgroundLayer4 = document.getElementById('background-4');
        const backgroundLayer5 = document.getElementById('background-5');

        const layer1 = new Layer(backgroundLayer1, 0.2);
        this.layers.push(layer1);
        const layer2 = new Layer(backgroundLayer2, 0.4);
        this.layers(layer2);
        const layer3 = new Layer(backgroundLayer3, 0.6);
        this.layers(layer3);
        const layer4 = new Layer(backgroundLayer4, 0.8);
        this.layers(layer4);
        const layer5 = new Layer(backgroundLayer5, 1);
        this.layers(layer5);
    }

    updateAll(){
        this.layers.forEach(element => {
            element.update();
        });
    }

    drawAll(){
        this.layers.forEach(element => {
            element.draw();
        });
    }
}