// Create angular module
var app = angular.module('library', []);
// Rooting
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "library/templates/index.html"
	})
	//Associate variables to the urls
	.when('/info/:id', {
		templateUrl : "library/templates/info.html",
		controller : "infoController"
	})
	.when("/add", {
		title: 'Add Book',
		templateUrl : "library/templates/add.html",
		controller : "addController"
	})
	.when("/edit/:id", {
		title: 'Edit Book',
		templateUrl : "library/templates/edit.html",
		controller : "editController"
	})
	.when("/remove/:id", {
		title: 'Remove Book',
		templateUrl : "library/templates/remove.html",
		controller : "removeController"
	})
	.otherwise({ redirectTo : "/"})
})