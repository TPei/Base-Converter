/**
 * encode a number from base ten to any base <= 32
 */
function encode(fromTen, toBase) {

    var result = fromTen.toString(toBase);

    return result;
}

/**
 * decode a number from any base (<= 32) to base 10
 */
function decode(toTen, fromBase) {

    var result = parseInt(toTen, fromBase);
    return result;

    return result;
}


/**
 * reverse number
 */
function reverseNumber(number) {
    return number.split('').reverse().join('');
}