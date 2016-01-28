$(document).ready( function (){
	console.log("Loaded main.js!");
});

var key = "api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c";
var url = "";

function get(url){
	var xmr = new XMLHttpRequest();
	xmr.open("GET", url, false);
	xmr.send(null);
	return xmr.response;
};

function getSummonerByName(summonerName, region){
	return get("https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + key);
};

$('.search').click(function () {
	console.log($('#searchBar').val());
	getSummonerByName($('#searchBar').val(), "na");
});

