const n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i==0)
        process.stdout.write('*');
        else if(i==n-1)
        process.stdout.write('*');
        else  if(i+j==n-1)
        process.stdout.write('*');
        else process.stdout.write(' ');
    }
    console.log();
}