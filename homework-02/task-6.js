"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите любое целое число");
  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
} else {
  alert("Массив чисел пуст!");
}
console.log(`Общая сумма чисел равна ${total}`);
