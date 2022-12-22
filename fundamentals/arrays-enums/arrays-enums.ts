//arrays
const numbers: number[] = [1, 2, 3];

numbers.push(4);

numbers.push("pooty");

const strings: string[] = ["Hi", "Hullo", "Wazzup"];

strings.push("Yo");

strings.push(9);

//enums - custom types

enum CourseType {
    FREE,
    PREMIUM,
    PRIVATE,
    HIDDEN
}

const course = {
    title: "TypeScript Course",
    type: CourseType.HIDDEN
};

console.log(course);
//this will print { title: 'TypeScript Course', type: 3 } to the console
//you could also assign a new starting number to free and have it start counting from there
//you could also assign string values to the enums
//for instance:
//enum CourseType {
//     FREE = "FREE",
//     PREMIUM = "PREMIUM",
//     PRIVATE = "PRIVATE",
//     HIDDEN = "FAKE"
// }