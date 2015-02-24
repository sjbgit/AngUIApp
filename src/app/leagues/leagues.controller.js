/**
 * Created by sbunke on 2/23/2015.
 */
(function () {
    'use strict';

    angular.module('eliteAdmin').controller('LeaguesCtrl', LeaguesCtrl);

    LeaguesCtrl.$inject = ['initialData'];

    /* @ngInject */
    function LeaguesCtrl(initialData) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        vm.leagues = initialData;

        activate();

        ////////////////

        function activate() {
        }


    }
})();