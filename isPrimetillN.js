const n=50;

function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }

    }
    return true;
}

for(let i=2;i<=n;i++){
    if(isPrime(i)){
        console.log(i)
    }
}