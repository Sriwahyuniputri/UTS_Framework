var perpustakaan = require('../models/perpustakaan');

module.exports = {
	configure: function(app) {
		app.get('/perpustakaan',function(req,res) {
			perpustakaan.get(res);
		});
		app.get('/perpustakaan/:id_kategori',function(req,res) {
			perpustakaan.getByID(req.params.id_kategori,res);
		});
		app.post('/perpustakaan',function(req,res) {
			perpustakaan.create(req.body,res)
		});
		app.put('/perpustakaan/:id_buku',function(req,res) {
			perpustakaan.update(req.body.judul,req.params.id_buku,res);
		});
		app.delete('perpustakaan/:id_buku',function(req,res) {
			perpustakaan.delete(req.params.id_buku,res);
		});
	}
};