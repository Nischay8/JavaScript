// Object Literals

const JsUser = {
    name: "Nischay",
    "full Name": "Nischay Sinha",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: []
}

myArray = ['N', 'I', 'S'];

console.log(JsUser.email);

// console.log(JsUser.full Name);
console.log(JsUser["email"]);

JsUser.greeting = function () {
    console.log("Hello Js User");
}


console.log(JsUser.greeting());