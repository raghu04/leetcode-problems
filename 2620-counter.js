/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function (n) {
  let count = n - 1;
  return function () {
    return count++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
