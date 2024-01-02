import { convertArea, convertTemperature } from "./converter";
import { url } from "./server";

const add = (x, y) => {
  return x + y;
};

const multiply = (x, y) => {
  return x * y;
}

const divide = (x, y) => {

  if(y === 0)
  {
    console.log('Cannot divide by zero');
    return;
  }

  return x / y;
};

const square = (x) => {
  return x * x;
};

const areaOfCircle = (radius) => {
  return Math.PI * square(x);
};

function calculateFactorial(number) {
  console.log(url);
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

console.log(add(5, 10));
console.log(divide(5, 10));
console.log(multiply(5, 25));
console.log(square(5));
console.log(areaOfCircle(5));
console.log(calculateFactorial(50));
// Example usage:
const areaInSquareMeters = 100; // Replace with your input value
const convertedAreaInSquareFeet = convertArea(areaInSquareMeters, 'squareMeters', 'squareFeet');
const convertedAreaInSquareYards = convertArea(areaInSquareMeters, 'squareMeters', 'squareYards');

console.log(`100 square meters is equal to ${convertedAreaInSquareFeet} square feet.`);
console.log(`100 square meters is equal to ${convertedAreaInSquareYards} square yards.`);

const celsiusToFahrenheit = convertTemperature(25, 'Celsius', 'Fahrenheit');
console.log(`25 Celsius is equal to ${celsiusToFahrenheit} Fahrenheit`);

const kelvinToCelsius = convertTemperature(300, 'Kelvin', 'Celsius');
console.log(`300 Kelvin is equal to ${kelvinToCelsius} Celsius`);

const fahrenheitToKelvin = convertTemperature(68, 'Fahrenheit', 'Kelvin');
console.log(`68 Fahrenheit is equal to ${fahrenheitToKelvin} Kelvin`);
