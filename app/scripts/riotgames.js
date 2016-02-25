// Uses a summoner name to fetch summoner object and get summoner ID
    function getSummonerID(summonerName) {
        var response = get(region + '/v1.4/summoner/by-name/' + summonerName + '?');
        summonerName = (summonerName.toLowerCase()).split(' ').join('');
        var id = response[summonerName].id;
        console.log(id);
        return id;
    }

    // Get's ranked stats by summoner id
    function getRankedStats(summonerID) {
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
    function getCurrentGame(summonerName) {
        var response = get('/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/' + summonerName + '?');

        // get summonerNames of all people in game
        var players = response.participants;
        console.log(players);
        return response;
    }

    // returns a person's ranked win rate as a decimal value
    function getWinRate(rankedData) {

    }
