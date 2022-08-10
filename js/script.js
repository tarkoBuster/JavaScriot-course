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

//Практика
// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt("How many films you watch?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("How many films you watch?", "");
//   }
// }
// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один з останніх фільмів?", ""),
//       b = prompt("Оцінка йому?", "");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("beginner");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("meddle");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("senior");
//   } else {
//     console.log("error");
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(
//       `Ваш улюблений жанр під номером ${i}`
//     );
//   }
// }

// writeYourGenres();

// console.log(personalMovieDB);

//оператор
// if (4 == 4) {
//     console.log('Ok!');
// }

// let num = 50;
//цикли
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for(let i =1; i < 8; i++) {
//     if(i === 6) {
//         continue;
//     }

//     console.log(i);
// }

//Масиви та псевдомасиви
const arr = [1, 2, 3, 6, 7, 8];

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} в середині масиву ${arr}`);
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
// console.log(products);
products.sort();
console.log(products.join('; '));