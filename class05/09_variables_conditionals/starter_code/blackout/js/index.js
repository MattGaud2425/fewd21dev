var lights = 'on';

function switchLights() {
	if (lights === 'on') {
		lights = 'off';
		$('body').addClass('dark');
	} else {
		lights = 'on';
		$('body').removeClass('dark');
	}
}

$(document).ready(function() {
	$('#light_switch').click(switchLights);
});


