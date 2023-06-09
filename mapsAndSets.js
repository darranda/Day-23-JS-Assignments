//  Create a map called fruitInventory with the following key-value pairs: ('apple', 10), ('banana', 20), ('orange', 30).

let fruitInventory = new Map ([
['apple','10'],
['banana','20'],
['orange','30'],
]);
console.log(fruitInventory)

// Use the set method to update the inventory of 'apple' to 15.

fruitInventory.set ('apple','15');
console.log(fruitInventory)

// Use the get method to retrieve the inventory of 'banana' and store it in a variable called bananaInventory.

console.log(fruitInventory.get('banana'));
let bananaInventory = 20

// Create a set called uniqueColors with the following values: 'red', 'blue', 'green'.

let uniqueColors = new Set (['red','blue','green']);
console.log(uniqueColors)

// Use the add method to add the color 'yellow' to the uniqueColors set.

uniqueColors.add ('yellow');
console.log(uniqueColors)

// Use the has method to check if the color 'blue' is in the uniqueColors set and store the result in a variable called hasBlue.

console.log(uniqueColors.has('blue'));
let hasBlue = true
console.log(hasBlue)