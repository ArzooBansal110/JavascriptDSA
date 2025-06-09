const n=5;// Right-Angled Triangle


for(let i=1;i<=n;i++){
    for(let j=n;j>i;j--){// this loop is for spaces
        process.stdout.write(" ");
    }
    for(let k=0;k<i;k++){ // this loop is for stars
        process.stdout.write("*");
    }
    console.log();
}