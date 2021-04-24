// const addNumbers = (a, b) => {
//     return a + b
// }

// console.log(addNumbers(2, 5))

// const minutesToSeconds = (min) => {
//     const OneMinute = 60 
//     return min * OneMinute
// }

// console.log(minutesToSeconds(3))

// const oneYear = 12
// const oneMonth = 30
// const oneDay = 24
// const oneHour = 60
// const OneMinute = 60
// function ageInSeconds(age) {
//     const ageToMonth = age * oneYear
//     const monthToDay = ageToMonth * oneMonth
//     const dayToHour = monthToDay * oneDay
//     const hourToMinute = dayToHour * oneHour
//     const minuteToSeconds = hourToMinute * OneMinute
//     return minuteToSeconds
// }

// console.log(ageInSeconds(25))

// function badOrGoodMovies(num) {
//     if(num <= 6) {
//         return 'bad moview'
//     }else {
//         return 'good movie'
//     }
// }

// console.log(badOrGoodMovies(7))

// function isEmptyStr(str) {
//     if(str == '') {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isEmptyStr('d'))

// function findMinNum(num) {
//     let minNum = num[0]
//     for(let i = 0; i < num.length; i++) {
//         if(num[i] < minNum) {
//             minNum = num[i]
//         }
//     }
//     return minNum
// }

// console.log(findMinNum([35,3, 5]))


// function findMax(numbers) {

//     let maxNum = numbers[0]
//     for(let i = 0; i< numbers.length; i++) {
//         if(numbers[i] > maxNum) {
//             maxNum = numbers[i]
//         }
//     }
//     return maxNum
// }

// console.log(findMax([3, 4, 5, 6, 3]))


function sortBestFirst(numbers) {
    numbers.sort((a, b) => {
        return b-a
    })
    return numbers
}

console.log(sortBestFirst([3, 8, -5, -6, 3]))

