let n=7;
;  //Inverted left-Angled Triangle

for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        process.stdout.write("*");
    }

    for (let k=0;k<i;k++){
        process.stdout.write("");
    }
    console.log();
}
// more preferred code
//let n=4;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write("*");
//     }

//     console.log();
// }