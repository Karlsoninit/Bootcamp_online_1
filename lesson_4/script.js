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

const user = {
  name: "Jhon",
  choose: ["S"],
};

const storeLogic = (user, callback) => {
  const sizes = user.choose;
  const res = callback(sizes);
  console.log(Math.round(res));
};

const findTShirt = (props) => {
  let total = 0;
  const arr = [];
  for (let product of products) {
    for (let size of props) {
      if (product.availableSizes.includes(size)) {
        arr.push(product);
        total += product.price;
      }
    }
  }
  console.log(arr);
  return total;
};

storeLogic(user, findTShirt);

console.log("hello");
