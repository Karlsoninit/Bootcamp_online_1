// import { helpers } from "./services.js";
// import "./drower.js";

// const refs = {
//   input: document.querySelector(".input"),
// };

// function handleChange(evt) {
//   const number = Number(evt.target.value);
//   console.log("number", number);
//   //   helpers.drawToHtml(number);
//   //   helpers.saveNumber(number);
// }

// refs.input.addEventListener("change", handleChange);

// const refs = {
//   parent: document.querySelector("#parent"),
//   child: document.querySelector("#child"),
//   innerChild: document.querySelector("#inner-child"),
//   container: document.querySelector("#container"),
// };

// refs.innerChild.addEventListener("click", (evt) => {
//   evt.stopImmediatePropagation();
//   console.log("innerChild");
// });
// refs.child.addEventListener("click", (evt) => {
//   console.log("child");
//   //   console.log("currentTarget", evt.currentTarget.querySelector("a"));
//   console.log("target", evt.target);
// });
// refs.parent.addEventListener("click", () => console.log("parent"));
// refs.container.addEventListener("click", () => console.log("container"));

// document
//   .querySelector("#container")
//   .addEventListener("click", (evt) => console.log(evt.currentTarget));

// ----------

import { products } from "./products.js";

const refs = {
  container: document.querySelector("#container"),
};

const createProductCard = (param) => {
  const markup = param.reduce(
    (acc, product) =>
      acc +
      `<li data-id='${product.id}' ><img  src='./products/${product.sku}_1.jpg' /></li>`,
    ""
  );
  refs.container.insertAdjacentHTML("beforeend", markup);
};

createProductCard(products);

const moreInfo = (evt) => {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log("evt.target", evt.target.parentNode.dataset);
  const id = evt.target.parentNode.dataset.id;
  console.log("id", id);
  const info = products.find((elem) => elem.id === Number(id));
  console.log("info", info);
  if (refs.container.childNodes.length) {
    evt.target.parentNode.insertAdjacentHTML(
      "beforeend",
      `<h2>${info.title}</h2>`
    );
  }
};

refs.container.addEventListener("click", moreInfo);

console.log(refs.container.childNodes.length);
