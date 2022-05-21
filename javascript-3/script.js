// Задание 1
console.log("Задание 1")
const numbers = [100, 100, 100]
const sumArray = arr => {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumArray(numbers))

// Задание 2
console.log("Задание 2")
let second_numbers = [-3, 10, 2, 4, -10]
const getAboveZero = arr => {
    return arr.filter(function(number) {
        return number > 0
    })
}
console.log(getAboveZero(second_numbers))

// Задание 3
console.log("Задание 3")
const getPonies = (arr, pony) => {
    return arr.find(function(element){
        return element == pony
    })
}
console.log(getPonies(["Asd", "Qwe", "Zxc"], "Zxc"))

// Задание 4
console.log("Задание 4")
const isTxIncluded = (arr, Tx) => {
    return arr.includes(Tx)
}
console.log(isTxIncluded(["0xaea0", "0x8f80", "0xf3ad", "0x17ec"], "0x9e0a"))

// Задание 5
console.log("Задание 5")
const getSizes = arr => {
    return arr.map(function(el){
        return el.length
    })
}
console.log(getSizes(["123456", "qwerty", "zxcvbn", "q", "w", "e"]))

// Задание 6
console.log("Задание 6")
const getWithSpaces = arr => {
    str = arr.join(" ")
    res = [str, str.length]
    return res
}
console.log(getWithSpaces(["Moscow", "never", "sleep"]))

// Задание 8
console.log("Задание 8")
const getEpisodes = ({title, episodes}) => {
    return `${title} включает в себе ${episodes} серий`
}
console.log(getEpisodes({title: "Code Geass", episodes: 25}))

// Задание 9
console.log("Задание 9")
const triple = x => {
    return x * 3
}
console.log(triple(2))

// Задание 10
console.log("Задание 10")
const getAvgGlucose = arr => {
    return (sumArray(arr) / arr.length)
}

console.log(getAvgGlucose([5.4, 8.1, 6.3, 4.9]))