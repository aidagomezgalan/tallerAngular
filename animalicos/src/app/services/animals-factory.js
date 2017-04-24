(function (angular){
    angular.module('app').factory('animalsFactory', [animalsFactory]);

    function animalsFactory (){
        var module = {};
        var self = module;

        var allAnimals = [
            {id: 0, name: 'Leopardo de las Nieves', img: 'leopardo.jpg', type:'felino'},
            {id: 1, name: 'Tigre de Sumatra', img: 'tigre.jpg', type:'felino'},
            {id: 2, name: 'Lince Ibérico', img: 'lince.jpg', type:'felino'},
            {id: 3, name: 'Tiburón Blanco', img: 'tiburon.jpg', type:'acuático'},
            {id: 4, name: 'Delfín', img: 'delfin.jpg', type:'acuático'},
            {id: 5, name: 'Nemo', img: 'nemo.jpg', type:'acuático'},
        ];

        self.getAllAnimals = function (){
            return allAnimals;
        };

        return self;
    };

})(angular);