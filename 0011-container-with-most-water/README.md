## 🔴 Problem 3 — Container With Most Water
**Difficulty: Medium-Hard | Pattern: Two pointers + greedy decision-making**

> You are given an integer array `height` of length `n`. There are `n` vertical lines, where line `i` is drawn at position `i` with height `height[i]`.
>
> Find two lines that together with the x-axis form a container that holds the **most water**.
>
> Return the **maximum amount of water** a container can store.

**Visual example:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

     |
   8 |     |                   |
   7 |     |                   |       |
   6 |     |   |               |       |
   5 |     |   |       |       |       |
   4 |     |   |       |   |   |       |
   3 |     |   |       |   |   |   |   |
   2 |     |   |   |   |   |   |   |   |
   1 | |   |   |   |   |   |   |   |   |
     +---+---+---+---+---+---+---+---+---
       0   1   2   3   4   5   6   7   8

The max area = width × min(height_left, height_right)
Between indices 1 and 8: width = 7, min height = 7
Area = 7 × 7 = 49
```

## 🤔 Before You Code — Think Through This

Question 1: If you place pointers at both ends, how do you calculate the water area between them? What's the formula?

Question 2: Here's the tricky part — when do you move `left` inward vs `right` inward?

Hint: Think about this — if h`eight[left] = 3` and `height[right] = 8`, which pointer should you move? Why would moving the taller one ever help you find a larger area?

Take your time with this one. The logic is subtle but once you see it, it clicks forever. Answer those two questions first, then we'll code it together. 🎯

>To calculate the water area between two lines, we need the distance between them (width) and the shorter of the two heights (water height).
So, the formula is:
max_area = width × min(height_left, height_right)
>
>Since the shorter height limits how much water can be stored, we move the pointer with the smaller height inward.
If the left height is smaller than the right height, we move the left pointer to the right.

## 🎯 PERFECT! You've Cracked the Greedy Insight!

That second answer is the key intuition that separates a brute force O(n²) solution from the elegant O(n) two-pointer solution.

Let me reinforce why your logic is brilliant:

>Why move the shorter pointer?
The area is always limited by the shorter line. If you move the taller pointer inward, you:
>
>Decrease the width (guaranteed)
Still have the same short line limiting your height
Zero chance of finding a bigger area
>
>But if you move the shorter pointer inward, you:
>
>Decrease the width (yes)
>BUT you might find a taller line that compensates
>This is your only chance to improve

This is called a greedy choice — at each step, you eliminate the option that can't possibly lead to a better answer.

----

## ✍️ Now Implement It

You already have the complete logic. Fill this in:

```javascript
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // Calculate current area
        
        // Update max if needed
        
        // Move the pointer pointing to the shorter line
        
    }
    
    return maxWater;
}
```

One small note: When calculating width, remember the distance between `left` and `right` is `right - left`, not `right - left + 1` (since we're measuring the gap between the lines, not counting positions).

```javascript
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // Calculate current area
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = width * minHeight;
        
        // Update max if needed
        maxWater = Math.max(maxWater, currentArea);
        
        // Move the pointer pointing to the shorter line
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        
    }
    return maxWater;
}
```

## 🎉 EXCELLENT! That's a Solid, Working Solution!

Your logic is clear, correct, and handles all cases. Let me evaluate it properly.

## ✅ Code Evaluation

Correctness: ✅ Perfect

Your solution handles all test cases correctly, including edge cases like equal heights and varying distributions.

Time Complexity: O(n) — Each pointer moves at most n times. No nested loops. This is optimal.

Space Complexity: O(1) — Only a few variables.

---

## 🧠 Why This Problem Is Interview Gold

This problem tests **three critical skills** simultaneously:

1. **Pattern recognition** — "Two elements, maximize something" → think two pointers
2. **Greedy reasoning** — Knowing *why* moving the shorter pointer is the only logical choice
3. **Proof by contradiction** — Can you explain why moving the taller pointer *can't* improve the result?

When an interviewer asks *"Why does this work?"*, here's what they want to hear:

> "The area is constrained by the shorter line. Moving the taller pointer inward decreases width while keeping the limiting height the same, so it can never improve the result. Moving the shorter pointer is our only chance to find a taller line that compensates for the reduced width."

---

## 📊 Complexity Comparison

| Approach | Time | Space | Code |
|---|---|---|---|
| Brute force (check all pairs) | O(n²) | O(1) | Nested loops |
| **Your two-pointer solution** | **O(n)** | **O(1)** | **Single pass** |

You just turned a quadratic solution into linear. That's the magic of two pointers + greedy thinking.

---