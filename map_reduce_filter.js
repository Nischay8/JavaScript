let arr=[45,23,21]
console.log(arr);
let a=arr.map((value,index)=>{
    // console.log(value);
    // console.log(index);
    return value+1;
})
// console.log(a);

// array Filter

let arr2=[45,23,21,0,3,5];
let a2=arr2.filter((value)=>{
    return value<10
})
// console.log(a2);

// reduce function 

let newarr3=let arr3=[1,2,3,4,5,6,7,8,9];
arr3.reduce((h1,h2)=>{
    return h1+h2;
})