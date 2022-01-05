var connection = require ('../config/connection');

function Perpustakaan() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('select * from buku', function(err,result) {
				con.release ();
				res.send(result);
				console.log("get Successful");
			});
			console.log("get Successful");
		});
	};
	this.getByID = function(id_kategori,id_buku,res) {
		connection.acquire(function(err,con) {
			con.query('select * from buku innrjoin kategori on buku.id_kategori = kategori.id_kategori = ?', id_kategori, function(err,result) {
				con.release();
				res.send(result);
				console.log("GET by id_buku Successful");
			});
		});
	};
	this.create = function(perpustakaan,res) {
		connection.acquire(function(err,con) {
			con.query('INSERT INTO buku set ?', perpustakaan, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'buku creation fail'});
				} else {
					res.send({status:0, message:'buku create Success'});
					console.log("POST Successful");
				}
			});
		});
	};
	this.update = function(perpustakaan,id_buku,res) {
		connection.acquire(function(err,con) {
			con.query('update buku set judul = ? where id_buku = ?', [perpustakaan,id_buku], function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'buku update fail'});
				} else {
					res.send({status:0, message: 'buku update Success'});
					console.log("UPDATE Successful");
				}
			});
		});
	};
	this.delete = function(id_buku,res) {
		connection.acquire(function(err,con) {
			con.query('delete from buku where id_buku = ?', id_buku, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'buku delete fail'});
				} else {
					res.send({status:0, message: 'buku delete Success'});
					console.log("delete Successful");
				}
			});
		});
	};
};
module.exports = new Perpustakaan();