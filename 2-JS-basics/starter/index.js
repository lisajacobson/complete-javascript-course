// var firstName = 'David';
// console.log(firstName)
// var john$mark = 'does this work?'
// console.log(john$mark)

// /********************************* 
// Variable Mutation and Type Coercion
// *********************************/
// age = 6
// console.log(firstName + ' is ' + age)
// // type coercion in JS allows the JS to make everything in that console log a string to be able to print it as a string

// // Type coercion
// var job, isMarried
// job = 'student'
// pronoun = 'he'
// possessivePronoun = 'his'
// isMarried = false
// marryString = isMarried ? ('Yes, ' + pronoun +  ' is married.') : ('No, ' + pronoun +  ' is not married.')

// console.log(firstName + ' is a ' + age + ' years old and ' + pronoun + ' is a ' + job + '. Is he married? ' + marryString)

// // Variable mutation
// age = 'twelve';
// job = 'yard raker for ' + possessivePronoun + ' neighbor'
// console.log(age)

// console.log(firstName + ' is a ' + age + ' years old and ' + pronoun + ' is a ' + job + '. Is he married? ' + marryString)

// var lastName = prompt('What is ' + firstName + '\'s' + ' last name?')
// console.log(firstName + ' ' +lastName)

// /********************************* 
// JS Basic Operators
// *********************************/

// var curYear, yearDavid, nextYear
// curYear = 2020
// yearDavid = curYear-6
// yearGabe = 2020-25
// nextYear = 2021
// var yourAge = prompt('How old are you?')
// console.log('I am '+ yourAge+' this year.')
// console.log(yearDavid)
// console.log('Next year, in '+nextYear+', I will be ' + `${yearGabe}`)

// console.log(curYear*2, curYear/10)

// // Logical operators
// var ageGabe = 25
// var ageDavid = 6
// var GabeOlder = ageGabe > ageDavid
// console.log('GabeOlder : ',GabeOlder)

// // typeof operator
// var x
// console.log(typeof x) //undefined, is undefined even if you didn't declare var x

/********************************* 
Operator precedence
*********************************/
// var now=2020
// var yearLisa=1989
// var fullAge=31
// // multiple operands
// var isFullAge = now - yearLisa >= fullAge
// console.log(isFullAge) // true

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Table in page linked to above shows that ( ) have a higher precedence - come first, before - than the >= operator.
// = operator is at very low precedence bc we/JS want assignment to come last, operator = should be above assignment or else you'd have assignment in the middle of logic created w operands

/* Grouping
calculate avg age of Lisa and friends */
// var ageLisa = now - yearLisa
// var ageYael = 33
// var avg = (ageLisa + ageYael) / 2
// // precedence: / is higher than + so need ( )
// console.log(avg) // 47 w/o parens or correct value of 32 with parens

// // multiple assignments
// // if you have value you want to assign to mult variables simultaneously
// var x, y
// x = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x)
// // OR
// x = y = (3 + 5) * 4 - 6 
// console.log(y)

// this assignment works bc of ASSOCIATIVITY in MDN precedence table, another col

// 2 + 4 + 5
// addition operator does is R to L
// but assignment works from R to L, so above, it does the #s calculation and then does the assignment

// // more operators
// x = x*2
// console.log(x)
// x += 10// shorthand (smort)
// console.log(x) // 104 = 26*2


// x++// to add 1, equiv to x+1
// console.log(x)
// x-- // to subtract 1, equiv x-1
// console.log(x)

// /********************************* 
// Function Statements & Expressions
// *********************************/

// //function declaration
// function whatDoYouDo(job, firstName){

// }

// function expression
// JS expressions are pieces of code that always produce a value (an immediate result). Doesn't matter how long they are as long as the code results in a single value.
// var whatDoYouDo = function(job, firstName){
//   switch(job) {
//     case'teacher':
//       return firstName + ' teaches kids how to code.'
//     case 'driver':
//       return firstName + ' makes food deliveries for extra income in Lisbon.'
//     case 'designer':
//       return firstName + ' excels at UI/UX'
//     default:
//       return firstName + ' does something else.'
//   }
// }
// console.log(whatDoYouDo('teacher', null))

// different data types
// ARRAYS - methods
// .push() adds value/s to end of array
// .unshift() adds value to the first index, moves everything down by 1
// .pop() removes el at the end
// .shift() remove first el
// array.indexOf(x) gives index of val in array
// ** if val is not present in the array, indexOf() returns -1

// var isDesigner = john.indexOf('teacher') === -1 ? 'John is NOT a teacher' : 'John is a teacher/has an occupation if another occupation is in the array'
// console.log(isDesigner)

// OBJECTS
// var jane = new Object()
// object literal, way of defining objects using dot notation syntax

// You access an object method with the following syntax:
// objectName.methodName()

//If you access a method without the () parentheses, it will return the function definition: 
// name = person.fullName

// OBJECT METHODS
// var jane = {
//   firstName: 'Jane',
//   lastName: 'Smith',
//   birthYear: '1989',
//   family: ['Doug', 'Marc', 'George', 'Trina'],
//   job: 'cupcake baker',
//   isMarried: false,
//   calcAge: function(birthyear){
//     return 2020 - birthyear
//   }
// }

// the function that calculates jane's age is a JS expression because it returns a value
// calcAge is a method of the jane object

// console.log(jane.calcAge(1979))
// arrays are also objects bc only objects have methods in JS

// //THIS keyword, this means the current obj
// var jane = {
//   firstName: 'Jane',
//   lastName: 'Smith',
//   birthYear: 1989,
//   family: ['Doug', 'Marc', 'George', 'Trina'],
//   job: 'cupcake baker',
//   isMarried: false,
//   calcAge: function(){
//     var age = 2020 - this.birthyear;
//   }
// }
// console.log(jane.age) // Why did I get NaN? 1989 is a number!

// jane.age = jane.calcAge()
// can set it like this or change return statement to age assignment, l83
// jane.calcAge()
// console.log(jane)

// LOOPS
//simple for loop
var jon = ['Jon', 'Blakerman', 1975, 'electric scooter repairman', false, 'dark green']
// for (var i=0;i<jon.length;i++){
//   console.log(jon[i])// if (typeof jon[i] !== 'string') continue;
// } 

// // (equivalent in output) simple while loop
// var i = 0
// while (i < jon.length){
//   console.log(jon[i])
//   i++
// }

// continue and break statements
// we use break to break out of the loop: exits the current iteration and the entire loop
// we use continue to quit the current iteration of the loop and then continue right to the next one
// you can use continue and break within an if/else statement
// EXAMPLE: to log only elements that are strings
for (var i=0;i<jon.length;i++){
  if (typeof jon[i] !== 'string') continue
  console.log(jon[i])
} 

// equivalent way of writing same code/getting same output with a break statement
for (var i=0;i<jon.length;i++){
  if (typeof jon[i] !== 'string') break
  console.log(jon[i])
} 

// looping backwards
// small challengeL how can we loop through the jon the other way around, start with blue array using a for loop
for(var i = jon.length-1; i >= 0; i--){
  console.log(jon[i])
}