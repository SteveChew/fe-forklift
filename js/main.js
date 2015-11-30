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
    
    app.directive('service', function(){
        return {
            retrict: 'E',
            templateUrl: '/content/service.html'
        }
    });
    
    app.directive('sales', function(){
        return {
            retrict: 'E',
            templateUrl: '/content/sales.html'
        }
    });
    
    app.directive('contactus', function(){
        return {
            scope: {},
            bindToController: {
                data: '@'
            },
            retrict: 'E',
            templateUrl: '/content/contactus.html',
            controller: function($scope){
                $scope.formDataDefault = {
                    machineType: 'Any',
                    transmissionType: 'Any',
                    capacity: 'Any',
                    custEmail: ''
                };
                $scope.data = angular.copy($scope.formDataDefault);
                
                $scope.reset = function(){
                    $scope.contactUsForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                };
                
            },
            controllerAs: 'contactUs'
        }
    });
    
    app.directive('repair', function(){
        return {
            scope: {},
            bindToController: {
                data: '@'
            },
            retrict: 'E',
            templateUrl: '/content/repair.html',
            controller: function($scope){
                $scope.formDataDefault = {
                    custEmail: ''
                };
                $scope.data = angular.copy($scope.formDataDefault);
                
                $scope.reset = function(){
                    $scope.repairForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                };
                  
            },
            controllerAs: 'repair' 
        }
    });
})();