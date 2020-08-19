let i = 0;
let j = 0;
let auxArr = [];
let sortedArr = [];
let values = [];

let maxVal = 0;


function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    for(let i = 0; i < width / 10; i++){
        values.push(floor(random(height / 1.4)))
    }

    values.forEach((item) => {
        maxVal = max(maxVal, item);
      });
      
      for (let i = 0; i <= maxVal; i++) {
        auxArr[i] = 0;
      }
      
      for (let i = 0; i < values.length; i++) {
        auxArr[values[i]]++;
      }
}

function draw(){
    background('white');
    values.forEach((item, index) => {
        fill('#555');
        stroke("white");
        rect(index * 10, height/1.4, 10, -item)
    })
      if (i <= auxArr.length) {
          let tmp = auxArr[i];
          while (tmp--) {
            values[j] = i;
              j++;
          }
          i++;
      }
}

function max(max, newVal) {
  if (newVal > max) {
    return newVal;
  } else return max;
}
