// Global Variables
var comparison;

// id = a , value 8; id = b, value = 3; id = comparison

// Preload Functions
function compare() {
	var a = $('#a').val();
	var b = $('#b').val();

	if (a < b) {
		comparison = '<' ;
	} else if (a > b) {
		comparison = '>' ;
	} else if (a === b) {
		comparison = '<' ;
	} else {
		comparison = "NA";
	}

	console.log(comparison);
	$('#comparison').html(comparison);
}

// ON DOCUMENT READY
$(document).ready (function() {
	$('#submit').click(compare);

});


