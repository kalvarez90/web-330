const header = require('./alvarez-header.js');

console.log(header.display("Karina", "Alvarez", "Exercise 1.3 - Class Refresher"));
console.log ('\n');
/*
============================================
; Title:  function-class.js
; Author: Professor Krasso
; Date:   8 August 2020
; Modified by: Karina Alvarez
; Description: Refresher on function classes
;===========================================
*/

/**
 * Params: manufacture, model, color, price
 * Response: -
 * Description: function class refresher
 */
function CellPhone(manufacture, model, color, price)
{
    this.manufacture = manufacture;
    this.model = model;
    this.color = color;
    this.price = price;

    // get price
    this.getPrice = function()
    {
        return this.model;
    }

    //get model
    this.getModel = function()
    {
        return this.model;
    }

    // get details
    this.getDetails = function()
    {
        return 'Manufacturer: '+ this.manufacture + '\nModel: '+ this.getModel() + '\nColor: ' + this.color +
        '\nPrice: ' + this.getPrice();
    }
}

// Instantiate a new House class and pass-in the number of bedrooms as an argument
var cellPhone = new CellPhone ('Samsung', 'Galaxy s10', 'Royal Gold', '749.99');

// Output the results to the console debugger window.
console.log('-- DISPLAYING CELL PHONE DETAILS --');
console.log(cellPhone.getDetails());