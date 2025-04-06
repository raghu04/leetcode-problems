// Count the frequency of each character in a string
export const frequencyOfChars = (str) => {
  const frequency = {};
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
};
