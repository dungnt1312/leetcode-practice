/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let number = Math.abs(x);

    let result = 0;
    while (number > 0) {
        const last = number % 10;
        result = result * 10 + last;
        number = Math.floor(number / 10)
    }
    return (result < -2147483648 || result > 2147483649) ? 0 :result
};

// reverse(-123)
console.log(reverse(-1233245433));