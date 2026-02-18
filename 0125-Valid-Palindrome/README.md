# Valid Palindrome

Difficulty: Easy | Pattern: Opposite‑direction two pointers

**The problem**

> Given a string `s`, return `true` if it is a palindrome, considering only alphanumeric characters and ignoring case.

```
Input:  "A man, a plan, a canal: Panama"
Output: true

Input:  "race a car"
Output: false
```
---

Before you code — let me ask you three questions

1. If you ignore the two‑pointer pattern entirely, how would you naturally solve this? Just describe it in plain English, no code needed.
2. What does “alphanumeric only” mean for how you process the string?
3. Where would you place your two pointers to start, and what condition makes you stop?

Answer any or all of these — even a partial thought helps. Once I see your thinking, I’ll guide you into the implementation. 🎯

---
📋 Evaluating Your Thinking

- A2 — Perfect. You nailed alphanumeric. That understanding directly translates to code.
- A3 — Excellent. Pointer placement and stop condition are exactly right. This is the core of two‑pointer thinking.
- A1 — You’re on the right track, but there’s a logical gap worth catching now.

Think about this with me: is a string with an even character count never a palindrome?
```
“abba” → 4 characters (even) → is it a palindrome?
“abcd” → 4 characters (even) → is it a palindrome?
```
What does that tell you about your “even count = not palindrome” rule? 🤔

The rest of your A1 logic — clean the string, split in half, reverse second half, compare — is actually a perfectly valid approach! It would work. But here’s a question to push your thinking further:

>If you already have two pointers sitting at both ends and moving inward… do you actually need to reverse anything?

What would happen if, instead of reversing the second half, you just compared characters directly as the pointers move toward each other?

---
✍️  Now Let's Code

Based on your A3, you already know the structure. Try filling this skeleton in JavaScript:

```js
function isPalindrome(s) {
    // Step 1: Clean the string — keep only alphanumeric, lowercase everything

    // Step 2: Place your two pointers

    // Step 3: Loop and compare — what's your stop condition?

    // Step 4: What do you return if the loop finishes without returning false?
}
```
Two hints to keep in mind

- JavaScript’s `.replace()` with a regex can clean a string in one line. Do you know how to write a regex that matches non‑alphanumeric characters?
- For the pointer loop, think `while` not `for` — why might that be more natural here?

Give it a shot — even a partial attempt is great. I’ll guide you from wherever you get stuck. 🚀

---
✅ Code Evaluation

Correctness: ✅ Perfect
  All cases handled — mixed case, special characters, even/odd length strings, empty string. Your instinct to clean first then apply two pointers is exactly right.

Time Complexity — what do you think it is?

You do two passes over the string — one for `.replace()`, one for the `while` loop. Each pass is O(n). So combined, the overall time is O(n).

Space Complexity — here's a thinking question:

You created a new variable `str` to hold the cleaned string. If the original string `s` has `n` characters, that new string costs O(n) space. There is a way to avoid creating it entirely.

---
🔍 One Small Optimization Worth Knowing

Your solution is already great for interviews. But here’s a version that skips the cleaning step entirely — it uses two pointers on the original string and just skips non‑alphanumeric characters on the fly:

```js
function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric from the left
        while (left < right && !isAlphanumeric(s[left])) left++;
        // Skip non-alphanumeric from the right
        while (left < right && !isAlphanumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(c) {
    return /^[a-zA-Z0-9]$/.test(c);
}
```

Why does this matter? Your original solution is O(n) time / O(n) space. This version is O(n) time / O(1) space — no new string is created. In an interview, if an interviewer says “can you optimize space?” — this is your answer.

Can you see why the inner `while` loops don’t make this O(n²)? Think about how many total times `left` and `right` each move across the entire string. Take a guess!

---

📊 Quick Complexity Summary

| Version | Time | Space |
|----------|----------|----------|
| Your solution   | O(n)   | O(n)   |
| Optimized (skip in-place)   | O(n)   | O(1)   | 
|  

Both are acceptable in interviews. The O(1)‑space version signals deeper mastery.

---
🔖 Revision Summary — Two Pointers Core Pattern

- Opposite pointers start at `0` and `n‑1`, move inward with `left < right` as the stop condition.
- Use `while` over `for` when pointer movement isn’t uniform.
- Cleaning input first is valid; skipping in‑place is the space‑optimal alternative.
- Every character is visited at most once → O(n) time.