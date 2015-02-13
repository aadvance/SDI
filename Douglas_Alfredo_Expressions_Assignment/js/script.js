/*
 Alfredo Douglas
 February 12, 2015
 Expressions Assignment
 */
//An array listing names of family with vehicles needing gasoline
var familyNames = ["Mark", "Mary", "James", "Sally"];
//console.log(familyNames);

//Prompts for user to enter values for each variable
var gallonsMark = prompt("Let's determine how much it would cost a family of 4 \nto fill their vehicles with gas in your area, starting with Mark. \n\nHe drives a large SUV. how many gallons do you think it would \ntake to fill his gas tank?");
var gallonsMary = prompt("Now let's see about his wife, Mary. She drives a hybrid. \n\nHow many gallons do you think for her car?");
var gallonsJames = prompt("Great. Now we're at the son, James. He drives a pickup truck.\n\nHow many for his truck?");
var gallonsSally = prompt("Last one! Their daughter, Sally, just bought a subcompact car \nthat gets great gas mileage.\n\nHow many gallons for her small tank?");
//console.log(gallonsMary);

//Including additional variable prompting user for gas price in their area
var priceGallon = prompt("Great! Now, how much do you pay per gallon of gas \nin your immediate area?");