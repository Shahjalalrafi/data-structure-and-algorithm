let numbers = [ 2, 3, 4, 6, 7, 12, 23 , 45, 65, 74, 99]

function binarySearch(array, target) {

    // const array =  arr.sort((a,b) => a - b)

    let startNumber = 0
    let endNumber = array.length - 1

    while(startNumber <= endNumber) {
        let mid = Math.floor((startNumber + endNumber) / 2)
        if(array[mid] === target) {
            console.log('item found in ', mid)
            return mid
        }

        if(array[mid] < target) {
            startNumber = mid + 1
        }

        if(array[mid] > target ) {
            endNumber = mid - 1
        }
    }
    return -1

}

const findNumber = binarySearch(numbers , 7)
console.log(findNumber)

