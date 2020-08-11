let values = [];
let i = 0;
let firInd = 0;
let secondInd = 0;

let swap = function(arr, firstInd, secInd){
    let holdFirstVal = arr[firstInd].height;
    arr[firstInd].height = arr[secInd].height;
    arr[secInd].height = holdFirstVal;
}



function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(15);
    for(let i = 0;  i < width / 10; i++) {
        values.push({height: random(height / 2), color: random(255)});
    };
}


function draw(){

    background('white');

    values.forEach((item, index) => {
        if(firInd === index){
            stroke('white');
            fill('red');
            rect(index * 10, height / 1.4, 10, -item.height);
        } else if (secondInd === index){
            stroke('white');
            fill('green');
            rect(index * 10, height / 1.4, 10, -item.height);
        } else {
            stroke('white');
            fill('#555');
            rect(index * 10, height / 1.4, 10, -item.height);
        }
    })


    if(i < values.length){
        for(let j = 0; j < values.length - i - 1; j++){
            let firstVal = values[j].height;
            let secVal = values[j + 1].height;

            if(firstVal > secVal){
                firInd = j;
                secondInd = j+1
                swap(values, j, j+1)
            }
        };
        i++
    }
}