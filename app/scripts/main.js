$(document).ready( function (){
	console.log("Loaded main.js!");
});

var key = "?api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c";
var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Nubsee?api_key=23a00ef6-0a77-4aa2-b278-8d402f4e720c";

function get(url){
	var xmr = new XMLHttpRequest();
	xmr.open("GET", url, false);
	xmr.send(null);
	console.log("GOT: " + xmr.response);
	return JSON.parse(xmr.response);
};

function getSummonerByName(summonerName, region){
	var response = get("https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summonerName + key);
	//console.log(response.id);
	console.log(response);
	console.log(response.id);
	console.log(response['id']);
};

$('.search').click(function () {
	console.log($('#searchBar').val());
	getSummonerByName($('#searchBar').val(), "na");
});

