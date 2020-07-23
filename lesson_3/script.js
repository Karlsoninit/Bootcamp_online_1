"use strict";

// const user = {
//   name: "Max",
//   age: 18,
//   skills: ["CSS", "JavaScript", "React", "HTML"],
//   hobbies: {
//     run: {
//       description: "only morning",
//       distans: 120,
//     },
//     code: {
//       time: 18,
//     },
//   },
//   uid: "0f98uryeh3nmkelrfogbuygfhrekf",
// };

// console.log(user.skills);

// const { skills } = user;
// console.log(skills);

// const showUserInfo = ({ name }) => {
//   console.log(name);
// };

// showUserInfo(user);

// for (let elem in user) {
//   console.log(user[elem]);
// }

// object.keys

// console.log(Object.keys(user).length);

// Object.values

// console.log(Object.values(user));

// Object.entries

// console.log(Object.entries(user));

// for (let elem of Object.entries(user)) {
//   console.log(elem[0], elem[1]);
// }

// const USER_SKILLS = "skills";
// const USER_AGE = "age";
// const USER_NAME = "name";

// // const getHobbiesDescriptions = prompt("choose hobbie ...");

// // const chooseSome = "hobbies";

// console.log(user.name);
// // console.log("find", user[chooseSome][getHobbiesDescriptions]);

// console.log(user[USER_SKILLS]);

// const fn = (_, hobbies) => {
//   console.log("hobies: ", hobbies);
// };

// fn(user.skills, user.hobbies);

// delete

// console.log("before delete", user);

// delete user.age;

// console.log("after delete", user);

// add

// user.isActive = {
//   morning: false,
//   evening: true,
// };

// console.log(user);

// // ...spred

// const newUser = { ...user };

// console.log("old object", user);

// newUser.name = "Bond";

// console.log("new object", newUser);

// const users = [
//   {
//     name: "Max",
//     age: 18,
//     skills: ["CSS", "JavaScript", "React", "HTML"],
//     hobbies: {
//       run: {
//         description: "only morning",
//         distans: 120,
//       },
//       code: {
//         time: 18,
//       },
//     },
//     uid: "0f98uryeh3nmkelrfogbuygfhrekf",
//   },
//   {
//     name: "Ben",
//     age: 28,
//     skills: ["read books"],
//     hobbies: {
//       swim: {
//         description: "only morning",
//         distans: 6,
//       },
//     },
//     uid: "0f9fpiuyrhff3454yeh3nmkelrfogbuygfhrekf",
//   },
//   {
//     name: "Anna",
//     age: 28,
//     skills: ["read books", "work", "speep"],
//     hobbies: {
//       run: {
//         description: "only evening",
//         distans: 5,
//       },
//     },
//     uid: "0f98uryf-09r4ujrfkvkmkelrfogbuygfhrekf",
//   },
// ];

// console.log(users);

// const getUserName = prompt("enter some user name");

// const findUser = function (name) {
//   for (let user of users) {
//     if (user.name === name) {
//       console.log(user);
//       return { ...user, dateStamp: Date.now() };
//     } else {
//       return { error: "такого не нашли (:" };
//     }
//   }
// };

// console.log(Date.now());

// const res = findUser(getUserName);

// const print = (user) => {
//   if (user.name) {
//     console.log(`привет ${user.name}, мы знаем, ваш age ${user.age} `);
//   } else {
//     console.log(`sorry: ${user.error}`);
//   }
// };

// print(res);

// test

// const user = {
//   name: "Max",
//   age: 18,
//   skills: ["CSS", "JavaScript", "React", "HTML"],
//   hobbies: {
//     run: {
//       description: "only morning",
//       distans: 120,
//     },
//     code: {
//       time: 18,
//     },
//   },
//   uid: "0f98uryeh3nmkelrfogbuygfhrekf",
// };

// console.log(user);

// for (let elem in user) {
//   console.log(user[elem]);
// }

// const keys = Object.keys(user);

// console.log(keys);

// for (let key of keys) {
//   console.log("alon key:", key);
//   console.log(user[key]);
// }

// const arr = [1, 2, 33, 4, 4, 5, 6, 7, 5, 3, 3, 3, 4, 5];
// const arr1 = [1, 2, 33, 4, 4, 9, 0, 0, 20, 6, 7, 5, 3, 3, 3, 4, 5];

// const unique = (arr) => {
//   // создать новый массив
//   // перебрать массив старый и получить дос к elem
//   const uniqueArr = [];
//   for (let elem of arr) {
//     console.log(elem);
//     // сверить нашь массив с тем, что там нет чисел
//     if (!uniqueArr.includes(elem)) {
//       uniqueArr.push(elem);
//     }
//   }
//   return uniqueArr;
// };

// const uniqueArr = unique(arr);

// console.log(uniqueArr);

// console.log([...new Set(["one", "one", "two", "three", "three"])]);

// -----

// const user314 = {
//   name: "Max",
//   age: 18,
//   skills: ["CSS", "JavaScript", "React", "HTML"],
//   hobbies: {
//     run: {
//       description: "only morning",
//       distans: 120,
//     },
//     code: {
//       time: 18,
//     },
//   },
//   uid: "0f98uryeh3nmkelrfogbuygfhrekf",
//   hobbiesCount() {
//     const fn = () => {
//       console.log("this", this);
//     };
//     return fn;
//     // console.log(Object.keys(user314.hobbies).length);
//   },
// };

// const result = user314.hobbiesCount();

// console.log(result);
// result();

const transform = () => {
  const upperCase = (str) => {
    return str.toUpperCase();
  };
  const lowerCase = (str) => {
    return str.toLowerCase();
  };
  return { upperCase, lowerCase };
};

const { upperCase } = transform();

console.log(upperCase());

const user = {
  name: "Max",
  age: 18,
  skills: ["CSS", "JavaScript", "React", "HTML"],
  hobbies: {
    run: {
      description: "only morning",
      distans: 120,
    },
    code: {
      time: 18,
      PM: true,
      AM: true,
    },
  },
  uid: "0f98uryeh3nmkelrfogbuygfhrekf",
};

// const find = ({ skills }) => {
//   console.log(skills);
// };

// find(user);

// const {
//   hobbies: {
//     code: { time, AM, PM },
//   },
// } = user;
// // user.skills

// console.log(time);
// console.log(AM);
// console.log(PM);

// ---------------------
