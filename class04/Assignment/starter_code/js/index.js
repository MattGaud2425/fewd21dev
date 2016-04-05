// function addMe(first,second){

// }// end addMe


// jQuery(document).ready(function () {

//     jQuery('.readmore').click(function (e) {
//         e.preventDefault();
//         jQuery('#show-this-on-click').slideDown();
//         jQuery('.readmore').hide();
//         jQuery('.readless').show();
//     });

//     jQuery('.readless').click(function (e) {
//         e.preventDefault();
//         jQuery('#show-this-on-click').slideUp();
//         jQuery('.readless').hide();
//         jQuery('.readmore').show();
//     });

//     jQuery('.learnmore').click(function (e) {
//         e.preventDefault();
//         jQuery('#learnmoretext').slideDown();
//         jQuery('.learnmore').hide();
//     });

// });

$(document).ready(function () {

    $('.readmore').click(function(e) {
        e.preventDefault();
        $("#show-this-on-click").slideDown();
        $(".readmore").addClass("non-active");
        $(".readless").addClass("active");
    })

    $(".readless").click(function(e) {
         e.preventDefault();
        $("#show-this-on-click").slideUp();
        $(".readmore").show();
        $(".readless").addClass("non-active");
    })

    // <a href="#" class="learnmore">Learn More</a> 
    // <span class="hide" id="learnmoretext">Here is some more text about this fun thing!</p>

    $('.learnmore').click(function() {
        $('.learnmore').click(function() {
            $('.learnmoretext').slideDown();

        })
    })


});