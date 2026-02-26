# Longest Substring Without Repeating Characters

Difficulty: Medium | Pattern: Dynamic sliding window

This is a classic Meta/Google interview question.

>Given a string `s`, find the length of the longest substring without repeating characters.

```javascript
Input:  s = "abcabcbb"
Output: 3
Explanation: "abc" is the longest (length 3)

Input:  s = "bbbbb"
Output: 1  
Explanation: "b" (all characters repeat)

Input:  s = "pwwkew"
Output: 3
Explanation: "wke" (note: "pwke" is not valid because it's not contiguous)
```

---

## 🤔 Think Through This First

Unlike Problem 1, the window size is not fixed. It needs to grow and shrink dynamically.

Question 1: How do you know when you've encountered a repeating character? What data structure could help you track which characters are currently in your window?

Question 2: When you find a duplicate, what should you do?

- Example: You have window `"abc"` and next character is `'a'`. What happens?

Question 3: Do you need to track the actual characters in the window, or just check if a character exists? Think about what information you need.

Take your time reasoning through this. The logic is subtler than the fixed window. Answer those questions first, then we'll build the solution together. 🎯