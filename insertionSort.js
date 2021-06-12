let numbers = [2, 4, 75, 123, 44, 34, 23, -2, -23, 43 ]

function insertionSort(arr) {
    for(let i = 1; i< arr.length; i++) {
        let item = arr[i]
        j= i-1
        while(j >= 0 && arr[j] > item) {
            arr[j+ 1] = arr[j]
            j= j-1
        }
        arr[j+ 1] = item
    }
    return arr
}

console.log(insertionSort(numbers))