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

    app.directive('home', function () {
        return {
            restrict: 'E',
            templateUrl: '/content/home.html'
        };
    });

    app.directive('aboutUs', function () {
        return {
            restrict: 'E',
            templateUrl: '/content/about-us.html'
        };
    });

    app.directive('service', function () {
        return {
            retrict: 'E',
            templateUrl: '/content/service.html'
        }
    });

    app.directive('sales', function () {
        return {
            retrict: 'E',
            templateUrl: '/content/sales.html'
        }
    });

    app.directive('contactus', function () {
        return {
            scope: {},
            bindToController: {
                data: '@'
            },
            retrict: 'E',
            templateUrl: '/content/contactus.html',
            controller: function ($scope, $http) {
                this.submitProceeding = false;
                
                this.isFormProceeding = function () {
                    return submitProceeeding;
                }
                
                $scope.formDataDefault = {
                    machineType: 'Any',
                    transmissionType: 'Any',
                    capacity: 'Any',
                    custEmail: ''
                };
                $scope.data = angular.copy($scope.formDataDefault);

                $scope.reset = function () {
                    $scope.contactUsForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                };

                $scope.submit = function () {
                    alert("submitting....");
                    $scope.submitProceeding = true;
                    var req = {
                        method: 'POST',
                        url: 'http://localhost:8080/mail/send',
                        headers: {
                            'Content-Type': 'application/json',
                            'Application': 'application/json'
                        },
                        data: {
                            app_id: 'twsforklift',
                            data: $scope.data
                        }
                    }
                
                    $http(req).then(function successCallback(response) {
                        
                        
                    }, function errorCallback(response) {
                        
                    });
                };

            },
            controllerAs: 'contactUs'
        }
    });

    app.directive('repair', function () {
        return {
            scope: {},
            bindToController: {
                data: '@'
            },
            retrict: 'E',
            templateUrl: '/content/repair.html',
            controller: function ($scope) {
                $scope.formDataDefault = {
                    custEmail: ''
                };
                $scope.data = angular.copy($scope.formDataDefault);

                $scope.reset = function () {
                    $scope.repairForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                };

            },
            controllerAs: 'repair'
        }
    });
})();