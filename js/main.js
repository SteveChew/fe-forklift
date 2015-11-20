(function () {
    var app = angular.module('forklift', []);

    app.controller('MainController', function () {
        this.menu = 'home';

        this.isSet = function (checkMenu) {
            return this.menu === checkMenu;
        };

        this.setMenu = function (setMenu) {
            this.menu = setMenu;
        };
    });

    app.directive('home', function (){
        return {
            restrict: 'E',
            templateUrl: '/content/home.html'
        };
    });
    
    app.directive('aboutUs', function(){
        return {
            restrict: 'E',
            templateUrl: '/content/about-us.html'
        };
    });
    
})();