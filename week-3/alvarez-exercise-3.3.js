const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3. - The Singleton Pattern"));
console.log ('\n');
/*
============================================
; Title:  factory-example1.js
; Author: Professor Krasso
; Date:   20 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates the use of the
; Singleton Pattern in a JavaScript program.
;===========================================
*/

//start of program
var DatabaseSingleton = (function() {
  var instance;

  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function databaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  console.log('Same database instance?', oracle === postgres);
}

databaseSingletonTest();
// end of program
