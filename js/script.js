
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

var spotifyAPI = "https://api.spotify.com/v1/albums"; //API

var spotifyOptions = {
images: [],
genres: "Post-Grunge"  //// ids
};

var displayAlbums =function (data) {

	var albumHMTL = "<ul>";  // start building the ul list for the album_art images

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

		$.getJSON(spotifyAPI, spotifyOptions, displayAlbums); // AJAX request with JQUERY
  }; /// END displayAlbums functions


}); ///END DOCUMENT READY FUNCTION
