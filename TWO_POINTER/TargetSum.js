function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
}
let numbers = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(numbers, target));


function twoSum(numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(numbers[i], i);
  }
}

console.log(twoSum([11, 2, 15, 7], 9));