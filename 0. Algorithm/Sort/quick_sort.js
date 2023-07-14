const { swap } = require("./function");


const quick_sort = (array, orderBy = 'asc') => {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const equal = [];
    const right = [];
    const less = orderBy === 'asc' ? left : right;
    const greater = orderBy === 'asc' ? right : left;
    for (let element of array) {
        if (element < pivot) {
            less.push(element)
        }
        else if (element === pivot) {
            equal.push(element)
        }
        else {
            greater.push(element)
        }
    }
    return quick_sort(left, orderBy).concat(equal, quick_sort(right, orderBy))
}
const array = [1, 2132, 33, 5, 321, 4, 123, 54, 60, 54, 123, 6123, 2, 3, 54, 7, 4, 2, 78, 234];


module.exports = quick_sort;
