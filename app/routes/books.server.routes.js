var books = require('../../app/controllers/books.server.controller');

module.exports = function(app) {
  app.route('/api/books')
     .get(books.list)
     .post(books.create);
  
  app.route('/api/books/:bookId')
     .get(books.read)
     .put(books.update)
     .delete(books.delete);
     
  app.param('bookId', books.bookByID);
};