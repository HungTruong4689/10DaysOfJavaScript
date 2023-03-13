class Node{
    constructor(val){
        this.val=val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head= null;
        this.tail = null;
        this.length=0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length ===0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
             newNode.next = this.head;
            this.head = newNode;
        }
       
        this.length++;
        return this;
    }
    get(index){
        if(index <0 || index >= this.length) return null;
        var counter =0;
        var current = this.head;
        while(counter !== 0){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
         if(foundNode){
            foundNode.val = val;
            return true;
         }
         return false;
    }
    insert(index, val){
        if(index <0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index -1);
        var temp = pre.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index <0 || index >= this.length) return undefined;
        if(index ===0) return this.shift();
        if(index === this.length -1 ) return this.pop();
        var previousNode = this.get(index -1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        return removed;
    }
    print(){
        var arr =[0];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
}

// var first = new Node("Hi");
// first.next = new Node("How")

var list = new SinglyLinkedList();
list.push("Hello");
list.push("How");
list.push(99);
list.push(34);
list.push(500);