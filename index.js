class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        const newNode = new Node(value) //create a new node
        if (!this.headNode) { //if the list is empty
            this.headNode = newNode //set headNode equal to newNode
            this.tailNode = newNode
        } else {
            this.tailNode.nextNode = newNode;
            this.tailNode = newNode
        }
    }

    prepend(value) {
        const newNode = new Node(value)
        if(!this.headNode) {
            this.headNode = newNode
            this.tailNode = newNode
        } else {
            newNode.nextNode = this.headNode
            this.headNode = newNode
        }
    }

    size() {
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode
    }

    tail() {
        return this.tailNode
    }

    at(index) {

        if (index < 0 || index >= this.size()) {
            return null;
        }

        let currentNode = this.headNode;
        let counter = 0;

        while(counter < index) {
            currentNode = currentNode.nextNode;
            counter++;
        }

        return currentNode;
    }

    pop() {
            if (!this.headNode) {
                return null;
            }

            //if there is only one node, pop it
            if (this.headNode === this.tailNode) {
                const valueToReturn = this.headNode.value; //store the value before resetting
                this.headNode = null;
                this.tailNode = null;
            }

            //if there are multiple nodes, find the 2nd to last node
            let currentNode = this.headNode;
            while (currentNode.nextNode !== this.tailNode) {
                currentNode = currentNode.nextNode;
            }

            //currentNode is now the second to last node
            this.tailNode = currentNode;
            this.tailNode.nextNode = null;
    }

    contains(value) {
        let currentNode= this.headNode;

        while (currentNode !== null) {
            if(currentNode.value === value) {
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find (value) {
        let currentNode = this.headNode;
        let index = 0;
        while (currentNode !== null) {
            //check if the current node contains the value
            if(currentNode.value === value) {
                return index;
            }

            currentNode = currentNode.nextNode
            index++

        }
        return null;
    }

    toString() {
        let currentNode = this.headNode;
        let result = ''

        while (currentNode !== null) {
            result += `( ${currentNode.value} ) -> `;

            currentNode = currentNode.nextNode;
        }

        result += 'null';
        return result;
    }
}
