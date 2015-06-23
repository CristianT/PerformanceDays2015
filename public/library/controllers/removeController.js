// Delete the book depends on its id
app.controller("removeController", function removeController($scope,$routeParams,$location,$http){
	// Get the book to edit with route params
	angular.forEach($scope.books, function(book, key){
		if (book._id == $routeParams.id){
			$scope.book = book;
		}
	});
	$scope.removeBook = function(){
		$http.delete('/books/'+ $routeParams.id).success(function(result) {
			var index = $scope.books.indexOf(result);
    		$scope.books.splice(index,1);
		}).error(function(error){
			console.log('error deleting book ' + $routeParams.id + ' :' + error)
		});

		$location.url("/");
	}
});