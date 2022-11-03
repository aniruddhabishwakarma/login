const password = document.getElementById("inputPassword4");
const togglePassword = document.getElementById("togglePassword");
const input = document.getElementById("inputNum");
const submit = document.getElementById("login");
const signup=document.getElementById("signup");



togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

submit.disabled = true;
input.addEventListener("change",enableSubmit);

function enableSubmit(){
    if(input.value.length<10||input.value.length>10){
        submit.disabled=true;
    } else{
        submit.disabled=false;
    }       
}
function redirect(){
    location.replace("adminpanel.html")
}
const formContent= document.querySelector(".form-content")
const panel = document.getElementById("register");
const close = document.getElementById("close-button")

panel.style.display="none";

function visible() {
    if (panel.style.display !== "none") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
        
    }
    
    }


function hide(){
    panel.style.display="none";
}




