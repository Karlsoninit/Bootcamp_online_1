// let getNumber;

// let total = 0;

// do {
//   getNumber = prompt("enter number");
//   //   const transformNumber = Number(getNumber);
//   if (!isNaN(getNumber)) {
//     total = total + Number(getNumber);
//   }
// } while (getNumber !== null);

// console.log("total", total);

// const num = 10;

// if (num < 5) {
//   console.log("больше");
// } else {
//   console.log("меньше ");
// }

// const res = num > 5 ? "больше" : "меньше ";

// console.log(res);

// const getNum = Number(prompt("number"));

// const num = getNum;
// const result = num >= 10 && num <= 30;

// if (result) {
//   console.log("проходит, идем дальше");
// }

// const choose = prompt("what coffe");
// const discount = 10;
// let price = 0;

// if (isNaN(choose)) {
//   //   debugger;
//   if (choose.length >= 3 && choose.length <= 10) {
//     console.log("next");
//     switch (choose) {
//       case "latte":
//         price = 30;
//         break;
//       case "capuchino":
//         price = 35;
//         break;
//       case "espresso":
//         price = 20;
//         break;
//       default:
//         price = 0;
//         break;
//     }
//   }
// }

// if (price >= 30) {
//   price = price - discount;
// }

// console.log(price);

let value = 5;

if (true) {
  value = 10;
  console.log(`Block scope after: ${value}`); //10
}

console.log("Global scope: ", value); // 5
