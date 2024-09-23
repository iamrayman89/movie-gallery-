const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

// This render the movie title to the movie list 
const renderMovie = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    if(movies.length === 0){
        movieList.classList.remove('visible');
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML ='';

    
    const filteredMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
    console.log(filteredMovie);

    filteredMovie.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = movie.info.title + '-';
        for(const key in movie.info){
            if(key !== 'title'){
                text = text + `${key}: ${movie.info[key]}`
            }
        } 

        movieEl.textContent = text;
        movieList.append(movieEl);

    });

}

// This add the movie detail add by the user 
const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if(title.trim() === ''||extraName.trim() === ''||extraValue.trim() === '' ){
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    renderMovie();
    // console.log(movies);
};

const searchMovieHandler = ()=>{
    const filterTerm = document.getElementById('filter-title').value
    renderMovie(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);