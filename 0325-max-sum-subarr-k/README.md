# Maximum Sum Subarray of Size K

Difficulty: Easy | Pattern: Fixed-size sliding window

>Given an array of integers `nums` and an integer `k`, find the maximum sum of any contiguous subarray of size `k`.

```javascript
Input:  nums = [2, 1, 5, 1, 3, 2], k = 3
Output: 9
Explanation: Subarray [5, 1, 3] has max sum = 9

Input:  nums = [2, 3, 4, 1, 5], k = 2  
Output: 7
Explanation: Subarray [3, 4] has max sum = 7
```

---

## 🤔 Before You Code

**Question 1:** If you solved this with a brute force approach (checking every possible subarray of size k), what would the time complexity be?

**Question 2:** Here's the key insight — when you slide the window one position to the right:
```
[2, 1, 5] | 1, 3, 2    sum = 8
 2, [1, 5, 1] | 3, 2    sum = ?
```

Do you need to recalculate the entire sum from scratch? What's the relationship between the old sum and new sum?

Question 3: How would you build the very first window before you start sliding?

---

>1. With the brute-force approach, the time complexity increases as the window size k increases, so it becomes O(n × k).
>2. The next subarray [1, 5, 1] has a sum of 7.
>3. The first window contains the first k elements.

## 🎯 Great Answers! Let Me Clarify One Thing

A1 — Exactly right! O(n*k) because for each of n positions, you'd sum k elements. That's wasteful.

A3 — Perfect! Build the initial window with the first k elements.

A2 — You gave me the answer (7), but let me push you on the relationship:

Look at this transition:
```
Old window: [2, 1, 5]     sum = 8
New window: [1, 5, 1]     sum = 7
```

What happened?
- You removed 2 from the left
- You added 1 to the right

So: `newSum = oldSum - 2 + 1 = 8 - 2 + 1 = 7` ✅

This is the sliding window magic: Instead of recalculating the sum from scratch (O(k)), you just do one subtraction and one addition (O(1)).

---

**The Formula You Need**
```
newSum = currentSum - nums[left] + nums[right]
         └─ remove old  └─ add new
```

Where `left` is the element leaving the window and `right` is the element entering.

---

## ✍️ Now Code It
With that insight, try implementing it:
```javascript
function maxSumSubarray(nums, k) {
    // Edge case: if array is smaller than k
    if (nums.length < k) return 0;
    
    // Step 1: Build the first window (sum first k elements)
    
    // Step 2: Slide the window and track max sum
    
    // Step 3: Return the max
}
```

Hint for Step 2: Your loop should start at index k (the first element after the initial window) and go to the end of the array.

```javascript
function maxSumSubarray(nums, k) {
    // Edge case: if array is smaller than k
    if (nums.length < k) return 0;
    
    // Step 1: Build the first window (sum first k elements)
    let window_sum = 0;
    for (let i=0; i<k; i++) {
        window_sum+=nums[i];
    }
    let max = window_sum;

    // Step 2: Slide the window and track max sum
    for (let i = k; i < nums.length; i++) {
        window_sum = window_sum - nums[i - k] + nums[i];
        max = Math.max(max, window_sum)
    }
    
    // Step 3: Return the max
    return max
}
```

**✅ Code Evaluation**

Correctness: ✅ Perfect

Your logic handles:

- Building the initial window correctly
- Sliding with the O(1) update formula
- Tracking the maximum throughout
- Edge case where array length < k



Let's trace it:
```
nums = [2, 1, 5, 1, 3, 2], k = 3

Initial window: [2, 1, 5]
windowSum = 8, max = 8

i = 3: remove nums[0]=2, add nums[3]=1
windowSum = 8 - 2 + 1 = 7, max = 8

i = 4: remove nums[1]=1, add nums[4]=3  
windowSum = 7 - 1 + 3 = 9, max = 9  ✓

i = 5: remove nums[2]=5, add nums[5]=2
windowSum = 9 - 5 + 2 = 6, max = 9

Return 9 ✓
```

**📊 Why This Is So Much Better**

Let's visualize the difference with `nums = [2,1,5,1,3,2], k = 3`:

Brute Force O(n*k):
```
Window 1: 2+1+5 = 8       (3 additions)
Window 2: 1+5+1 = 7       (3 additions)  
Window 3: 5+1+3 = 9       (3 additions)
Window 4: 1+3+2 = 6       (3 additions)
Total: 12 operations
```

Your Sliding Window O(n):
```
Initial:  2+1+5 = 8       (3 additions)
Slide 1:  8-2+1 = 7       (1 sub + 1 add)
Slide 2:  7-1+5 = 9       (1 sub + 1 add)
Slide 3:  9-5+1 = 6       (1 sub + 1 add)
Total: 9 operations
```

The gap grows massive as n and k increase!

## 📊 Complexity Analysis

Time Complexity: O(n)

- Build first window: O(k)
- Slide through remaining: O(n - k)
- Total: O(k + n - k) = O(n)

Compare to brute force O(n*k) — huge improvement when k is large!

Space Complexity: O(1) — just a few variables

For `n = 1000` and `k = 100`:

- Brute force: ~100,000 operations
- Your solution: ~1,000 operations

That's a 100x speedup! This is why interviewers love this pattern.


---

**🎓 Key Takeaways from This Problem**
1. Always initialize your result with the first valid state (first window in this case)
2. Loop index semantics matter — `i` should represent the new element entering, so start at `k`
3. The sliding window formula: `newSum = oldSum - nums[i - k] + nums[i]`

This is the template for all fixed-size sliding window problems. Memorize this structure!

---

**🧠  Quick Knowledge Check**

>If I asked you to find the minimum sum subarray of size k instead, what would you change in your code?

Think about it for 5 seconds...

Got it? Just change:

```javascript
max = Math.max(max, window_sum);  // for maximum
// to
min = Math.min(min, window_sum);  // for minimum
```

That's it! The sliding window logic stays identical. This is the power of understanding the pattern.

**🔖 Quick Revision**

Key insight: Don't recalculate from scratch. Remove old element, add new element.

When to use fixed window:
- Problem explicitly gives you a size k
- Window size never changes
- You're tracking some aggregate (sum, product, count)