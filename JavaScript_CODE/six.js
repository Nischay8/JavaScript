// const coding = ['js', 'ruby', 'java', 'python', 'ccp'];


// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// });

// console.log(values);
// filter

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = mynums.filter((num) =>{
//     return num > 5

// });

const newNums = [];

mynums.forEach((item) => {
    if (item > 5) {
        newNums.push(item)
    }
})


console.log(newNums);