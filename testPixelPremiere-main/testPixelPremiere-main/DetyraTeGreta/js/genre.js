document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        // Action Movies
        { title: 'Action Movie 2', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 3', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 4', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 5', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 6', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 7', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 8', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 9', genre: 'action', image: 'images/bat-man.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/bat-man.jpg' },

        // Comedy Movies
        { title: 'Comedy Movie 1', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 2', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 3', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 4', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 5', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 6', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 7', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 8', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 9', genre: 'comedy', image: 'images/blood-shot.jpg' },
        { title: 'Comedy Movie 10', genre: 'comedy', image: 'images/blood-shot.jpg' },

        // Drama Movies
        { title: 'Drama Movie 1', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 2', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 3', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 4', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 5', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 6', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 7', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 8', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 9', genre: 'drama', image: 'images/call.jpg' },
        { title: 'Drama Movie 10', genre: 'drama', image: 'images/call.jpg' },

        // Horror Movies
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 2', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 3', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 4', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 5', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 6', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 7', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 8', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 9', genre: 'horror', image: 'images/end-game.jpg' },
        { title: 'Horror Movie 10', genre: 'horror', image: 'images/end-game.jpg' },

        // Romance Movies
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 2', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 3', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 4', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 5', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 6', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Romance Movie 7', genre: 'romance', image: 'images/end-game.jpg' },
        { title: 'Sci-Fi Movie 1', genre: 'sci-fi', image: 'images/end-game.jpg' },
        { title: 'Thriller Movie 1', genre: 'thriller', image: 'images/end-game.jpg' },
        { title: 'Documentary Movie 1', genre: 'documentary', image: 'images/end-game.jpg' }
    ];

    const genreSelect = document.getElementById('genre-select');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');

    const displayMovies = (filteredMovies) => {
        moviesContainer.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesContainer.appendChild(movieElement);
        });
    };

    genreSelect.addEventListener('change', () => {
        const selectedGenre = genreSelect.value;
        const filteredMovies = selectedGenre === 'all' ? movies : movies.filter(movie => movie.genre === selectedGenre);
        displayMovies(filteredMovies);
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        displayMovies(filteredMovies);
    });

    displayMovies(movies); // Initial display
});
