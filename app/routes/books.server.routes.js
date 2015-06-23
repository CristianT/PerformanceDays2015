var books = require('../../app/controllers/books.server.controller');

module.exports = function(app) {
  app.route('/books')
<<<<<<< HEAD
  	.post(books.create)
	.get(books.list);
	
  app.route('/books/:bookId')
     .get(books.read)
     .put(books.update)
	 .delete(books.delete);
=======
     .get(books.list)
     .post(books.create);
  
  app.route('/books/:bookId')
     .get(books.read)
     .put(books.update)
     .delete(books.delete);
>>>>>>> origin/master
     
  app.param('bookId', books.bookByID);
};