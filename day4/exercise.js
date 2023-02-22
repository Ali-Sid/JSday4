// Exercises: Level 1
 /**
  * 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
  * Enter your age: 30
  * You are old enough to drive.

  * Enter your age:15
  * You are left with 3 years to drive.
*/

let askAge = prompt('Enter your age:') // 14
let difAge = 18 - askAge
askAge >= 18
? console.log('You are old enough to drive')
: console.log(`You are eligible to drive after ${difAge} years.`) // Output: You are eligible to drive after 4 years.

/**
 * 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
 * 
 * Enter your age: 30
 * You are 5 years older than me.
 */

let myAge = 21, yourAge = prompt('Enter your age:') //25

if(myAge > yourAge) {
    console.log('I am older than you.')
} else {
    console.log('You are older than me.')
} // Output: You are older than me.

/**
 * 3. If a is greater than b return 'a is greater than b' else 'c'. Try to implement it in two ways

 * using if else
 * ternary operator.
 *   let a = 4
 *   let b = 3
 */

let a = 4, b = 3

// using if else
if(a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is lesser than ${b}`)
} // Output: 4 is greater than 3

// using ternary operator
a > b
? console.log(`a is greater than ${b}`)
: console.log(`${a} is lesser than ${b}`) // Output: 4 is greater than 3

/**
 * 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 * 
 * Enter a number: 2
 * 2 is an even number
 * 
 * Enter a number: 9
 * 9 is is an odd number.
 */

let numChk = prompt('Enter a number:') // 4

numChk % 2 === 0
? console.log(`${numChk} is an even number.`)
: console.log(`${numChk} is an odd number.`) // Output: 4 is an even number.

// Exercise: Level 2

/**
 * 1. Write a code which can give grades to students according to theirs scores:
 * 80-100, A
 * 70-79, B
 * 60-69, C
 * 50-59, D
 * 0-49, F

*/
let stdScores = prompt('Enter your score:'), grade; //90

switch(true) {
    case(stdScores >= 80 && stdScores <= 100):
       grade = 'A';
       break;
    case(stdScores >= 70 && stdScores <= 79):
       grade = 'B';
       break;
    case(stdScores >= 60 && stdScores <= 69):
       grade = 'C';
       break;
    case(stdScores >= 50 && stdScores <= 59):
       grade = 'D';
       break;
    case(stdScores >= 0 && stdScores <= 49):
       grade = 'F';
       break;
    default: 
       console.log('Entered score is invalid.')   
}

console.log("The student's grade is " + grade) // Output: The student's grade is A

/**
 * 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
 September, October or November, the season is Autumn.
 December, January or February, the season is Winter.
 March, April or May, the season is Spring
 June, July or August, the season is Summer
 */

let enterMonth = prompt('Enter the month:'), season; // February

switch(enterMonth) {
    case "September":
    case "October":
    case "November":
        season = "Autumn";
        break;
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    default:
        console.log('Entered month is invalid.')
}

console.log("The season is " + season) // Output: The season is Winter


/*
 3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

let inpDay = prompt('What is the day today?').toLowerCase().trim() // WEdnesDAy

if(inpDay === 'saturday' || inpDay === 'sunday'){
    console.log(`${inpDay} is a weekend.`)
} else if(inpDay === 'monday' || inpDay === 'tuesday' || inpDay === 'wednesday' || inpDay === 'thursday' || inpDay === 'friday') {
    console.log(`${inpDay} is a working day.`)
} else {
    console.log('Invalid day entered.')
}
// Output: wednesday is a working day.

// Exercise: Level 3

/**
 * 1. Write a program which tells the number of days in a month.
 *
 * Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
 */

let inpMonth = prompt('Enter a month:').toLowerCase().trim(), daysInMonth; // FEBruary

switch(inpMonth) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      daysInMonth = 31;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInMonth = 30;
        break;
    case "february":
        daysInMonth = 28;
        break;
    default:
        console.log("Invalid month entered.")

}

if(daysInMonth) {
    console.log(`${inpMonth} has ${daysInMonth} days.`)
}
// Output: february has 28 days.

//2. Write a program which tells the number of days in a month, now consider leap year.

let inputMonth = prompt('Enter a month:').toLowerCase().trim(), daysInAMonth; // FEBruary

switch(inputMonth) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      daysInAMonth = 31;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInAMonth = 30;
        break;
    case "february":
        daysInAMonth = 29;
        break;
    default:
        console.log("Invalid month entered.")

}

if(daysInAMonth) {
    console.log(`${inputMonth} has ${daysInAMonth} days.`)
}
// Output: february has 29 days.