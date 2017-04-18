
$(document).ready(function() {
// $(‘button’).click(function () {  // adds event handler/ click to any album/pic on html
//
// $(“button”).removeClass(“selected”);  //  removethe class “selected” of any button
//
// $(this).addClass(“selected); // add “selected” class to button actually clicked
//

//
// }); //end click album pic/cover event function
// var album_art=[];

var spotifyAPI = "https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,5XzokqsAmkv0cjk1kAUwiM,4Dk1fhh3nqIt5dOq6sGc1f,2Wa1LMgomQa5OJuaOSnv1B,3nsnirLpQt68OIy6Lih2u5,3IpvmE4e3TMq7TmqAl8OGF,0Jk5J9HrDmCEKV7xYmaB6m"; //API

var spotifyOptions = {
// images: [],
// genres: "41MnTivkwTO3UUJ8DrqEJJ" //// ids
};

var displayAlbums =function (data) {

	var albumHTML = "<ul>";  // start building the ul list for the album_art images

	$.each(data.albums, function ( i, albums) {
	//this $.each accesses the spotify object /array and loops through each one…
	/// $.each (object/array, callBackFunction(); ///
	///the callBackFunction takes 2 arguments function ( i , value)  where i is the index value of the current array item, and value is the value of the current array item

			 albumHTML += '<li class = “grid-25 tablet-grid-50”>';  //add CSS class
    	 albumHTML += ' <a href= " ' + albums.href + ' "  class = "image" >' ; // .href is the prop needed to access the link
    	 albumHTML += '<img src= "'+ albums.images[1].url + ' " >  </a> </li>'; //.images.url is the prop in the spotify json object with the pic/jpg
    });//END anonymous function

		albumHTML += "</ul>";

    $("#album-gallery").html(albumHTML);


  }; /// END displayAlbums functions

$.getJSON(spotifyAPI, spotifyOptions, displayAlbums); // AJAX request with JQUERY

}); ///END DOCUMENT READY FUNCTION
