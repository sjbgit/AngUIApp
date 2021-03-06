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

        var teamData =
            [
                {
                    "id": "bbc1c31a-b1d3-407b-9aac-d9588956bf86",
                    "name": "Baltimore Stars",
                    "coach": "James",
                    "divisionName": "6th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "48ae65b2-54da-42f4-a769-2e459a3df746",
                    "name": "DC Assault",
                    "coach": "Bartlett",
                    "divisionName": "6th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "4be3dbd6-97a7-409b-871d-2553927a3971",
                    "name": "Reisterstown Wolfpack",
                    "coach": "Hightower",
                    "divisionName": "6th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "96b1d770-c114-4306-a0da-4325a5f2ddb3",
                    "name": "MADE Elite",
                    "coach": "Johnson",
                    "divisionName": "6th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "adfe9d53-0920-49c8-9df4-158c938a75a4",
                    "name": "Sharks",
                    "coach": "Smith",
                    "divisionName": "6th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "38ba0c9f-8f30-42b0-af60-4658d3ab8aa7",
                    "name": "Maryland 3D",
                    "coach": "Brown",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "46545545-8fd1-4d5d-93e0-281f6dc9f5ec",
                    "name": "DC Premier",
                    "coach": "Davis",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "dea95b06-997e-4116-a243-3f94a0fec0c5",
                    "name": "Baltimore Supreme",
                    "coach": "Miller",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "dbfd5e89-a9ca-4502-9d61-381e378951d4",
                    "name": "HC Elite",
                    "coach": "Michelotti",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "25bca3cb-dce6-474e-a5f4-55002370d7ee",
                    "name": "Severn Elite",
                    "coach": "Wilson",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "e8fcefde-52e5-4595-8349-ceefb28a14b1",
                    "name": "Team Takeover",
                    "coach": "Williams",
                    "divisionName": "7th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "90e7271b-1e59-43cc-939b-ba553c39f034",
                    "name": "6th Man Warriors",
                    "coach": "White",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "520ab250-e831-4f79-b99d-0a21a01e2de8",
                    "name": "E-City Ballers",
                    "coach": "Moore",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "d37ddc16-dd0f-4b59-8e8b-1af87ebefad7",
                    "name": "Force Attack",
                    "coach": "Taylor",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "9aca230f-166e-495f-8b21-742f5a05e17d",
                    "name": "Savage Eagles",
                    "coach": "Anderson",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "162c1cb3-c5f3-4860-a7b1-22baceb04198",
                    "name": "Team Glory",
                    "coach": "Thomas",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "a16423ae-2ccf-4601-b984-053065257b97",
                    "name": "Maryland Playmakers",
                    "coach": "Jackson",
                    "divisionName": "8th grade",
                    "leagueId": "038dfd06-0971-467d-80cb-2000cf3cf989"
                },
                {
                    "id": "9f4a60ec-bca1-4e2b-ab31-bf71124be656",
                    "name": "Columbia Raven",
                    "coach": "Jones",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "bc9b3285-37ee-4b08-b5d7-0e1ab41aaf60",
                    "name": "DC Assault",
                    "coach": "Bartlett",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "c8b3822e-874d-4452-8b9c-38a398198d41",
                    "name": "Reisterstown Wolfpack",
                    "coach": "Hightower",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "199f5c3e-6c44-48be-b9d4-f4c0c3c7cebd",
                    "name": "MADE Elite",
                    "coach": "Johnson",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "874e91ed-ca27-48f8-8a45-4c75bf274f5a",
                    "name": "Baltimore Stars",
                    "coach": "James",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "542274e5-e36c-42de-9a62-5dc3103d7a87",
                    "name": "Baltimore Supreme",
                    "coach": "Miller",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "463e1f4e-db32-4bfd-8175-b209c624bdae",
                    "name": "DC Premier",
                    "coach": "Davis",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "e43c931d-e5ae-4e3f-9d1a-67a0b18bf580",
                    "name": "HC Elite",
                    "coach": "Michelotti",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "9ee1dacf-5483-4faf-8bbd-5e1d87a1c2ae",
                    "name": "Maryland 3D",
                    "coach": "Brown",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "5c453b2d-daa3-49b8-9621-798f8d3d65e7",
                    "name": "Sharks",
                    "coach": "Smith",
                    "divisionName": "6th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "00e8d899-8f2c-45de-94ac-7b8895f1e3ad",
                    "name": "Severn Elite",
                    "coach": "Wilson",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "334fa562-88c8-4061-a226-78ba5b4414c5",
                    "name": "Team Takeover",
                    "coach": "Williams",
                    "divisionName": "7th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "6f6dfe98-3638-48f2-8470-88d4a3fbc5cb",
                    "name": "6th Man Warriors",
                    "coach": "White",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "aa12b8b3-ee72-4774-8d91-063757e24c5c",
                    "name": "E-City Ballers",
                    "coach": "Moore",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "d90b5e53-6e84-48c2-a5bb-f04909ba876c",
                    "name": "Force Attack",
                    "coach": "Taylor",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "e60b3578-9b8f-43ad-b482-08d53945f4e7",
                    "name": "Maryland Playmakers",
                    "coach": "Jackson",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "c834b4fc-3ba4-459c-bf81-ce75f3939f77",
                    "name": "Savage Eagles",
                    "coach": "Anderson",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "fa0d885b-dd92-4b12-9c5c-937f1ccfd128",
                    "name": "Team Glory",
                    "coach": "Thomas",
                    "divisionName": "8th grade",
                    "leagueId": "614b9998-e039-42da-8354-626b7b10a1cf"
                },
                {
                    "id": "ca6cbb6d-4eda-409b-a6a6-fefc18e9ab65",
                    "name": "MADE Elite",
                    "coach": "Johnson",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "d6bb55d2-ec9a-4f4b-8c47-05a43e223471",
                    "name": "Reisterstown Wolfpack",
                    "coach": "Hightower",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "d0bf344d-6981-447f-abe2-bad1af95a76d",
                    "name": "DC Assault",
                    "coach": "Bartlett",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "9221d6d8-c73e-4228-b8cc-77bd27c2da41",
                    "name": "Baltimore Stars",
                    "coach": "James",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "5289ddd3-3ab2-407c-868d-2c864abccc9c",
                    "name": "Columbia Raven",
                    "coach": "Jones",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "0fdad598-871d-47cd-bc5c-7d84b2877074",
                    "name": "Sharks",
                    "coach": "Smith",
                    "divisionName": "6th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "a8a2f27b-5738-4d2c-93cb-43fb494dc33e",
                    "name": "Baltimore Supreme",
                    "coach": "Miller",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "c3df847e-38e1-432e-a69f-bedeead9adaf",
                    "name": "DC Premier",
                    "coach": "Davis",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "a7faa14a-4b1c-48a6-8ba7-bf8dc03d7994",
                    "name": "HC Elite",
                    "coach": "Michelotti",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "dcb48489-c8b4-48cc-a2d4-e2c58fe943c7",
                    "name": "Maryland 3D",
                    "coach": "Brown",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "863b8582-b08f-4682-b44d-425672017b7a",
                    "name": "Severn Elite",
                    "coach": "Wilson",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "20fa3c08-3b8a-420c-8952-ecf02fefca3b",
                    "name": "6th Man Warriors",
                    "coach": "White",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "e51ef5f0-0a00-41f3-ba67-d4ef6afc8b3d",
                    "name": "E-City Ballers",
                    "coach": "Moore",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "6b8d945f-af28-45fe-bb7c-ed0fd7f0afc5",
                    "name": "Force Attack",
                    "coach": "Taylor",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "286d54fd-1a25-4b81-8672-851b15032144",
                    "name": "Maryland Playmakers",
                    "coach": "Jackson",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "a6673230-4207-41ec-b6d1-5cebfe90d00c",
                    "name": "Savage Eagles",
                    "coach": "Anderson",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "9082b65a-f152-42f3-97e3-1af9b811cf59",
                    "name": "Team Glory",
                    "coach": "Thomas",
                    "divisionName": "8th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
                },
                {
                    "id": "9411c57c-1fc7-415a-a281-ec8b79a5724c",
                    "name": "Team Takeover",
                    "coach": "Williams",
                    "divisionName": "7th grade",
                    "leagueId": "cabe8500-730c-4f99-b509-62c7a0401049"
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
            //var url = getUrlByLeagueId('/teams', leagueId);
            //return httpGet(url);
            return teamData;
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
