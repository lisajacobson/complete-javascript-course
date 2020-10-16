/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
//tip function
calculateTip = (bill, percentage) => {
  return bill*percentage
}

jonTipPref = .2
var bill1 = 124
var bill2 = 48
var bill3 = 268

var tips = []
var tip1 = calculateTip(bill1,jonTipPref)
var tip2 = calculateTip(bill2,jonTipPref)
var tip3 = calculateTip(bill3,jonTipPref)

tips.push(tip1, tip2, tip3)
console.log('Jon\'s tips : '+tips)

// 2) Containing all three final paid amounts (bill + tip).
getFinalAmt = (bill, tip) => {
  return bill+tip
}
finalAmts = []
var amt1 = getFinalAmt(bill1,tip1)
var amt2 = getFinalAmt(bill2,tip2)
var amt3 = getFinalAmt(bill3,tip3)
finalAmts.push(amt1, amt2, amt3)
console.log('final amounts: ' + finalAmts )