//wait for the DOM elements to load before executing
jQuery(document).ready(function(){
    // Create a function that runs whenever the submit button is clicked
        jQuery("#submit-btn").click(function(e) {


        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        var moodvalue = jQuery("#mood").val();

        //Correct for capitalization
        moodvalue = moodvalue.toLowerCase();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if (moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic" ) {
            jQuery(".moodring > div").attr('class', 'excited');
        }
     

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

});
    // Listen for user interaction on the submit button.



});