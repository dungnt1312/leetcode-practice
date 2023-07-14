const { swap } = require("./function");




const bubble_sort = (array, orderBy = 'asc') => {
    const length = array.length;
    for (let i = 0; i < length; i++) {

        for (let j = 0; j < i + 1; j++) {
            const condition = orderBy === 'desc' ? array[i] > array[j] : array[i] < array[j]
            if (condition) {
                swap(array, i, j)
            }
        }
    }

    console.log(array);


}
const array = [1, 2, 3, 4, 123, 54, 234, 6123, 2, 3, 54, 7, 4, 2, 78, 234];



module.exports = bubble_sort;