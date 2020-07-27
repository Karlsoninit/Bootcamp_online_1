import { message, products } from "./srvices.js";

// const storeLogic = (id, prod) => {
//   const result = finById(id, prod);
//   console.log("result", result);
// };

// const finById = (id, products) => {
//   for (let product of products) {
//     if (product.id === id) {
//       return product;
//     }
//   }
// };

// storeLogic(14, products);

// ----------------------------

// const user = {
//   name: "Jhon",
//   choose: ["S"],
// };

// const storeLogic = (user, callback) => {
//   const sizes = user.choose;
//   const res = callback(sizes);
//   console.log(Math.round(res));
// };

// const findTShirt = (props) => {
//   let total = 0;
//   const arr = [];
//   for (let product of products) {
//     for (let size of props) {
//       if (product.availableSizes.includes(size)) {
//         arr.push(product);
//         total += product.price;
//       }
//     }
//   }
//   console.log(arr);
//   return total;
// };

// storeLogic(user, findTShirt);

// console.log("work");

// const counter = () => {
//   let count = 0;
//   const fn = () => {
//     count++;
//     console.log(count);
//   };
//   return fn;
// };

// const result = counter();

// result();
// result();
// result();
// result();

// const secondCall = counter();
// console.log("--- secondCall ---");
// secondCall();
// secondCall();

// result();
// result();

// const makeShef = function (name) {
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const jhon = makeShef("Jhon");
// console.log(jhon);

// jhon("fish");

// const add = function (num) {
//   const d = function innerFn(number) {
//     return num + number;
//   };
//   return d;
// };

// const add = (a) => (b) => a + b;

// add(5)(3); // 8

// const add = (num1) => (num2) => {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else {
//     console.log("not a number");
//   }
// };

// console.log(add(2)(3));

// function fn() {

// }

const TShirt = {
  id: 13,
  sku: 51498472915966366,
  title: "Dark Thug Blue-Navy T-Shirt",
  description: "",
  availableSizes: ["M"],
  style: "Front print and paisley print",
  price: 29.45,
  installments: 5,
  currencyId: "USD",
  currencyFormat: "$",
  isFreeShipping: true,
};

const MaxTSihrt = {
  id: 0,
  sku: 8552515751438644,
  title: "Cat Tee Black T-Shirt",
  description: "14/15 s/nº",
  availableSizes: ["X", "L", "XL", "XXL"],
  style: "Branco com listras pretas",
  price: 10.9,
  installments: 9,
  currencyId: "USD",
  currencyFormat: "$",
  isFreeShipping: true,
};

function showAllSize(param, word) {
  // console.log(this.availableSizes)

  return `${param} ${this.sku}`;
}

// console.log(showAllSize.apply(MaxTSihrt, ["your sku number is :", "next"]));

const callWithBind = showAllSize.bind(
  MaxTSihrt,
  "your sku number is :",
  "next"
);

console.log(callWithBind());
