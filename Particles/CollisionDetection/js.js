let particles = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for(let i = 0; i < 50; i++){
        particles.push(new Particles(random(width), random(height)))
    }
}

function draw(){
    console.log(particles)
    background('white');
    particles.forEach((item) => {
        item.update()
        item.addOtherParticles(particles)
    })
}

class Particles{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.dx = (random(1) - .6) * 3;
        this.dy = (random(1) - .6) * 3;
        this.otherParticles = [];
    }


    addOtherParticles(other){
        this.otherParticles = other
    }

    update(){
        
        if(this.x + 2.5 > width || this.x - 2.5 <= 0){
            this.dx = -this.dx
        } else if(this.y + 2.5 > height || this.y - 2.5 <= 0){
            this.dy = -this.dy
        }

        this.otherParticles.forEach(item => {
            if(this.x - item.x < 4 && this.x - item.x !== 0 && this.x - item.x > -4 ){
                this.dx = -this.dx
            } else if(this.y - item.y < 4 && this.y - item.y !== 0 && this.y - item.y >= -4) {
                this.dy = -this.dy
            }
        })
        this.drawParticles()
    }

    drawParticles(){
        noStroke();
        fill('#aaa');
        this.x += this.dx;
        this.y += this.dy;
        circle(this.x, this.y, 8)
    }
}