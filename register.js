const loginGoogle = document.querySelector("#google")
const loginFacebook = document.querySelector("#facebook")
const loginEmail = document.querySelector("#loginEmail")
const userEmail = document.querySelector(".line6 > form input[name='email']")
const userPass = document.querySelector("input[name='pass']")
const userConfirm = document.querySelector("input[name='confirm']")
const showPass = document.querySelector(".inputs-pass > img")
const showConfirmPass = document.querySelector(".inputs-confirm > img")
const btnRegister = document.querySelector(".line6 > form button")
const textMessage = document.querySelector("#text")

btnRegister.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const formRegister = collectData()
    if (!formRegister.email || !formRegister.pass || !formRegister.confirm) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "All data must be filled"
        textMessage.style.color = "red"
        return
    }
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formRegister.email)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Email not valid"
        textMessage.style.color = "red"
        return
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    if (!passwordRegex.test(formRegister.pass)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Password must be combination of letter and number with minimal 6 digits"
        textMessage.style.color = "red"
        return
    }

    if (formRegister.pass !== formRegister.confirm) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Passwords do not match"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Register success. Please login"
    textMessage.style.color = "green"
})

function collectData() {
    const data = {}
    data.email = userEmail.value 
    data.pass = userPass.value 
    data.confirm = userConfirm.value 
    return data
}

showPass.addEventListener ("click", () => {
    if (userPass.type === "password") {
        userPass.type = "text";
    } else {
        userPass.type = "password"
    }
})

showConfirmPass.addEventListener ("click", () => {
    if (userConfirm.type === "password") {
        userConfirm.type = "text";
    } else {
        userConfirm.type = "password"
    }
})

loginGoogle.addEventListener("click", () => {
    window.location.href = "https://www.google.com/login"
}, false)

loginFacebook.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/login"
}, false)




