app.controller("appController", function appController($scope,$http){
	// Get the list of available books 
	$http.get('/books').success(function(data) {
		$scope.books = data;
		console.log('books: ' + data);
	}).error(function(error){
		console.log('error fetching books: ' + error);
	});
});