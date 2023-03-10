const start = document.getElementById("start-button");
const emailBox = document.getElementById("email-input");
const mailCheck = document.getElementById("check-mail");
const form = document.getElementById("form");

const secondStart = document.getElementById("forth-conteiner-start-button");
const secondEmailBox = document.getElementById("second-email-input");
const secondForm = document.getElementById("second-form");
const secondMailCheck = document.getElementById("second-check-mail");
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

secondForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

function error() {
    mailCheck.classList.remove("hidden");
    emailBox.style.borderColor = "#EF4877";
}
function check(){
    mailCheck.classList.add("hidden");
    emailBox.style.borderColor = "#71DFCC";
}

function secondError() {
    secondMailCheck.classList.remove("hidden");
    secondEmailBox.style.borderColor = "#EF4877";
}
function secondCheck() {
    secondMailCheck.classList.add("hidden");
    secondEmailBox.style.borderColor = "#71DFCC";
}

start.addEventListener("click", () => {
    if(document.getElementById("email-input").value.match(emailPattern)) {
        check();
    }
    else {
        error();
    }
})

secondStart.addEventListener("click", () => {
    if (document.getElementById("second-email-input").value.match(emailPattern)) {
        secondCheck();
    }
    else {
        secondError();
    }
})