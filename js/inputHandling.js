
/* Setup.
============== */

function setupLocalStorage(){
    sessionStorage.setItem('messages','a');
}

function setupListeners(){
    let input_submit_elt = document.querySelector('.input-submit');
    let input_text_elt = document.querySelector('.input-post')
    input_submit_elt.addEventListener('click',()=>{
        updateSessionStorage(input_text_elt)
        clearPostContent(input_text_elt);   
    })
}

function addMessageDB(db){
    let message = sessionStorage.getItem('messages');
    if (message != ''){
        db.append(message);
        sessionStorage.setItem('messages','');
    }
}

/* Storage.
=============== */

function updateSessionStorage(elt){
    let text = elt.value;
    if(!(sessionStorage.getItem('messages'))){
        sessionStorage.setItem('messages',String(text));
    }
}

/* Handles messages.
=============== */

function createNewMessageElt(text){
    let div = document.createElement('div');
    div.classList.add('message');
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
