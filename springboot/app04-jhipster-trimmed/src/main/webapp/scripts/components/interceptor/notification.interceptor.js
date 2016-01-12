 'use strict';

angular.module('yo2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-yo2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-yo2App-params')});
                }
                return response;
            }
        };
    });
