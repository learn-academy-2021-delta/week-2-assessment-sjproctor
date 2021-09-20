// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: Split the string into an array, each letter will be its own element
// b) Verify and explain: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '1']


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: undefined since there is no return


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Map is iterating and multiplying each value by 2


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: Filter has a built in conditional statement


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Maybe an array? George gets passed to LEARN
// b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2021 }
