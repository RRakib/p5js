let ball = [];
let base = [];
let blocks = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    ball.push(new Ball(random(width), random(height)));
    base.push(new Base());

    for(let i = 0; i < 4; i++){
        for(let j = 0; j < width / 120; j++){
            blocks.push(new Blocks(j * 120, i * 20))
        }
    }

}

function draw(){
    background('white');
    blocks.forEach(item => {
        item.draw()
    })
    base.forEach(item => {
        item.update()
    })
    ball.forEach(item => {
        item.addBlocks(blocks)
        item.addBaseLocation(base[0]);
        item.update()
    })
}

class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dx = (random(1) - .5) * 20;
        this.dy = (random(1) - .5) * 20;
        this.baseLocation = null;
        this.allBlocks = [];
    }

    addBlocks(b){
        this.allBlocks = b
    }
    
    addBaseLocation(base){
        this.baseLocation = base
    }


    addOtherParticles(other){
        this.otherParticles = other
    }

    update(){
        
        if(this.x + 9 > width || this.x - 9 <= 0){
            this.dx = -this.dx
        } else if(this.y - 9 <= 0){
            this.dy = -this.dy
        } else if ((this.y + 9 > height - 25) && (this.x - this.baseLocation.x >= 0 && this.x - this.baseLocation.x <= 150)) {
            this.dy = -this.dy
        }
        this.drawParticles()
    }

    drawParticles(){
        noStroke();
        fill('#aaa');
        this.x += this.dx;
        this.y += this.dy;
        circle(this.x, this.y, 18)
    }
}

class Base{
    constructor(){
        this.x = width / 2;
        this.y = height - 21;
        this.width = 150;
        this.height = 20;
    }

    update(){
        this.x = mouseX - 75;
        this.drawBase()
    }

    drawBase(){
        fill('#666');
        rect(this.x, this.y, this.width, this.height)
    }
}

class Blocks{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 20;
    }

    draw(){
        fill('#666');
        stroke('black');
        rect(this.x, this.y, this.width, this.height)
    }
}