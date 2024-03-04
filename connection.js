const mysql = require('mysql');

// CUIDADO, ESSE NÃO É O JEITO CERTO DE SE FAZER ISSO!!!!
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'password',
    database: 'davigay'
})

db.connect(function(error){
    if (error) {
        throw error
    };
    console.log("Connected!");
})

module.exports = db;
