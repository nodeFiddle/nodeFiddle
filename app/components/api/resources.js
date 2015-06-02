'use strict';

angular.module('nodeFiddle.services')

    .factory('myAPI', function ($resource) {
        return $resource('myAPIUrl');
    });
