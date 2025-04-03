// // this code is for left rotation

let arr = [1,2,3,4,5];

let firstElementCopy = arr[0];

for(let i=0 ; i<arr.length - 1; i++){
  arr[i] = arr[i+1];
}

arr[arr.length - 1] = firstElementCopy;
console.log(arr);

//This code is for right rotation

let arr = [1,2,3,4,5];

let lastElementCopy = arr[arr.length-1];

for(let i=arr.length -1 ; i>0; i--){
  arr[i] = arr[i-1];
}

arr[0] = lastElementCopy;
console.log(arr);

// this code is for left rotation for k times

let arr = [1,2,3,4,5];
let kl = 1;

for(let j=0; j<k; j++){
  let firstElementCopy = arr[0];
  
  for(let i=0 ; i<arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  
  arr[arr.length - 1] = firstElementCopy;
}
console.log(arr);

// this code is for right rotation for k times

let arr = [1,2,3,4,5]
let kr = 1;

for(let i = 0; i<k ; i++){
  let lastElementCopy = arr[arr.length - 1];
  for(let j=arr.length - 1; j>0 ; j--){
    arr[j] = arr[j - 1]
  }
  arr[0] = lastElementCopy
}

console.log(arr)

// this code is for left rotation for k times (efficient method then above but takes more space)

let arr = [1,2,3,4,5]
let temp = new Array(arr.length)
let l = 2;

for(i=0; i < arr.length; i++){
  temp[i] = arr[(i + l) % arr.length]
}

console.log(temp)

// this code is for left rotation for k times (efficient method then above but takes more space)


let arr = [1,2,3,4,5]
let temp = new Array(arr.length)
let l = 2;

for(i=0; i < arr.length; i++){
  temp[(i + l) % arr.length] = arr[i]
}

console.log(temp)


// this code is for left rotation for k times (efficient method then above)

let arr = [1,2,3,4,5]

let k = 2

function reverse(i,j){
  while(i<j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--;
  }
}

reverse(0,k-1)
reverse(k,arr.length-1)
reverse(0,arr.length-1)

console.log(arr)