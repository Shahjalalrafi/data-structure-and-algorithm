const numbers = [3, 45, 65, 233, 23, 5, -23, -17, 4, 75]

function selectionSort(arr) {
    for(let i = 0; i< arr.length; i++) {
        let min = i
        for(let j = i+1 ; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    return arr
}

const decendingNumbers = selectionSort(numbers)
console.log(decendingNumbers)

