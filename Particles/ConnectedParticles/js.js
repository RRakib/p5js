let particles = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for(let i = 0; i < 200; i++){
        particles.push(new Particles(random(width), random(height)))
    }
}

function draw(){
    background('white');
    particles.forEach(item => {
        item.addOtherParticles(particles)
        item.update()
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
            if((this.x - item.x <= 80 && this.x - item.x >= -80) && (this.y - item.y <= 80 && this.y - item.y >= -80)){
                stroke('#ddd')
                line(this.x, this.y, item.x, item.y)
            }
        })
        if((this.x - mouseX <= 150 && this.y - mouseY <= 150) && (this.x - mouseX >= -150 && this.y - mouseY >= -150)){
            this.x += this.dx * 6
            this.y += this.dy * 6
        }
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