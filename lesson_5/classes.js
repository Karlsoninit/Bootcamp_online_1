// ----------------- Famaly

// const Famaly = function (name = "default") {
//   this.name = name;
//   this.lastName = "Braun";

//   Famaly.person++;
//   Famaly.nation = "Ukranian";
// };

// Famaly.person = 0;

// Famaly.prototype.showName = function () {
//   console.log(`your name ${this.name}`);
// };

// // const famaly = new Famaly();
// // console.log(famaly);

// // ----------------- Doughter

// const Doughter = function (name = "Doughter", age = 0) {
//   Famaly.call(this, name);
//   this.age = age;
// };

// Doughter.prototype = Object.create(Famaly.prototype);
// Doughter.prototype.constructor = Doughter;

// Doughter.prototype.showAge = function () {
//   console.log(`age : ${this.age}`);
// };

// const doughter = new Doughter("Asya", 21);
// console.log(doughter);
// console.log(doughter.constructor);
// doughter.showAge();

// // ----------------- Son -----

// const Son = function (name = "Son", age) {
//   Doughter.call(this, name, age);
// };

// Son.prototype = Object.create(Doughter.prototype);
// Son.prototype.constructor = Son;

// const son = new Son("Ben", 18);
// const son2 = new Son("Ben", 18);
// const son3 = new Son("Ben", 18);
// console.log(son);

// son.showName();
// son.showAge();

// // 1111 1111 1111 1111
// console.log(Famaly.person);

// console.log(Famaly.nation);

// classes ---------

class Famaly {
  static nation = "Ukranian";
  constructor(name = "defualt name") {
    this.name = name;
    this._allFamalyPerson = 0;
    this.habits = [];
  }
  get person() {
    return this._allFamalyPerson;
  }

  set person(value) {
    this._allFamalyPerson = value;
  }
  showName() {
    console.log(`your name ${this.name}`);
  }

  replenishment = function () {
    this._allFamalyPerson += 1;
  };

  replenishmentHabits = function (habit) {
    this.habits.push(habit);
  };
}

const famaly = new Famaly("Jhone");
famaly.person = 10;
famaly.replenishment();
famaly.showName();

// famaly.replenishmentHabits("run");

// call
console.log(famaly._allFamalyPerson);

// class Doughter extends Famaly {
//   constructor(name) {
//     super(name); // this.name = name;
//   }
//   showName = function () {
//     console.log(`name :${this.name}`);
//   };
// }

// const doughter = new Doughter("Lissa");

// console.log(doughter);

// doughter.showName();

// console.log(Famaly.nation);

const initialState = {
  name: "",
  lastName: "Braun",
  nation: "",
  options: {
    hobbies: [],
  },
};

class Body {
  state = initialState;
  #habits = [];

  replenishmentHobbies = function () {};
  replenishmentHobbiesHabits = function () {
    this.#habits.push("famaly relax");
    console.log("this#habits", this.#habits);
  };
  about = function showMoreInfoAboutLocalPerson() {
    console.log(`name: ${this.state.name}, last name : ${this.state.lastName}`);
  };
  replenishmentHobbies = function (hobbie) {
    console.log("this.state.options.hobbies", this.state.options.hobbies);
    this.state.options.hobbies.push(hobbie);
  };
}

const body = new Body();
console.log(body);
body.replenishmentHobbiesHabits();

// body.state.name = "Ben";
// body.state.lastName = "Braun";
// body.about();
// // call
// console.log(body);

const sonData = {
  name: "Den",
  nation: "Ukranian",
  options: {
    hobbies: ["run", "swim"],
  },
};

class Son extends Body {
  #hobbies = [];
  replaceName = function (name) {
    this.state.name = name;
  };
}

const son = new Son();

son.state = { ...son.state, ...sonData };
son.replaceName("Max");
son.replenishmentHobbies("ride");
son.replenishmentHobbies("drive car");
son.replenishmentHobbies("jump");

// call
console.log("son", son.state);
