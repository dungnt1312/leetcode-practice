var majorityElement = function (nums) {
    const times = nums.length /3;

    const map = {};
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i];
      if (!map[item]) {
        map[item] = 0;
      }
      map[item]++;
      if (map[item] > times) {
        set.add(item);
      }
    }
  
    return Array.from(set);
  };
  
  const result = majorityElement([3, 2, 3]);
  console.log(result);
  