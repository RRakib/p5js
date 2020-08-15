let i = 0;
let values = [];
let changingVal = null;


function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(20);
    for(let i = 0; i < width / 10; i++){
        values.push(random(height / 1.5))
    }
    quickSort(values, 0, values.length)
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
    // if(i < values.length){
    //     let j = i;
    //     let temp = values[j];
    //     while(j > 0 && temp < values[j - 1]){
    //         changingVal = j - 1;
    //         values[j] = values[j - 1];
    //         j = j - 1
    //     }
    //     console.log(values)
    //     values[j] = temp;
    //     i++;
    // } else {
    //     changingVal = null
    // }
}


function quickSort(arr, start, end){
    if(start < end){
        let pivPos = partition(arr, start, end);
        quickSort(arr,start , pivPos -1);
        quickSort( arr,pivPos +1 , end);
    }
}

function partition(arr, start, end){
    let i = start + 1;
    let piv = arr[start];
    for(let j = start + 1; j <= end ; j++ )  {
    
              if ( arr[ j ] < piv) {
                     swap (arr, arr[ i ],arr [ j ]);
                i += 1;
            }
       }
    swap ( arr[ start ] ,arr[ i-1 ] ) ;
    return i-1;
}

let swap = function(arr, firstInd, secInd){
    let holdFirstVal = arr[firstInd];
    arr[firstInd] = arr[secInd];
    arr[secInd] = holdFirstVal;
}