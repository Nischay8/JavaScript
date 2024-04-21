// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log("DB connected");
})();

((name) => {
    console.log(`DB connect Two ${name}`);
})('Nischay'); //This is Called Names IIEF; 

// 