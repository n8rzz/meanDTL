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
             * Determines if a record is new or existing
             * routes request accordingly; creates a new record
             * or sends an update if the record already exists
             *
             * @method processProject
             */
            $scope.processProject = function () {
                this.project = $.extend(baseProject, this.project);
                if (this.project.name != null && this.project._id === null || 'undefined') {

                    Projects.create($scope.project)
                        .then($scope.handleSaveSuccess, $scope.handleSaveError);

                } else if (this.project._id != null && this.project.name != null) {

                    Projects.update($scope.project)
                        .then($scope.handleSaveSuccess, $scope.handleSaveError)
                        .then($scope.refresh);
                }
            };

        }
    ]);
});
