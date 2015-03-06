define([
    'require',
    'angular',
    'app',
    'config'
], function (
    require,
    ng
    ) {
    'use strict';

    require([
        'domReady!'
        ], function (
            document
            ) {
        ng.bootstrap(document, ['dtl']);

    });
});