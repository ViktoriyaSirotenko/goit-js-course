"use strict";
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

// Напиши скрипт, который, для объекта user, последовательно:
// •	добавляет поле mood со значением 'happy'
// •	заменяет значение hobby на 'skydiving'
// •	заменяет значение premium на false
// •	выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}
