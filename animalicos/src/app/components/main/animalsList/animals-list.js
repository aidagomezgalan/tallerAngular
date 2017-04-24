(function (angular){
    angular.module('app').component('animalsList',{
        templateUrl: 'app/components/main/animalsList/animals-list-template.html',
        controller: ['$state', 'animalsFactory', animalsList],
        controllerAs: 'animalsList'
    });

    function animalsList ($state, animalsFactory){
        var vm = this;

        vm.$onInit = function(){
        	vm.allAnimals = animalsFactory.getAllAnimals();
        };

        vm.goToDetail = function (){
            $state.go('detail');
        }
    }

}) (angular);