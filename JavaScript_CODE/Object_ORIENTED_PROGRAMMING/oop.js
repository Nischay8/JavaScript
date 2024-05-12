// const user = {
//     username: "Nischay",
//     loginCount: 8,
//     signnedIN: true,

//     getUserDetail: function () {
//         // console.log("Got Detail of User From DatabAse");
//         console.log(`UserName is: ${this.username}`)
//     }
// }


// console.log(user.getUserDetail());


// const promiseOne=new Promise(function())

// const Date= new Date();+

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const UserOne = User("hitesh", 12, true);