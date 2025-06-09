let n = 5;// Left-Angled triangle

for (let i=0;i<n;i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*\t");
    }

    for (let k=n; k>=n; k--) {
        process.stdout.write("\t");
    }
    console.log();
}