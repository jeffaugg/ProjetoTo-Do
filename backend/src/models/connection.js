const mysql = require('mysql2/promise');  // importando o mysql, promise é para ultilizar a versao mais moderna
require('dotenv').config(); // importando o dotenv para ultilizar as variaveis de ambiente

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,	
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

module.exports= connection;