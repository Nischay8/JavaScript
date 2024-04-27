const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Mapp Function

// const newNums = myNums.map((num) => {
//     return num + 10;
// })


// console.log(newNums);


const NewNums = myNums.map((num) => num * 10).map((num) => num + 1).filter((it)=>it>40);



console.log(NewNums);