export const hasDuplicate = (arr) => {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      return true; // Duplicate found
    }
    seen.add(item);
  }
  return false; // No duplicates
};
