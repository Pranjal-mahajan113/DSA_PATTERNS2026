function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap low and mid
      [nums[low], nums[mid]] = [nums[mid], nums[low]];

      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // Just move mid
      mid++;
    } else if (nums[mid] === 2) {
      // Swap mid and high
      [nums[mid], nums[high]] = [nums[high], nums[mid]];

      high--;
    }
  }

  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));

function moveZero(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[x] = num[i];
      x++;
    }
  }
  while(x<num.length){
    num[x]=0;
    x++;
  }
  return num;
}
