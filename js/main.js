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
                $scope.submitInProgress = false;
                $scope.showMsgSuccess = false;
                $scope.showMsgFail = false;
                
                $scope.setShowMsgSuccess = function(isShow) {
                    $scope.showMsgSuccess = isShow;
                }
                
                $scope.isShowMsgSuccess = function() {
                    return $scope.showMsgSuccess;
                }
                
                $scope.setShowMsgFail = function(isShow) {
                    $scope.showMsgFail = isShow;
                }
                
                $scope.isShowMsgFail = function() {
                    return $scope.showMsgFail;
                }
                
                $scope.setSubmitInProgress = function(isInProgress) {
                    $scope.submitInProgress = isInProgress;
                };
                
                $scope.isSubmitInProgress = function() {
                    return $scope.submitInProgress;
                };
                
                $scope.formDataDefault = {
                    machine_type: 'Any',
                    transmission_type: 'Any',
                    capacity: 'Any'
                };
                $scope.data = angular.copy($scope.formDataDefault);

                $scope.reset = function() {
                    $scope.contactUsForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                    $scope.setSubmitInProgress(false);
                    $scope.resetState();
                };
                
                $scope.resetState = function() {
                    $scope.setShowMsgSuccess(false);
                    $scope.setShowMsgFail(false);
                }

                $scope.submit = function() {
                    $scope.setSubmitInProgress(true);
                    $scope.resetState();
                    
                    var req = {
                        method: 'POST',
                        url: 'http://localhost:8080/mail/send',
                        headers: {
                            'Content-Type': 'application/json',
                            'Application': 'application/json'
                        },
                        data: {
                            app_id: 'twsforklift',
                            purpose: 'enquiry contact',
                            data: $scope.data
                        }
                    }
                    //
                    // send host
                    $http(req).then(function successCallback(response) {
                        $scope.setSubmitInProgress(false);
                        //
                        // Check response satatus
                        if ("200" == response.status) {
                            $scope.setShowMsgSuccess(true);
                        } else {
                            $scope.setShowMsgFail(true);
                        }
                    }, function errorCallback(response) {
                        $scope.setSubmitInProgress(false);
                        $scope.setShowMsgFail(true);
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
           controller: function ($scope, $http) {
                $scope.submitInProgress = false;
                $scope.showMsgSuccess = false;
                $scope.showMsgFail = false;
                
                $scope.setShowMsgSuccess = function(isShow) {
                    $scope.showMsgSuccess = isShow;
                }
                
                $scope.isShowMsgSuccess = function() {
                    return $scope.showMsgSuccess;
                }
                
                $scope.setShowMsgFail = function(isShow) {
                    $scope.showMsgFail = isShow;
                }
                
                $scope.isShowMsgFail = function() {
                    return $scope.showMsgFail;
                }
                
                $scope.setSubmitInProgress = function(isInProgress) {
                    $scope.submitInProgress = isInProgress;
                };
                
                $scope.isSubmitInProgress = function() {
                    return $scope.submitInProgress;
                };
                
                $scope.formDataDefault = {};
                $scope.data = angular.copy($scope.formDataDefault);

                $scope.reset = function() {
                    $scope.repairForm.$setPristine();
                    $scope.data = angular.copy($scope.formDataDefault);
                    $scope.setSubmitInProgress(false);
                    $scope.resetState();
                };
                
                $scope.resetState = function() {
                    $scope.setShowMsgSuccess(false);
                    $scope.setShowMsgFail(false);
                }

                $scope.submit = function() {
                    $scope.setSubmitInProgress(true);
                    $scope.resetState();
                    
                    var req = {
                        method: 'POST',
                        url: 'http://localhost:8080/mail/send',
                        headers: {
                            'Content-Type': 'application/json',
                            'Application': 'application/json'
                        },
                        data: {
                            app_id: 'twsforklift',
                            purpose: 'repair service enquiry',
                            data: $scope.data
                        }
                    }
                    //
                    // send host
                    $http(req).then(function successCallback(response) {
                        $scope.setSubmitInProgress(false);
                        //
                        // Check response satatus
                        if ("200" == response.status) {
                            $scope.setShowMsgSuccess(true);
                        } else {
                            $scope.setShowMsgFail(true);
                        }
                    }, function errorCallback(response) {
                        $scope.setSubmitInProgress(false);
                        $scope.setShowMsgFail(true);
                    });
                };

            },
            controllerAs: 'repair'
        }
    });
})();