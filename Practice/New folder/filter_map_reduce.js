// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   //   console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FilteredNumber = myNums.filter((num) => num > 5);

// console.log(FilteredNumber);

// const mapedValues = myNums.map((num) => num * 8);

const mapedValues = myNums.map((e) => {
  return e * 10;
});

console.log(mapedValues);
