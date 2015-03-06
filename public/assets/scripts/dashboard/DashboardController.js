define(function(require, module, exports) {
    'use strict';

    var ng = require('angular');
    var dashboard = require('./module');
    var $ = require('jquery');

    dashboard.controller('DashboardController', [
        '$rootScope',
        '$scope',
        '$state',
        'ngDialog',
        'Projects',
        'TeamMembers',
        'ProjectStatus',
        '$q',
        function(
            $rootScope,
            $scope,
            $state,
            ngDialog,
            Projects,
            TeamMembers,
            ProjectStatus,
            $q
        ) {

            /**
             * Opens dialog with form to create new project
             *
             * @method newProject
             */
            $scope.newProject = function() {
                console.log('ProjectController.newProject');
                $scope.project = null;
                var dialog = ngDialog.open({
                    template: 'assets/scripts/projects/forms/add-edit-project.html',
                    controller: 'ProjectController',
                    data: {name: null},
                    overlay: false,
                    scope: $scope,
                    preCloseCallback: $scope.confirmCancel
                });
                dialog.closePromise.then($scope.refresh);
            };

            /**
             * Initiates delete request for existing project
             *
             * @method deleteProject
             * @param {Object} project  project data
             */
            $scope.deleteProject = function(project) {
                console.log('ProjectDirective.deleteProject', project);
                var response = confirm('Are you sure you want to delete this project?');

                if (response) {
                    _processProjectDeletion(project);
                }

            };

            /**
             * Opens dialog with existing project data for user to update record
             *
             * @method editProject
             * @param {Object} project project data
             */
            $scope.editProject = function(project) {
                console.log('ProjectController.editProject', project);

                $scope.project = project;

                var dialog = ngDialog.open({
                    template: 'assets/scripts/projects/forms/add-edit-project.html',
                    controller: 'ProjectController',
                    data: $scope.project,
                    overlay: false,
                    scope: $scope,
                    preCloseCallback: $scope.confirmCancel
                });
                dialog.closePromise.then($scope.refresh);
            };

            /**
             * Forces the user to confirm they would like
             * to cancel their changes
             *
             * @returns {boolean}
             */
            $scope.confirmCancel = function(value) {
                if (value === 'success') {
                    return true;
                }
                return confirm('Are you sure you wish to cancel? All changes will be lost');
            };


            /**
             * Handles actual delete request
             *
             * @function _processProjectDeletion
             * @param {Object} project  project data
             * @private
             */
            function _processProjectDeletion(project) {
                console.log('_processDelete', project);
                Projects.delete(project)
                    .then($scope.handleSaveSuccess, $scope.handleSaveError)
                    .then($scope.refresh);
            }






            /**
             *
             */
            var getProjects = function() {
                Projects.list()
                    .then(mapProjectsToScope);
            };

            /**
             *
             */
            var getTeamMembers = function() {
               TeamMembers.list()
                   .then(mapTeamMembersToScope);
            };

            /**
             *
             */
            var getProjectStatuses = function() {
                ProjectStatus.list()
                    .then(mapProjectStatusesToScope);
            };


            /**
             *
             * @param response
             */
            var mapProjectsToScope = function(response) {
                $scope.projects = response.data;
            };

            /**
             *
             */
            var mapTeamMembersToScope = function(response) {
                $scope.teamMembers = response.data;
            };

            /**
             *
             */
            var mapProjectStatusesToScope = function(response) {
                $scope.projectStatus = response.data;
            };

            /**
             *
             */
            $scope.init = function() {
                getProjects();
                getTeamMembers();
                getProjectStatuses();
            };


            /**
             *
             * @param success
             * @private
             */
            function _handleSaveSuccess(success) {
                console.log('DashboardController._handleSaveSuccess', success);

                alert('Your changes have been saved');
                ngDialog.closeAll('success');
            }

            /**
             * @response
             * @private
             */
            function _handleSaveError(response) {
                console.log('DashboardController._handleSaveError', response);
                alert('Whoops, something went wrong and there was an error.  Please try again.');
            }


            $scope.handleSaveSuccess = _handleSaveSuccess;
            $scope.handleSaveError = _handleSaveError;


            $scope.refresh = $scope.init.bind($scope);

            $scope.init();
        }
    ]);
});