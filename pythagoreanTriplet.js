function isPythagoreanTriplet(a,b,c){
    let max=Math.max(a,b,c);
    let x,y;

    if(max==a){
        x=b;
        y=c;

    }
    else if(max==b){
        x=a;
        y=c;

    }
   else{
        x=a;
        y=b;
   }

    
    return x*x+y*y==max*max;
}
console.log(isPythagoreanTriplet(10,8,6));
