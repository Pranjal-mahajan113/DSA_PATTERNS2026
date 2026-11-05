function tripletsum(nums) {
    let result = [];
    const n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {

        // Skip duplicate first element
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {

                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicate left values
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // Skip duplicate right values
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
console.log(tripletsum([-1, 0, 1, 2, -1, -4]));