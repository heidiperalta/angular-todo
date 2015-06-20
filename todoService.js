(function () {
	
	var app = angular.module("todoApp");

	app.service("todoService", function () {
		
		var that = this;

		var todoLists = [
			{
				name: "Default List",
				items: [
					{
						todo: "buy plane tickets",
						done: false
					}
				]
			}
		];

		that.getLists = function () {
			return todoLists;
		};

	});

}());