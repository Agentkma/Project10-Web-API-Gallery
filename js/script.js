
$(document).ready(function() {

	var spotifyAPI = "https://api.spotify.com/v1/search"; //API
	var spotifyOptions = {
	q : eachSearchValue,
	type :  "artists"
	};
	var displayAlbums =function (data) {

		var albumHTML = "<ul>";  // start building the ul list for the album_art images

		$.each(data.items, function ( i, eachItem) {
		//this $.each accesses the spotify object /array and loops through each one…
		/// $.each (object/array, callBackFunction(); ///
		///the callBackFunction takes 2 arguments function ( i , value)  where i is the index value of the current array item, and value is the value of the current array item

				 albumHTML += '<li class = “grid-25 tablet-grid-50”>';  //add CSS class
				 albumHTML += ' <a href= " ' + eachItem.artists.href + ' "  class = "image" >' ; // .href is the prop needed to access the link
				 albumHTML += '<img src= "' + eachItem.artists.images[1].url + ' " >  </a> </li>'; //.images.url is the prop in the spotify json object with the pic/jpg

				 albumHTML += "</ul>";
			});//END anonymous function

			$("#album-gallery").html(albumHTML);
		}; /// END displayAlbums functions




		var searchValues;
		var eachSearchValue="q=";

		$('textarea').focus( function () {
        ///below not working in safari
        $(this).css("outline-color", "#FF0000");
    });//end focus function


		$('button').click(function () {  // adds event handler/ click to submit button
			$(this).submit( function (evt) {
       // when form button submitted this code will run
       //Stop the form from submitting //prevent default browser action
			 evt.preventDefault();
		 	});

			///Remove / add classes not working
			$(this).removeClass('selected');  //  removethe class “selected” of any button
			$(this).addClass('selected'); // add “selected” class to button actually clicked
			//jQuery to get search area text and then remove white spaces at begin/end of string
			searchValues = $("#search-area").val().trim();
			//javascript to replace the white spaces between words with + for Spotify search API
			searchValues = searchValues.replace(/" " /g,"+");
			console.log(searchValues);
			// change searchValues to spotifyOptions parameter..with "q=" at beggingin
			eachSearchValue += searchValues;

			//PREVIOUS METHOD TO TRY TO GET SEARCH TEXT READY FOR SPOTIFY OPTIONS 
			// //Jquery remove white spaces at begnning & end of strings
			// searchValues = $(this).trim();
			// console.log(searchValues);
			// //join ("+")TO PUT THE STRINGS BACK TOGETHER WITH A + BETWEEN WORDS
			// eachSearchValue = searchValues.join("+");

			$.getJSON(spotifyAPI,spotifyOptions,displayAlbums).fail(function (jqXHR) {
					console.log(jqXHR.status);
					console.log(jqXHR.statusText);
			}); // AJAX request with JQUERY


		}); //end click  event function







}); ///END DOCUMENT READY FUNCTION
