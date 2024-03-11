const addMovieButton = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const MovieList = document.getElementById('movie-list');
    MovieList.innerHTML = '';
    if (movies.length === 0) {
        MovieList.classList.remove('visible');
        return;
    } else {
        MovieList.classList.add('visible');
    }
    MovieList.innerHTML = '';

    const filterMovies = !filter ? movies : movies.filter(movie =>
        movie.info.title.includes(filter));






    filterMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}:${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        MovieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()

    }

    movies.push(newMovie);
    renderMovies();
    console.log(newMovie);
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};


addMovieButton.addEventListener('click', addMovieHandler);

searchBtn.addEventListener('click', searchMovieHandler);