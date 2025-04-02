class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList{
  constructor(value){
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value){
    const newNode = new Node(value);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++
    return this
  }

  pop(){
    if(!this.length === 0){
      return undefined
    }
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    let temp = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    temp.previous = null;
    this.length--
    return temp;
  }

  unshift(value){
    const newNode = new Node(value)

    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift(){
    if(!this.length === 0){
      return undefined
    }

    let temp = this.head;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }

    this.head.next = this.head;
    this.head.previous = null;
    temp.next = null;
    this.length--;
    return temp

  }

  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let previous = null;

    for(let i=0;i<this.length;i++){
      next = temp.next;
      temp.next = previous;
      previous = temp;
      temp = next;
    }
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
// myDoublyLinkedList.push(3);
// myDoublyLinkedList.unshift(10)
// myDoublyLinkedList.shift()
// myDoublyLinkedList.reverse()
console.log(myDoublyLinkedList)