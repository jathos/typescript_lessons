var lessonsCount = 10;
lessonsCount = "TypeScript Bootcamp";
lessonsCount = [1, 2, 3];
lessonsCount = false;
//with the any type you can re-assign the variable to any different type
//any type essentially bypasses the TypeScript type system
//can't use auto completion with any type variables
var numbers = [10, 20, "Hello", true];
//implicit any feature:
//the two parameters of the function are inferred to be any type
function printCourse(title, lessonsCount) {
    console.log('Title: ', title, ' lessons count: ', lessonsCount);
}
printCourse(10, "TypeScript Course");
//unfortunately there are no problems with the above function call, even though the two intended variable types have been switched
