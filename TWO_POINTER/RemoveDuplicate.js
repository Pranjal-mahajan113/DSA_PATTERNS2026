function removeDuplicate(nums) {
  let i = 0;
  let n = nums.length;
  let j = 1;
  let res = 1;
  while (j < n) {
    if (nums[j] === nums[j - 1]) {
      j++;
      continue;
    }
    nums[i + 1] = nums[j];
    i++;
    res++;
    j++;
  }
  return res;
}
let nums=[1,1,2,2,3,3]
console.log(removeDuplicate(nums))