(function () {
	
	var app = angular.module("todoApp");

	app.controller("todoListsController", function ($scope, todoService, $rootScope) {
		
		var model = {};

		var publishListMessage = function (list) {
			$rootScope.$broadcast("listSelected", list);
		};

		// Display list's contents
		model.viewList = function (list) {
			publishListMessage(list);
		};

		// Create a TODO list and add it to Lists
		model.addList = function (name) {

			var newList = {
				name: name,
				items: []
			}
			
			model.todoLists.unshift(newList);
			publishListMessage(newList);

			model.newListName = "";
		};

		// Remove a TODO list
		model.removeList = function (listIndex) {

			if (model.todoLists.length >= listIndex) {
				model.todoLists.splice(listIndex, 1);
			}

			// clean selection
			publishListMessage({});
		};


		// Defaults
		model.todoLists = todoService.getLists();

		$scope.model = model;

	});

}());