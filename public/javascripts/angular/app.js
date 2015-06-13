// Create angular module
var app = angular.module('app', []);
// Rooting
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/index.html"
	})
	//Associate variables to the urls
	.when('/info/:id', {
		templateUrl : "templates/info.html",
		controller : "infoController"
	})
	.when("/add", {
		title: 'Add Book',
		templateUrl : "templates/add.html",
		controller : "addController"
	})
	.when("/edit/:id", {
		title: 'Edit Book',
		templateUrl : "templates/edit.html",
		controller : "editController"
	})
	.when("/remove/:id", {
		title: 'Remove Book',
		templateUrl : "templates/remove.html",
		controller : "removeController"
	})
	.otherwise({ redirectTo : "/"})
})