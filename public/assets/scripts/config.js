define(['./app'], function(app) {
    'use strict';

    var $ = require('jquery');

    return app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        'ngDialogProvider',
        function(
            $stateProvider,
            $urlRouterProvider,
            $locationProvider,
            ngDialogProvider
        ) {

            $locationProvider.html5Mode(false).hashPrefix('!');


            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-dtl',
                showClose: true,
                closeByDocument: true,
                closeByEscape: true
            });

    }])
    .run([
        '$state',
        '$rootScope',
        '$window',
        '$location',
        'ngDialog',
        function (
            $state,
            $rootScope,
            $window,
            $location,
            ngDialog
        ) {
            $rootScope.$state = $state;
        }
    ]);
});