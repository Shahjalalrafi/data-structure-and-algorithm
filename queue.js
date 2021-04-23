// stack data structure follow the rules of lifo....(FIRST IN FIRST OUT)

class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(item) {
        this.queue.push(item)
    }

    dequeue() {
        if(this.queue.length) {
            this.queue.shift()
        }
    }
}

const myQueue = new Queue()

myQueue.enqueue('rafi')
myQueue.enqueue('tasib')
myQueue.enqueue('rakib')

console.log(myQueue.queue)

myQueue.dequeue()

console.log(myQueue.queue)