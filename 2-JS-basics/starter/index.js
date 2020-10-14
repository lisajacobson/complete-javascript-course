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
var now=2020
var yearLisa=1989
var fullAge=31
// multiple operands
var isFullAge = now - yearLisa >= fullAge
console.log(isFullAge) // true

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Table in page linked to above shows that ( ) have a higher precedence - come first, before - than the >= operator.
// = operator is at very low precedence bc we/JS want assignment to come last, operator = should be above assignment or else you'd have assignment in the middle of logic created w operands

/* Grouping
calculate avg age of Lisa and friends */
var ageLisa = now - yearLisa
var ageYael = 33
var avg = (ageLisa + ageYael) / 2
// precedence: / is higher than + so need ( )
console.log(avg) // 47 w/o parens or correct value of 32 with parens

// multiple assignments
// if you have value you want to assign to mult variables simultaneously
var x, y
x = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 32 - 6 // 26
console.log(x)
// OR
x = y = (3 + 5) * 4 - 6 
console.log(y)

// this assignment works bc of ASSOCIATIVITY in MDN precedence table, another col

// 2 + 4 + 5
// addition operator does is R to L
// but assignment works from R to L, so above, it does the #s calculation and then does the assignment

// more operators
x = x*2
console.log(x)
x += 10// shorthand (smort)
console.log(x) // 104 = 26*2


x++// to add 1, equiv to x+1
console.log(x)
x-- // to subtract 1, equiv x-1
console.log(x)