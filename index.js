// Write your solution here!
// Initialize the cats array with the given values
let cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat to the array and return a new array, leaving the original array unchanged
function appendCat(name) {
  return [...cats, name];
}

// Prepend a cat to the array and return a new array, leaving the original array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// Remove the last cat from the array and return a new array, leaving the original array unchanged
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Remove the first cat from the array and return a new array, leaving the original array unchanged
function removeFirstCat() {
  return cats.slice(1);
}
