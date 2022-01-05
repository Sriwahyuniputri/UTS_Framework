var mysql = require('mysql');
function Connection() {
	this.pool = null;

	this.init = function() {
		this.pool = mysql.createPool({
			// connectionLimit: 10,
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'perpustakaan',
			port:'3307',
			acquireTimeout:6000000
		});
	};

	this.acquire = function(callback) {
		this.pool.getConnection(function(err, connection) {
			callback(err, connection);
		});
	};
}

module.exports = new Connection();