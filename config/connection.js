var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 8080,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gotta_go_db'
  });
}

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected as id: " + connection.threadId);
})

module.exports = connection;
