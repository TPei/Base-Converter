$(document).ready(function () {
    $('#fromCustom').hide();
    $('#toCustom').hide();

    $('#convertFrom').change(function() {
        var fromBase = $('#convertFrom').find(":selected").text();
        if (fromBase == "custom") {
            $('#fromCustom').show();
        }
        else {
            $('#fromCustom').hide();
        }
    });

    $('#convertTo').change(function() {
        var toBase = $('#convertTo').find(":selected").text();
        if (toBase == "custom") {
            $('#toCustom').show();
        }
        else {
            $('#toCustom').hide();
        }
    });

    // add button event
    $('#convertButton').click(function (e) {
        e.preventDefault();

        // get all input values
        var number = $('#from').val();
        var fromBase = $('#convertFrom').find(":selected").text();
        var toBase = $('#convertTo').find(":selected").text();

        if(fromBase == "custom") {
            fromBase = $('#fromCustom').val();
        }

        if(toBase == "custom") {
            toBase = $('#toCustom').val();
        }

        // clear all prior outputs
        $('#resultConvert').text("");
        $('#convertStatus').text("");


        if (number != "") {
            for(var i = 0; i < number.toString().length; i++) {
                var digit = number.split('')[i];

                var valid = checkValidity(digit, fromBase);
                if(!valid)
                    return;
            }

            var toTen = decode(number, fromBase);
            var toTarget = encode(toTen, toBase);
            $('#resultConvert').text(toTarget);
        }
        else {
            $('#resultConvert').text("-");
            $('#convertStatus').text("No numbers for conversion were entered");
        }

    });

});

function checkValidity(digit, fromBase) {
    // check if valid hex string
    if(fromBase == 16) {
        if(digit.match(/^[a-f0-9]$/i) == null) {
            $('#resultConvert').text("-");
            $('#convertStatus').text("Not a valid hex number!");
            return false;
        }
    }
    else{
        // check if valid number
        if(digit.match(/^[0-9]$/i) == null) {
            $('#resultConvert').text("-");
            $('#convertStatus').text("Invalid numbers were entered: "+digit+" is not possible in "+fromBase+" base system!");
            return false;
        }
        else {
            // check if valid number for base
            digit = parseInt(digit);
            if(digit >= fromBase) {
                $('#resultConvert').text("-");
                $('#convertStatus').text("Invalid numbers were entered: "+digit+" is not possible in "+fromBase+" base system!");
                return false;
            }
        }
    }

    return true;
}

