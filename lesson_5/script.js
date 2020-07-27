import "./monday.js";

// const father = {
//   lastName: "Bond",
// };

// const son = {
//   name: "James",
//   age: 18,
// };

// // const famaly = { ...father, ...son };

// // console.log(famaly);

// const famaly = Object.assign({}, father, son);

// console.log(famaly);

// console.log(father);

// // ------------- construct ----

// const clientCardTemplate = {
//   name: "Jhone",
//   lastName: "Dunkan",
//   mobile: "087653333",
//   email: "dunkan@gmail.com",
// };

// // const template = {
// //   name: "",
// //   lastName: "",
// //   mobile: "",
// //   email: "",
// // };

// function call() {
//   console.log(`we call my client : ${this.mobile}`);
// }

// console.log(clientCardTemplate);

// call.call(clientCardTemplate);

// const Template = function (name, lastName, mobile, email) {
//   this.name = name;
//   this.lastName = lastName;
//   this.mobile = mobile;
//   this.email = email;

//   this.call = function () {
//     console.log(`we call my client : ${this.mobile}`);
//   };
//   this.sendEmail = function () {
//     console.log(`send email : ${this.email}`);
//   };
// };

// console.log("Template", Template);

// const jhone = new Template(
//   "Jhone",
//   "Dunkan",
//   "806767832322",
//   "dunkan@gmail.com"
// );

// const danny = new Template(
//   "Danny",
//   "Devito",
//   "806434332322",
//   "danny@gmail.com"
// );

// console.log(danny);

// for (let key of Object.keys(danny)) {
//   if (typeof danny[key] !== "function") {
//     console.log(danny[key]);
//   }
// }

// // const usersData = [];

// // usersData.push(jhone, danny);

// // console.log(usersData);

// // for (let user of usersData) {
// //   console.log("alone user", user);
// //   console.log(Object.keys(user));
// // }

// const mango = {
//   name: "Mango",
//   sales: 0,
//   saleProducts: [],
//   sell(product) {
//     this.sales += 1;
//     this.saleProducts.push(product);
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sell("mobilePhone"));
// console.log(mango.sell("charged"));
// console.log(mango.sell("mobileGlass"));

// // call
// console.log(mango);
// // sell(product: any): string
