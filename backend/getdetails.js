function getConceptMatch(query){
	$("#concept-matches ul").html("");
	$("#related-books ul").html("");
	$("#related-music ul").html("");
	$.ajax({
		url: 'backend/get.php',
		method: 'get',
		data: {'q': query, 't': 'music'},
		dataType: 'json',
		success: function(data){
			htm = "";
			resCount = data.resultCount;
			if (resCount <2){num = resultCount;}else{num = 2;}
			for (var i=0;i<num;i++){
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = '<li class="showcase-case-item">';
				ht = ht + '<div class="showcase-case-item-albumcover" data-mp3="' + songUrl + '" data-title="' + track + '" data-artist="' + artist + '" data-cover="' + cover + '" onclick="playMusic($(this));">'
				ht = ht + '<img src="' + cover + '"/>'
				ht = ht + '<div class="showcase-case-item-playbtn"></div>'
				ht = ht + '</div>'
				ht = ht + '<div class="showcase-case-item-track">' + track + '</div>'
				ht = ht + '<br/>'
				ht = ht + '<div class="showcase-case-item-artist">' + artist + '</div>'
				ht = ht + '</li>'
				
				htm = htm + ht;
			}
			$("#concept-matches ul").append(htm);
			htm = ""
			if (resCount <10){num = resCount;}else{num = 10}
			for (var i = 2; i <10; i++){
				
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = '<li class="showcase-case-item">';
				ht = ht + '<div class="showcase-case-item-albumcover" data-mp3="' + songUrl + '" data-title="' + track + '" data-artist="' + artist + '" data-cover="' + cover + '" onclick="playMusic($(this));">'
				ht = ht + '<img src="' + cover + '"/>'
				ht = ht + '<div class="showcase-case-item-playbtn"></div>'
				ht = ht + '</div>'
				ht = ht + '<div class="showcase-case-item-track">' + track + '</div>'
				ht = ht + '<br/>'
				ht = ht + '<div class="showcase-case-item-artist">' + artist + '</div>'
				ht = ht + '</li>'
				
				htm = htm + ht;
			}
			$("#related-music ul").append(htm);
		}
	});
	
	$.ajax({
		url: 'backend/get.php',
		method: 'get',
		data: {'q': query, 't': 'book'},
		dataType: 'json',
		success: function(data){
			htm = "";
			resCount = data.resultCount;
			if (resCount <2){num = resCount;}else{num = 2;}
			for (var i=0;i<num;i++){
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = '<li class="showcase-case-item">';
				ht = ht + '<div class="showcase-case-item-albumcover" data-mp3="' + songUrl + '" data-title="' + track + '" data-artist="' + artist + '" data-cover="' + cover + '" onclick="playMusic($(this));">'
				ht = ht + '<img src="' + cover + '"/>'
				ht = ht + '<div class="showcase-case-item-playbtn"></div>'
				ht = ht + '</div>'
				ht = ht + '<div class="showcase-case-item-track">' + track + '</div>'
				ht = ht + '<br/>'
				ht = ht + '<div class="showcase-case-item-artist">' + artist + '</div>'
				ht = ht + '</li>'
				
				htm = htm + ht;
			}
			$("#concept-matches ul").append(htm);
			htm = ""
			if (resCount <10){num = resCount;}else{num = 10}
			for (var i = 2; i <num; i++){
				
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = '<li class="showcase-case-item">';
				ht = ht + '<div class="showcase-case-item-albumcover" data-mp3="' + songUrl + '" data-title="' + track + '" data-artist="' + artist + '" data-cover="' + cover + '" onclick="playMusic($(this));">'
				ht = ht + '<img src="' + cover + '"/>'
				ht = ht + '<div class="showcase-case-item-playbtn"></div>'
				ht = ht + '</div>'
				ht = ht + '<div class="showcase-case-item-track">' + track + '</div>'
				ht = ht + '<br/>'
				ht = ht + '<div class="showcase-case-item-artist">' + artist + '</div>'
				ht = ht + '</li>'
				
				htm = htm + ht;
			}
			$("#related-books ul").append(htm);
		}
	});
}

function getMusic(query){
	$.ajax({
		url: 'backend/get.php',
		method: 'get',
		data: {'q': query, 't': 'music'},
		dataType: 'json',
		success: function(data){
			for (var i=0;i<16;i++){
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = "Artist:" + artist;
				ht = ht + "<br/>Album: " + album;
				ht = ht + "<br/>Trackname: " + track;
				ht = ht + "<br/><a href='" + songURL + "'>Click here for preview</a>";
				ht = ht + "<br/><img src='" + cover + "'/>";
				
				htm = htm + ht;
			}
		}
	});
}

function getBooks(query){
	$.ajax({
		url: 'backend/get.php',
		method: 'get',
		data: {'q': query, 't': 'book'},
		dataType: 'json',
		success: function(data){
			for (var i=0;i<16;i++){
				artist = data.results[i].artistName;
				album = data.results[i].collectionName;
				track = data.results[i].trackCensoredName;
				songURL = data.results[i].previewUrl;
				cover = data.results[i].artworkUrl100;
				
				ht = "Artist:" + artist;
				ht = ht + "<br/>Album: " + album;
				ht = ht + "<br/>Trackname: " + track;
				ht = ht + "<br/><a href='" + songURL + "'>Click here for preview</a>";
				ht = ht + "<br/><img src='" + cover + "'/>";
				
				htm = htm + ht;
			}
		}
	});
}

function search(query){
	$("#av").html(query);
	getConceptMatch(query);
}