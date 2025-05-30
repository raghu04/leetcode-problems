var mergeAlternately = function(word1, word2) {
    let result = "";
    let i = 0;

    while (i < word1.length || i < word2.length) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
        i++;
    }

    return result;
};

// Example
console.log(mergeAlternately("abc", "pqr"));   // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs"));   // Output: "apbqrs"