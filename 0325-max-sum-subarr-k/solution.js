function maxSumSubarray(nums, k) {
  // Edge case: if array is smaller than k
  if (nums.length < k) return 0;

  // Step 1: Build the first window (sum first k elements)
  let window_sum = 0;
  for (let i = 0; i < k; i++) {
    window_sum += nums[i];
  }
  let max = window_sum;

  // Step 2: Slide the window and track max sum
  for (let i = k; i < nums.length; i++) {
    window_sum = window_sum - nums[i - k] + nums[i];
    max = Math.max(max, window_sum);
  }

  // Step 3: Return the max
  return max;
}
