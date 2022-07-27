"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// let obj = {
//     name: 'Taras',
//     age: '20',
//     isStudent: true
// };
// console.log(obj.isStudent);

// let arr =['Taras', 20, true];
// console.log(arr[0]);

// alert ('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Вам є 18?', '18');
// console.log(answer);

const numberOfFilms = +prompt('How many films you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів?', ''),
      b = prompt('Оцінка йому?', ''),
      c = prompt('Один з останніх фільмів?', ''),
      d= prompt('Оцінка йому?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);