import { calculateIMC, notNumber } from "./utils.js"
import { boxError } from "./alert-error.js"
import { modal } from "./modal.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => boxError.close()
inputHeight.oninput = () => boxError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const alertError = notNumber(weight) || notNumber(height)
  if (alertError) {
    boxError.open()
    return
  }

  boxError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  inputHeight.value = ""
  inputWeight.value = ""
}

function displayResultMessage(result) {
  const message = `seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}
