"use strict";
exports.__esModule = true;
var greetings = "Hello Hitesh";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 334455.3;
userId.toFixed();
// userId = "hitesh"
// boolean
var isLoggedIn = false;


/* 
Type inference in TypeScript means that the TypeScript compiler automatically determines the type of a variable or expression without you explicitly specifying it. This helps keep the code clean while still ensuring type safety.

🔹 Example of Type Inference:

let name = "Manomay"; // TypeScript infers 'name' as a string
// Equivalent to: let name: string = "Manomay";

let age = 25; // TypeScript infers 'age' as a number

let isStudent = true; // TypeScript infers 'isStudent' as a boolean
Since you assigned "Manomay" (a string) to name, TypeScript assumes name is of type string. If you later try:

name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'.
TypeScript will throw an error.

🔹 Function Return Type Inference:
When a function returns a value, TypeScript infers the return type.

function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type as 'number'
}
If you hover over add, TypeScript recognizes it as:

function add(a: number, b: number): number
*/