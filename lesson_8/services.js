class Helpers {
  number = [];
  $box = document.querySelector(".box");

  drawToHtml = (param) => {
    if (param) {
      this.saveNumber(param);
    }
    document.querySelector(".box").innerHTML = param;
  };

  saveNumber = (num) => {
    this.number.push(num);
  };

  get getNumber() {
    return this.number;
  }

  drawAllNumbers = () => {
    const result = this.number.reduce((acc, number) => {
      return (acc += `<h2>${number}</h2>`);
    }, "");
    console.log("result", result);
    console.log("$box", this.$box);
    this.$box.innerHTML = "";
    this.$box.insertAdjacentHTML("beforeend", result);
  };
}
export const helpers = new Helpers();
