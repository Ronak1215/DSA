// this code is for left rotation

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