const number = document.querySelector('#inputNumb')
const numberfirst = document.querySelector('#inputfirstNum')
const numbersecond = document.querySelector('#inputsecondNum')
const result = document.querySelector('#resultFirstExercise')
const resultSecond = document.querySelector('#resultSecondExercise')
const age = document.querySelector('#age')
const age_res = document.querySelector('#res_faceControl')
const nextAge = document.querySelector('#nextAge')
const res_nextAge = document.querySelector('#res_nextAge')
const rost = document.querySelector('#rost')
const res_rost = document.querySelector('#res_rost')

function getNumb(arg1){
    return Number.parseInt(arg1, 10) + 1
}

function getRemainder(x, y){
    return x%y
}

function faceControl(x){
    if (x >= 18) {
        return "Велком"
    }
    else {
        return "Отказ"
    }
}
function getNextAge(x){
    if(x == ""){
        return 0
    }
    else{
        return Number.parseInt(x, 10) + 1
    }
}
function canRide(x){
    return x >= 140
}


const button = document.getElementById("myBtn");
button.addEventListener("click", () => {
	result.textContent = getNumb(number.value)
    resultSecond.textContent = getRemainder(numberfirst.value, numbersecond.value)
    age_res.textContent = faceControl(age.value)
    res_nextAge.textContent = getNextAge(nextAge.value)
    res_rost.textContent = canRide(rost.value)
});

