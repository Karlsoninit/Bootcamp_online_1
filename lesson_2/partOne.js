// const superhero = ["spider-man", "thanos", "hulk", "thor"];
// const positiveHeroes = [];
// const negativeHeroes = [];
// const negativeHero = "thanos";
// console.log(superhero);

// if (superhero.length < 3) {
//   console.log("меньше чем 3");
// } else {
//   console.log("больше чем 3");
// }

// const array = [1, 2, 5, 75, 334, 56, 2];
// console.log(array);
// array.push("iron man", 45, 98);
// console.log(array);

// for (let index = 0; index < superhero.length; index += 1) {
//   if (superhero[index] !== negativeHero) {
//     positiveHeroes.push(superhero[index]);
//   } else {
//     negativeHeroes.push(superhero[index]);
//   }
// }

// console.log("positiveHeroes :", positiveHeroes);
// console.log("negativeHeroes :", negativeHeroes);

// const array = [1, 2, 5, "5", 7, 3, 5, 2];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log("element :", typeof element);
//   if (typeof element !== "string") {
//     sum += element;
//   }
// }

// console.log("sum :", sum);

// const numbers = [1, 2, 5, 7, 3, 5, 2];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   console.log(element);
// }

// include

// const superhero = ["spider-man", "thanos", "hulk", "thor", "abyss"];
// const positiveHeroes = [];
// const negativeHeroes = [];
// const negativeHeroOne = "thanos";
// const negativeHeroTwo = "abyss";

// for (let index = 0; index < superhero.length; index += 1) {
//   if (
//     superhero[index] !== negativeHeroOne &&
//     superhero[index] !== negativeHeroTwo
//   ) {
//     positiveHeroes.push(superhero[index]);
//   } else {
//     negativeHeroes.push(superhero[index]);
//   }
// }

// console.log("positiveHeroes", positiveHeroes);
// console.log("negativeHeroes", negativeHeroes);

// indexof

// const superhero = ["spider-man", "thanos", "hulk", "thor", "abyss"];

// console.log(superhero.indexOf("spider-man"));

// push, pop, slice, splice, unshift, shift
// const h = ["spider-man", "thanos", "hulk", "thor"];
// console.log("h", h);
// const superhero = h;
// console.log(superhero);

// const copySuperhero = superhero.slice();

// copySuperhero.pop();
// copySuperhero.shift();
// console.log(copySuperhero);

// const hero = prompt("delete some hero");
// const replaceHero = prompt("replace some hero");
// console.log("check", copySuperhero.indexOf(hero));
// const deleteElement = copySuperhero.splice(
//   copySuperhero.indexOf(hero),
//   1,
//   replaceHero
// );
// console.log("deleteElement", deleteElement);
// console.log(copySuperhero);

// const superhero = ["spider-man", "thanos", "hulk", "thor"];

// console.log(superhero[superhero.length - 1]);

// function
// const superhero = ["spider-man", "thanos", "hulk", "thor"];
// const b = 5;
// console.log(superhero);

// function deleteHero(a, b) {
//   return a + b;
// }

// const result = deleteHero(2, 5);
// console.log(result);

// console.log(deleteHero(5, 5));
// console.log(deleteHero(5, 6));
// console.log(deleteHero(5, 9));

//-----

const superhero = ["spider-man", "thanos", "hulk", "thor", "abyss"];
const negativeHeroOne = "thanos";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function deleteNegativeHero(heroes, deleteHero) {
  const positiveHeroes = [];
  for (let index = 0; index < heroes.length; index += 1) {
    if (heroes[index] !== deleteHero) {
      positiveHeroes.push(heroes[index]);
    }
  }
  return positiveHeroes;
}

const res = deleteNegativeHero(superhero, negativeHeroOne);
console.log(res);

const res2 = deleteNegativeHero(numbers, 5);
console.log(res2);

function sum(...rest) {
  let total = 0;
  //   const arr = Array.from(arguments);
  console.log(rest.join(" "));
  //   for (let x of rest) {
  //     console.log(x);
  //     total += x;
  //   }
  //   return total;
}

const about =
  "With Infinity War upon us, Marvel is on the brain of practically every comic book nerd out there. Specifically, they are asking questions of who will win and who will lose the many battles we're sure to see in the film, which in turn raises the question of which Marvel superheroes are the strongest in the bunch, so we decided to answer that question. However, we have a few rules for this official strength ranking, starting with the fact that we are only ranking characters who have super strength. Yes, you can argue that The Phoenix could beat The Hulk, but we're only talking about pure muscle this time around.";

const total = sum(
  "With",
  "Infinity",
  "War",
  "upon",
  "us,",
  "Marvel",
  "is",
  "on",
  "the",
  "brain",
  "of",
  "practically",
  "every",
  "comic",
  "book",
  "nerd",
  "out",
  "there.",
  "Specifically,",
  "they",
  "are",
  "asking",
  "questions",
  "of",
  "who",
  "will",
  "win",
  "and",
  "who",
  "will",
  "lose",
  "the",
  "many",
  "battles",
  "we're",
  "sure",
  "to",
  "see",
  "in",
  "the",
  "film,",
  "which",
  "in",
  "turn",
  "raises",
  "the",
  "question",
  "of",
  "which",
  "Marvel",
  "superheroes",
  "are",
  "the",
  "strongest",
  "in",
  "the",
  "bunch,",
  "so",
  "we",
  "decided",
  "to",
  "answer",
  "that",
  "question.",
  "However,",
  "we",
  "have",
  "a",
  "few",
  "rules",
  "for",
  "this",
  "official",
  "strength",
  "ranking,",
  "starting",
  "with",
  "the",
  "fact",
  "that",
  "we",
  "are",
  "only",
  "ranking",
  "characters",
  "who",
  "have",
  "super",
  "strength.",
  "Yes,",
  "you",
  "can",
  "argue",
  "that",
  "The",
  "Phoenix",
  "could",
  "beat",
  "The",
  "Hulk,"
);

console.log(total);
