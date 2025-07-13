var majorityElement = function (nums) {
    let count = 0;           // This keeps track of the "balance" of the current candidate
    let candidate = null;    // This will store the current majority candidate

    // Step 1: Find the candidate that might be the majority
    for (let num of nums) {
        if (count === 0) {
            // If count is 0, pick the current number as the new candidate
            candidate = num;
        }

        if (num === candidate) {
            // If current number matches the candidate, increment the count
            count += 1;
        } else {
            // If current number is different, decrement the count
            count -= 1;
        }
    }

    // Step 2: Return the candidate
    // The problem guarantees that a majority element exists,
    // so we don’t need to verify the count at the end.
    return candidate;
};
