const elementoResposta = document.querySelector("#resposta")
const inputNumber = document.querySelector("#inputNumber")
const buttonSpin = document.querySelector("#buttonSpin")

function rollDice(){
    buttonSpin.setAttribute("disabled", true)

    const number = (inputNumber.value) ? inputNumber.value : 6
    const randomNumber = Math.floor(Math.random() * number)

    elementoResposta.innerHTML = randomNumber

    setTimeout(function () {
        elementoResposta.innerHTML = null
        buttonSpin.removeAttribute("disabled")
    }, 5000)
}