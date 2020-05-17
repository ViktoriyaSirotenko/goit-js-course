"use strict";

const inventory = {
  items: ["Knife", "Gas mask"],
  // добавляет имя элемента к инвентарю
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  // удалить (имя элемента)
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  action(itemName);
  console.log(`Invoking action on ${itemName}`);
};

invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']

//подсмотрено у коллеги
const invokeInventoryAction = (itemName, obj = {}, action) => {
  obj[action].bind(obj)(itemName);
  console.log(`Invoking action on ${itemName}`);
};

invokeInventoryAction("Medkit", inventory, "add");
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory, "remove");
// Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']
