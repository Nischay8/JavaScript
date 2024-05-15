// // ES6 Ke Baad use Kar Rhe hain
// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptpassword() {
//         return `${this.password} abc`;
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }


// const chai = new User('Nischay', 'nischay@gmail.com', 'NormalMan');

// console.log(chai.encryptpassword());


// console.log(chai.changeUserName());

// behind The Scene

function Userna(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


Userna.prototype.encryptpassword = function () {
    return `${this.password} abc`;
}


const tes = new Userna('tes', 'nischay.com', 'sfa');

console.log(tes);