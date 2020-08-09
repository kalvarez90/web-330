const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 1.4 - Duck Typing"));
console.log ('\n');
/*
============================================
; Title:  duck-typing.js
; Author: Professor Krasso
; Date:   8 August 2020 
: Modified by: Karina Alvarez
; Description: Demonstrates how to create interfaces
;              in a JavaScript program.
;===========================================
*/

/**
 * Description: Car class
 * Param: model
 * constructor
 */
function Car(model) {
    this.model = model;
}
  
// Car prototype method
Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
}; 

/**
* Description: Truck class
* param: model, year
* constructor
 */
function Truck(model, year) {
    this.model = model;
    this.year = year;
}
  
// Truck prototype method
Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
}; 

/**
* Description: Jeep class
* Param: model, year, color
* constructor
*/
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}
  
// Jeep prototype method
Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
}; 

// Empty array 
var racetrack = [];

/**
* Description: driveIt function
* Param: vehicle
*/
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

//vehicle classes
var car = new Car ('Corolla');
var truck = new Truck ('Ranger', '2020');
var jeep = new Jeep ('Cherokee', '2018', 'Black');

console.log('');

// passing vehicle classes through driveIt function
driveIt(car);
driveIt(truck);
driveIt(jeep);

// Loop over the racetrack array and output the results
  console.log('\n-- The following vehicles have been added to the racetrack --');
  for (var i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ': ' + racetrack[i].model);
}