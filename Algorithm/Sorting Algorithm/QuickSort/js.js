let values = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    for(let i = 0; i < width / 10; i ++) {
        values.push(random(height / 1.4))
    }
}

function draw(){
    background('white');
    values.forEach((item, index) => {
        fill('#555');
        stroke('white');
        rect(index * 10, height / 1.4, 10, -item)
    });

    quickSort(values, 0, values.length)
}

function quickSort(arr, start, end){
    if(start < end){
        let pivotPosition = partition(arr, start, end);
        quickSort(arr, start, pivotPosition - 1);
        quickSort(arr, pivotPosition + 1, end);
    } else return
}

function partition(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let j = start; j < end; j++){
        if(arr[j] < pivotValue){
            swap(arr, j, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr,pivotIndex, end);
    return pivotIndex; 
}

function swap(arr, firstInd, secondInd ){
    let holdFirstVal = arr[firstInd];
    arr[firstInd] = arr[secondInd];
    arr[secondInd] = holdFirstVal;
}