import mysql from "mysql2";

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    database: 'Unir',
    password: 'Juanca.123'
});

global.db = pool.promise();

export default pool;