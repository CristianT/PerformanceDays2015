var Book = require('mongoose').model('Book');

exports.create = function(req, res, next) {
  var book = new Book(req.body);
   book.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(book);
    }
  });
};

exports.list = function(req, res) {
  Book.find().sort('-name').exec(function(err, books) {
    if (err) {
<<<<<<< HEAD
    	 return res.status(400).send({
=======
       return res.status(400).send({
>>>>>>> origin/master
        message: getErrorMessage(err)
      });
    } else {
      res.json(books);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.book);
};

exports.bookByID = function(req, res, next, id) {
  Book.findOne({
<<<<<<< HEAD
  	_id: id
  }, function(err, book) {
    if (err){
    	return next(err);
    } else {
    	req.book = book;
    	next();
=======
    _id: id
  }, function(err, book) {
    if (err){
      return next(err);
    } else {
      req.book = book;
      next();
>>>>>>> origin/master
    }   
  });
};

exports.update = function(req, res, next) {
  Book.findByIdAndUpdate(req.book.id, req.body, function(err, book) {
    if (err) {
      return next(err);
    } else {
      res.json(book);
    }
  });
};

<<<<<<< HEAD


=======
>>>>>>> origin/master
exports.delete = function(req, res, next) {
  req.book.remove(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.book);
    }
  });
};