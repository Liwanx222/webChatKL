
let db = require('database'); 

function setupListeners(){
    let input_submit_elt = document.querySelector('.input-submit');
    let input_text_elt = document.querySelector('.input-post');

    input_submit_elt.addEventListener('click',()=>{
        sessionStorage.setItem('post',input_text_elt.textContent);
        db.addPostToDatabase();
    })

    clearPostContent(elt);
}

function clearPostContent(elt){
    elt.textContent = '';
    elt.innerHTML = '';
}
setupListeners();
