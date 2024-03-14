const addMovieModal = document.getElementById('add-modal');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const startAddMovieButton = document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const entryTextSection = document.getElementById('entry-text');

const movies = [];

function checkingarray() {
    for (const mov of movies) {
        console.log(mov);
    }
}

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}


const renderNewMovieElement = (id, title, imageurl, rating) => {
    const newMoviesElemnt = document.createElement('li');
    newMoviesElemnt.className = 'movie-element';
    newMoviesElemnt.innerHTML = `
    <div class='movie-element__image'>
    <img src="${imageurl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 Stars</p>
    </div>
    `;
    newMoviesElemnt.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMoviesElemnt);
};

const userInputs = addMovieModal.querySelectorAll('input');

const deleteMovieHandler = (movieId) => {
    movieId
}

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}
const togglerBackdrop = () => {
    backDrop.classList.toggle('visible');
}


const toggleMovieModal = () => { //Function()
    addMovieModal.classList.toggle('visible');
    togglerBackdrop();
};


const cancelAddMovie = () => {
    toggleMovieModal();
    clearMovieInputs();
}


const backdropClickHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {

    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || +ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please Enter valid values Between 1 and 5');
        return;
    }

    const newMovies = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovies);
    console.log(movies);
    console.log(typeof(movies));
    renderNewMovieElement(newMovies.id, newMovies.title, newMovies.image, newMovies.rating);
    toggleMovieModal();
    clearMovieInputs();
    updateUI();
    checkingarray();
};




startAddMovieButton.addEventListener('click', toggleMovieModal);

backDrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);