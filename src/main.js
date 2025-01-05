import './style.scss';
import './scripts/utils.js';
// import { apiKey, apiKeyTwo } from './scripts/utils.js'; // Importing the apiKey variable
// import defaultUtil from './scripts/utils.js'; // Importing the default export
import * as utils from './scripts/utils.js'; // Importing all exports as an object

// console.log(apiKey); // Output: 1234567890
// console.log(apiKeyTwo); // Output: 0987654321
// console.log(defaultUtil); // Output: This is a default export

// Log all properties and methods of the utils object
// Object.keys(utils) retrieves an array of all the keys (property names) of the utils object.
// forEach((key) => { ... }) iterates over each key in the array.
// console.log(${key}:, utils[key]); logs the key and its corresponding value from the utils object.
Object.keys(utils).forEach((key) => {
  console.log(`${key}:`, utils[key]);
});
