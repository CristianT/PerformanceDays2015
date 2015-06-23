// Route params is to identificate the segments of the url, in this case, to recognize the book
app.controller("infoController", function infoController($scope,$routeParams){
	angular.forEach($scope.books, function(book, key){
		if (book._id == $routeParams.id){
			$scope.book = book;
		}
	});
});