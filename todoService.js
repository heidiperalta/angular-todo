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