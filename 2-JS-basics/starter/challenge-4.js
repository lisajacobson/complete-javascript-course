/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// 1. For each of them, create an object with properties for their full name, mass, and height
var marc = {
  fullName: 'Marc Towb',
  mass: 165,
  height: 64,
  calcBmi: (mass, height) => {
    mass / (height*height)
  }
}

var jon = {
  fullName: 'Jonathan Fitts',
  mass: 190,
  height: 75,
  calcBmi: (mass, height) => {
    mass / (height*height)
  }
}

// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// see above
marc = {
  fullName: 'Marc Towb',
  mass: 165,
  height: 64,
  calcBmi: function(){
    return (703 * this.mass / (this.height * this.height))
  }
}
marc.bmi = marc.calcBmi()

jon = {
  fullName: 'Jonathan Fitts',
  mass: 190,
  height: 75,
  calcBmi: function(){
    return (703 * this.mass / (this.height * this.height))
  }
}
jon.bmi = jon.calcBmi()

// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

if (marc.bmi > jon.bmi){ 
  console.log(marc.fullName + ' has the higher BMI, ' + marc.bmi)
} else if (jon.bmi < marc.bmi){ 
  console.log(jon.fullName + ' has the higher BMI, ' + jon.bmi)
} else {
  console.log(marc.bmi + ' is equal to ' + jon.bmi + ' , therefore ' + marc.fullName + '\'s BMI is equal to ' + jon.fullName + '\'s BMI.')
}