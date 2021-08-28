"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you seen?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you seen?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function checkStatusOfTheCinematographerAmateur () {
    if (personalMovieDB.count < 10) {
        console.log('Not a lot of movies watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        console.log("You're a movie lover");
    } else {
        console.log('Error');
    }
}

checkStatusOfTheCinematographerAmateur();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Your favourite genre at number - ${i}`));
    }
}

writeYourGenres();




