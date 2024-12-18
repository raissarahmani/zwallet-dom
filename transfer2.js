const goToProfile = document.querySelector("#profile")

if (goToProfile) {
    goToProfile.addEventListener("click", (event) => {
        event.preventDefault()
        window.location.href = 'profile.html'
        return
    }) 
}

const goToPrev = document.querySelector("#step-1")
if (goToPrev) {
    goToPrev.addEventListener("click", (event) => {
        event.preventDefault()
        window.location.href = 'transfer.html'
        return
    }) 
}

const amountTf = document.querySelector("#nominal")
const descTf = document.querySelector("#notes")
const textMessage = document.querySelector("#text")
const btnTf = document.querySelector(".text4 > button")

btnTf.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    if (!amountTf.value) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Enter transfer nominal"
        textMessage.style.color = "red"
        return
    }

    const tfRegex = /^\d{5,}$/
    if (!tfRegex.test(amountTf.value)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Minimum transfer Rp. 10000"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Transfering..."
    textMessage.style.color = "green"

    popupShadow.style.visibility = "visible"
    popupEl.style.visibility = "visible"
})

const popupShadow = document.querySelector(".shadow")
const popupEl = document.querySelector(".popup")
const pinInputs = document.querySelectorAll(".pin")
const popupTextMsg = document.querySelector("#text2")
const btnNext = document.querySelector(".popup2 > button")
const replaceEl = document.querySelector(".popup2")
const tfFailed = document.querySelector(".popup-failed")
const tfSuccess = document.querySelector(".popup-success")

btnNext.addEventListener ("click", (event) => {
    event.preventDefault()
    
    popupTextMsg.style.visibility = "hidden"
    popupTextMsg.textContent = ""

    let pinValue = ""
    pinInputs.forEach(input => {
        pinValue += input.value
    })

    if (!pinValue) {
        popupTextMsg.style.visibility = "visible"
        popupTextMsg.textContent = "Enter 6 digits pin"
        popupTextMsg.style.color = "red"
        return
    }

    const pinRegex = /^\d{6}$/
    if (!pinRegex.test(pinValue)) {
        popupTextMsg.style.visibility = "visible"
        popupTextMsg.textContent = "Pin should be 6 digits"
        popupTextMsg.style.color = "red"
        return
    }

    popupTextMsg.style.visibility = "visible"
    popupTextMsg.textContent = "Please wait..."
    popupTextMsg.style.color = "green"

    if(pinValue === '000000') {
        replaceEl.style.display = "none"
        tfFailed.style.display = "block"
    } 
    else {
        replaceEl.style.display = "none"
        tfSuccess.style.display = "block"
    }

    window.addEventListener("click", (event) => {
        if (!popupEl.contains(event.target)) {
            popupShadow.style.visibility = "hidden"
            popupEl.style.visibility = "hidden"
        }
    })
})
