class Node{
  constructor(value){
    this.head = value;
    this.next = null;
  }
}

class LinkedList{ 
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value){
    let newNode = new Node(value)

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop(){
    if(!this.head){
      return undefined
    }

    let temp = this.head;
    let prev = this.head;

    while(temp.next){
      prev = temp;
      temp = prev.next
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }

    return temp
  }

  unshift(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head
    this.head = newNode
    this.length++;
    return this
  }

  shift(){
    if(!this.head){
      return undefined
    }

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--

    if(this.head === 0){
      this.tail = null;
    }
  }

  getFirstElement(){
    return this.head;
  }

  getLastElement(){
    if(!this.head){
      return null
    }

    let temp = this.head;
    while (temp) {
      if(!temp.next){
        return temp
      }
      temp = temp.next
    }
  }

  getElementByIndex(index){
    let counter = 0; 
    let temp = this.head;
    
    while(temp){
      if(counter === index){
        return temp;
      }

    counter++;
    temp = temp.next;
    }
    
    return null
  }

  set(index,value){
    let temp = this.getElementByIndex(index)
    if(temp){
      temp.value = value;
      return true
    }
    return false
  }

  insert(index,value){
    if(index === 0){
      return this.unshift(value)
    }
    if(index === this.length){
      return this.push(value)
    }
    const newNode = new Node(value)

    const temp = this.getElementByIndex(index - 1)

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true
  }

  size(){
    let counter = 0;
    let temp = this.head;

    while(temp){
      counter++
      temp = temp.next
    }

    return counter
  }

  clear(){
    this.head = null;
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(10);
myLinkedList.push(20);
// myLinkedList.push(30);
// myLinkedList.pop()
// myLinkedList.unshift(5)
// myLinkedList.shift()
// console.log(myLinkedList.getLastElement())
// console.log(myLinkedList.getElementByIndex(2))
// console.log(myLinkedList);
// console.log(myLinkedList.set(2,30))
// myLinkedList.insert(1,5)
// console.log(myLinkedList);
console.log(myLinkedList.clear())