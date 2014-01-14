$(document).ready(function () {

    // add button event
    $('#codeButton').click(function (e) {
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


    $('#convertButton').click(function (e) {
        e.preventDefault();

        // get all input values
        var number = $('#from').val();
        var fromBase = $('#convertFrom').find(":selected").text();
        var toBase = $('#convertTo').find(":selected").text();

        // clear all prior outputs
        $('#resultConvert').text("");
        $('#convertStatus').text("");

        console.log("Converting "+number+" from base "+fromBase+" to base "+toBase);

        
        if (number != "") {
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

