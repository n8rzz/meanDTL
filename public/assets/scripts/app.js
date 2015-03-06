'use strict';

define([
    'angular',
    'uiRouter',
    'ngDialog',
    'ngResource',
    './dashboard/index',
    './projects/index',
    './projectStatus/index',
    './teamMembers/index'
], function app(
    ng
    ) {
    return ng.module('dtl', [
        'ui.router',
        'ngDialog',
        'ngResource',
        'dtl.dashboard',
        'dtl.projects',
        'dtl.projectStatus',
        'dtl.teamMembers'
    ]);
});