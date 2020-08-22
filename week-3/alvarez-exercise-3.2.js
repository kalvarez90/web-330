const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 3.2 - The factory pattern"));
console.log ('\n');
/*
============================================
; Title:  factory-example1.js
; Author: Professor Krasso
; Date:   19 August 2020
; Modified by: Karina Alvarez
; Description: Demonstrates the use of the
; Factory Pattern in a JavaScript program.
;===========================================
*/

//start of program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

//Oracle Database Class with four properties
function Oracle(properties) {
  this.username = properties.username || 'o-admin';
  this.password = properties.password || 'o-secret';
  this.server = properties.server || 'localhost:3000';
  this.version = properties.version || 6.5;
}

//Informix Database class with three properties
function Informix(properties) {
  this.username = properties.username || 'i-admin';
  this.password = properties.password || 'i-s3cret';
  this.server = properties.server || 'localhost:8080';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }

  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});


// Oracle information for output
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: 'kalvarez',
  password: 'exercise-3.2'

});

//informix information for output
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: 'karina',
  password: 'week3-assignment'

});

// Output
console.log(oracle);
console.log(informix);

// end of program
