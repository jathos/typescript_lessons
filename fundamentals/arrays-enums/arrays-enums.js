//arrays
var numbers = [1, 2, 3];
numbers.push(4);
numbers.push("pooty");
var strings = ["Hi", "Hullo", "Wazzup"];
strings.push("Yo");
strings.push(9);
//enums - custom types
var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 2] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "TypeScript Course",
    type: CourseType.HIDDEN
};
console.log(course);
