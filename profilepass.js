const passExisting = document.querySelector("input[name='existing']")
const passNew = document.querySelector("input[name='new']")
const passConfirm = document.querySelector("input[name='confirm']")
const showExist = document.querySelector(".inputs-existing > img")
const showNew = document.querySelector(".inputs-new > img")
const showConfirm = document.querySelector(".inputs-confirm > img")
const btnSubmit = document.querySelector(".text2 > form button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const changePass = collectData()
    if (!changePass.existing || !changePass.new || !changePass.existing) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "All data must be filled"
        textMessage.style.color = "red"
        return
    } 

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    if (!passwordRegex.test(changePass.new)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Password must be combination of letter and number min. 6 digits"
        textMessage.style.color = "red"
        return
    }

    if (changePass.new === changePass.existing) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Password can not be same with the existing one"
        textMessage.style.color = "red"
        return
    }

    if (changePass.new !== changePass.confirm) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Passwords do not match"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Password changed"
    textMessage.style.color = "green"
})

function collectData() {
    const data = {}
    data.existing = passExisting.value 
    data.new = passNew.value 
    data.confirm = passConfirm.value 
    return data
}

showExist.addEventListener ("click", () => {
    if (passExisting.type === "password") {
        passExisting.type = "text";
    } else {
        passExisting.type = "password"
    }
})

showNew.addEventListener ("click", () => {
    if (passNew.type === "password") {
        passNew.type = "text";
    } else {
        passNew.type = "password"
    }
})

showConfirm.addEventListener ("click", () => {
    if (passConfirm.type === "password") {
        passConfirm.type = "text";
    } else {
        passConfirm.type = "password"
    }
})