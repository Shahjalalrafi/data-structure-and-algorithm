class Stack {
    constructor() {
        this.stack = []
    }

    add(item) {
        this.stack.push(item)
    }

    remove() {
        this.stack.pop()
    }
}

const myStack = new Stack()

myStack.add('apple')
myStack.add('orange')
myStack.add('banana')
myStack.add('lichi')

console.log(myStack.stack)

myStack.remove()
console.log(myStack.stack)