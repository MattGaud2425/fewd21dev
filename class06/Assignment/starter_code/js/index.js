// - Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; 
// use the array to add values to the ```<select>``` menu by using a ```for``` loop in 
// JavaScript (don't update the HTML to do this!)

// - When the user changes the input of the drop-down, update the background image based on what they selected
// - Use $.append() in your iteration on the drop-down menu 
// - Use the ```$.attr()``` function to update html classes 
// - Get the value of user input using ```$.val()```
// - Use the ```$.change``` event handler to capture user actions
// - Use ```if/else if/else ``` conditionals to control the flow of your application
// - Display your pseudocode as Javascript comments

var array1 = ["NYC", "SF", "LA", "ATX", "SYD"];

// <div class="container">
// 	<form>
// 		<select id="city-type">
// 			<option>Select a City</option>
// 		</select>
// 	</form>
// </div>







// Put all Functions into this helper

$(document).ready(function () {
	for (i = 0; i < array1.length; i++) {
		$('#city-type').append('<option value="' + array1[i] + '">' + array1[i] + '</option>');
	} // end for loop

		// Chaning background off user input
	$('form').on('change', '#city-type',function(){
		var choice = $("#city-type").val();
		// .nyc {
		//   background-image: url(../images/nyc.jpg)
		// }
		// .sf {
		//   background-image: url(../images/sf.jpg)
		// }
		// .la {
		//   background-image: url(../images/la.jpg)
		// }
		// .austin {
		//   background-image: url(../images/austin.jpg)
		// }
		// .sydney {
		//   background-image: url(../images/sydney.jpg)
		// }
		if (choice == "NYC") {
			$("body").attr("class", "nyc");
		} else if (choice == "SF") {
			$("body").attr("class", "sf");
		} else if (choice == "LA") {
			$("body").attr("class", "la");
		} else if (choice == "ATX") {
			$("body").attr("class", "austin");
		} else if (choice == "SYD") {
			$("body").attr("class", "sydney");
		}

	}); // end form function

}); // end document.ready

// if (time < 10) {
//     greeting = "Good morning";
// } else if (time < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }





