let ball = [];
let base = [];
let blocks = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    ball.push(new Ball(width / 2, height / 3));
    base.push(new Base());
    noCursor();

    for(let i = 0; i < 12; i++){
        for(let j = 0; j < width / 120; j++){
            blocks.push(new Blocks(j * 120, i * 20))
        }
    }

    ball.forEach(item => {
        item.addBlocks(blocks)
    })

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
        item.addBaseLocation(base[0]);
        item.update()
        blocks.forEach((block, index) => {
            if(item.y - block.y - 20 <= 0 && (item.x > block.x && item.x < block.x + 120)){
                item.reverseDy()
                delete blocks[index]
            }
        })
    })
}

class Ball{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dx = (random(1) - .5) * 10;
        this.dy = 8;
        this.baseLocation = null;
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
            this.reverseDx()
        } else if(this.y - 9 <= 0){
            this.reverseDy()
        } else if ((this.y + 9 > height - 25) && (this.x - this.baseLocation.x >= 0 && this.x - this.baseLocation.x <= 150)) {
            this.reverseDy()
            this.x = this.x + random(50);
            this.y = this.y - random(50);
        }

        this.drawParticles()
    }

    reverseDx(){
        this.dx = -this.dx
    }
   
    reverseDy(){
        this.dy = -this.dy
    }

    drawParticles(){
        noStroke();
        fill('darkred');
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
        fill('red');
        rect(this.x, this.y, this.width, this.height)
    }
}

class Blocks{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 20;
        this.engaged = false;
    }

    draw(){
        fill('#666');
        stroke('black');
        rect(this.x, this.y, this.width, this.height)
        
        push()
            fill('#aaa');
            circle(this.x, this.y, 5)
        pop()
    }
}