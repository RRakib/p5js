let x = Math.random() * window.innerWidth
let y = Math.random() * window.innerHeight
let dx = (Math.random() - .5) * 20.0;
let dy = (Math.random() - .5) * 20.0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw(){
  background(255)
  circle(x,y,100)
  
  if(x + 50 > width || x - 50 < 0){
    dx = -dx
  }
  if(y + 50 > height || y - 50 < 0){
    dy = -dy
  }
  
  x += dx
  y += dy
}