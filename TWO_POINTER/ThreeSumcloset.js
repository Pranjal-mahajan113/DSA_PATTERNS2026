function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let diff = Infinity;
  let res_sum = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      let d = Math.abs(target - total);

      if (diff > d) {
        diff = d;
        res_sum = total;
      }

      if (total === target) {
        return res_sum;
      }

      if (total < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res_sum;
}

function threesum2(nums, target) {
  const n = nums.length;

  let diff = Infinity;
  let res_sum = 0;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      let d = Math.abs(target - total);
      if (diff > d) {
        diff = d;
        res_sum = total;
      }
      if (target === total) {
        return res_sum;
      }
      if (total < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res_sum;
}
