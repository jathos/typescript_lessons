var courseName = "Typescript Bootcamp v3";
if (courseName) {
    // var randomString = "I like potatoes!!"
    printCourseName(courseName);
}
;
// var variables are not scoped.  they are viewable throughout entire program
// console.log(randomString);  no problems!
function printCourseName(name) {
    console.log("The course name is ", name.toUpperCase());
}
