interface Course {
    title: string,
    lessonsCount: number
};

const course1: Course = {
    title: "Bootcamp",
    lessonsCount: 10
};

const course2: Course = {
    title: "Angular",
    lessonsCount: 20
};

//below syntax is one way to pass in an argument that uses multiple inputs
//use of an array

// function printCourse(message: string, courses: Course[]) {

//     console.log(message);

//     for (let course of courses) {
//         console.log(course.title);
//     };
// };

// printCourse("Welcome to the Angular University", [course1, course2]);

//syntax below, however is a 'rest argument' and means that the second argument
//will accept an infinite number of additional arguments if passed in
//these two things both do the same thing, however
//just a matter of preference for one syntax or another
//see below example

function printCourse(message: string, ...courses: Course[]) {

    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    };
};

printCourse("Welcome ot the Angular University", course1, course2);