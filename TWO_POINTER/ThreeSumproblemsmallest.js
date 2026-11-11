function threeSumSmallest(nums, sum) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total >= sum) {
        right--;
      } else {
        ans = ans + (right - left);
        left++;
      }
    }
  }
  return ans;
}
let nums = [1, 3, 4, 5, 7]
let sum = 12
console.log(threeSumSmallest(nums,sum))