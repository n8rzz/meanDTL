define(function(require) {
    'use strict';

    var projects = require('./module');

    var controller = function(
        $scope,
        Projects,
        $attr
    ) {




    };

    controller.$inject = [
        '$scope',
        'Projects',
        '$attrs'
    ];

    var directive = function() {
        return {
            restrictions: 'E',
            scope: true,
            replace: true,
            transclude: true,
            controller: controller
        };
    };

    projects.directive('dtlProjects', directive);

});