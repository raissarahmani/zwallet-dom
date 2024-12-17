const userPin = document.querySelector(".pin")
const btnSubmit = document.querySelector(".container-profile > button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const enterPin = collectData()
    if (!enterPin.pin) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Enter 6 digits pin"
        textMessage.style.color = "red"
        return
    }

    const pinRegex = /^\d{1}$/
    if (!pinRegex.test(enterPin.pin)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Pin should be 6 digits"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Login success"
    textMessage.style.color = "green"
})

function collectData() {
    const data = {}
    data.pin = userPin.value
    return data
}