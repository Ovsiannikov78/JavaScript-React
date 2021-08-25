"use strict";

// 1 task
const numberOfFilms = +prompt("How many movies have you seen?", "");
console.log(numberOfFilms);

// 2 task
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

console.log(personalMovieDB);

// 3 task
const answer1 = prompt("One of the latest movies you've seen?", "");
const answer2 = prompt("How would you rate it?", "");

personalMovieDB.movies[answer1] = answer2;

console.log(personalMovieDB.movies);



