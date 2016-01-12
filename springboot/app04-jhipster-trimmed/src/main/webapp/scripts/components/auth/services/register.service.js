'use strict';

angular.module('yo2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


