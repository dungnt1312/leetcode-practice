const bubble_sort = require("../Sort/bubble_sort");
const quick_sort = require("../Sort/quick_sort");

const array = [1, 23, 412, 3, 545, 43234, 45, 56, 234, 6, 123, 653463, 123, 1];

const sorted_array = quick_sort(array);

const binary_search = (array, needle) => {
    if (array.length <= 1) return 0;

    let min = 1;
    let max = array.length;
    while (min < max) {
        const mid = Math.floor((min + max) / 2);
        if (array[mid] === needle) return mid;
        if (array[mid] < needle) min = mid + 1;
        if (array[mid] > needle) max = mid - 1;

    }
    
    return -1;
}



const res = binary_search(sorted_array, 1);
console.log({ res });

module.exports = binary_search;