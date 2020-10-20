/*****************************
* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws. */

// 1. Calculate the average score for each team
var jonScore1 = 89
var jonScore2 = 120
var jonScore3 = 116

var markScore1 = 116
var markScore2 = 94
var markScore3 = 123

var avgJon = (jonScore1+jonScore2+jonScore3) / 3
var avgMark = (markScore1+markScore2+markScore3) / 3
console.log(avgJon, avgMark)

// 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
if (avgJon > avgMark){
  console.log('Jon\'s team has hte highest average score')
} else if (avgMark > avgJon){
  console.log('Mark\'s team has the highest average score')
} else {
  console.log('Mark\'s team has the same average score as that of Jon\'s team')
}

// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

// see above

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

avgMary=(97+134+105)/3
console.log(avgMary)
if (avgMary > avgJon && avgMary > avgMark){
  console.log('Mary\'s team has the highest average score')
}

// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

// I get this already