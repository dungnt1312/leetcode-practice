var longestConsecutive = function (nums) {

    const temp = new Map();

    for (let index in nums) {
        temp.set(nums[index], index);
    }
    let max = 1;
    for (let values of nums) {
        let currentMax = 1;
        while (temp.has(values + 1)) {
            values++;
            currentMax++;
        }
        max = Math.max(max, currentMax);
    }
    return max;

};
longestConsecutive([100, 4, 200, 1, 3, 2]);