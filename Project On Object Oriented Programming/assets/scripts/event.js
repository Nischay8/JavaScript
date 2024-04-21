const div = document.querySelector('div');
console.log(div);
console.log('working');


const btn = document.querySelector('button');

div.addEventListener('click', event => {
    console.log('inside of DIV');
},true);


btn.addEventListener('click', event => {
    // event.stopPropagation();
    console.log('inside of Button');
})