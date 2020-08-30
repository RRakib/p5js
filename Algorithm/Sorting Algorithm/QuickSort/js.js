let values = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    for(let i = 0; i < width / 100; i ++) {
        values.push(random(height / 1.4))
    }
}

function draw(){
    background('white');
    values.forEach((item, index) => {
        fill('#555');
        stroke('white');
        rect(index * 100, height / 1.4, 100, -item)
    });

    quickSort(values, 0, values.length - 1)
}

async function quickSort(arr, start, end){
    if(start < end){
        let pivotPosition = await partition(arr, start, end);
        await quickSort(arr, start, pivotPosition - 1);
        await quickSort(arr, pivotPosition + 1, end);
    } else return
}

async function partition(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let j = start; j < end; j++){
        if(arr[j] < pivotValue){
            await swap(arr, j, pivotIndex);
            pivotIndex++;
        }
    }
    await timeout(500)
    await swap(arr,pivotIndex, end);
    return pivotIndex; 
}

async function swap(arr, firstInd, secondInd ){
    let holdFirstVal = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = holdFirstVal;
}

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}