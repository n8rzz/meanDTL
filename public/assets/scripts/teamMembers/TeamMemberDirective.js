define(function(require) {
    'use strict';

    var teamMembers = require('./module');

    var controller = function(
        $scope,
        TeamMemberService,
        $attr
    ) {


    };

    var directive = function() {
        return {
            restrictions: 'E',
            scope: true,
            replace: true,
            transclude: true,
            controller: controller
        };
    };


    teamMembers.directive('dtlTeamMembers', directive);
});