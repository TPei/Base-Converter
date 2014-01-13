$(document).ready(function () {
	
	// add button event
    $('#convertButton').click(function (e) {
        e.preventDefault();
        
        // get all input values
        var fromTen = $('#fromTen').val();
        var toBase = $('#toBase').val();

        var toTen = $('#toTen').val();
        var fromBase = $('#fromBase').val();

        // clear all prior outputs
        $('#resultEncode').text("");
        $('#resultDecode').text("");
        $('#status').text("");


        var doneSomething = false;

        // check if numbers for encoding were entered
        if (!(fromTen == "" || toBase == "")) {
            $('#resultEncode').text(encode(fromTen, toBase));
            doneSomething = true;
        }
        else
            $('#resultEncode').text("-");
            
        // check if numbers for decoding were entered
        if (!(toTen == "" || fromBase == "")) {
            $('#resultDecode').text(decode(toTen, fromBase));
            doneSomething = true;
        }
        else
            $('#resultDecode').text("-");

        // display 'error' status message
        if (!doneSomething)
            $('#status').text("No numbers for conversion were entered");
    });

});


/**
 * encode a number from base ten to any base <= 10
 */
function encode(fromTen, toBase) {
    var divider = fromTen;
    var result = '';

    while (divider > 0) {
        // gives us whole number and remainder
        temp = Math.floor(divider / toBase)
        rest = divider % toBase;

        result = rest + '' + result;
        divider = temp;
        
    }

    return result;
}

/**
 * decode a number from any base (<= 10) to base 10
 */
function decode(toTen, fromBase) {
    toTen = reverseNumber(toTen);

    result = 0;
    for (var i = 0; i < toTen.toString().length; i++) {
        digit = toTen.split('')[i];
        result = result + digit * Math.pow(fromBase, i);
    }

    return result;
}


/**
 * reverse number
 */
function reverseNumber(number) {
    return number.split('').reverse().join('');
}