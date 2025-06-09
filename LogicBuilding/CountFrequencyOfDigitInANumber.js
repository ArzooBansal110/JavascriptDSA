let n = 756787;
let N = 7;
let count = 0;

while (n != 0) {
    let i = (n % 10);
    if (i == N) {
        count++;
    }
    n = Math.floor(n / 10);

}
console.log(count);
