/**
 * https://leetcode.com/problems/find-the-difference/
 * Finds the difference between two strings s and t, where t is generated by
 * shuffling string s and adding one more character.
 * @param {string} s - The original string
 * @param {string} t - The modified string with one additional character
 * @return {character} - The extra character in string t
 */
const findTheDifference = function (s, t) {
  // Convert string s into an array of characters and iterate over each character
  s.split("").map((char) => {
    // Find the position of the character in string t
    const charPos = t.indexOf(char);
    // If the character exists in t, remove it from t
    if (charPos > -1) {
      t = t.slice(0, charPos) + t.slice(charPos + 1);
    }
  });
  // Return the remaining character in t, which is the extra character
  return t;
};

/**
 * https://leetcode.com/problems/find-the-difference/
 * Finds the difference between two strings s and t, where t is generated by
 * shuffling string s and adding one more character.
 * @param {string} s - The original string
 * @param {string} t - The modified string with one additional character
 * @return {character} - The extra character in string t
 */
const findTheDifference2 = function (s, t) {
  // Create a frequency map of characters in s
  const charMap = {};
  s.split("").map((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  // Iterate over each character in t and remove it from the map if it exists
  t.split("").map((char) => {
    if (charMap[char]) {
      charMap[char]--;
    }
  });
  // Return the extra character in t, which has a count greater than 0
  for (let char in charMap) {
    if (charMap[char] > 0) {
      return char;
    }
  }
  return null;
};
