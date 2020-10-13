var firstName = 'David';
console.log(firstName)
var john$mark = 'does this work?'
console.log(john$mark)

/********************************* 
Variable Mutation and Type Coercion
*********************************/

age = 6
console.log(firstName + ' is ' + age)
// type coercion in JS allows the JS to make everything in that console log a string to be able to print it as a string

// Type coercion
var job, isMarried
job = 'student'
pronoun = 'he'
possessivePronoun = 'his'
isMarried = false
marryString = isMarried ? ('Yes, ' + pronoun +  ' is married.') : ('No, ' + pronoun +  ' is not married.')

console.log(firstName + ' is a ' + age + ' years old and ' + pronoun + ' is a ' + job + '. Is he married? ' + marryString)

// Variable mutation
age = 'twelve';
job = 'yard raker for ' + possessivePronoun + ' neighbor'
console.log(age)

console.log(firstName + ' is a ' + age + ' years old and ' + pronoun + ' is a ' + job + '. Is he married? ' + marryString)

var lastName = prompt('What is ' + firstName + '\'s' + ' last name?')
console.log(firstName + ' ' +lastName)