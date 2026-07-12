/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let i = 0,
    maxLen = 0;

  for (let j = 0; j < s.length; j++) {
    while (charSet.has(s[j])) {
      charSet.delete(s[i]);
      i++;
    }
    charSet.add(s[j]);
    maxLen = Math.max(maxLen, j - i + 1);
  }
  return maxLen;
};
