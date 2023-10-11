// dbConfig.js
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Greeshma@2002',
  database: 'hotel_reservation_system',
});

module.exports = pool;
