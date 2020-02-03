import {LinkedList} from './linkedlist'

 export class Queue{
    constructor(){
        this.items = new LinkedList()
    }

    enqueue(item) {
        this.items.addLast(item);
        return this;
    }

    dequeue() {
        return this.items.removeFirst();
    }

    get size() {
        return this.items.size;
    }

    isEmpty() {
        return !this.items.size;
    }
}

