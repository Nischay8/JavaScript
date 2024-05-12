function multiplBy5(num) {
    return num * 5;
}

multiplBy5.power = 2



console.log(multiplBy5(5));
console.log(multiplBy5.power);
console.log(multiplBy5.prototype);


function createUser(username, score) {


    this.username = username;

    this.score = score;
}


createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printME = function () {
    console.log(`Score is ${this.score}`);
}


const chai = new createUser("Chai", 25);

chai.printME();




