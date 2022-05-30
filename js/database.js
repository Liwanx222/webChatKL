
db = require('unfichierbizzare.json')

function addPostToDatabase(){
    let db_object = JSON.parse(db);
    db_object['post'].push();
    console.log(sessionStorage['post'])
}