
/* Setup.
============== */

function setupLocalStorage(){
    sessionStorage.setItem('messages',[]);
    console.log('storing.');
}

function setupListeners(){
    let input_submit_elt = document.querySelector('.input-submit');
    let input_text_elt = document.querySelector('.input-post')
    input_submit_elt.addEventListener('click',()=>{
        updateSessionStorage(input_text_elt)
        clearPostContent(input_text_elt);
    })
}

/* Storage.
=============== */

function updateSessionStorage(elt){
    let text = elt.value;
    let obj = sessionStorage.getItem('messages');
    console.log(obj);
    obj.push(text)
    sessionStorage.setItem('post',obj);
}

/* Handles messages.
=============== */

function createNewMessageElt(text){
    let div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = text;
}

/* Handle html elements. 
=============== */

function clearPostContent(elt){
    elt.value = '';
}

/* Main 
=============== */

function Main(){
    setupLocalStorage();
    setupListeners();
}

Main();
