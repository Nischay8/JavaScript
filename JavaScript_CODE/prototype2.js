// let myName = "Nischay        ";

// console.log(myName);


// console.log(myName.truelength);


let MyHeros = ['Thor', 'spiderman'];

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log("Hitesh is Present in all Objects");
}



// heroPower.hitesh();

MyHeros.hitesh();



