(function (angular){
	angular.module('app').factory('myFactory'[myFactory]);

	function myFactory (){
		var module = {};
		var self = module;

		var allFilms = [
			{id: 0, title: 'Trescientos'},
			{id: 1, title: 'Sim City'},
			{id: 2, title: 'Death Proof'}
		];

		module.getAllFilms = function (){
			return allFilms;
		};
		
		module.addFilm = function (newTitle){
			var newFilm = {};

			if(!newTitle){
				return false;
			};

			newFilm.id = allFilms.length;
			newFilm.title = newTitle;
			allFilms.push(newFilm);
			return true;
		};

		return module;
	};

})(angular);