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

//function parameters should always have declared type annotations
function printCourse(title: string, subtitle: string, lessonsCount: number) {

    const fullTitle = title + subtitle;
    const newNumber = lessonsCount + 10;

}

//object types  
//in general objects can be safely inferred without specifically defining an object type annotation
//can be written as >> const course: object {};
//also can define property types like below
const course: {
    title: string,
    subtitle: string,
    lessons: number,
    author: {
        firstName: string,
        lastName: string
    }
} = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn TypeScript!",
    lessons: 10,
    author: {
        firstName: "Josh",
        lastName: "Bee"
    }
};

//TypeScript doesn't allow you to add new properties like plain JavaScript does
//(they need to be added as an optional property in advance)
const.fullTitle = "";

//nested object types can also be inferred
const newCourse = {
    author: {
        firstName: "Vasco",
        lastName: "Cavalheiro"
    }
};

//optional chaining
let lesson = "Optional Chaining";

if (lesson?.title) {
    console.log("The '?.' operator is like saying 'lesson || lesson.title'")
};

//the typescript null coalescing operator
let nadaValue = null;

//if there is no value to a particular variable you can assign a default value with ??
let practice = nadaValue?.poopoo ?? "There is no poopoo";

console.log(practice); //this will print "There is no poopoo"