
$(document).ready(function() {

/*********************VARIABLES***************************************/

// var $overlay =$('<div id="overlay"></div');
// var $image=$("<img>");
// var $caption=$("<div><p></p></div>");





/*********************MAIN SEARCH BOX FUNCTION*************************/




		$('textarea').focus( function () {
        ///below not working in safari
        $(this).css("outline-color", "#FF0000");
    });//end focus function


		$('form').submit(function (evt) {  // adds event handler/ click to submit button

			 //Stop the form from submitting //prevent default browser action...leaving page
			 	 evt.preventDefault();

			 		var $submitButton = $("submit-button");
			 		var $searchValues = $("#search-area");
			 		var eachSearchValue;
					// when form button submitted this code will run

					// disable the search-area while ajax getting info
					$searchValues.prop("disabled",true);
					//give the submit button a "searching label"
					$submitButton.attr("disabled", true).val("searching...");
					///Remove / add classes not working
					$('button').removeClass('selected');  //  removethe class “selected” of any button
					$(this).addClass('selected'); // add “selected” class to button actually clicked
					//jQuery to get search area text and then remove white spaces at begin/end of string

					eachSearchValue = $searchValues.val().trim();
					//
					// console.log(eachSearchValue);

					var spotifyAPI 			= "https://api.spotify.com/v1/search"; //API
					var spotifyOptions 	= {
							q : eachSearchValue,
							type :  "album"
							};
					function displayAlbums (data) {
						console.log(data);
						// console.log(data.items);
							var albumHTML = '<ul id="search-list">';  // start build ul list for the album_art images

							$.each(data.albums.items, function ( i, eachAlbum) {
								// console.log(data.albums.items);

							// $.each accesses the spotify object /array and loops through each one…
							// /// $.each (object/array, callBackFunction(); ///
							// ///the callBackFunction takes 2 arguments function ( i , value)  where i is the index value of the current array item, and eachArtis is the value of the current array item
									 albumHTML += '<li class = “grid-1 grid-3”>';  //add CSS class
									 albumHTML += '<a href= " ' + eachAlbum.href + ' " class = "image" data-lightbox="image" data-title = "' +  eachAlbum.name + ' "> '; // .href is the prop needed to access the link

									 albumHTML += '<img src= "' + eachAlbum.images[0].url + ' " >  </a> </li>'; //.images.url is the prop in the spotify json object with the pic/jpg
							});//END $.each
							//
								 albumHTML += '</ul>';
											console.log(albumHTML);
								$("#album-gallery").html(albumHTML);

								// re-enable the search-area while ajax getting info
								$searchValues.prop("disabled",false);
								//give the submit button a "search"
								$submitButton.attr("disabled", false).val("Search");

						} /// END displayAlbums functions


					$.getJSON(spotifyAPI,spotifyOptions,displayAlbums); // AJAX request with JQUERY

					 $('#search-area').val("");

		}); //end  form buttonclick  event function


/*************************CLICK ON ALBUM ART TO SEE LIGHTBOX OF INFO********************************/


}); ///END DOCUMENT READY FUNCTION
