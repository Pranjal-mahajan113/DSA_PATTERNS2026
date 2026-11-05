function threeSum(nums) {
    const result = [];
    
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    const n = nums.length;

    // Step 2: Iterate through the array
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        // Step 3: Two-pointer search for the remaining two numbers
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // Move both pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                // Sum is too small, increase the left pointer
                left++;
            } else {
                // Sum is too large, decrease the right pointer
                right--;
            }
        }
    }

    return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); 
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]





