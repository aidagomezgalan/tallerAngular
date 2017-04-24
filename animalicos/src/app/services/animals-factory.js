(function (angular){
    angular.module('app').factory('animalsFactory', [animalsFactory]);

    function animalsFactory (){
        var module = {};
        var self = module;

        self.allAnimals = [
            {id: 0, name: 'Leopardo de las Nieves' img: 'leopardo.jpg' type:'felino'},
            {id: 1, name: 'Tigre de Sumatra' img: 'tigre.jpg' type:'felino'},
            {id: 2, name: 'Lince Ibérico' img: 'lince.jpg' type:'felino'},
            {id: 3, name: '' img: '.jpg' type:'felino'},
            {id: 4, name: '' img: '.jpg' type:'felino'},
            {id: 5, name: '' img: '.jpg' type:'felino'},
        ];
    }

})(angular);