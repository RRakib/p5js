let img;

function preload(){
    img = loadImage('./ImageLabelling/test.jpg');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    image(img, 0, 0);
}

function draw(){

}

function mouseWheel(event) {
    print(event.delta);
    //move the square according to the vertical scroll amount
    pos += event.delta;
    //uncomment to block page scrolling
    //return false;
  }