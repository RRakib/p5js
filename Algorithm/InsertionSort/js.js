let i = 0;
let values = [];
let changingVal = null;


function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10);
    for(let i = 0; i < width / 10; i++){
        values.push(random(height / 1.5))
    }
}

function draw(){
    background('white');
    values.forEach((item, index) => {
        if(index === changingVal) {
            fill('red');
            stroke('white');
            rect(index * 10, height / 1.4, 10, -item)
        } else {
            fill('#555');
            stroke('white');
            rect(index * 10, height / 1.4, 10, -item)
        }
    });
    if(i < values.length){
        let temp = values[i];
        let j = i;
        while(j > 0 && temp < values[j - 1]){
            changingVal = j - 1;
            values[j] = values[j - 1];
            j = j - 1
        }
        values[j] = temp;
        i++;
    } else {
        changingVal = null
    }
}