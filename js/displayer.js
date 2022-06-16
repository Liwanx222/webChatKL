
function setupListeners(){
    let post_input = document.querySelector('.form__post-input');
    post_input.addEventListener('keypress',(e)=>{
        if(e.key=='enter'){
            displayAllMessages();
        }
    })
}

function displayAllMessages() {
    let parent = document.querySelector(".posts__post-preview");
    fetch("../json/database.json")
    .then(response => response.json())
    .then(response => {
        for(let msg in response["messages"]){
            displayMessage(parent, response["messages"][msg]);
        }});
};

/**
 * Display a message in the HTMLElement parent.
 * @param {HTMLElement} parent 
 * @param {string} text 
 */
function displayMessage(parent, text) {
    let message_elt = document.createElement("div");
    message_elt.classList.add('posts__post-container');
    message_elt.textContent = text;
    parent.appendChild(message_elt);
};

function main(){
    displayAllMessages();
}
main();

