(function (angular){

	angular.module('app').component('planetsComponent',{

		templateUrl: 'app/components/planets-template.html',
		controller: ctrlPlanets,
		controllerAs: 'planets'
	});

	function ctrlPlanets (){
		var vm = this;

		vm.$onInit = function (){

			vm.falseProperty = false;
			vm.mainTitle = 'Planets:';
			vm.solarSystem = [
				{id: 0, name: 'Mercury'},
		        {id: 1, name: 'Venus'},
		        {id: 2, name: 'Earth'},
		        {id: 3, name: 'Mars'},
		        {id: 4, name: 'Jupiter'},
		        {id: 5, name: 'Saturn'},
		        {id: 6, name: 'Uranus'},
		        {id: 7, name: 'Neptune'}
			];
		};
		vm.setMainTitle = function (){
				vm.mainTitle = 'Planetas del Sistema Solar:';
		};

		vm.regaloHijo = "Esto es un regalo definido en el padre para el hijo";

		vm.setRegaloHijo = function (){
			vm.regaloHijo = "El padre cambia el regalo del hijo";
		}

	}
		
})(angular);