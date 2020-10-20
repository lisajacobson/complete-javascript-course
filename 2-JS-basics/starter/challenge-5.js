/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// 1. Create an object with an array for the bill values
var subtotals = [124, 48, 268, 180, 42]
// 2. Add a method to calculate the tip
let tips = [], totalBills = []
calcTip = () => {
  let b, tips = []
  for ( b=0; b<subtotals.length; b++ ){
    let tipPct, subtotal = subtotals[b]
    
    if (subtotal < 50) {
      tipPct = .2  
      console.log(subtotal + '\'s tip % is: ' + tipPct)
    } else if (subtotal >= 50 && subtotal < 200) {
      tipPct = .15
      console.log(subtotal + '\'s tip % is: ' + tipPct)
    } else if (subtotal > 200) {
      tipPct = .1
      console.log(subtotal + '\'s tip % is: ' + tipPct)
    }

    tips[b] = subtotal * tipPct
    totalBills[b] = subtotal + subtotal*tipPct
    console.log(tips[b])
  }
}

// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// see updated calcTip function

// 4. As an output, create 
  // 1) a new array containing all tips, and 
  tips = []
  
  while (tipPct, subtotal){
    calcTip(subtotal, tipPct)
    let i
    for ( i=0; i<tips.length; i++ ) {
      tips.push(tipPct)
    }
  }
  console.log('all of Mark\'s tips: ' + tips)
  
calcTip()
console.log('John\'s tips are: ' + tips)

//   // 2) an array containing final paid amounts (bill + tip). 
//   billTotals = []
//   while (tipPct, subtotal) {
//     // calcTip(tipPct, subtotal)
//     let s
//     for ( s=0; s<billTotals.length; s++ ) {
//       bill.push(billTotals[s])
//     }
//     console.log(billTotals)
//   }  
// // HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


