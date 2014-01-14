$(document).ready(function () {

    // add button event
    $('#convertButton').click(function (e) {
        e.preventDefault();

        // get all input values
        var number = $('#from').val();
        var fromBase = $('#convertFrom').find(":selected").text();
        var toBase = $('#convertTo').find(":selected").text();

        // clear all prior outputs
        $('#resultConvert').text("");
        $('#convertStatus').text("");


        if (number != "") {
            for(var i = 0; i < number.toString().length; i++) {
                var digit = parseInt(number.split('')[i]);
                if (digit > fromBase) {
                    $('#resultConvert').text("-");
                    $('#convertStatus').text("Invalid numbers were entered: "+digit+" is not possible in "+fromBase+" base system!");
                    return;
                }
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

