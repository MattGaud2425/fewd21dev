// total will store the running total, starting at 0
var total = 0;

// `enter()` reads the user's input, and updates the receipt
function submitMe(e){
    // Set up variables to use
    var newValue;
    var newTotalString;

    // Prevent form submission
    e.preventDefault();

    // Read the user input
    newValue = jQuery("#newEntry").val();

    // Convert to decimal
    newValue = parseFloat(newValue);

    total = total + newValue;

    // Convert to currency
    newTotalString = currencyFormat(total);

    newValue = currencyFormat(newValue);

    // Add line item to table
    var newLineString = "<tr><td>&nbsp;</td><td>"+newValue+"</td></tr>";

    // Update the running total
    $("#entries").append(newLineString);

    // Print the updated total with proper currency formatting
    $("#total").text(newTotalString);

    // Clear out the input field, ready for next value
    $("#newEntry").val("");
}

// Use this to convert a number to U.S. currency format
function currencyFormat(numberInput){

    // Convert the number to decimal
    var currency = parseFloat(numberInput);

    // Round to 2 decimal places
    currency = currency.toFixed(2);

    // Add the $ before the number
    currency = "$" + currency.toString();

    // Send back the result
    return currency;
}

// When the user submits the form, run the `enter` function
$(document).ready(function(){
    $('#entry').submit(submitMe);
});





