let n = 5;// Left-Angled triangle

for (let i=0;i<n;i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }

    console.log();
}