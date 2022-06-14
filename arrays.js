// Arrays In Javascript

// define an array 
// best practice to use const 
const fruits = [
    "banana", "apple", "orange"
]

console.log("first console log")
console.log(fruits)

// Indexing  our array
console.log("array by index")
console.log(fruits[2])


// change the array 
fruits[0] = "water mellon"
console.log(fruits)

fruits[2] = "Pineapple"
console.log(fruits)

// 
const students = [] 
console.log("Our emty array ")
console.log(students)

// adding elements by index
students[0] = "Ayo"
console.log(students)

students[1] = "David"
console.log(students)


students[4] = "Wizkid"
console.log(students)


// lets see what is i the empty spaces between index 1 and 4
console.log(students[3])


// You can have anything in your arrays 
students[2] = 3
students[3] = false
students[5] = fruits
console.log("New Array ")
console.log(students)



// summary 
// You can create an array like this 

const my_complex_array = [
    "Davido ",
    29, 
    [
        "femi",
        "tobi"
    ], 
    true
]
console.log("davido array ")
console.log(my_complex_array)


// how long is my array ? 
console.log(my_complex_array.length)