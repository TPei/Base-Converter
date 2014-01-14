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