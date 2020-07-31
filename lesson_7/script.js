// const box = document.querySelector("div");
// const article = document.querySelectorAll("li");

//parentNode
// console.log(box.parentNode);

// childNodes

// console.log(Array.from(box.childNodes));
// console.log(box.childNodes);
// console.log([...box.childNodes]);

// children

// console.log(box.children);
// lastChild

// console.log(box.lastElementChild);

// console.log(article);

// article.forEach((elem) => {
//   const nestedElem = elem.querySelector("a");
//   console.log(nestedElem.textContent);
//   nestedElem.textContent = "google";
//   nestedElem.setAttribute("href", "https://www.google.com/");
// });

{
  /* <li class="link-item"><a class="link" href="#"></a></li>
<li class="link-item"><a class="link" href="#"></a></li>
<li class="link-item"><a class="link" href="#"></a></li> */
}

const refs = {
  link: document.querySelectorAll(".link"),
  linkGroup: document.querySelector(".link-group"),
  container: document.querySelector(".container"),
};

const links = [
  "https://www.google.com/",
  "https://stackoverflow.com/",
  "https://developer.mozilla.org/",
];

// console.log(refs.link);

// links.forEach((elem) => {
//   refs.linkGroup.innerHTML = `<li class="link-item"><a class="link" href="${elem}">${elem}</a></li>`;
// });

// const createElemets = (tag, className, content) => {
//   const element = document.createElement(tag);
//   element.className = className;
//   element.textContent = content;
//   return element;
// };

// const drawLinks = links.forEach((elem) => {
//   refs.linkGroup.append(createElemets("li", "link-item", elem));
// });

// ---------

const result = links.map(
  (elem) =>
    `<li class="link-item"><a class="link" href="${elem}">${elem}</a></li>`
);

console.log(result.join(" "));

// refs.linkGroup.insertAdjacentHTML("beforeend", result.join(" "));
refs.linkGroup.innerHTML = result.join(" ");
