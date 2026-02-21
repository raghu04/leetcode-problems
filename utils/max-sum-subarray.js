function maxSumSubarray(arr, k) {
    if (arr.length < k) return null;

    let maxSum = 0;
    let windowSum = 0;

    // Step 1: Calculate initial window sum
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Step 2: Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9