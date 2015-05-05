'use strict';

var hollyControllers = angular.module('hollyControllers', []);

hollyControllers.controller('HollyController', ['$scope', '$timeout',
    function($scope, $timeout) {
        $scope.clock = {}
        var updateClock = function () {
            $scope.clock.now = new Date();
            $timeout(function() {
                updateClock();
            }, 1000);
        };
        updateClock();
    }
]);
