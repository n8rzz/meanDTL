define(function(require, module, exports) {
    'use strict';

    var projectStatus = require('./module');

    projectStatus.factory('ProjectStatus', [
        '$http',
        '$resource',
        '$q',
        function(
            $http,
            $resource,
            $q
        ) {

            var ProjectStatusService = function() {
               this.resource = $resource('/projectStatus');
            };


            ProjectStatusService.prototype.list = function() {
                console.log('ProjectStatusService.list');

                return $http.get('/projectStatus');
            };

            return new ProjectStatusService();
        }
    ]);
});
