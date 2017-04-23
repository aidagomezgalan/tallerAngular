(function (angular){

	angular.module('app').component('helloAngular',{
		templateUrl: 'app/components/hello-template.html',
		controller: helloCtrl,
		controllerAs: 'hello'
	});

	function helloCtrl (){
		var vm = this;

		vm.$onInit = function (){
        	vm.awesome = "Cualquier cosa definida en padre 2";
      
      		vm.setAwesome = function() {
        	vm.awesome = "Cambiamos cualquier cosa desde el padre 2";
			}
		}
	}
})(angular);