$(document).ready( function (){
    console.log('Loaded main.js!');

    var key = 'api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c';
    var baseUrl = "https://na.api.pvp.net/api/lol/";
    var region = "na";
    var teamA, teamB = [];

    function get(url) {
        var response;
        $.ajax({
            url: baseUrl + url + key,
            success: function(data) {
                console.log('GET Request Status: ' + status);
            console.log(data);
            response = data;
            },
            async: false,
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
            }
        });
        return response;
    }

    // Uses a summoner name to fetch summoner object and get summoner ID
    function getSummonerID(summonerName) {
        console.log("Getting summonerid...");
        var response = get(region + '/v1.4/summoner/by-name/' + summonerName + '?');
        summonerName = (summonerName.toLowerCase()).split(' ').join('');
        var id = response[summonerName].id;
        console.log(id);
        return id;
    }

    // Get's ranked stats by summoner id
    function getRankedStats(summonerID) {
        console.log("Getting ranked stats...");
        var response = get(region + '/v1.3/stats/by-summoner/' + summonerID + '/summary?season=SEASON2016&');
        var allStats = response.playerStatSummaries;
        var rankedStats;
        for(var type in allStats) {
            if(allStats[type].playerStatSummaryType === 'RankedSolo5x5'){
                rankedStats = allStats[type];
            }
        }
        return rankedStats;
        // function calls to calculate win rate and other stuff
    }

    // function that fetches all the users in the player's current game
    function getCurrentGame(summonerID) {
        console.log("Getting current game...");
        var response = get('/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/' + summonerID + '?');

        // get summonerNames of all people in game
        var players = response.participants;
        console.log(players);
        return response;
    }

    // returns a person's ranked win rate as a decimal value
    function getWinRate(rankedData) {

    }

    $('.search').click(function () {
        console.log($('#searchBar').val());
        var id = getSummonerID($('#searchBar').val());
        getRankedStats(id);
        getCurrentGame(id);
    });
});


/*
    Control Flow
    1. Get summoner name from search bar
    2. Turn summoner name into ID (getSummonerID)
    3. Get player's current game (getCurrentGame)
    4. Get all player object's into an array and process their stats (all other functions)
*/
