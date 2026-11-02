function sortedSqare(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);
  }
  result.sort((a, b) => a - b);
  return result;
}

// function sortedSquares(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let k = nums.length - 1;

//   let result = new Array(nums.length);

//   while (left <= right) {
//     if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//       result[k] = nums[left] * nums[left];
//       left++;
//     } else {
//       result[k] = nums[right] * nums[right];
//       right--;
//     }

//     k--;
//   }

//   return result;
// }

// function sortedSqareTwo(nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let k = nums.length - 1;
//   let result = new Array(nums.length);
//   while (left <= right) {
//     if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//       result[k] = nums[left] * nums[left];
//       left++;
//     } else {
//       result[k] = nums[right] * nums[right];
//       right--;
//     }
//     k--;
//   }
// }

function sumArray(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (i < j) {
      if (sum === target) {
        return [i + 1, j + 1];
      } else if (sum > target) {
        j--;
      } else {
        i++;
      }
    }
  }
}
let numbers = [2, 3, 4];
let target = 6;
console.log(sumArray(numbers, target));
