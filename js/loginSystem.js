module.exports = {
    addUserToDatabase
};

/**
 * Add user to database.
 * @param {string} data 
 * @param {string} username 
 * @param {string} password 
 */
function addUserToDatabase(data, username, password) {
    let data_json= JSON.parse(data);
    let userdata = makeUserData(username, password);
    data.push(userdata);
    return JSON.stringify(data);
};

/**
 * Converts users's infos into a JSON-type string.
 * @param {string} name User name
 * @param {string} password User password
 * @returns Stringified JSON data, like this: `{"username": password}`
 */ 
function makeUserData(name, password) {
    return JSON.parse("{\""+name+"\":"+password+"}");
};