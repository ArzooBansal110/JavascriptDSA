var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const freq = {};

    for (let val of s) {
        if (freq[val]==undefined)
            freq[val]=1;
        else freq[val]++;
    }
    console.log(freq);

    for (let val of t) {
        if (freq[val] > 0) freq[val]--;
        else return false;
        
    }
    console.log(freq)
    return true; 
};
console.log(isAnagram("she", "hes"))
