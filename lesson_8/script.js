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
import { Services } from "./observer.js";

const services = new Services();

const refs = {
  container: document.querySelector("#container"),
  navigation: document.querySelector("#navigation"),
};

const createProductCard = (param) => {
  const markup = param.reduce(
    (acc, product) =>
      acc +
      `<li class='item' data-id='${product.id}' ><img  src='https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png' data-fullImage='./products/${product.sku}_1.jpg' /></li>`,
    ""
  );
  refs.container.innerHTML = "";
  refs.container.insertAdjacentHTML("beforeend", markup);

  const images = refs.container.querySelectorAll("img");
  services.observer(images);
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

// ----------- observer ---------

//--------------- unique size

const uniqueSize = function findUniqueSizeInAllProducts(props) {
  return [...new Set(props.flatMap((elem) => elem.availableSizes))];
};

// nav size menu

const navigation = function drawUniqueSize() {
  const sizes = uniqueSize(products);
  const markup = sizes
    .reduce((acc, size) => {
      acc.push(
        `<li data-size='${size}' class='size-item'><h2 class='title'>${size}</h2></li>`
      );
      return acc;
    }, [])
    .join("");

  console.log("markup", markup);
  refs.navigation.insertAdjacentHTML("beforeend", markup);
};

navigation();

// ---------- get size before filter products

const handleClick = function findUserSize(evt) {
  if (evt.target.nodeName === "UL") {
    return;
  }

  let size = "";
  if (evt.target.nodeName === "LI") {
    size = evt.target.dataset.size;
  } else if (evt.target.nodeName === "H2") {
    size = evt.target.parentNode.dataset.size;
  }

  const filterProduct = products.filter((product) =>
    product.availableSizes.includes(size)
  );
  console.log("filterProduct", filterProduct);
  createProductCard(filterProduct);
};

refs.navigation.addEventListener("click", handleClick);
