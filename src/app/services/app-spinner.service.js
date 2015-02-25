/**
 * Created by sbunke on 2/6/2015.
 */
(function () {
    'use strict';

    angular.module('eliteAdmin').factory('appSpinner', appSpinner);

    appSpinner.$inject = ['$rootScope'];

    function appSpinner($rootScope) {
        var service = {
            hideSpinner: hideSpinner,
            showSpinner: showSpinner
        };

        return service;


        function hideSpinner() {
            toggleSpinner(false);
        }

        function showSpinner(message) {
            toggleSpinner(true, message);
        }

        function toggleSpinner(show, message) {
            $rootScope.$broadcast('spinner.toggle', { show: show, message: message });
        }
    }
})();