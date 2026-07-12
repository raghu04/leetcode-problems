/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    let y = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === y) {
        indices.push(i);
        indices.push(j);
      }
    }
  }
  return indices;
};

/**
 * Optimized Solution 2
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
