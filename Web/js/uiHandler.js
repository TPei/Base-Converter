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

