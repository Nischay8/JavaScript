let marks=[91,82,63,84,null,false,"Not Present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[9]);
// to calculate the length
let num=[1,2,3,34,4,5,6,7,8,9]
console.log(num.length);
// To join the Array and Concert Them into String
let c=num.join('-');
console.log(c);
// see the resultend is in string
console.log(typeof(c));
num.pop();
console.log(num);
// sorting in array
let sorted_array=num.sort();
// console.log(num.reverse());

// to add new items in array use splice
num.splice(2,3,21,22,23,24);
console.log(num);




