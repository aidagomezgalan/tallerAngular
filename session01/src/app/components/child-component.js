(function (angular){
	
	angular.module('app').component('childComponent',{
		templateUrl: 'app/components/child-template.html',
		controller: ['$log','myFactory',childCtrl],
		controllerAs: 'child',
		bindings: {
      		propString: '@',
		    propInterpretada: '<',
		    propMethod: '&'   
		}
	});

	function childCtrl ($log, myFactory){

		var vm = this;

		console.log('Soy myFactory', myFactory)

		vm.$onInit = function (){
			vm.allFilms = myFactory.getAllFilms();

			$log.log('me traigo las pelis');
		};

		vm.$onChanges = function (){
			$log.log('se ha producido un cambio con onChages');

		};

		vm.$onDestroy = function (){
			$log.log('han matado a Kenny');
		};

	}


})(angular);