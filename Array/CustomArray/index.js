class MyArrey{
  constructor(){ // constructor is a method that is called when you create an instance of a class
    this.length = 0;
    this.data = {};
  }

  push(item){ // Method to push item into array
    this.data[this.length] = item;
    this.length++;
    return item;
  }

  get(index){ // Method to get item on particular index
    return this.data[index];
  }

  pop(){ // removes last item from array
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]; 
    this.length --;
    return lastItem
  }

  shift(){ //removes first item from array
    const firstItem = this.data[0];
    // loop for reindexing 

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem
  }

  deleteByIndex(index){
    const item = this.data[index]

    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length-- 
    return item
  }
}

const myNewArrey = new MyArrey(); // myNewArrey is an instance of MyArrey class

// console.log(myNewArrey); // MyArrey { length: 0, data: {} }

myNewArrey.push('apple')
myNewArrey.push('mango')
myNewArrey.push('pen')

// console.log(myNewArrey.get(1))

console.log(myNewArrey);
// console.log(myNewArrey.pop())
// console.log(myNewArrey.shift())
console.log(myNewArrey.deleteByIndex(1))

console.log(myNewArrey);