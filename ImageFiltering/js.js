

let img, c;

function preload(){
    img = loadImage('./ImageFiltering/test.jpeg');
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
            let brightness = (r+g+b) / 3;
            let imageR = img.pixels[r]
            let imageG = img.pixels[g]
            let imageB = img.pixels[b]
            let imgPix = img.pixels[brightness]

            let contrast = (-50/100) + 1;  //convert to decimal & shift range: [0..2]
            let intercept = 128 * (1 - contrast);

            pixels[loc + 0] = imageR + (imageR - intercept);
            pixels[loc + 1] = imageG + (imageG - intercept);
            pixels[loc + 2] = imageB + (imageB - intercept);
            // if(img.pixels[loc + 3] <= 100){
            //     pixels[loc + 0] = img.pixels[r] + img.pixels[loc + 3];
            //     pixels[loc + 1] = img.pixels[g] + img.pixels[loc + 3];
            //     pixels[loc + 2] = img.pixels[b] + img.pixels[loc + 3];
            //     pixels[loc + 3] = 255;
            // } else {
                // pixels[loc + 0] = img.pixels[r];
                // pixels[loc + 1] = img.pixels[g];
                // pixels[loc + 2] = img.pixels[b];
                // pixels[loc + 3] = img.pixels[loc + 3];
            // }
        }
    }
    updatePixels()
}