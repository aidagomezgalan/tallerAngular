(function (angular){
	angular.module('app').config(['$stateProvider','$urlRouterProvider', appConfig]);

	function appConfig ($stateProvider,$urlRouterProvider){
		var main = {
			name: 'main',
			url: '/main',
			template: '<view-main></view-main>'
		};
		var detail = {
			name: 'detail',
			url: '/detail/:idAnimal',
      		params: {
        		idAnimal: { squash: true, value: null },
			template: '<view-detail></view-detail>',
			}
		};

		$stateProvider.state(main);
    	$stateProvider.state(detail);

    	$urlRouterProvider.otherwise('/main');
	}

})(angular);