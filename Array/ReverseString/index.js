// const revString = (str) => str.split("").reverse().join("");

// console.log(revString("hello"))

// function reverseString(string){
//   return string.split("").reverse().join("")
// }

// console.log(reverseString("Hello"))

//-----------------------------------------------------------------------------------------

// String is palindrome or not

// function reverseString(string){
//   let rev = string.split("").reverse().join("")
//   if(string == rev){
//     return true
//   }
//   else{
//     return false
//   }
// }

//----------------------------------------------------------------------------------

// const palindrome = (str) => str.split("").reverse().join("") === str; 

// console.log(palindrome("Hello"))
// console.log(palindrome("abba"))


//------------------------------------------------------------------------------------

// Reverse Intigier 

// const revIntigier = (num) => {
//  const reverse = parseInt(num.toString().split("").reverse().join(""))
//  return num < 0 ? -reverse : reverse
// }
// console.log(revIntigier(8800))


//---------------------------------------------------------------------------------------

// capatilise string 

// function capatiliseString(str){
//   return str
//   .toLowerCase()
//   .split(" ")
//   .map((word) => word[0]
//   .toUpperCase() + word.slice(1))
//   .join(" ")
// } 

// console.log(capatiliseString("ronak chitalia"))

//-----------------------------------------------------------------------------------------

// FizzBuzz
// 1. Print numbers from 1 to n
// 2. If number is divisible by 3, print "Fizz"
// 3. If number is divisible by 5, print "Buzz"
// 4. If number is divisible by 3 and 5, print "FizzBuzz"
// 5. Else, print the number

// const fizzBuzz = (n) =>{
//   for(let i=1; i<=n; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//       console.log("Buzz")
//     }
//     else if(i % 5 === 0){
//       console.log("Fizz")
//     }
//     else{
//       console.log(i)
//     }
//   }
// }

// fizzBuzz(15)

//-----------------------------------------------------------------------------------------

// MaxProfit
// Imagine you're buying and selling stocks throughout the
// year. Your job is to find the biggest profit you could make
// by buying low and selling high only once.
// Here's what you're given:
// A list of stock prices for each day ☛ [7, 1, 5, 3, 6, 4]
// Here's what you need to find:
// The difference between the cheapest price you could have bought
// the stock and the most expensive price you could have sold it later
// on.

// function maximumProfit(prices){
//   let minPrice = prices[0]
//   let maxPrice = 0;

//   for(let i=1; i<prices.length; i++){
//     // Gives current price
//     let currentPrice = prices[i];
//     //gives minimum price
//     minPrice = Math.min(minPrice,currentPrice); 
//     //gives optimal profit
//     const optimalPrice = currentPrice - minPrice;
//     //gives maximum profit
//     maxPrice = Math.max(maxPrice,optimalPrice)
//   }
//   return maxPrice
// }
// const prices = [7,1,5,3,6,4]
// const maxprofit = maximumProfit(prices)
// console.log("Max Profit: "+maxprofit)

//----------------------------------------------------------------------------------------

// Array Chunk

// Write a function that takes an array and a chunk size as input.
// The function should return a new array where the original array
// is split into chunks of the specified size.
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
// chunkArray([1, 2, 3, 4, 5], 2) // Output: [[1, 2], [3, 4] ]

// function chunk(array,size){
//   const chunked = [];
//   let index = 0;
//   while(index < array.length){
//     const chunk = array.slice(index, index + size);
//     chunked.push(chunk)
//     index += size
//   }
//   return chunked
// }

// console.log(chunk([1,2,3,4,5],2))

//-----------------------------------------------------------------------------------------

// Two Sum
// Imagine you have a list of numbers and a target number. Your
// job is to find two numbers in that list that add up to the target
// number. You also need to tell which positions (or indexes) those
// two numbers are at in the list.
// Example
// if the list is [2, 7, 11, 15] and the target is 9, then the answer would
// be [0, 1] because 2 (at index 0) plus 7 (at index 1) equals 9.

function twoSum(array,target){
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target){
        return [i,j]
      }
    }
  }
  return[]
}
const res = twoSum([15, 11, 3 ,6 , 7 , 2],9)
console.log(res)