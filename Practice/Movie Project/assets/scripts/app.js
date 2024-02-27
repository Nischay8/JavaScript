const addMovieModal = document.getElementById('add-modal');

const cancelAddMovieButton=addMovieModal
const startAddMovieButton = document.querySelector('header button');


const backDrop = document.getElementById('backdrop');



const togglerBackdrop = () => {
    backDrop.classList.toggle('visible');
}


const toggleMovieModal = () => { //Function()
    addMovieModal.classList.toggle('visible');
    togglerBackdrop();
};



const backdropClickHandler=()=>{
    toggleMovieModal();
}

startAddMovieButton.addEventListener('click', toggleMovieModal);

backDrop.addEventListener('click',toggleMovieModal);