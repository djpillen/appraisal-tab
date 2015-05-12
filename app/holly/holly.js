'use strict';

var hollyControllers = angular.module('hollyControllers', []);

hollyControllers.controller('HollyController', ['$scope', '$timeout', 'EmailParser',
    function($scope, $timeout, EmailParser) {
        $scope.clock = {};
        var updateClock = function () {
            $scope.clock.now = new Date();
            $timeout(function() {
                updateClock();
            }, 1000);
        };
        updateClock();

        $scope.counter = 0;
        $scope.add = function(n) { $scope.counter += n; };
        $scope.subtract = function(n) { $scope.counter -= n; };

        $scope.person = {
            name: 'Holly B',
        };

        $scope.$watch('emailBody', function(body) {
            if (body) {
                $scope.previewText = EmailParser.parse(body, { to: $scope.to });
            }
        });
    }
]);

hollyControllers.controller('ParentController', ['$scope',
    function($scope) {
        $scope.person = {greeted: true};
    }
]);

hollyControllers.controller('ChildController', ['$scope',
    function($scope) {
        $scope.sayHello = function() {
            $scope.person.name = "Holly B";
        };
    }
]);
