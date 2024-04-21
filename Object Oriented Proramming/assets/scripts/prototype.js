function person() {
    this.age = 30;
    this.name = 'Max';
    this.greet = function () {
        console.log(this);
        console.log(typeof (this));
        console.log('Hi THis is');
    };
}


console.log(person);
const p = new person();
p.greet();
console.log(p.__proto__);