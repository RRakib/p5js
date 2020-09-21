let img;

function preload(){
    img = loadImage('./ImageFiltering/test.jpg');
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    image(img, 0, 0);
}

function draw(){

}
