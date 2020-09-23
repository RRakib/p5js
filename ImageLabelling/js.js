let img;
let canv;
let drag = true;
let scaleVal = 1;
let imgX = imgY = 0;
let rectArrays = [];

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
    img = loadImage('./ImageLabelling/test.jpg');
}

function setup(){
    canv = createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
    scale(scaleVal);
    push()
    // translate(width / 2, height / 2)
    background('white')
    // imageMode(CENTER)
    image(img, imgX, imgY, 800, 1000);
    pop()

    rectArrays.forEach(item => {
        let {startX, startY, endX, endY} = item;
        noFill();
        stroke('red');
        strokeWeight(5);
        rect(startX, startY, endX - startX, endY - startY);
    })
}

function mouseWheel(event) {
    console.log(scaleVal)
    scaleVal += -event.delta / 1000;
}

function mouseDragged() {
    if(drag){
        imgX += movedX;
        imgY += movedY;
        rectArrays.forEach((item, index) => {
            let {startX, startY, endX, endY} = item;
            startX += movedX;
            startY += movedY;
            endX += movedX;
            endY += movedY;
            rectArrays[index] = {startX, startY, endX, endY}
        })
    }

    console.log(canv)
}

function mousePressed() {
    if(!drag){
        console.log('asdf')
        rectArrays.push({startX: mouseX, startY: mouseY});
    }
}

function mouseReleased() {
    if(!drag){
        rectArrays[rectArrays.length - 1]['endX'] = mouseX;
        rectArrays[rectArrays.length - 1]['endY'] = mouseY;
        console.log(rectArrays[rectArrays.length - 1], 27);
    }
}