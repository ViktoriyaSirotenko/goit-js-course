"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let userChoice = prompt("Сколько дроидов вы хотите купить?");
userChoice = Number(userChoice);
const totalPrice = userChoice * pricePerDroid;
let message;

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else if (userChoice === null) {
  message = "Отменено пользователем";
} else if (totalPrice <= credits) {
  message = `Вы купили ${userChoice} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов`;
}
console.log(message);
