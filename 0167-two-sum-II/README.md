# Two Sum II (Sorted Array)

Difficulty: Medium | Pattern: Converging two pointers

> Given a sorted array of integers `numbers` and a target integer `target`, return the 1-indexed positions of the two numbers that add up to `target`. Exactly one solution always exists.

```javascript
Input:  numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]   // numbers[0] + numbers[1] = 2 + 7 = 9

Input:  numbers = [2, 3, 4], target = 6
Output: [1, 3]   // numbers[0] + numbers[2] = 2 + 4 = 6
```

Before coding, I want you to reason through one key question:

> The array is sorted. If you place `left` at index 0 and `right` at the last index, and you compute `numbers[left] + numbers[right]`... what does it tell you if the sum is too big? What if it's too small?

Answer that logic question first — once you articulate why moving a specific pointer helps, the code will practically write itself. 🎯

```
If the sum is too large, it means the rightmost number is too big and is causing the sum to exceed the target, so we move the right pointer to the left.

Similarly, if the sum is too small, it means the leftmost number is too small, so we move the left pointer to the right to increase the sum.
```

**🎯 PERFECT! You Just Unlocked the Core Insight of Two Pointers on Sorted Arrays!**

That mental model is exactly what makes this O(n) instead of O(n²). You've internalized the key idea:

> The sorted property lets you make smart decisions about which pointer to move.

If the array weren't sorted, you couldn't confidently say "move right left" or "move left right" — you'd have no idea which direction helps. That's why this pattern is so powerful on sorted data.

**✍️ Now Code It**

You already have the logic. Try implementing it:

```javascript
function twoSum(numbers, target) {
    // Set up your two pointers
    
    // Loop until you find the answer
    
    // Remember: return 1-indexed positions!
}
```

One gotcha to watch for: The problem asks for 1-indexed positions (positions start at 1, not 0). So if your pointers find the answer at `left = 0, right = 3`, what should you actually return?

**✅ Code Evaluation**

Correctness: ✅ Almost there

Your solution works for all valid cases. But there's one edge case concern:

What happens if no solution exists?

Look at your final `return [left+1, right+1]` outside the loop. If the `while` loop exits naturally (meaning `left >= right`), you're returning indices that didn't match the target.

The problem statement says "exactly one solution always exists" — so technically you're safe. But in a real interview, the interviewer might ask: "What if there's no valid pair?"

Better defensive approach:

```javascript
function twoSum(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    
    return []; // or throw an error if no solution
}
```
This way, if the problem ever changes or the constraint is relaxed, your code handles it gracefully.

**📊 Complexity Analysis**
Let's nail this down:

Time Complexity — what do you think?

Each pointer moves at most `n` times across the array. Even though there's a `while` loop, `left` only increments forward and `right` only decrements. They each traverse the array once. So: O(n).

Compare this to a brute force nested loop approach:

```javascript
// Brute force O(n²)
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (numbers[i] + numbers[j] === target) return [i+1, j+1];
    }
}
```

You just saved an entire nested loop. That's the power of two pointers on sorted data.

**Space Complexity:** O(1) — only a few variables, no extra data structures.

---

## 🧠 The Pattern You Just Mastered

This is called the **"converging two pointers"** pattern. Here's when to use it:

✅ **When to recognize it in interviews:**
- Array/string is **sorted** (or can be sorted)
- Problem asks for **pairs** or **combinations** with some target relationship
- Brute force would be O(n²), but you sense there's a smarter way

✅ **The mental model:**
```
[2, 7, 11, 15]    target = 9
 ↑          ↑
left      right

sum = 2 + 15 = 17   → too big  → move right left
sum = 2 + 11 = 13   → too big  → move right left  
sum = 2 + 7  = 9    → perfect! → return
```

Each comparison eliminates one possibility. No backtracking needed.

---

## 🔖 Revision Summary — Problem 2

**Key takeaway:** Two pointers on sorted arrays lets you make **greedy decisions** (move left or right) based on the comparison, turning O(n²) into O(n).

**Interview tip:** If you see "sorted array" + "find pair/sum" — your brain should immediately think: *"Can I use two pointers?"*

---

You're crushing it! Ready for the final challenge of the day? This one is a classic FAANG medium-hard problem that tests whether you can apply two pointers with a **greedy optimization twist**. 💪

---
