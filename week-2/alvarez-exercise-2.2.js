const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 2.2 - Prototypes"));
console.log ('\n');
/*
============================================
; Title:  alvarez-exercise-2.2.js
; Author: Professor Krasso
; Date:   15 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates how to build
; prototypes in JavaScript.
;===========================================
*/

// start of program

//object literal
var person = {
  getAge: function() {
    return this.age;
  }
};

// creating new object
var karina = Object.create(person, {
  'age': {
    'value': "30",
  },
  'fullName': {
    'value': 'Karina Alvarez'
  }
});

// output
karina.getAge();
console.log("The person's full name is", karina.fullName);
console.log("The person's age is", karina.age);

// end of program
