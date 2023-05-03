const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express_mysql',
    password: 'zanuk12345',
})

module.exports = pool.promise();