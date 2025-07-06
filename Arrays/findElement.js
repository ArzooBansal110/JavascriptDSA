let arr=[6,7,13,19,99,81,74,34];

let findElement=13;

// if findElement present return index, else return -1
for(let i of arr){// why for..of isn't used?
    if(i===findElement){
        console.log(arr[i]);
       return ;
}
}

