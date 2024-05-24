var currentSlide = 0;
var slides = document.getElementsByClassName("slide");
var videos = document.getElementsByClassName("slide-video");

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        videos[i].pause(); // Pause all videos
    }
    slides[index].style.opacity = 1;
    currentSlide = index;
}

function moveSlide(direction) {
    if (direction === 'next') {
        showSlide(currentSlide + 1);
    } else {
        showSlide(currentSlide - 1);
    }
}

function playVideo() {
    videos[currentSlide].play();
}

function pauseVideo() {
    videos[currentSlide].pause();
}

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide); // Initialize the first slide
});

let currentNowPlayingSlide = 0;
const nowPlayingMovies = document.querySelectorAll('#now-playing-movies .movie');

function moveNowPlayingSlide(direction) {
    if (direction === 'next') {
        currentNowPlayingSlide = (currentNowPlayingSlide + 1) % nowPlayingMovies.length;
    } else {
        currentNowPlayingSlide = (currentNowPlayingSlide - 1 + nowPlayingMovies.length) % nowPlayingMovies.length;
    }

    const offset = -currentNowPlayingSlide * nowPlayingMovies[0].clientWidth;
    document.querySelector('#now-playing-movies .movies-container').style.transform = `translateX(${offset}px)`;
};

let currentTopRatedSlide = 0; // Define currentTopRatedSlide here
document.addEventListener('DOMContentLoaded', function() {
    showTopRatedSlide(currentTopRatedSlide); // Initialize the first slide
});

const topRatedMovies = document.querySelectorAll('#top-rated-movies .movie');

function moveTopRatedSlide(direction) {
    if (direction === 'next') {
        currentTopRatedSlide = (currentTopRatedSlide + 1) % topRatedMovies.length;
    } else {
        currentTopRatedSlide = (currentTopRatedSlide - 1 + topRatedMovies.length) % topRatedMovies.length;
    }

    const offset = -currentTopRatedSlide * topRatedMovies[0].clientWidth;
    document.querySelector('#top-rated-movies .movies-container').style.transform = `translateX(${offset}px)`;
}


document.addEventListener('DOMContentLoaded', function() {
    showTrendingSlide(currentTrendingSlide); // Initialize the first slide
});

let currentTrendingSlide = 0;
const trendingMovies = document.querySelectorAll('#trending-movies .movie');

function moveTrendingSlide(direction) {
    if (direction === 'next') {
        currentTrendingSlide = (currentTrendingSlide + 1) % trendingMovies.length;
    } else {
        currentTrendingSlide = (currentTrendingSlide - 1 + trendingMovies.length) % trendingMovies.length;
    }

    const offset = -currentTrendingSlide * trendingMovies[0].clientWidth;
    document.querySelector('#trending-movies .movies-container').style.transform = `translateX(${offset}px)`;
}




