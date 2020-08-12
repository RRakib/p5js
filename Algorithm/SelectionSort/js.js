let values = [];
let barWidth = 10;
let minimum = null;
let startPoint = 0;

function swap(arr, crrentInd, minInd){
    let currentVal = arr[crrentInd];
    arr[crrentInd] = arr[minInd];
    arr[minInd] = currentVal
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(15)
    for(let i = 0; i < width / barWidth; i ++){
        values.push(random(height / 2))
    }
}

function draw(){
    background('white');
    values.forEach((item, index) => {
        if(minimum === index){
            fill('red');
            stroke('white');
            rect(index * barWidth, height / 1.4, barWidth, -item )
        } else {
            fill('#555');
            stroke('white');
            rect(index * barWidth, height / 1.4, barWidth, -item )
        }
    })


    if(startPoint < values.length){
        minimum = startPoint;
        for(let i = startPoint + 1; i < values.length; i ++){
            if(values[i] < values[minimum]) minimum = i
        }
        swap(values, startPoint, minimum)
        startPoint += 1
    }
}