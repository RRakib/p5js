let values = [];
let i = 0;

let swap = function(arr, firstInd, secInd){
    let holdFirstVal = arr[firstInd].height;
    arr[firstInd].height = arr[secInd].height;
    arr[secInd].height = holdFirstVal
}



function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(5);
    for(let i = 0;  i < width / 20; i++) {
        values.push({height: random(5,60), color: random(255)});
    };
}


function draw(){

    background('white');

    values.forEach((item, index) => {
        stroke('#999');
        fill(item.color, 255, 255);
        circle(index * 25, height / 2, -item.height);
    })


    if(i < values.length){
        for(let j = 0; j < values.length - i - 1; j++){
            let firstVal = values[j].height;
            let secVal = values[j + 1].height;

            if(firstVal > secVal){
                swap(values, j, j+1)
            }
        };
        i++
    }
}