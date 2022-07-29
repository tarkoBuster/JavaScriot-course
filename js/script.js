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

const numberOfFilms = +prompt("How many films you watch?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один з останніх фільмів?", ""),
        b = prompt("Оцінка йому?", "");

        if(a !=null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('beginner');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('meddle');
} else if (personalMovieDB.count >= 30) {
    console.log ('senior');
} else {
    console.log('error');
}

console.log(personalMovieDB);

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
