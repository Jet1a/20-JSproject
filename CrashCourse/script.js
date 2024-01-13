// const s = "My car, My cat, Panama"
// console.log(s.replace(/[, ]/g, '').split("").reverse().join("").toLowerCase());

// const fruits = ["apple", "banana", "orange"]

// //add first
// fruits.unshift("mango", "watermelon")
// //add last
// fruits.push("Pineapple")

// //remove lastest
// console.log("Remove Item: " + fruits.pop())

// const person = {
//    name: "John",
//    lastName: "Doe",
//    age: 18,
//    hobbies: "Photographer"
// }
// const { name, lastName, age } = person
// console.log(name, lastName)

// person.email = "JohnDoe@gmail.com"

// console.log(person)

const company = [
{
   name: "John",
   lastName: "Doe",
   age: 29,
   hobbies: "Photographer"
},
{
   name: "Peter",
   lastName: "Parker",
   age: 18,
   hobbies: "Spider"
},
{
   name: "Quinz",
   lastName: "Barton",
   age: 22,
   hobbies: "Sleep"
}
]

const companyJSON = JSON.stringify(company)

console.log(companyJSON)
console.log(company)

// for (let i = 0; i <= 5; i++) {
//    console.log(`For loop: ${i}`)
// }

// for(let id of company){
//    console.log(id.age)
// }

company.forEach(function(todo){
   console.log(todo.hobbies)
})

const companyHobbies = company.map(function(todo){
   return todo.hobbies
})

const companyAge = company.filter(function(todo){
   return todo.age  > 18;
}).map(function(todo){
   return todo.name
})

console.log(companyHobbies)
console.log(companyAge)

const addNums = (num1,num2) => num1+num2;

console.log(addNums(5,10))

// function Person(firstName, lastName, dob){
//    this.firstName = firstName
//    this.lastName = lastName
//    this.dob =  new Date(dob)
// }

// Person.prototype.getBirthYear = function(){
//    return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//    return `${this.firstName} ${this.lastName}`
// }

class Person{
   constructor(firstName, lastName, dob){
   this.firstName = firstName
   this.lastName = lastName
   this.dob =  new Date(dob)
   }
   getBirthYear(){
      return this.dob.getFullYear();
   }
   getFullName(){
      return `${this.firstName} ${this.lastName}`
   }
}

const person1 = new Person('John','Doe','4-08-1998')
console.log(person1)
console.log(person1.getFullName())