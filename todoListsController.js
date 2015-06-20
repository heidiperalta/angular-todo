(function () {
	
	var app = angular.module("todoApp");

	app.controller("todoListsController", function ($scope, todoService) {
		
		var model = {};

		// Display list's contents
		var viewList = function (listIndex) {
			
		};

		// Create a TODO list and add it to Lists
		var addList = function (name, items) {
			// body...
		};

		// Remove a TODO list
		var removeList = function (todoListIndex) {
			// body...
		};


		// Defaults
		model.todoLists = todoService.getLists();

		$scope.model = model;

	});

}());