import { Cashier } from "./srvices.js";

const mango = new Cashier("Mango");

mango.sell("Phone");
mango.sell("Laptop");
mango.sell("Tv");

const den = new Cashier("Den");

mango.sell("Phone");
mango.sell("Laptop");
mango.sell("Tv");

const poly = new Cashier("Poly");

mango.sell("Phone");
mango.sell("Laptop");
mango.sell("Tv");

// call
console.log("call mango", mango);

const meng = {};

const arr = [];
const checkAllCashiers = (cashier) => {
  //   arr.push({ ...cashier });
  meng[cashier.name] = cashier;
  return meng;
};

console.log(checkAllCashiers(mango));
console.log(checkAllCashiers(den));
console.log(checkAllCashiers(poly));

const MENEGER = (name) => {
  return meng[name];
};

console.log(MENEGER("Poly"));
