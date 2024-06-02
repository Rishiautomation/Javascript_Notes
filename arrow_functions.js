//arrow functions

// function def using arrow
var add =(num1,num2) => num1 +num2;

var welcome = () => " Welcome to JS" ;
var power = (num1, num2) => Math.pow(num1,num2);
var greeting = (name) => "Hello " + name;

console.log(welcome());
console.log(power(2,3));
console.log(add(2,5));
console.log(greeting("Rishikesh"));