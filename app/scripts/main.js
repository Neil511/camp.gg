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
	var id = response[summonerName.toLowerCase()].id; 
	console.log(id);
	return id;
};


function getRankedStats(summonerID, region){
	var response = get(baseUrl + region + "/v1.3/stats/by-summoner/" + summonerID + "/summary?season=SEASON2016&" + key);
	var allStats = response['playerStatSummaries'];
	console.log(allStats);
	var i = 0;
	for(var x = 0; x < 10; x++){
		i++;
		console.log(i);
		if(allStats[x].playerStatSummaryType === 'RankedSolo5x5'){
			console.log("Found it!");
		}
	}
}


$('.search').click(function () {
	console.log($('#searchBar').val());
	getRankedStats(getSummonerID($('#searchBar').val(), "na"), "na");
});

