(function () {
	
	var app = angular.module("todoApp");

	app.controller("todoListController", function ($scope, todoService) {
		
		var model = {};


		// Add item to a TODO list
		var addItem = function (todoItem) {
			// body...
		};

		// Remove item from TODO list
		var removeItem = function (todoItemIndex) {
			// body...
		};

		// Mark item as done
		var itemDone =  function (todoItemIndex) {
			// body...
		};


		// Default
		var lists = todoService.getLists();

		if (lists && lists.length > 0) {
			model.todoList = lists[0];
		}

		$scope.model = model;

	});

}());