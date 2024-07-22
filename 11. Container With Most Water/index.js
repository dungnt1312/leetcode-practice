var maxArea = function (arr) {

    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let leftHeight = arr[i];
        for (let j = arr.length - 1; j > i; j--) {
            let rightHeight = arr[j];
            const width = j - i;
            const height = rightHeight > leftHeight ? leftHeight : rightHeight;
            const area = width * height;
            max = area > max ? area :max;

        }
    }
    console.log(max);
    return max;

};


height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

maxArea(height);