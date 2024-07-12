/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    if (nums.length === 0) return false;
    if (nums[0] === 0 && nums.length > 1) return false;

    let [maxStep] = nums;
    for (let i = 1; i < nums.length; i++) {
        if (i > maxStep)  return false;

        if (i + nums[i] > maxStep) maxStep = i + nums[i];
    }

    return true;
};

console.log(canJump([2, 5, 0, 0]));
