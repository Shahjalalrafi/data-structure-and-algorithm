const numbers = [34, 45, 23, 456, 23, 343, 24]

function bableSort(arr) {
    for(let i = 0; i< arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+ 1]
                arr[j+ 1] = temp
             }
        }
    }
    return arr
}

const assendingNumber = bableSort(numbers)
console.log(assendingNumber)