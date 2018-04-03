console.log("LEVEL 0");
var numberA = 10;
let numberB = 099;
const numberC = 0.02;

console.log(numberA);
console.log(numberB);
console.log(numberC);

console.log("------------------------");

console.log("LEVEL 1");

var number_1 = 2;
var number_2 = 3;

console.log(number_1 + number_2);
console.log(number_1 - number_2);
console.log(number_1 * number_2);
console.log(number_1 / number_2);
console.log(number_1 % number_2);

console.log("------------------------");

console.log("LEVEL 2");

console.log(number_1 + "This is String");
console.log(number_1 + true);

console.log("------------------------");

console.log("LEVEL 3");

var arrayNumber = [1, 2, 3, 4, 5]
arrayNumber.push(8);
arrayNumber.push("test")

console.log(arrayNumber);

arrayNumber.pop();

console.log(arrayNumber);

arrayNumber.shift();

console.log(arrayNumber);

arrayNumber.unshift("apple");

console.log(arrayNumber);

console.log("------------------------");

console.log("LEVEL 4");

var string_1 = "Hello World"
var string_2 = "BACHAAN TANGKEP"
var string_3 = "selamat Tinggal"
// var string_3 = "i am ready to the next stage"

console.log(string_2.toLowerCase());

console.log("-------------------------");

console.log("LEVEL 5");

console.log(string_1 + string_2);

console.log("-------------------------");

console.log("LEVEL 6");

console.log(string_1.toUpperCase());
console.log(string_3.toUpperCase());

console.log("-------------------------");

console.log("LEVEL 7");

var string_3 = "i am ready to the next stage";
var str = string_3.split(" ");
var result = "";

for (var i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

console.log(str.join(" "));

console.log("-------------------------");

console.log("LEVEL 8");

var number_1 = 3;
var number_2 = 10;

if (number_1 > number_2) {
  console.log(number_1 + " " + "true");
} else {
  console.log(number_2 + " " + "false");
}

console.log("-------------------------");

console.log("LEVEL 9");

var number_3 = 15;
if (number_1 > number_2) {
  console.log(true);
} else if (number_2 > number_3) {
  console.log(true);
} else {
  console.log(false);
}

console.log("-------------------------");

console.log("LEVEL 10");

number_1 < number_2 ? console.log(true) : console.log(false);

console.log("-------------------------");

console.log("LEVEL 11");

if ((number_1 > number_2) && (number_1 > number_3)) {
  console.log(true);
} else {
  console.log(false);
}

console.log("-------------------------");

console.log("LEVEL 12");

function addition(number_1, number_2) {
  var result = 0;
  result = number_1 + number_2;
  return result;
}

console.log(addition(2, 3));

console.log("-------------------------");

console.log("LEVEL 13");

function randomNumber(number) {
  var newNumber = Math.random()
  return Math.floor(newNumber * 1000)
}

console.log(randomNumber());

console.log("-------------------------");

console.log("LEVEL 14");

console.log(number_1 + number_2);
console.log(number_1 - number_2);
console.log(number_1 * number_2);
console.log(number_1 / number_2);
console.log(number_1 % number_2);

console.log("-------------------------");

console.log("LEVEL 15");

function add(number_1, number_2) {
  result = number_1 + number_2;
  return result;
}

function substract(number_1, number_2) {
  result = number_1 - number_2;
  return result;
}

function multiply(number_1, number_2) {
  result = number_1 * number_2;
  return result;
}

function divide(number_1, number_2) {
  result = number_1 / number_2;
  return result;
}

function modulo(number_1, number_2) {
  result = number_1 % number_2;
  return result;
}

console.log(add(4, 5));
console.log(substract(10, 8));
console.log(multiply(8, 3));
console.log(divide(2, 3));
console.log(modulo(5, 5));

console.log("-------------------------");

console.log("LEVEL 16");

console.log(add(divide(4, 5), add(5, 5)));

console.log("-------------------------");

console.log("LEVEL 18");

// var number = 3;

// Square Area A=a2
function calculateSquareArea(side) {
  return (side * side);
}
console.log(calculateSquareArea(3));

// Square Perimeter P=4a
function calculateSquarePerimeter(side) {
  return (4 * side);
}
console.log(calculateSquarePerimeter(3));

// Cube Circle A=πr2
function calculateCircleArea(radius) {
  return (Math.PI * (radius * radius));
}
console.log(calculateCircleArea(3));

// Circle Circumference C=2πr
function calculateCircleCircumference(radius) {
  return (2 * Math.PI * radius);
}
console.log(calculateCircleCircumference(3));

// Cube Area A=6a2
function calculateCubeArea(edge) {
  return (6 * (edge * edge));
}
console.log(calculateCubeArea(3));

// Cube Volume V=a3
function calculateCubeVolume(edge) {
  return (edge * edge * edge);
}
console.log(calculateCubeVolume(3));

// Tube Area A=2πrh+2πr2
function calculateTubeArea(radius, height) {
  return (2 * Math.PI * radius * height) + (2 * Math.PI * (radius * radius))
}
console.log(calculateTubeArea(2, 3));

// Tube Volume V=πr2h
function calculateTubeVolume(circleArea, height) {
  return (circleArea * height).toFixed(1)
}
console.log(calculateTubeVolume(28.27, 3));

console.log("-------------------------");

console.log("LEVEL 19");

console.log(calculateSquareArea(add(1, 3)));
console.log(calculateSquarePerimeter(substract(4, 3)));
console.log(calculateTubeVolume(calculateCircleArea(3), 3));

console.log("-------------------------");

console.log("LEVEL 20");

date = new Date();

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log("-------------------------");

console.log("LEVEL 22");

function getDate(newDate) {
  return date.getDate()
}

function getDay(newDate) {
  return date.getDay()
}

function getFullYear(newDate) {
  return date.getFullYear()
}

function getHours(newDate) {
  return date.getHours()
}

function getMinutes(newDate) {
  return date.getMinutes()
}

function getSeconds(newDate) {
  return date.getSeconds()
}

console.log(`${getFullYear()} ${getDate()} ${getDay()} ${getHours()} ${getMinutes()} ${getSeconds()}`);

console.log("-------------------------");

console.log("LEVEL 25");

function addressBook(firstName, lastName, address, phoneNumber) {
  var arrayAddressBook = []
  arrayAddressBook.push(firstName);
  arrayAddressBook.push(lastName);
  arrayAddressBook.push(address);
  arrayAddressBook.push(phoneNumber);

  return arrayAddressBook;
}

console.log(addressBook("Ali", "Kurniawan", "Bogor", 123));

console.log("-------------------------");

console.log("LEVEL 26");

var baruArrayAddressBook = [];

function newAddressBook(firstName, lastName, address, phoneNumber) {
  var objectAddressBook = {}

  objectAddressBook.firstName = firstName;
  objectAddressBook.lastName = lastName;
  objectAddressBook.address = address;
  objectAddressBook.phoneNumber = phoneNumber;

  baruArrayAddressBook.push(objectAddressBook);
  return baruArrayAddressBook;
}

newAddressBook("Ali", "Dani", "Jakarta", 123);
newAddressBook("Ali", "Dani", "Bandung", 456);
newAddressBook("Ali", "Kurniawan", "Surabaya", 789);

console.log(baruArrayAddressBook);

console.log("---------Search---------");

function searchAddressBook(search) {
  var result = baruArrayAddressBook.filter(function(searchName) {
    return searchName["lastName"].toLowerCase().indexOf(search.toLowerCase()) != -1;
  });
  return result;
}

console.log(searchAddressBook("faris"));

console.log("-------Delete-----------");

function deleteAddress(deleteIndex) {
  var arrayDelete = baruArrayAddressBook;
  arrayDelete.splice(deleteIndex, 1);

  return arrayDelete;
}

console.log(deleteAddress(1));
