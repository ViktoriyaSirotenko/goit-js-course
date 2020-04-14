"use strict";
const ADMIN_PASSWORD = "jqueryismyjam";
const userChoice = promt("Введите ваш пароль");
let message;

if (userChoice === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else if (userChoice === null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);
alert("jqueryismyjam");
