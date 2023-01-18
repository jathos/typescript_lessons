var courseName = "Typescript Bootcamp v3";
//the debugger keyword will create break points for your program
//when viewed in the browser
debugger;
if (courseName) {
    printCourseName(courseName);
}
;
function printCourseName(name) {
    debugger;
    console.log("The course name is ", name.toUpperCase());
}
;
//another useful feature is a flag that can be used when compliling
//your typescript into javascript
//typically, you would need to first compile this file into javascript
//before you could run it in the browser
//however, when doing that, you will no longer be able to view your typescript
//code (it will instead just be plain javascript)
//in order view your typescript code in the browser, use the --sourcemap
//flag when running the compiler
//example:   tsc --sourcemap 22-debugging-ts-in-browser.ts
//# sourceMappingURL=22-debugging-ts-in-browser.js.map