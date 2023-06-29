/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const lastIndex = digits.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
        if (i === lastIndex && digits[i] !== 9) {
            digits[lastIndex]++;
            return digits;
        }
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i !== 0) {
                continue;
            }
            else {
                digits.unshift(1);
                return digits;
            }
        }
        digits[i]++;
        return digits;

    }


};
const digits = [3, 9];
console.log(plusOne(digits));