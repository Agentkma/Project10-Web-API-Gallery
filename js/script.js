
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

var spotifyAPI = "https://api.spotify.com/v1/albums/?ids=41MnTivkwTO3UUJ8DrqEJJ,2rDBeHRM12UkqAsPdKSsKN,6w0aKN5a2bNvWGnlCiF29M,3HCMJ6JooRz54AOchWgmia,5ikzwtrIZlC4mfMXXxiDLh"; //API

var spotifyOptions = {
// ids: ["41MnTivkwTO3UUJ8DrqEJJ","2rDBeHRM12UkqAsPdKSsKN", "6w0aKN5a2bNvWGnlCiF29M","3HCMJ6JooRz54AOchWgmia", "5ikzwtrIZlC4mfMXXxiDLh"]
// genres: "41MnTivkwTO3UUJ8DrqEJJ" //// ids
};

var displayAlbums =function (data) {

	var albumHTML = "<ul>";  // start building the ul list for the album_art images

	$.each(data.items, function ( i, eachItem) {
	//this $.each accesses the spotify object /array and loops through each one…
	/// $.each (object/array, callBackFunction(); ///
	///the callBackFunction takes 2 arguments function ( i , value)  where i is the index value of the current array item, and value is the value of the current array item

			 albumHTML += '<li class = “grid-25 tablet-grid-50”>';  //add CSS class
    	 albumHTML += ' <a href= " ' + eachItem.albums.href + ' "  class = "image" >' ; // .href is the prop needed to access the link
    	 albumHTML += '<img src= "' + eachItem.albums.images[1].url + ' " >  </a> </li>'; //.images.url is the prop in the spotify json object with the pic/jpg

			 albumHTML += "</ul>";
		});//END anonymous function

	  $("#album-gallery").html(albumHTML);
  }; /// END displayAlbums functions



$.getJSON(spotifyAPI, spotifyOptions, displayAlbums).fail(function (jqXHR) {
		console.log(jqXHR.status);
		console.log(jqXHR.statusText);

}); // AJAX request with JQUERY

}); ///END DOCUMENT READY FUNCTION
