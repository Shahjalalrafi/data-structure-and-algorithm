
class Dictonary {
    constructor() {
        this.dictonary = {}
    }

    add(key, value) {
        this.dictonary[key] = value
    }

    get(key) {
        return this.dictonary[key]
    }
}

const myDictonary = new Dictonary()

myDictonary.add('rafi', 'web developer')
myDictonary.add('tasib', 'web designer')
myDictonary.add('rakib', 'doctor')

console.log(myDictonary.dictonary)

console.log(myDictonary.get('rakib'))

