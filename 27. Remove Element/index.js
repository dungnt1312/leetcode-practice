

var removeElement = function (nums, val) {
    if (nums.length === 0) return 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
       
    }
    return j;
};

const nums = [1, 1, 2];
console.log(removeElement(nums, 1), nums)