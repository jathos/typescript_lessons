const intNoDecimal: number = 10;
const numWithDecimal: number = 10.12;
//both int and floats are just "number"s in typescript

const total = intNoDecimal + 10;

console.log("Total is =", total);

let title: string = "TypeScript Bootcamp";
let title2 = "New String"; //Typescript can also infer a type based on the value assigned to it

let subtitle: string = "Learn the language fundamentals";

const fullTitle: string = title + ": " + subtitle;

console.log(fullTitle);

let published: boolean = true;

if (published) {

    console.log("The course is published");

};