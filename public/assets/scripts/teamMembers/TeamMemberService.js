define(function(require, module, exports) {
    'use strict';

   var teamMembers = require('./module');

    teamMembers.factory('TeamMembers', [
        '$http',
        '$resource',
        '$q',
        function(
            $http,
            $resource,
            $q
        ) {

            /**
             * @class
             * @constructor
             */
            var TeamMemberService = function() {
                this.resource = $resource('/team-members');
            };

            /**
             *
             * @returns {HttpPromise}
             */
            TeamMemberService.prototype.list = function() {
                return $http.get('/team-members');
            };

            return new TeamMemberService();
        }
    ]);
});