var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var courseStatus = "draft";
var courseStatus2 = "draft";
var newStatus = "published";
// let course: Course = {
//     title: 1,
//     subtitle: "The Things We Do",
//     lessonsCount: 10,
//     randomThing: "This shouldn't be here"
// };
//as you can see above, the number in the title property is causing an
//error because it is supposed to be of type string
//you can still add new properties if you want though, as shown by the 
//randomThing property
//intefaces are used with objects more often than aliases, however (see lesson 10)
var ob1 = {
    title: "hey girl"
};
var ob2 = ob1;
var ob3 = __assign({}, ob1);
ob1.title = "sup girl";
console.log(ob2);
console.log(ob3);
var arr1 = [1, 2, 3];
var arr2 = arr1;
var arr3 = __spreadArray([], arr1, true);
arr1[0] = 9;
console.log(arr2);
console.log(arr3);
