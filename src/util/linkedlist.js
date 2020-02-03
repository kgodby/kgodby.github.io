import {Node} from './node'

export class LinkedList {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    get length(){
        return this.size;
    }

    addFirst(value){
        const newNode = new Node(value);
        newNode.next = this.first;

        if (this.first){
            this.first.previous = newNode;
        } else {
            this.last = newNode;
        }

        this.first = newNode;
        this.size += 1;

        return  newNode;

    }

    addLast(value) {
        const newNode = new Node(value);

        if (this.first) {
            newNode.previous = this.last;
            this.last.next = newNode;
            this.last = newNode;
        } else {
            this.first = newNode;
            this.last = newNode;
        }

        this.size += 1;

        return newNode;
    }

    add(value, position = 0) {
        if (position === 0) { 
            return this.addFirst(value);
        }

        if (position === this.size) { 
            return this.addLast(value);
        }
        
        const current = this.get(position);
        if (current) {
            const newNode = new Node(value); 
            newNode.previous = current.previous; 
            newNode.next = current; 

            current.previous.next = newNode; 
            current.previous = newNode; 
            this.size += 1;
            return newNode;
        }

        return undefined; 
    }

    get(index = 0){
        return this.find((current, position) => {
            if (position === index) {
                return current;
            }
            return undefined;
        });
    }
    


    find(callback) {
        for (let current = this.first, position = 0; 
            current; 
            position += 1, current = current.next) { 
            const result = callback(current, position); 

            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    }

    removeFirst() {
        const head = this.first;

        if (head) {
            this.first = head.next;
            if (this.first) {
                this.first.previous = null;
            } else {
                this.last = null;
            }
            this.size -= 1;
        }
        return head && head.value;
    }

    removeLast() {
        const tail = this.last;

        if (tail) {
            this.last = tail.previous;
            if (this.last) {
                this.last.next = null;
            } else {
                this.first = null;
            }
            this.size -= 1;
        }
        return tail && tail.value;
    }

    removeByPosition(position = 0) {
        const current = this.get(position);

        if (position === 0) {
            this.removeFirst();
        } else if (position === this.size - 1) {
            this.removeLast();
        } else if (current) {
            current.previous.next = current.next;
            current.next.previous = current.previous;
            this.size -= 1;
        }
        return current && current.value;
    }

    remove(callbackOrIndex) {
        if (typeof callbackOrIndex !== 'function') {
            return this.removeByPosition(parseInt(callbackOrIndex, 10) || 0);
        }

  
        const position = this.find((node, index) => {
            if (callbackOrIndex(node, index)) {
                return index;
            }
            return undefined;
        });

        if (position !== undefined) { 
            return this.removeByPosition(position);
        }


}
}

