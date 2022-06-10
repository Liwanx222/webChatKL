module.exports = {
    updateDatabase
};

function updateDatabase(data,post){
    let db = JSON.parse(data);
    db['messages'].push(post);
    db = JSON.stringify(db);
    return db
}
