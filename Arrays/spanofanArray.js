let arr=[15,67,100,32,1];

// span here means difference between maximum and minimum number

let max=arr[0];
let min=arr[0];

for(let element of arr){
    if(element>max) max=element;
    if(element<min) min=element;
}
console.log("Maximum is",max);
console.log("Minimum is",min);
console.log("Span is",max-min)