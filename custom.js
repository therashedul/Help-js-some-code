// Function to increment counter
function temporary() {
  let counter = 0;
  // cloase function
  return function () {
    counter += 1;
    return counter;
  };
}
const add = temporary();

// Call add() 3 times

// The counter should now be 3
document.getElementById("clloser").innerHTML = add();
document.getElementById("clloser").innerHTML = add();
document.getElementById("clloser").innerHTML = add();
document.getElementById("clloser").innerHTML = add();

// =======================================

function mans(name, age, mobile) {
  this.name = name;
  this.age = age;
  this.mobile = mobile;
}
let vr = new mans("rasel", 23, "01818401065");

// alert(vr.name);
// rest with function and other arguments
function fun(a, b, ...c) {
  console.log(`${a} ${b}`); //Mukul Latiyan
  console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
  console.log(c[0]); //Lionel
  console.log(c.length); //3
  console.log(c.indexOf("Lionel")); //0
}
fun("Mukul", "Latiyan", "Lionel", "Messi", "Barcelona");
// ================ another function argument =============
function sumall(...args) {
  let sum = 0;
  sum += args.length; // find out length
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
document.getElementById("meth").innerHTML = sumall(
  4,
  9,
  16,
  25,
  29,
  100,
  66,
  77
);

x = (a, b) => {
  return a + b;
};
const persons = {
  name: "John",
  age: 30,
  city: "New York",
};
let tx = "";
let myString = JSON.stringify(persons); // make string
let objs = JSON.parse(myString); // make object
let myarray = Object.entries(objs); // make Array
let makearray = Object.values(objs); // make Array
// tx += persons.name;
// for (let obj of myarray) { // use only array
//     tx += obj;
// }
for (let obj in objs) {
  // use only object
  tx += objs[obj];
}
document.getElementById("demofunction").innerHTML = x(1, 4);

// persons.name = function () {
//     return this.firstName + " " + this.lastName;
// };

let n = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    // first array
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
n += myObj.name;
// x += myObj.cars

for (let i in myObj.cars) {
  // cars first object
  n += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    // models scond object
    n += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("nestobj").innerHTML = n;

// sentence to array
const voawel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function isvoawel(sentence) {
  const count = 0;
  let letter = Array.from(sentence);
  letter.forEach(function (value) {
    if (voawel.includes(value)) {
      // alert(value);
      // count++
    }
    // return count;
  });
}
// console.log(isvoawel("I love U Bangaladesh"));

// add index and value in array
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
let id = Symbol("id");
person[id] = 140353;

document.getElementById("addindex").innerHTML = person[id] + " " + person.id; // first ID is display caous it is array, other is make object

// Check array
const arrraydata = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arraydata").innerHTML = Array.isArray(arrraydata);

// Json Object
let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
let txt = "";

// txt += obj.employees;
for (let i of obj.employees) {
  txt += i.firstName + " - " + i.lastName + "<br>";
}

// for in loop
// for (let i in obj.employees) {
//     txt += obj.employees[i].firstName + " - " + obj.employees[i].lastName + "<br>";
// }

// for loop
// for (let i = 0; i < obj.employees.length; i++) {
//     txt += obj.employees[i].firstName + " - " + obj.employees[i].lastName + "<br>";
// }
document.getElementById("jsondata").innerHTML = txt;
