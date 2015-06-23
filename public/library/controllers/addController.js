app.controller("addController", function addController($scope,$location,$http){
	$scope.textButton = "Add new book";
	$scope.book = {};
	$scope.newBook = function() {
		// This line will be replaced by the call to the API to update the model
		$http.post('/books', $scope.book).success(function(result) {
			$scope.books.push(result);
		}).error(function(error){
			console.log('error adding book: ' + error)
		});

		$location.url("/");
	}
});