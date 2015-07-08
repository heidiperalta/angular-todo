(function () {
	var todoApp = angular.module("todoApp", []);
}());
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
		model.removeList = function (list) {

			model.todoLists = _.without(model.todoLists, list);

			// clean selection
			publishListMessage({});
		};


		// Defaults
		model.todoLists = todoService.getLists();

		$scope.model = model;

	});

}());
(function () {
	
	var app = angular.module("todoApp");

	app.controller("todoListController", function ($scope, todoService) {
		
		var model = {};

		// Display current list
		var unsubscribe = $scope.$on("listSelected", function (sender, data) {
			$scope.currentList = data;
		});


		// Add item to a TODO list
		var addItem = function (item) {

			var todoItem = {
				done: false,
				todo: item
			}

			$scope.currentList.items.push(todoItem);
			
			model.newItem = "";
		};

		// Remove item from TODO list
		var removeItem = function (item) {
			$scope.currentList.items = _.without($scope.currentList.items, item);
		};
		

		model.addItem = addItem;
		model.removeItem = removeItem;
		
		$scope.model = model;


		//make sure we clean up.
		$scope.$on('$destroy', function () {
			unsubscribe();
		});
	});

}());
(function () {
	
	var app = angular.module("todoApp");

	app.service("todoService", function () {
		
		var that = this;

		var todoLists = [
			{
				name: "Vacation TODOs",
				items: [
					{
						todo: "buy plane tickets",
						done: false
					},
					{
						todo: "make reservations",
						done: true
					}
				]
			},
			{
				name: "Another List",
				items: [
					{
						todo: "buy milk",
						done: false
					}
				]
			}
		];

		that.currentList = {};


		that.getLists = function () {
			return todoLists;
		};

	});

}());