$(document).ready( function (){
	console.log("Loaded main.js!");
});

var key = "api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c";
var baseUrl = "https://na.api.pvp.net/api/lol/";

function get(url){
	var xmr = new XMLHttpRequest();
	xmr.open("GET", url, false);
	xmr.send(null);
	console.log("GOT: " + xmr.response);
	return JSON.parse(xmr.response);
};

// Uses a summoner name to fetch summoner object and get summoner ID
function getSummonerID(summonerName, region){
	var response = get(baseUrl + region + "/v1.4/summoner/by-name/" + summonerName + "?" + key);
	var summonerName = (summonerName.toLowerCase()).split(' ').join('');
	var id = response[summonerName].id; 
	return id;
};


function getRankedStats(summonerID, region){
	var response = get(baseUrl + region + "/v1.3/stats/by-summoner/" + summonerID + "/summary?season=SEASON2016&" + key);
	var allStats = response['playerStatSummaries'];
	var rankedStats;
	for(var type in allStats){
		if(allStats[type].playerStatSummaryType === 'RankedSolo5x5'){
			rankedStats = allStats[type];
		}
	}
	return rankedStats;
};


$('.search').click(function () {
	console.log($('#searchBar').val());
	getRankedStats(getSummonerID($('#searchBar').val(), "na"), "na");
});

