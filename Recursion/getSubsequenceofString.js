function getSubsequences(str) {
    // Base case: if the string is empty, return an array with an empty string
    if (str.length === 0) {
        return [''];
    }

    // Get first character and rest of the string
    let ch = str[0];            // e.g., 'a'
    let ros = str.slice(1);     // rest of string, e.g., "bc"

    // Recursively get subsequences of rest of the string
    let rres = getSubsequences(ros);  // e.g., ["", "c", "b", "bc"]

    let mres = [];

    // Subsequence without including the current char
    for (let rstr of rres) {
        mres.push(rstr);
    }

    // Subsequence including the current char
    for (let rstr of rres) {
        mres.push(ch + rstr);
    }

    return mres;
}
getSubsequences("abc").forEach(subseq => console.log(subseq));

