
$(document).ready(function() {



/**********************************************/




		$('textarea').focus( function () {
        ///below not working in safari
        $(this).css("outline-color", "#FF0000");
    });//end focus function


		$('button').click(function (evt) {  // adds event handler/ click to submit button
       // when form button submitted this code will run


			 		var searchValues;
			 		var eachSearchValue;
       //Stop the form from submitting //prevent default browser action
			 		evt.preventDefault();

					///Remove / add classes not working
					$('button').removeClass('selected');  //  removethe class “selected” of any button
					$(this).addClass('selected'); // add “selected” class to button actually clicked
					//jQuery to get search area text and then remove white spaces at begin/end of string
					searchValues = $("#search-area").val().trim();

					eachSearchValue=searchValues;
					//
					// console.log(eachSearchValue);

					var spotifyAPI 			= "https://api.spotify.com/v1/search"; //API
					var spotifyOptions 	= {
							q : eachSearchValue,
							type :  "artist"
							};
					function displayAlbums (data) {
						console.log(data);
						// console.log(data.items);
							var albumHTML = '<ul>';  // start build ul list for the album_art images

							$.each(data, function ( i, eachArtist) {
								console.log(eachArtist);
								console.log(eachArtist.items);
							// $.each accesses the spotify object /array and loops through each one…
							/// $.each (object/array, callBackFunction(); ///
							///the callBackFunction takes 2 arguments function ( i , value)  where i is the index value of the current array item, and eachArtis is the value of the current array item
									 albumHTML += '<li class = “grid-25 tablet-grid-50”>';  //add CSS class
									 albumHTML += '<a href= " ' + eachArtist.items.href + ' " class = "image" >'; // .href is the prop needed to access the link
									 console.log(albumHTML);
									 albumHTML += '<img src= "' + eachArtist.items.images[1].url + ' " >  </a> </li>'; //.images.url is the prop in the spotify json object with the pic/jpg
							});//END $.each

								 albumHTML += '</ul>';
										// 	console.log(albumHTML);
								$("#album-gallery").html(albumHTML);
						} /// END displayAlbums functions


					$.getJSON(spotifyAPI,spotifyOptions,displayAlbums); // AJAX request with JQUERY

					 $('#search-area').val("");

		}); //end click  event function


}); ///END DOCUMENT READY FUNCTION
