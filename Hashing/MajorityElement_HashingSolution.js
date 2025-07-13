var majorityElement = function (nums) {
    // Step 1: Create a hashmap to store frequency of each number
    let counts = {};

    // Step 2: Count how many times each number appears
    for (let num of nums) {
        if (!counts[num]) {
            // If the number hasn't appeared before, set its count to 1
            counts[num] = 1;
        } else {
            // If it already exists, increase the count
            counts[num]++;
        }
    }

    // Step 3: Check which number appears more than n/2 times
    for (let num in counts) {
        if (counts[num] > nums.length / 2) {
            // If found, return that number (convert back to number type)
            return Number(num);
        }
    }

    // Step 4: If no majority element found (as a fallback, though problem guarantees one)
    return 0;
};
