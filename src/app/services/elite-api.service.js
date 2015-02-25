/**
 * Created by sbunke on 2/6/2015.
 */
(function () {
    'use strict';

    angular.module('eliteAdmin').factory('eliteApi', eliteApi);

    eliteApi.$inject = ['$http', 'appSpinner'];

    function eliteApi($http, appSpinner) {

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

        var service = {
            addLeague: addLeague,
            deleteGame: deleteGame,
            deleteLeague: deleteLeague,
            deleteLocation: deleteLocation,
            deleteTeam: deleteTeam,
            getGames: getGames,
            getLeague: getLeague,
            getLeagues: getLeagues,
            getLocation: getLocation,
            getLocations: getLocations,
            getTeams: getTeams,
            saveGame: saveGame,
            saveLeague: saveLeague,
            saveLocation: saveLocation,
            saveTeam: saveTeam
        };

        var baseUrl = 'https://elite-schedule-demo.azure-mobile.net/tables';
        var requestConfig = {
            headers: {
                'X-ZUMO-APPLICATION': 'GSECUHNQOOrCwgRHFFYLXWiViGnXNV88'
            }
        };

        return service;


        function addLeague(league){
            return httpPost('/leagues', league);
        }

        function deleteGame(id){
            return httpDelete('/games/' + id);
        }

        function deleteLeague(id){
            return httpDelete('/leagues/' + id);
        }

        function deleteLocation(id){
            return httpDelete('/locations/' + id);
        }

        function deleteTeam(id){
            return httpDelete('/teams/' + id);
        }

        function getGames(leagueId){
            var url = getUrlByLeagueId('/games', leagueId);
            return httpGet(url);
        }

        function getLeague(leagueId){
            return httpGet('/leagues/' + leagueId);
        }

        function getLeagues() {

            return leagueData;
            //return httpGet('/leagues');
        }

        function getLocation(locationId) {
            return httpGet('/locations/' + locationId);
        }

        function getLocations() {
            return httpGet('/locations');
        }

        function getTeams(leagueId) {
            var url = getUrlByLeagueId('/teams', leagueId);
            return httpGet(url);
        }

        function saveLeague(league){
            return httpPatch('/leagues/' + league.id, league);
        }

        function saveLocation(location){
            return saveItem('/locations', location);
        }

        function saveGame(game){
            return saveItem('/games', game);
        }

        function saveTeam(team){
            return saveItem('/teams', team);
        }

        /** Private Methods **/

        function getUrlByLeagueId(url, leagueId){
            return url + '?$top=100&$filter=' + encodeURIComponent('leagueId eq \'' + leagueId + '\'');
        }

        function httpDelete(url){
            return httpExecute(url, 'DELETE');
        }

        function httpExecute(requestUrl, method, data){
            appSpinner.showSpinner();
            return $http({
                url: baseUrl + requestUrl,
                method: method,
                data: data,
                headers: requestConfig.headers })

                .success(function(response){
                    appSpinner.hideSpinner();
                    console.log('**response from EXECUTE', response);
                    return response.data;
                })
                .error(function(response){
                    appSpinner.hideSpinner();
                    console.log('**response from EXECUTE', response);
                    return leagueData; //response.data;
                });


                /*
                .then(function(response){

                appSpinner.hideSpinner();
                console.log('**response from EXECUTE', response);
                return response.data;
                */
            //});
        }

        function httpGet(url){
            return httpExecute(url, 'GET');
        }

        function httpPatch(url, data){
            return httpExecute(url, 'PATCH', data);
        }

        function httpPost(url, data){
            return httpExecute(url, 'POST', data);
        }

        function saveItem(url, item){
            if (item.id) {
                return httpPatch(url + '/' + item.id, item);
            } else {
                return httpPost(url, item);
            }
        }
    }
})();
