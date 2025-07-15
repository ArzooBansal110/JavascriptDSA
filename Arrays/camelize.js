function Camelize(str){
    return str
   .split('-')
   .map((word,index)=>
     index===0?word : word[0].toUpperCase()+word.slice(1)  
    )
    .join('');

}
console.log(Camelize("my-web-page"));
console.log(Camelize("lets-camelize-words"));

