var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const freq = {};

    for (let val of s) {
        if (freq[val])
            freq[val]++;
        else freq[val] = 1;
    }
    console.log(freq);

    for (let val of t) {
        if (freq[val] > 0) freq[val]--;
        else return false;
    }
    return true;
};