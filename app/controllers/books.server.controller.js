var mongoose = require('mongoose'),
    Book = mongoose.model('Book');

var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName]. 
        message;
    }
  } else {
    return 'Unknown server error';
  }
};

exports.create = function(req, res) {
  var book = new Book(req.body);
  book.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(book);
    }
  });
};

exports.list = function(req, res) {
  Book.find().sort('-name').exec(function(err, books) {
    if (err) {
    	 return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(books);
    }
  });
};

exports.bookByID = function(req, res, next, id) {
  Book.findById(id).exec(function(err, book) {
    	 if (err) return next(err);
    if (!book) return next(new Error('Failed to load book ' + id));
    req.book = book;
    next();
  });
};

exports.read = function(req, res) {
  res.json(req.book);
};

exports.update = function(req, res) {
  var book = req.book;
  book.name = req.body.name;
  book.description = req.body.description;
  book.author = req.body.author;
  book.language = req.body.language;
  book.theme = req.body.theme;
  book.edition = req.body.edition;
  book.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(book);
    }
  });
};

exports.delete = function(req, res) {
  var book = req.book;
  book.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(book);
    }
  });
};

