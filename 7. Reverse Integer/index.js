/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    const absNumber = Math.abs(x);

    const string = absNumber.toString();
    const halfLength = Math.floor(string.length / 2);
    let array = [];
    for (let i = 0; i <= halfLength; i++) {
        const left = string[halfLength - i];
        array.push(left)
        const right = string[halfLength + i];
        if (right !== undefined && i !== 0) {
            array.unshift(right)
        }
        console.log(i);

    }
    return array.join('') * (x === absNumber ? 1 : -1);
};

// reverse(-123)
// console.log(reverse(-123));