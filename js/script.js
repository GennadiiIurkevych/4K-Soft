'use strict';

// a = 20;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//   a: 50
// };

// obj.a = 15;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//   const result = 60;
// }

// // console.log(result);

// alert(5);
// [0].push('a'); 

// let namber = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const persone = "Alex asdtyfhuj rdsfb drfjukl, wdfg";
// const pers = "5";

// const bool = true; //false

// console.log(something); //null

// let und;
// console.log(und);

// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };
// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arr1 = [1, 2, 3];

// console.log(arr1[1]);

// const obj1 = {a: 1, b: 2};
// const obj = {
//   Anna: 500, 
//   'Alice': 800
// };

// const arr = ['a', 'b', 'c'];
// arr[10] = '3456';

// console.log(arr[10]);
// console.log(arr);

// const arrObj = {
//   a: 'a',
//   1: 'b',
//   2: 'c',
//   abc: {
//       fed: [{}, {}],
//       def: {

//       }
//   }
// };
// const d = 'd';
// // arrObj.d = d;
// // console.log(arrObj.d);
// arrObj.b = '1234';
// arrObj['c'] = '4321';
// arrObj[d] = '5678';
// console.log(arrObj.d);

// console.log(arrObj[d]);

// console.log(arrObj['b']);
// console.log(arrObj.b);
// console.log(arrObj.c);
// console.log(arrObj['c']);
// console.log(arrObj.d);
// console.log(arrObj['d']);


// // console.log(arr[1]);
// // console.log(arrObj.a);
// console.log(arrObj[1]);

// alert('Hello!');

// confirm("Are you 18?");

// const result = confirm("Are you here?");
// console.log(result);


// const answer = +prompt("Вам є 18?", "18");
// console.log(typeof(answer), answer);

// const answer1 = prompt("Вам є 18?", "");
// console.log(answer1 + 5);

// const answer2 = +prompt("Вам є 18?", "18");
// console.log(typeof(answer2),answer2 + 5);

// const answer3 = prompt("Вам є 18?", "18");
// console.log(5 + answer3 );

// const answers = [];

// answers[0] = prompt("Яке ваше ім'я?", "");
// answers[1] = prompt("Яке ваше прізвище?", "");
// answers[2] = prompt("Скільки вам років?", "");

// console.log(answers);

// document.write(answers);

// console.log(typeof(answers));

// console.log('arr' + ' - object');

// console.log(4 + ' - object');

// console.log(4 + +' - object');
// console.log(4 + +'5');
// console.log(4%2);



// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);
// console.log(isChecked || isClose);



/*Lesson 2.14* Створення додатку/

// const numberOfFilms = +prompt("Скількт фільмів Ви вже подивилися?", "");
// console.log(numberOfFilms);

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: 'false'
// };
// console.log(personalMovieDB);


// const userQuestion1 = prompt("Один з останніх переглянутих  фільмів?", ""),
//       userQuestion2 = +prompt("На скільки оцінете його?", ""),
//       userQuestion3 = prompt("Один з останніх переглянутих фільмів?", ""),
//       userQuestion4 = +prompt("На скільки оцінете його?", "");
// console.log(userQuestion1);
// console.log(userQuestion2);
// console.log(userQuestion3);
// console.log(userQuestion4);

// personalMovieDB.movies[userQuestion1] = userQuestion2;
// personalMovieDB.movies[userQuestion3] = userQuestion4;
// console.log(personalMovieDB);



/*Lesson 2.15 Умови*/

// if ( 4 == 9 ) {
//   console.log('OK!');
// } else {
//   console.log('Error');
// };

// const num  = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('To much!');
// } else {
//   console.log('OK!');
// }

// /*Тернарний оператор*/

// (num === 50) ?  console.log('OK!') : console.log('Error');


// const number = "50";

// switch (number) {
//   case "49":
//      console.log('Неправильно');
//      break;
//   case "100":
//      console.log('Неправильно');
//      break;
//   case "50":
//      console.log('В ціль!');
//      break;
//   default:
//     console.log('Не цього разу');
//      break;
// };


/*Lesson 2.16 Логічні оператори*/

// const hamburger = 5,
//       fries = null;

// if (hamburger && fries) {
//   console.log('Я ситий!');
// }

// console.log(hamburger && fries);

// const hamburger = 3,
//       fries = 1,
//       cola = 2;


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fries');

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Всі ситі!');
// } else {
//   console.log('Ми йдемо');
// }


// const hamburger = 0,
//       fries = null,
//       cola = 0;

// // console.log(hamburger === 3 && cola && fries);

// if (hamburger || cola || fries) {
//   console.log('Всі задоволені!');
// } else {
//   console.log('Ми йдемо');
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// const hamburger = 3,
//       fries = 3,
//       cola = 0,
//       nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//   console.log('Всі задоволені!');
// } else {
//   console.log('Ми йдемо');
// }

// // console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);


// console.log(!0);

/* Завдання*/

console.log( NaN || 2 || undefined ); // -> 2

console.log( NaN && 2 && undefined ); // -> NaN

console.log( 1 && 2 && 3 ); // -> 3

console.log( !1 && 2 || !3 ); // -> 2 (false)

console.log( 25 || null && !3 ); // -> 25

console.log( NaN || null || !3 || undefined || 5); // -> 5

console.log( NaN || null && !3 && undefined || 5); // -> 5

console.log( 5 === 5 && 3 > 1 || 5); // -> 5 (true)


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } // -> Done!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// } // -> Done!

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} // -> не виконуються умови
