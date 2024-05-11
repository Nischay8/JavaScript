// const promiseOne = new Promise(function (resolve, reject) {
//     // DO an Asyn Task
//     // DB Task Calls,CryptoGraphy,Network Calls,etc.
//     setTimeout(function () {
//         console.log('Asyn task is compelete');
//         resolve();
//     }, 1000);
// });


// promiseOne.then(function(){
// console.log("Promise consumed");
// });



// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Asyn Task 2");
//         resolve();
//     });
// }).then(function () {
//     console.log("Asyn 2 Resolved");
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             userName: "Chai",
//             Email: "Chai@gmail.com"
//         })
//     }, 1000);
// })


// promiseThree.then(function (user) {
//     console.log(user)
// });



// const PromiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let Error = true
//         if (!Error) {
//             resolve({
//                 userName: "Nischay Sinha",
//                 Email: "nischey.me008@gmail.com",

//             })
//         } else {
//             reject("Wrong Data Is Given");
//         }
//     }, 1000)
// })


// PromiseFour.then((user) => {
//     console.log(user);
//     return user.userName;
// }).then((myusername) => {
//     console.log(myusername);
// }).catch((e) => {
//     console.log(e);
// })

const promiseFive = new Promise(function (resolve, reject) {

});


promiseFive.then