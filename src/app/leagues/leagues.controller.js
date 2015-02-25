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

        vm.addItem = addItem;
        vm.cancelEdit = cancelEdit;
        vm.currentEdit = {};
        vm.deleteItem = deleteItem;
        vm.editItem = editItem;
        vm.hideAlert = hideAlert;
        vm.itemToEdit = {};
        vm.saveItem = saveItem;
        vm.showHelpAlert = true;

        /*
        var leagueData =
            [
                {
                    "id": "038dfd06-0971-467d-80cb-2000cf3cf989",
                    "name": "Cager Classic",
                    "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                    "rulesScreen": ""
                },
                {
                    "id": "614b9998-e039-42da-8354-626b7b10a1cf",
                    "name": "Holiday Hoops Challenge",
                    "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                    "rulesScreen": ""
                },
                {
                    "id": "cabe8500-730c-4f99-b509-62c7a0401049",
                    "name": "Thanksgiving Tip Off",
                    "homeScreen": "**Welcome coaches, players, and parents!** \n\nThis site contains full schedule information for the tournament.",
                    "rulesScreen": ""
                }
            ];

        vm.leagues = leagueData;
*/
        activate();

        ////////////////

        function activate() {
        }

        function addItem(){
            var newLeague = {
                name: vm.newLeagueName
            };

            eliteApi.addLeague(newLeague).then(function(data){
                vm.newLeagueName = '';
                vm.leagues.push(data);
            });
        }

        function cancelEdit(id){
            vm.currentEdit[id] = false;
        }

        function deleteItem(id){
            dialogs.confirm('Are you sure you want to Delete this item?', 'Delete?', ['OK', 'Cancel'])
                .then(function(){
                    eliteApi.deleteLeague(id).then(function(data){
                        _.remove(vm.leagues, { 'id': id });
                    });
                });
        }

        function editItem(item){
            vm.currentEdit[item.id] = true;
            vm.itemToEdit = angular.copy(item);
        }

        function hideAlert(){
            vm.showHelpAlert = false;
        }

        function saveItem(item){
            eliteApi.saveLeague(vm.itemToEdit).then(function(data){
                vm.currentEdit[item.id] = false;
                item.name = vm.itemToEdit.name;
            });
        }


    }
})();