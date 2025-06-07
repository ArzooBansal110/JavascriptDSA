let N=20;

function isNumberperfectsq(i){
    const checkperfectsq= Math.sqrt(i);
    const isInt=Number.isInteger(checkperfectsq);
    return  isInt;
}

function benjaminBulb(N){
    let count=0;
    for(let i=1;i<=N;i++){
    if((isNumberperfectsq(i))==true){
        count++;
    }
  
}
 return count;
}
console.log(benjaminBulb(20));