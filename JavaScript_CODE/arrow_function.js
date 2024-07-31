// This code COntains Meaning of THis and Arrow Function


console.log("Nischay");
// const user = {
//     username: "hitesh",
//     price: 99,
//     welcomeMessage: function () {
//         console.log(`${this.username},welcome to website`);
//         // console.log(this);
//     }


// }


// user.welcomeMessage();
// user.username = "Nischay";
// user.welcomeMessage();


// console.log(this);


// function chai() {
//     console.log(this);
// }

// chai();


const chai = function () {
    let username = "Hitesh"
    console.log(this.username);
}

chai();



// const chai = () => {
//     let username = "hitesh";
//     console.log(this);
// }

// chai();