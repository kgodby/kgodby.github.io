import {LinkedList} from './linkedlist'

export class Stack {
    constructor() {
        this.items = new LinkedList();
    }

    add(item) {
        this.items.addLast(item);
        return this;
    }

    remove() {
        return this.items.removeLast();
    }

    get size() {
        return this.items.size;
    }

    isEmpty() {
        return !this.items.size;
    }
}

