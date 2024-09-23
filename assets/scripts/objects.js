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

    // this filter movie base on the input search of the user 
    const filteredMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
    console.log(filteredMovie);

    filteredMovie.forEach((movie) => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        const {info, ...otherProps} = movie;
        let text = movie.getFormatedTitle() + '-';
        for(const key in info){
            if(key !== 'title'){
                text = text + `${key}: ${info[key]}`
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
        id: Math.random.toString(),
        getFormatedTitle(){
            return this.info.title.toUpperCase()
        }
    };

    movies.push(newMovie);
    renderMovie();
    // console.log(movies);
};

//This search for the specif movie base on the title search 
const searchMovieHandler = ()=>{
    const filterTerm = document.getElementById('filter-title').value
    renderMovie(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);