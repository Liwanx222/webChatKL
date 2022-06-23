
function initSignup(){
    changeHeroFeatureClass();
    createFormHtml();
    displayUsernameHtml();
}

function changeHeroFeatureClass(){
    let element = document.querySelector('.hero-features');
    replaceClass(element,'hero-features','hero-signup');
}

function replaceClass(element,old_class,new_class){
    // Replace a class name by another
    // If the old class is not in the element it just adds the new_class
    if(element.classList.contains(old_class)){element.classList.replace(old_class,new_class)}
    else {element.classList.add(new_class)}
}

function createFormHtml(){
    let container = document.querySelector('.hero-signup');
    let formHTML = '<form class="hero-signup__form" action="/signup" method="POST"></form>';
    let username_label = '<label class="hero-signup__username-label fs-lg" for="username"></label>';
    let username_input = '<input class="hero-signup__username-input" type="text" name="username">';
    let pwd_label = '<label class="hero-signup__pwd-label fs-lg" for="password"></label>';
    let pwd_input = '<input class="hero-signup__pwd-input" type="password" name="password">';
    let validate_btn = '<div class="hero-signup__arrow arrow right"></div>';
    let submit_btn = '<button class="heros-signup__submit-btn" type="submit">Validate</button>';

    let els = [username_label,username_input,pwd_label,pwd_input,validate_btn,submit_btn];
    container.innerHTML = formHTML;
    let form = container.children[0];

    els.forEach(el => form.innerHTML = form.innerHTML + el );
    for(let el of form){
        el.style.display='none';
    }

    form.querySelector('.hero-signup__pwd-input').classList.add('fs-md');
    form.querySelector('.hero-signup__username-input').classList.add('fs-md');
    form.querySelector('.hero-signup__arrow').addEventListener('click',()=>{
        displayPasswordHtml();
    });
}

function displayUsernameHtml() {
    let username_label = document.querySelector('.hero-signup__username-label');
    let username_input = document.querySelector('.hero-signup__username-input');
    let password_label = document.querySelector('.hero-signup__pwd-label');
    let password_input = document.querySelector('.hero-signup__pwd-input');
    password_label.style.display='none';
    password_input.style.display='none';
    username_label.style.display='block';
    username_input.style.display='inline-block';
    typeWriterEffect(username_label,'Type your username',100);
}

function displayPasswordHtml() {
    let username_label = document.querySelector('.hero-signup__username-label');
    let username_input = document.querySelector('.hero-signup__username-input');
    let password_label = document.querySelector('.hero-signup__pwd-label');
    let password_input = document.querySelector('.hero-signup__pwd-input');
    username_input.style.display = 'none';
    username_label.style.display = 'none';
    password_label.style.display='block';
    password_input.style.display='inline-block';
    typeWriterEffect(password_label,'Type your password',100);
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