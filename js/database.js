
db = require('../json/database.json')

function addPostToDatabase(){
    let db_object = JSON.parse(db);
    db_object['post'].push();
    console.log(sessionStorage['post'])
}

function fillDB(messages,db){
    for(let msg in messages){
        db.push(msg);
    }
}

function blank(){
    console.log('hell')
}