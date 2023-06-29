
const twoSum = function (nums, target) {

    const temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        const need_value = target - nums[i];
        if (temp.has(need_value)) {
            return [temp.get(need_value), i];
        }
        temp.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([21, 2, 5, 6], 11))