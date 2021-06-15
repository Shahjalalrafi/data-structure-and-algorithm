class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    add(value) {
        const newNode = new Node(value)
        let current = this.head
        while(current.next != null) {
            current = current.next
        }
        current.next = newNode
    }

    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(120)
const together = new LinkedList(head)

together.add(135)
together.add(145)
together.add(165)
together.add(198)

console.log(together.head)