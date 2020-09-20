

let img, c;

function preload(){
    img = loadImage('./ImageFiltering/test.jpg');
}

function setup(){
    createCanvas(800, window.innerHeight);
    img.resize(width, height)
    background("red");
}

function draw(){
    img.loadPixels();
    loadPixels();
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let loc = (x + y * width) * 4;
            let r = loc + 0
            let g = loc + 1
            let b = loc + 2
            let brightness = (r+g+b) / 3
            pixels[loc + 0] = img.pixels[brightness];
            pixels[loc + 1] = img.pixels[brightness];
            pixels[loc + 2] = img.pixels[brightness];
        }
    }
    updatePixels()
}