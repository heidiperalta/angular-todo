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