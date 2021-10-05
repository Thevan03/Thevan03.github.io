var number=[37,4,15,28,45,7]
var rv = minMaxAvg(number)

function minMaxAvg(number){
  
  let min = number[0]
  for (let i = 0; i < number.length; i++){
    if (min > number[i]){
      min = number[i]
    }
  }
  
  let max = number[0]
  for (let i = 0; i < number.length; i++){
    if (max < number[i]){
      max = number[i]
    }
  }
  
  let avg = 0
  for (let i = 0; i < number.length; i++){
    avg += number[i]
  }
  
  avg /= number.length
  return [min,max,avg]
}

let min = rv[0];
let max = rv[1];
let avg = rv[2];

document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
document.getElementById("avg").innerHTML = avg;

