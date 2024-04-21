



// let printName = function (hometown, state) {
//     console.log(this.firstname + " " + this.lastName + " from " + hometown + " ," + state);
// }

// let name2 = {
//     firstname: "Nischay",
//     lastName: "Sinha",
// }


// let printMyname = printName.bind(name2, "Giridih", "Jharkhand");

// console.log(printMyname);

// printMyname();



const user = {
    name: "CoderGyan",
    printName() {
        console.log(this.name);
    }
}


const user2 = {
    name: "SinhaNischay"
}

let pnt= user.printName.bind(user2);

pnt();