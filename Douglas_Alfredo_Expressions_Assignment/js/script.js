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
//variable for total number of gallons of gasoline
var gallonsTotal = Number(gallonsMark) + Number(gallonsMary) + Number(gallonsJames) + Number(gallonsSally);
alert("Thanks! That makes a total of " + gallonsTotal + " gallons they would need.")
//Including additional variable prompting user for gas price in their area

//variable for total value when all gallons are added, then multiplied by cost per gallon
var priceGallon = prompt("Now, how much do you pay per gallon of gas \nin your immediate area?");
var cost = gallonsTotal * priceGallon;
//console print with final language
console.log("Based on the total amount of " + gallonsTotal + " for all vehicles, at a price per gallon of $" + priceGallon + ", the total cost for this family to fill all of their vehicles' tanks with gasoline would be $" + cost + ".")