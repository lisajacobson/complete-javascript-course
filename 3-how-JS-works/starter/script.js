///////////////////////////////////////
// Lecture: Hoisting
    // function hoisting
calculateAge(1965)
//func declaration
function calculateAge(year){
    console.log(2016 - year);
}


// retirement(1990)
// function expression
var retirement = function(year){
    console.log(65 - (2020 - year))
}

// variables
// cdoe is scanned for variables which are then set to undefined. that's why consoling a variable before its declaration logs undefined
console.log(age) // undefined
var age = 23
console.log(age)



// hoisting with functions only works with function declarations (not func expressions)









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









