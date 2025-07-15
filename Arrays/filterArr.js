function filterArr(arr,a,b){
    return arr.filter(item=>(a<=item && b>=item))
};
let arr=[4,7,9,1,6];
let filtered = filterArr(arr,4,8);
console.log("filtered array :" +filtered);
console.log("original aray:" ,arr); 
