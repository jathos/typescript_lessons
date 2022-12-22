var _a;
var intNoDecimal = 10;
var numWithDecimal = 10.12;
//both int and floats are just "number"s in typescript
var total = intNoDecimal + 10;
console.log("Total is =", total);
var title = "TypeScript Bootcamp";
var title2 = "New String"; //Typescript can also infer a type based on the value assigned to it
var subtitle = "Learn the language fundamentals";
var fullTitle = title + ": " + subtitle;
console.log(fullTitle);
var published = true;
if (published) {
    console.log("The course is published");
}
;
//function parameters should always have declared type annotations
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
    var newNumber = lessonsCount + 10;
}
//object types  
//in general objects can be safely inferred without specifically defining an object type annotation
//can be written as >> const course: object {};
//also can define property types like below
var course = {
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
var fullTitle = "";
//nested object types can also be inferred
var newCourse = {
    author: {
        firstName: "Vasco",
        lastName: "Cavalheiro"
    }
};
//optional chaining
var lesson = "Optional Chaining";
if (lesson === null || lesson === void 0 ? void 0 : lesson.title) {
    console.log("The '?.' operator is like saying 'lesson || lesson.title'");
}
;
//the typescript null coalescing operator
var nadaValue = null;
var practice = (_a = nadaValue === null || nadaValue === void 0 ? void 0 : nadaValue.poopoo) !== null && _a !== void 0 ? _a : "There is no poopoo";
console.log(practice);
