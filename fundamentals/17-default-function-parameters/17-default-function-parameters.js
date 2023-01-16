function printCourse(title, subtitle, lessonsCount) {
    if (lessonsCount === void 0) { lessonsCount = 10; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", Number of Lessons: ").concat(lessonsCount));
}
;
// printCourse("TypeScript Bootcamp", "Let's do stuff");
//without a default parameter for lessonsCount, the above call for printCourse will
//give an error because only two arguments have been provided
printCourse("Bootcamp", "Let's do thangs");
