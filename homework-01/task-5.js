"use strict";
const Китай = 100;
const Чили = 250;
const Австралия = 170;
const Индия = 80;
const Ямайка = 120;
const promtLabel = "Выберите страну доставки товара";
let userChoice = promt(promtLabel);
let message;

if (userChoice === null) {
  message = "Отменено пользователем";
} else {
  switch (userChoice.toLowerCase()) {
    case "Китай":
      message = "Доставка в Китай будет стоить ${Китай} кредитов";
      brake;

    case "Чили":
      message = "Доставка в Чили будет стоить ${Чили} кредитов";
      break;

    case "Австралия":
      message = "Доставка в Австралию будет стоить ${Австралия} кредитов";
      break;

    case "Индия":
      message = "Доставка в Индию будет стоить ${Индия} кредитов";
      break;

    case "Чили":
      message = "Доставка на Ямайку будет стоить ${Ямайка} кредитов";
      break;

    default:
      alert("В Вашей стране доставка не доступна");
      break;
  }
}
console.log(message);
