const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];;
    array[j] = temp;

    return array;
}

module.exports = {
    swap
}