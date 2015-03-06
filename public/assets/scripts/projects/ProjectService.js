define(function(require, module, exports) {
    'use strict';

    var projects = require('./module');

    projects.factory('Projects', [
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
            var ProjectService = function() {
                this.resource = $resource('/projects');
            };

            /**
             * Returns list of projects
             *
             * @method list
             * @returns {HttpPromise}
             */
            ProjectService.prototype.list = function() {
                return $http.get('/projects');
            };

            /**
             * Creates new project
             *
             * @method create
             * @returns {HttpPromise}
             */
            ProjectService.prototype.create = function(project) {
                return $http.post('/projects', project);
            };

            /**
             * Updates and existing project
             *
             * @method update
             * @returns {HttpPromise}
             */
            ProjectService.prototype.update = function(project) {
                return $http.put('/projects/' + project.id, project);
            };

            /**
             * Deletes an existing project
             *
             * @method
             * @returns {HttpPromise}
             */
            ProjectService.prototype.delete = function(project) {
                return $http.delete('/projects/' + project._id, project);
            };

            return new ProjectService();
        }
    ]);
});