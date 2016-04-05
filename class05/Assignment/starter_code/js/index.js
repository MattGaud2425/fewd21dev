
$(document).ready(function () {
	event.preventDefault(); 

	$("#submit-btn").click(function() {



	var cityinput = $("#city-type").val();
	 $("#city-type").val('');
	cityinput = cityinput.toLowerCase().trim();

	if(cityinput == 'new york cityinput' || cityinput == 'nyc' || cityinput == 'new york') {
      $('body').attr('class','nyc');
    }
    // if the user inputs SF/San Francisco/Bay Area change the CSS class to 'sf'
    else if (cityinput == 'sf' || cityinput == 'san francisco' || cityinput == 'bay area') {
      $('body').attr('class','sf');
    }
    // if the user inputs Austin/ATX change the CSS class to 'austin'
    else if (cityinput == 'austin' || cityinput == 'atx') {
      $('body').attr('class','austin');
    }
    // if the user inputs Los Angeles/LA/LAX change the CSS class to 'la'
    else if (cityinput == 'los angeles' || cityinput == 'la' || cityinput == 'lax') {
      $('body').attr('class','la');
    }
    // if the user inputs Sydney/SYD change the CSS class to 'sydney'
    else if (cityinput == 'sydney' || cityinput == 'syd') {
      $('body').attr('class','sydney');
    }
 	});
});

