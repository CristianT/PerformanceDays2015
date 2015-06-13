app.controller("appController", function appController($scope,$http){
	// Get the list of available books 
	// the load of the JSON file has to be replaced by the call to the API
	$http.get('books.json').success(function(data) {
		$scope.books = data;
		console.log('books: ' + data);
	}).error(function(error){
		console.log('error fetching books: ' + error);
	});
});

// Route params is to identificate the segments of the url, in this case, to recognize the book
app.controller("infoController", function infoController($scope,$routeParams){
	$scope.book = $scope.books[$routeParams.id];
});

// Save new books with push
app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Add new book";
	$scope.book = {};
	$scope.newBook = function() {

		// This line will be replaced by the call to the API to update the model
		$scope.books.push($scope.book);

		// $http.post('api/books/').success(function(data) {
		// 	$scope.books = data.books;
		// }).error(function(error){
		// 	console.log('error deleting book' + $scope.book[$routeParams.id].name)
		// });

		$location.url("/");
	}
});

app.controller("editController", function editController($scope,$routeParams,$location){
	// Get the book to edit with route params
	$scope.book = $scope.books[$routeParams.id];
	$scope.textButton = "Edit book";
	$scope.editBook = function(){
		// Update the book info with the identificar of the route params

		// This line will be replaced by the call to the API to update the model
		$scope.books[$routeParams.id] = $scope.book;

		// $http.put('api/books/').success(function(data) {
		// 	$scope.books = data.books;
		// }).error(function(error){
		// 	console.log('error deleting book' + $scope.book[$routeParams.id].name)
		// });

		$location.url("/");
	}
});

// Delete the book depends on its id
app.controller("removeController", function removeController($scope,$routeParams,$location,$http){
	$scope.book = $scope.books[$routeParams.id];
	$scope.removeBook = function(){

		// This line will be replaced by the call to the API to update the model
		$scope.books.splice($routeParams.id, 1); 

		// $http.delete('api/books/').success(function(data) {
		// 	$scope.books = data.books;
		// }).error(function(error){
		// 	console.log('error deleting book' + $scope.book[$routeParams.id].name)
		// });

		$location.url("/");
	}
});