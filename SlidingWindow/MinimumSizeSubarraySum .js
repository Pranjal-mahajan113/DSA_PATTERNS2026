function minimumSIzeArraylength(target, nums) {
  let low = 0;
  let sum = 0;
  let min = -Infinity;
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
  return minLength === Infinity ? 0 : minLength;
}
