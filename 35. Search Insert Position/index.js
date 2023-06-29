/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < target) {
            return i + 1;
        }

    }
    return 0;
};

const nums = [1, 3, 5, 6], target = 0;

console.log(searchInsert(nums, target));