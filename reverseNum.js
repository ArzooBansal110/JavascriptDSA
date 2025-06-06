let n = 45987;

while (n != 0) {
    let i = Math.floor(n % 10);  // Get last digit
    console.log(i);              // Print the digit
    n = Math.floor(n / 10);      // Remove last digit
}
