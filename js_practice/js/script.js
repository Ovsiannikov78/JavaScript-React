"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,

    start: function () {
        this.numberOfFilms = +prompt("How many movies have you seen?", "");

        while (this.numberOfFilms == '' || this.numberOfFilms == null || isNaN(this.numberOfFilms)) {
            this.numberOfFilms = +prompt("How many movies have you seen?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const answer1 = prompt("One of the latest movies you've seen?", ""),
                answer2 = prompt("How would you rate it?", "");

            if ((answer1 && answer2) !== null && (answer1 && answer2) !== '' && answer1.length < 50) {
                personalMovieDB.movies[answer1] = answer2;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    checkStatusOfTheCinematographerAmateur: function () {
        if (personalMovieDB.count < 10) {
            console.log('Not a lot of movies watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log("You're a movie lover");
        } else {
            console.log('Error');
        }
    },
    toggleVisibleMyDB: function () {
        this.private = !this.private;
    },

    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Your favourite genre at number - ${i}`).toLowerCase();

            if (genre === null || genre === '') {
                console.log('Please enter valid data');
                i--;
            } else {
                this.genres.push(genre);
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Favourite genre # ${i + 1} - is ${item}`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.checkStatusOfTheCinematographerAmateur();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();





