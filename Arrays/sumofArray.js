const arr1=[9,9,6,7];
const arr2=[9];
const sum=[];
let i=arr1.length-1;
let j=arr2.length-1;
let k=i>j?i:j;//k used here as index to put result in sum array;

let c=0;
while(k>=0){

let d=c;
if(i>=0){
    d+=arr1[i];
}
if(j>=0){
    d+=arr2[j];
}
c=Math.floor(d/10);
d=d%10;
// console.log(d);
sum.unshift(d);
i--;
j--;
k--;
}

if(c!=0) sum.unshift(c);
console.log(sum);