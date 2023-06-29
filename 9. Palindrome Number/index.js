/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function (x) {

    return +x.toString().split('').reverse().join('') === x;

};


var isPalindrome = function (x) {
    if (x < 0 || x != 0 && x % 10 == 0) return false;
    const arr = x.toString().split('');
    const length = arr.length
    const separate_length = parseInt(length / 2);
    for (let i = 0; i < separate_length; i++) {
        if (arr[i] !== arr[length - i - 1]) {
            return false;
        }
    }

    return true;

};
console.log(isPalindrome(0))