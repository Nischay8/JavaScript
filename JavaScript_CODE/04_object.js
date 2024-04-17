const tinderUser = {};


tinderUser.id = "123abc";

tinderUser.name = "Sam";

tinderUser.idLoggedIn = false;



// console.log(tinderUser);

const regularUser = {
    email: "soma@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obje1 = {
    1: "a",
    2: "b"
}

const obje2 = {
    3: "a",
    4: "b"
}

// const object3 = { obje1, obje2 };


const object4 = Object.assign(obje1, obje2);

// console.log(object4);

// console.log(object3);

const course = {
    courseName: "js in Hindi",
    coursePrice: 99,
    courseInstructor: "Nischay Sinha"
}


const { courseInstructor } = course;

console.log(courseInstructor);