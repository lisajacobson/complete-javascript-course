/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*******************************/
// 1. Store Mark's and John's mass and height in variables
var markMass = 75 // kg
var markHeight = 5 // meters 

var jonMass = 100 // kg
var jonHeight = 6.5 // meters

// 2. Calculate both their BMIs
  // Mark BMI //

  markBmi = markMass / (markHeight*markHeight)
  console.log('longhand mark\'s BMI: ', markBmi) // 75/(5*5) // 75/25 / 3
    
  // try to shorthandify his height^2 (markHeight squared)
  markBmi = markMass / (markHeight)
  markHeightSqrd = markHeight*= markHeight
  console.log(markHeightSqrd) // should be 25, noice
  markBmiShorthand = markMass / markHeightSqrd // it's not rly shorthand it's actually a longer way lol. But it's cool and shows off my JS operator skillz
  console.log('mark\'s BMI w shorthand using *= operand: ', markBmiShorthand) // YAS QUEEN, it's 3

  // Jon BMI //
  jonHeightSqrd = jonHeight*= jonHeight
  console.log('jon\'s height squared :', jonHeightSqrd)
  jonBmi = jonMass / jonHeightSqrd // 100 / (6.5*6.5) // 100/42.25 / 2.367
  console.log(jonBmi) // yep

  // 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
isMarkHigher = markBmi > jonBmi // 3 > 2.367 should be true

// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
console.log('is Mark\'s BMI higher than Jon\'s? ', isMarkHigher) // true

// 5. TODO: when time permits, do this extra (my own additional) challenge: Convert kg to lbs & meter to feet/inches
