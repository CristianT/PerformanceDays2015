app.controller("editController", function editController($scope,$routeParams,$location,$http){
	// Get the book to edit with route params
	angular.forEach($scope.books, function(book, key){
		if (book._id == $routeParams.id){
			$scope.book = book;
		}
	});
	$scope.textButton = "Edit book";
	$scope.editBook = function(){
		$http.put('/books/'+ $routeParams.id, $scope.book).success(function(result) {
			$scope.book = result;
		}).error(function(error){
			console.log('error updating book ' + $routeParams.id + ' :' + error);
		});

		$location.url("/");
	}
});