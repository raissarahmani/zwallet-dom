const loginGoogle = document.querySelector("#google")
const loginFacebook = document.querySelector("#facebook")
const loginEmail = document.querySelector("#loginEmail")
const userEmail = document.querySelector(".line6 > form input[name='email']")
const userPass = document.querySelector("input[name='pass']")
const showPass = document.querySelector(".inputs-pass > img")
const btnLogin = document.querySelector(".line6 > form button")
const textMessage = document.querySelector("#text")

btnLogin.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const formLogin = collectData()
    if (!formLogin.email || !formLogin.pass) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "All data must be filled"
        textMessage.style.color = "red"
        return
    } 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formLogin.email)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Email not valid"
        textMessage.style.color = "red"
        return
    }
    
    if(formLogin.email === 'raissarahmani18@gmail.com' && formLogin.pass === 'text') {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Login success"
        textMessage.style.color = "green"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Email and password did not match"
    textMessage.style.color = "red"
})

function collectData() {
    const data = {}
    data.email = userEmail.value 
    data.pass = userPass.value 
    return data
}

showPass.addEventListener ("click", () => {
    if (userPass.type === "password") {
        userPass.type = "text";
    } else {
        userPass.type = "password"
    }
})

loginGoogle.addEventListener("click", () => {
    window.location.href = "https://www.google.com/login"
}, false)

loginFacebook.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/login"
}, false)
