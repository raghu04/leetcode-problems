/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return x.toString() === x.toString().split("").reverse().join("");
};

/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome1 = function (x) {
  const numStr = x.toString();
  let left = 0;
  let right = numStr.length - 1;

  while (left < right) {
    if (numStr[left] !== numStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
