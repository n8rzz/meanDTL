define(function(require, module, exports) {
    'use strict';

    var ng = require('angular');
    var project = require('./module');
    var $ = require('jquery');

    project.controller('ProjectController', [
        '$rootScope',
        '$scope',
        'Projects',
        function(
            $rootScope,
            $scope,
            Projects
        ) {

            var baseProject = {
                name: ''
            };

            /**
             * Sends POST request to create a new project
             *
             * @method createProject
             */
            $scope.createProject = function() {
                if (this.project.name != null && this.project._id === null || 'undefined') {

                    Projects.create($scope.project)
                        .then($scope.handleSaveSuccess, $scope.handleSaveError);
                }
            };


            /**
             * Sends PUT request to update an existing project
             *
             * @method
             */
            $scope.editProject = function() {
                if (this.project._id != null && this.project.name != null) {

                    Projects.update($scope.project)
                        .then($scope.handleSaveSuccess, $scope.handleSaveError)
                        .then($scope.refresh);
                }
            }

        }
    ]);
});
