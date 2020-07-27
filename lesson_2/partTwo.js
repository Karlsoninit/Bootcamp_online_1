"use strict";

// function declaration

// let balance = 0;
// const result = add(2, 2);

// function add(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return;
//   }
//   return a + b;
// }

// console.log("result :", result);

// if (result) {
//   balance += result;
// }

// console.log("balance", balance);

// function expresion

// let balance = 0;

// const addTwoNumbers = function (a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return;
//   }
//   return a + b;
// };

// const result = addTwoNumbers(2, 2);

// if (result) {
//   balance += result;
// }

// console.log("balance", balance);

// стрелочная function

const fn2 = (...rest) => {
  // перебрать массив !done
  // проверить на число
  // если не число пропускаем
  let total = 0;
  for (let elem of rest) {
    // console.log(elem, "check num :", typeof elem === "number");
    // if (typeof elem === "number") {
    //   total += elem;
    // }
    if (!isNaN(elem)) {
      total += Number(elem);
    }
  }
  return total;
};

const res = fn2(2, 3, 4, "5", 6, 6);

console.log("result :", res);

// анонимные fn

// (function () {
//   fn1(2, 3, 4, 5, 6, 6);
//   fn2(2, 3, 4, 5, 6, 6);
// })();

// (function () {
//   console.log("one");
// })();
// (function () {
//   console.log("two");
// })();
// (function () {
//   console.log("three");
// })();

//

// const sum = (flag, a, b) => (flag === "increment" ? a + b : a - b);

// console.log(sum("decrement", 9, 4));

// const sum = (flag, a, b) => {
//   const res = flag === "increment" ? a + b : a - b;
//   return res;
// };

// console.log(sum("decrement", 9, 4));

// ----

const arr = [
  [3, 4, 5, 6],
  [75, 7, 85, 33],
];

console.log(arr);

const sum = (param) => {
  let total = 0;
  for (let i = 0; i < param.length; i++) {
    console.log(param[i]);
    for (let j = 0; j < param[i].length; j++) {
      const element = param[i][j];
      console.log("element :", element);
      total += element;
    }
  }
  return total;
};

// const summ = sum(arr);
// console.log(summ);

// console.log([3, 4, 5, 6].concat([75, 7, 85, 33]));

// moc data
// const a = [3, 4, 5, 6];
// const b = [75, 7, 85, 33];
// const c = [75, 7, 7, 33, 2];
// const d = [75, 7, 85, 33, 43, 3, 26, 9];

const tranformArr = (...rest) => {
  const uniqueArr = [];
  for (let elem of rest) {
    uniqueArr.push(...elem);
  }
  return uniqueArr;
};

// const uniqueArr = tranformArr(a, b, c, d);

// const sum = () => {
//   // some logic
// };

// const total = sum(uniqueArr);

const findUniqueNumber = (arr, ...rest) => {
  const unique = [];
  console.log(arr);
  console.log(rest);
  console.log(tranformArr(arr, rest));
  for (let elem of tranformArr(arr, rest)) {
    console.log(elem);
    if (!unique.includes(elem)) {
      unique.push(elem);
    }
  }
  return unique;
};

const uniqueNumbers = findUniqueNumber(
  [1, 4, 7, 8, 3, 4, 5],
  2,
  5,
  8,
  4,
  23,
  4
);

console.log(uniqueNumbers.sort());

(() => {
  console.log("ha-ha");
})();

(() => {})();
