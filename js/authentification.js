
function signup(){
    let container = createSignupHtml();
    requestUsername(container);
}

function requestUsername(elt){
    let username_label = createUsernameHtml(elt);
    typeWriterEffect(username_label,'Type your username',100);
    username_label.addEventListener('keypress',(e)=>{
        if(e.key == 'Enter'){
            requestPassword(container);
        }
    })
}

function requestPassword(elt){
    deleteUsernameElements();
    let password_label = createPasswordHtml(elt);
    typeWriterEffect(password_label,'Type your password',50);
    createButtonHtml();
}

function createSignupHtml(){
    let container = document.querySelector('.hero-features');
    container.classList.remove('hero-features');
    container.classList.add('hero-signup');
    container.innerHTML ='<form class="hero-signup__form" action="/signup" method="POST"></form>';
    let form = document.querySelector('.hero-signup__form');
    return form;
}

function createUsernameHtml(elt) {
    let username_input = '<input class="hero-signup__username-input" name="username">';
    let username_label = '<label class="hero-signup__username-label" for="username"></label>';
    elt.innerHTML += username_label;
    elt.innerHTML += username_input;
}

function createPasswordHtml(elt){
    let password_input = '<input class="hero-signup__password-input" name="password">';
    let password_label = '<label class="hero-signup__password-label" for="password"></label>';
    elt.innerHTML += password_input;
    elt.innerHTML += password_label;
}

function createButtonHtml(elt){
    let button = '<button class="hero-signup__submit-btn" type="submit">submit</button>';
    elt.appendChild(button);
}

function deleteUsernameElements(){
    let username_label = document.querySelector('.hero-signup__username-label');
    let username_input = document.querySelector('.hero-signup__username-input');
    username_label.style.display = 'none';
    username_input.style.display = 'hidden';
    username_input.style.height = '0px';
    username_input.style.width = '0px';
}

function endAuthentification(){

}

/* Utility Class 
=============== */

function typeWriterEffect(element,text,speed){
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}