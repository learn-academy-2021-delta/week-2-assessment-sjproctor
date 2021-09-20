// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("", () => {
//   test("", () => {
//     expect().toEqual()
//   })
// })


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// create a function - divisibleBy3
// parameter - number
// conditional statement
// if divisible by three --> interpolation
// else --> interpolation


// a) Create a test with expect statements for each of the variables provided.

describe("divisibleBy3", () => {
  test("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    var num1 = 15
    // Expected output: "15 is divisible by three"
    var num2 = 0
    // Expected output: "0 is divisible by three"
    var num3 = -7
    // Expected output: "-7 is not divisible by three"
    expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.

const divisibleBy3 = (number) => {
  if(number % 3 === 0){
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// create a function - capitalLetters
// parameter - array
// iteration - map, value will get us each string
// string index of 0 toUpperCase
// need the rest of the word from the index of 1, substring at index 1

// a) Create a test with expect statements for each of the variables provided.

describe("capitalLetters", () => {
  test("takes in an array of words and returns an array with all the words capitalized", () => {
    var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(capitalLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.

const capitalLetters = (array) => {
  return array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// create a function - firstVowel
// parameter - string
// iterate - for loop to look at each character in the string
// conditional statement - is the character a vowel
// logical or || to check for vowels

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  test("takes in a string and logs the index of the first vowel", () => {
    var vowelTester1 = "learn"
    // Expected output: 1
    var vowelTester2 = "academy"
    // Expected output: 0
    var vowelTester3 = "challenges"
    // Expected output: 2
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

const firstVowel = (string) => {
  for(let i=0; i<string.length; i++){
    if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
      return i
    }
  }
}

// const firstVowel = (string) => {
//   let vowels = "aeiouAEIOU"
//   for(let i=0; i<string.length; i++){
//     for(let j=0; j<vowels.length; j++){
//       if(string[i] === vowels[j]){
//         return string.indexOf(string[i])
//       }
//     }
//   }
// }

// Exploring regular expressions (regex)
// Code WIP
// const firstVowel = (string) => {
//   for(let i=0; i<string.length; i++){
//     console.log(string.match(/[aeiou]/))
//     if(string.length === string.match(/[aeiou]/)){
//       var vowelMatch = string.match(/[aeiou]/)
//       console.log(vowelMatch)
//       return string.indexOf(vowelMatch)
//     }
//   }
// }
