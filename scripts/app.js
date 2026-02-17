window.addEventListener("load", () => {
    // alert("Hi there");
});


let name = "John Smith";
console.log(name);
let age = 50;
console.log(age);

let isStudent = true;
console.log(isStudent);

let greeting = `Hello ${name} `;
console.log(greeting);

// Function without parameter and return type 
function greetings() {
    console.log("Hello there");
}

greetings();

//Function using es6 syntax with return type
const moreGreetings = () => {
    return "This is more greetings";
}

moreGreetings();

console.log(moreGreetings());


// Function with paramenter 
const add = (a, b)=>{
    let answer= a + b ;
    return answer;
} 


console.log(add(5, 5));


