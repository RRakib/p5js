let img;
let canv;
let drag = true;
let scaleVal = 1;
let imgX = imgY = 0;
let rectArrays = [];
let movingRectArrays = [];
let mouseXPos, mouseYPos;

let toggleDraw = document.getElementById('toggleDraw');

toggleDraw.innerHTML = "Draw"

toggleDraw.addEventListener('click', () => {
    if(drag){
        drag = false;
        toggleDraw.innerHTML = "Drag"
    } else {
        drag = true;
        toggleDraw.innerHTML = "Draw"
    }
})

function preload(){
    img = loadImage('https://picsum.photos/800/1000');
}

function setup(){
    canv = createCanvas(window.innerWidth, window.innerHeight);
    imageMode(CENTER);
}

function draw(){
    background('white')
    translate(width / 2, height / 2)
    scale(scaleVal)
    mouseXPos = (mouseX - width / 2);
    mouseYPos = (mouseY - height / 2);
    push()
    background('white')
    image(img, imgX, imgY);
    pop();

    movingRectArrays.forEach(item => {
        let {startX, startY, endX, endY} = item;
        noFill();
        stroke('red');
        strokeWeight(5);
        if(endX && endY){
            rect(startX, startY, endX - startX, endY - startY);
        } else{
            rect(startX, startY, mouseXPos / scaleVal - startX, mouseYPos / scaleVal - startY);
        }
    })
}

function mouseWheel(event) {
    scaleVal += -event.delta / 1000;
}

function mouseDragged() {
    if(drag){
        imgX += movedX;
        imgY += movedY;
        movingRectArrays.forEach((item, index) => {
            let {startX, startY, endX, endY} = item;
            startX += movedX;
            startY += movedY;
            endX += movedX;
            endY += movedY;
            movingRectArrays[index] = {startX, startY, endX, endY}
        })
    }
}

function mousePressed() {
    if(!drag){
        let startX = mouseXPos  / scaleVal;
        let startY = mouseYPos  / scaleVal;
        rectArrays.push({startX, startY});
        movingRectArrays.push({startX, startY});
    }
}

function mouseReleased() {
    let startX = mouseXPos  / scaleVal;
    let startY = mouseYPos  / scaleVal;
    if(!drag){
        rectArrays[rectArrays.length - 1]['endX'] = startX;
        rectArrays[rectArrays.length - 1]['endY'] = startY;
        movingRectArrays[movingRectArrays.length - 1]['endX'] = startX;
        movingRectArrays[movingRectArrays.length - 1]['endY'] = startY;
    }
    if(startX - movingRectArrays[movingRectArrays.length - 1]['startX'] > -20 && startX - movingRectArrays[movingRectArrays.length - 1]['startX'] < 20){
        rectArrays.pop();
        movingRectArrays.pop();
    }
}