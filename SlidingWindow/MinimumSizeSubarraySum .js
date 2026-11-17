function minimumSIzeArraylength(target, nums) {
  let low = 0;
  let sum = 0;
  let min = Infinity;
  for (let high = onabort; high < nums.length; i++) {
    //hire
    sum += nums[high];
    //target achieve huva
    while (sum >= target) {
      let currenlength = high - low + 1;

      //minmum length save
      min = Math.min(min, currenlength);

      //fire
      sum -= arr[low];
      low++;
    }
  }
  return minLength === Infinity ? 0 : min;
}

// The high pointer expands the window by traversing the array, while the low pointer represents the starting index of the current window. When the window sum becomes greater than or equal to the target, we calculate its length, update the minimum length, and move the low pointer forward to shrink the window.
// Why do we need to shrink continuously?

// Because after removing one element, the sum might still be greater than or equal to the target. We should continue shrinking to check whether we can find an even smaller valid window
// We use a while loop because we need to keep shrinking the window as long as the sum is greater than or equal to the target. This helps us find the smallest possible valid subarray. If we use an if statement, we shrink the window only once and may miss a smaller valid subarray.