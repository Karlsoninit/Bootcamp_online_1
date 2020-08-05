import { helpers } from "./services.js";

const handleClick = () => {
  helpers.drawAllNumbers();
};

const btn = document.body.querySelector(".btn");

if (btn) {
  btn.addEventListener("click", handleClick);
}
