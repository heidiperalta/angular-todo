(function () {
	
	var app = angular.module("todoApp");

	app.controller("todoListsController", function ($scope, todoService, $rootScope) {
		
		var model = {};

		// Display list's contents
		var viewList = function (list) {
			$rootScope.$broadcast("listSelected", list);
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
		model.viewList = viewList;

		$scope.model = model;

	});

}());