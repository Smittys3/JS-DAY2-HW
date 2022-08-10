//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// This loop will display all of their favorite foods dishes as shown above.
// for (let values in person3) {
//     console.log(values, person3[values])
// }

// -- This is an arrow function 
const favFoods = () => {
    return Object.values(person3)
}
console.log(favFoods())


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age}`
    }
    addAge = (() =>  {
        const ages = [];
        return (age) => {
            return ages.push(age)
        }
    })()
    countUp = (() => {
        return function() {return this.age++} 
    })()
}

// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

// -- This was a test to make sure evrything was working --
// let joey = new Person('Joey', 21);
// console.log(joey.printInfo())

let p1 = new Person('Joey', 21);
let p2 = new Person('Cyn', 18);
console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p2.countUp())
console.log(p2.countUp())
console.log(p2.countUp())
console.log(p2.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreaterNumber = (string) => {
    return new Promise( (resolve,reject) => {
        if( string.length >= 10){
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
}
const result = isGreaterNumber('estimation')
console.log(result)


// -- CODE WARS --
// -- EVEN OR ODD QUESTION --
even_or_odd = (num) => {
    if (num % 2 == 0) {
      return 'Even'; }
    else {
      return "Odd"
    }
  }


// -- CODE WARS --
// -- ABSENT VOWEL --
absentVowel = (x) => {
    const vowels = 'aeiou';
    for (var i in vowels) {
      if (x.toLowerCase().indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }
  }





