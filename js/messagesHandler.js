
function getMessages(db) {
    let messages_array = db['messages'];
    return messages_array;
}

function getElt(elt) {
    let preview_elt = document.querySelector(elt);
    return preview_elt;
}

// Displays all messages from the fucking database.
function displayMessages(db) {
    let messages_array = getMessages(db);
    let preview_elt = getElt('.posts__preview');
    for(let obj of messages_array) {
        preview_elt.appendChild(obj);
    }
}
