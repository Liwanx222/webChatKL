
function signup(){
    let container = createSignupHtml();
    requestUsername(container);
}

function requestUsername(elt){
    elt.innerHTML = '';
    let username_label = createUsernameHtml(elt);
    typeWriterEffect(username_label,'Type your username',100);
    username_label.addEventListener('keypress',(e)=>{
        if(e.key == 'Enter'){
            requestPassword(elt);
        }
    })
}

function requestPassword(elt){
    deleteUsernameElements();
    let password_label = createPasswordHtml(elt);
    typeWriterEffect(password_label,'Type your password',50)
    password_input.addEventListener('keypress',(e)=>{
        if(e.key == 'Enter'){/* store data in db */}
    })
}

function createSignupHtml(){
    let container = document.querySelector('.hero-features');
    container.classList.remove('hero-features');
    container.classList.add('hero-signup');
    container.innerHTML ='';
    return container
}

function createUsernameHtml(elt) {
    let username_input = document.createElement('input');
    let username_label = document.createElement('p');
    username_label.classList.add('hero-signup__username-label');
    username_input.classList.add('hero-signup__username-input');
    elt.appendChild(username_label);
    elt.appendChild(username_input);
    return username_label;
}

function createPasswordHtml(elt){
    let password_input = document.createElement('input');
    let password_label = document.createElement('p');
    password_label.classList.add('.hero-signup__password-label');
    password_input.classList.add('hero-signup__password-input');
    elt.appendChild(password_label);
    elt.appendChild(password_input);
    return password_label;
}

function deleteUsernameElements(){
    let username_label = document.querySelector('.hero-signup__username-label');
    let username_input = document.querySelector('.hero-signup__username-input');
    username_label.style.display = 'none';
    username_input.style.display = 'none';
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